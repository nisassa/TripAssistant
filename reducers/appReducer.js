
const initialState  = {
    userAccount: "",
    currentAction: "login",
    loginNavGoBack: "false"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_NEW_ACCOUNT" :
        return { currentAction: "register new account" }
      default:
        return state
    }
  } 

export default reducer;