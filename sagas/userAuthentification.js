import {
    put, 
    call, 
    takeLatest, 
    all, 
} from 'redux-saga/effects';
import * as api from '../api/user'

function * onCreate (action) {
    yield put({type: "USER_AUTH_START_PROCESSING_DATA"});
    try {
        const result = yield call(api.createUserAccount, action.userAccount);  
        const message = result.message || "An error occurred. Please verify if you filled in the correct information.";
        if (result.status === "OK") {
            yield put({ type: "REGISTER_NEW_ACCOUNT_SUCCESS", message: message, token: result.token, userId: result.userId}); 
        } else {
            yield put({ type: "AUTH_REQUST_FAILED", message: message});
        } 
    } catch (error) {
        yield put({ type: "AUTH_REQUST_FAILED", message: "Something went wrong, please try again ot contact our support team."});
    }
    yield put({type: "USER_AUTH_STOP_PROCESSING_DATA"});
}

function * onLoginAttemt (action) {
    yield put({type: "USER_AUTH_START_PROCESSING_DATA"});
    try {
        const result = yield call(api.loginAttemt, action.userAccount);
        const message = result.message || "An error occurred. Please verify if you filled in the correct information.";
        if (result.status === "OK") {
            yield put({ type: "REGISTER_NEW_ACCOUNT_SUCCESS", message: message, token: result.token, userId: result.userId}); 
        } else {
            yield put({ type: "AUTH_REQUST_FAILED", message: message});
        } 
    } catch (error) {
        yield put({ type: "AUTH_REQUST_FAILED", message: "Something went wrong, please try again ot contact our support team."});
    }
    yield put({type: "USER_AUTH_STOP_PROCESSING_DATA"});
}

function * onCheckUserToken(action) {
    yield put({type: "USER_AUTH_START_PROCESSING_DATA"});
    try {
        const result = yield call(api.tokenVerify, { token: action.token });
        if (result.status === "OK") {
            yield put({ type: "TOKEN_VERIFIED", token: action.token, tokenVerified: true}); 
        } else {
            yield put({ type: "TOKEN_VERIFIED", token: false, tokenVerified: true});
        } 
    } catch (error) {
        yield put({ type: "TOKEN_VERIFIED", token: false, tokenVerified: false});
    }
    yield put({type: "USER_AUTH_STOP_PROCESSING_DATA"});
}

export default function * watchUser () {
  yield all([
    takeLatest("REGISTER_NEW_ACCOUNT", onCreate),
    takeLatest("LOGIN_ATTEMPT", onLoginAttemt),
    takeLatest("TOKEN_VERIFY", onCheckUserToken)
  ])
}
