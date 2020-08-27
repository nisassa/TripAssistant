import {
    takeLatest, 
    all, 
    put,
    call
} from 'redux-saga/effects';
import * as api from '../api/trip'

function * onCreateItem (action) {
    yield put({type: "TRIP_START_PROCESSING_DATA"})
    try {
        const result = yield call(api.addTripItem, action);
        const message = result.message || "An error occurred. Please verify if you filled in the correct information.";
        if (result.status === "OK") {
            yield put({ 
                type: "ADDED_NEW_TRIP_ITEM", 
                message: message, 
                tripId: result.tripId, 
                tripName: result.tripName,
                data: result.item }); 
        } else {
            yield put({ 
                type: "FAILED_TO_ADD_NEW_TRIP_ITEM", 
                message: message, 
                tripName: result.tripName,
                tripId: result.tripId});
        } 
    } catch (error) {
        yield put({ type: "FAILED_TO_ADD_NEW_TRIP_ITEM", message: "Something went wrong, please try again ot contact our support team."});
    }  
    yield put({type: "TRIP_STOP_PROCESSING_DATA"})
}

export default function * watchUser () {
  yield all([
    takeLatest("REGISTER_NEW_TRIP_ITEM", onCreateItem),
  ])
}