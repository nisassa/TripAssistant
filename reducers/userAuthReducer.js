const initialState = {
  userAccount: {},
  authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWQyNGM4OWM2NjU3MmIxM2RmMzQ2NjAiLCJpYXQiOjE1OTA4NjQ1NDMsImV4cCI6MTY1MTM0NDU0M30.zLBgC6y_8puWdepnj79jalS2rolVswhyZHPFnvVZtvM",
  authRequestProcessing: false,
  serverMessage: false,
  tokenVerified: false 
}


const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOKEN_VERIFIED":
      return { 
        ...state,  
        tokenVerified: action.tokenVerified,
        authToken: action.token
      };
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
        serverMessage: false,
        authToken: false
      };
    case "REGISTER_NEW_ACCOUNT_SUCCESS":
        return { 
          ...state,
          serverMessage: action.message,
          authToken: action.token,
          tokenVerified: true,
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