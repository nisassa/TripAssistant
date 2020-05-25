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

function LoginMainScreen(props) {
    
  return (
    <KeyboardAvoidingView style={userAccountStyles.container}>
      <Text style={userAccountStyles.containerTitle}>Sign up with:</Text>
      <TouchableOpacity >  
          <Text style={userAccountStyles.button}>Facebook</Text>
      </TouchableOpacity >
      <TouchableOpacity >
          <Text style={userAccountStyles.button}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Register") } >
          <Text style={userAccountStyles.button}>Email</Text>
      </TouchableOpacity>
      <Text style={userAccountStyles.orLoginText}>Already have an account?</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login") } >
          <Text style={userAccountStyles.button}>Log in</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginMainScreen)