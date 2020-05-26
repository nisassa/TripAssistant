import { fromJS } from 'immutable'

export const initialState = fromJS({
  userAccount: {},
  authToken: false,
  authRequestProcessing: false,
  serverMessage: undefined
})


const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_AUTH_START_PROCESSING_DATA":
      return { 
        ...state,  
        authRequestProcessing: true,
        };
    case "USER_AUTH_STOP_PROCESSING_DATA":
      return { 
        ...state,
        authRequestProcessing: false,
      };
    case "RESET_SERVER_MESSAGE":
      return { 
        ...state,
        serverMessage: undefined,
        authToken: false
      };
    case "REGISTER_NEW_ACCOUNT_SUCCESS":
        return { 
          ...state,
          serverMessage: action.message,
          authToken: action.token,
        }
    case "AUTH_REQUST_FAILED":
      return { 
        ...state,
        serverMessage: action.message,
        authToken: false,
      }
    default:
      return state
  }
} 

export default userAuthReducer;