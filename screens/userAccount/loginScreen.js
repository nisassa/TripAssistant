import React from 'react';
import { 
    Text, 
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    Alert
  } from 'react-native';
import { userAccountStyles } from '../../assets/styles/userAccount/login';
import LoginHeader from './header';
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as yup from 'yup';
import AnimatedLoader from "react-native-animated-loader";
import AppMainNav from '../../routes/appNav';

function LoginScreen(props) {
  const loginSchema = yup.object({
    email:    yup.string().email().required("Email is a required field"),
    password: yup.string().required() 
              .min(6, 'Password is too short - should be 6 chars minimum.')
              .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  })

  const onFormSubmit = (userAccount) => {
    Keyboard.dismiss()
    props.logInAttemt(userAccount)
  }

  const showServerMessage = () => {
    if (props.authRequestProcessing === false && props.authToken === false && props.serverMessage !== undefined) {
      setTimeout(function() {
        Alert.alert(
          "Something went wrong",
          props.serverMessage,
          { cancelable: false }
        )
      }, 500)
    }
  }

  if (props.authToken !== undefined && props.authToken !== false) {
    return (
      <AppMainNav />
    )
  }
 
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss} accessible={false} >
      <KeyboardAvoidingView 
        style={userAccountStyles.container}  
        behavior="padding" >
        <AnimatedLoader
          visible={props.authRequestProcessing}
          overlayColor="rgba(255,255,255,0.75)"
          source={require("../../assets/lottiefiles/loader.json")}
          animationStyle={userAccountStyles.lottie}
          speed={1}
        />
        <LoginHeader navigation={props.navigation} />
        <Text style={ userAccountStyles.containerTitle }>Log in</Text>
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
