import React from 'react';
import { 
    Text, 
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
import { userAccountStyles } from '../../assets/styles/userAccount/login';
import LoginHeader from './header';
import { connect } from 'react-redux';

function LoginScreen(props) {
    return (
      <KeyboardAvoidingView 
        behavior="padding"
        style={userAccountStyles.container}>
          <LoginHeader navigation={props.navigation} />
          <Text style={ userAccountStyles.containerTitle }>Log in</Text>
          <TextInput style={ userAccountStyles.inputBox } placeholder="Email" />
          <TextInput style={ userAccountStyles.inputBox } placeholder="Password" secureTextEntry={true} />
          <TouchableOpacity >
            <Text style={userAccountStyles.continueButton}>Continue</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    );
}

function mapStateToProps (state, props) {
  return {
    navigation: props.navigation 
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (LoginScreen)
