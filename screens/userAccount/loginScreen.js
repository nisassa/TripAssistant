import React from 'react';
import { 
    Text, 
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    View
  } from 'react-native';
import { userAccountStyles } from '../../assets/styles/userAccount/login';
import LoginHeader from './header';
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as yup from 'yup';

function LoginScreen(props) {
  const loginSchema = yup.object({
    email:    yup.string().email().required("Email is a required field"),
    password: yup.string().required('No password provided.') 
              .min(6, 'Password is too short - should be 6 chars minimum.')
              .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  })

  const onFormSubmit = (userAccount) => {
    Keyboard.dismiss()
    props.logInAttemt(userAccount)
  }
  
  const displayProccessingDataText = () => {
    if (props.authRequestProcessing === true) {
      return <Text style={ userAccountStyles.containerTitle }>processing data...</Text>
    }
  }

  const showServerMessage = () => {
    if (props.authToken !== undefined && props.authToken !== false) {
      return <Text style={ userAccountStyles.successMessage }>Redirecting to the secure area: { props.authToken }</Text>
    }
    if (props.authRequestProcessing === false) {
      if (props.authToken === false) {
        return <Text style={ userAccountStyles.errorMessage }>{ props.serverMessage }</Text>
      } else {
        return <Text style={ userAccountStyles.successMessage }>{ props.serverMessage }</Text>
      }
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss} accessible={false} >
      <KeyboardAvoidingView 
        style={userAccountStyles.container}  
        behavior="padding" >
        <LoginHeader navigation={props.navigation} />
        <Text style={ userAccountStyles.containerTitle }>Log in</Text>
        { displayProccessingDataText() }
        { showServerMessage() }
        <Formik
          validationSchema={loginSchema}
          initialValues={{
            "email": "",
            "password": ""
          }}
          onSubmit={(values) => onFormSubmit(values)} >
          { formikProps => {
            return (
              <View>
                <Text style={userAccountStyles.errorText}>{formikProps.touched.email && formikProps.errors.email}</Text>
                    <TextInput 
                      style={ userAccountStyles.inputBox } 
                      placeholder="Email"
                      onChangeText={formikProps.handleChange("email")}
                      value={formikProps.email}
                    />
                    <Text style={userAccountStyles.errorText}>{formikProps.touched.password && formikProps.errors.password}</Text>
                    <TextInput 
                      style={ userAccountStyles.inputBox } 
                      placeholder="Password"
                      onChangeText={formikProps.handleChange("password")}
                      value={formikProps.password}
                      secureTextEntry={true}
                    />
                <TouchableOpacity 
                  onPress={ () => { !props.authRequestProcessing && formikProps.handleSubmit() }} >
                  <Text style={userAccountStyles.continueButton}>Continue</Text>
                </TouchableOpacity>
              </View>
            )
          }}
        </Formik>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

function mapStateToProps (state, props) {
  return {
    navigation: props.navigation,
    authToken: state.authToken,
    authRequestProcessing: state.authRequestProcessing,
    serverMessage: state.serverMessage, 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logInAttemt : (userAccount) => dispatch({
      type: 'LOGIN_ATTEMPT',
      userAccount: userAccount
    }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (LoginScreen)
