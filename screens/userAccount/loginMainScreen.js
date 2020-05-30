import React from 'react';
import {
  Text,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import {
  userAccountStyles
} from '../../assets/styles/userAccount/login';
import { connect } from 'react-redux';
import AnimatedLoader from "react-native-animated-loader";
import AppMainNav from '../../routes/appNav';

function LoginMainScreen(props) {

  const checkIfTokenIsValid = () => {
    if (props.authRequestProcessing === false) {
      if (props.authToken !== false && props.tokenVerified !== true) {
        props.verifyToken(props.authToken)
      }
    }
  }
  
  
  if (props.authToken !== false && props.tokenVerified == true) {
    return (
      <AppMainNav />
    )
  }
  
  return (
    <KeyboardAvoidingView style={userAccountStyles.container}>
      { checkIfTokenIsValid() }
      <AnimatedLoader
          visible={props.authRequestProcessing}
          overlayColor="rgba(255,255,255,0.75)"
          source={require("../../assets/lottiefiles/loader.json")}
          animationStyle={userAccountStyles.lottie}
          speed={1}
        />
      <Text style={userAccountStyles.containerTitle}>Sign up with:</Text>
      <TouchableOpacity >
        <Text style={userAccountStyles.button}>Facebook</Text>
      </TouchableOpacity >
      <TouchableOpacity >
        <Text style={userAccountStyles.button}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Register")} >
        <Text style={userAccountStyles.button}>Email</Text>
      </TouchableOpacity>
      <Text style={userAccountStyles.orLoginText}>Already have an account?</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")} >
        <Text style={userAccountStyles.button}>Log in</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

function mapStateToProps(state, props) {
  return {
    navigation: props.navigation,
    authToken: state.userAuthReducer.authToken,
    authRequestProcessing: state.userAuthReducer.authRequestProcessing,
    tokenVerified: state.userAuthReducer.tokenVerified,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    verifyToken: (token) => dispatch({
      type: 'TOKEN_VERIFY',
      token: token
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginMainScreen)