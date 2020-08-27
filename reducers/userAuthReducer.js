const initialState = {
  userAccount: {},
  userId: "5ed24c89c66572b13df34660",
  authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWQyNGM4OWM2NjU3MmIxM2RmMzQ2NjAiLCJpYXQiOjE1OTgzNjQ1ODUsImV4cCI6MTY1ODg0NDU4NX0.jBesqXmYvr6VkEO3e4cONeHoPW8pY5U-TciIkwGOe-I",
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
          userId: action.userId
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