import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { userAccountStyles } from '../../assets/styles/userAccount/login';
import LoginHeader from './header';
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as yup from 'yup';
import AnimatedLoader from "react-native-animated-loader";
import AppMainNav from '../../routes/appNav';

function RegisterScreen(props) {
  const registerSchema = yup.object({
    name: yup.string().required().min(4).max(50),
    surname: yup.string().required().min(4).max(50),
    email: yup.string().email().required(),
    password: yup.string().required('No password provided.')
      .min(6, 'Password is too short - should be 6 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  })

  const onFormSubmit = (userAccount) => {
    Keyboard.dismiss()
    props.registerNewAccount(userAccount);
  }

  const showServerMessage = () => {
    if (props.authRequestProcessing === false && props.authToken === false && props.serverMessage !== false) {
      setTimeout(function () {
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
        <Text style={userAccountStyles.containerTitle}>Create your account</Text>
        {showServerMessage()}
        <Formik
          validationSchema={registerSchema}
          initialValues={{
            "name": "",
            "surname": "",
            "email": "",
            "password": ""
          }}
          onSubmit={(values) => onFormSubmit(values)} >
          {formikProps => {
            return (
              <View>
                <Text style={userAccountStyles.errorText}>{formikProps.touched.name && formikProps.errors.name}</Text>
                <TextInput
                  style={userAccountStyles.inputBox}
                  placeholder="First name"
                  onChangeText={formikProps.handleChange("name")}
                  value={formikProps.name}
                />
                <Text style={userAccountStyles.errorText}>{formikProps.touched.surname && formikProps.errors.surname}</Text>
                <TextInput
                  style={userAccountStyles.inputBox}
                  placeholder="Last name"
                  onChangeText={formikProps.handleChange("surname")}
                  value={formikProps.surname}
                />
                <Text style={userAccountStyles.errorText}>{formikProps.touched.email && formikProps.errors.email}</Text>
                <TextInput
                  style={userAccountStyles.inputBox}
                  placeholder="Email"
                  onChangeText={formikProps.handleChange("email")}
                  value={formikProps.email}
                />
                <Text style={userAccountStyles.errorText}>{formikProps.touched.password && formikProps.errors.password}</Text>
                <TextInput
                  style={userAccountStyles.inputBox}
                  placeholder="Password"
                  onChangeText={formikProps.handleChange("password")}
                  value={formikProps.password}
                  secureTextEntry={true}
                />
                <TouchableOpacity
                  onPress={() => { !props.authRequestProcessing && formikProps.handleSubmit() }} >
                  <Text style={userAccountStyles.continueButton}>Continue</Text>
                </TouchableOpacity>
              </View>
            )
          }
          }
        </Formik>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

function mapStateToProps(state, props) {
  return {
    navigation: props.navigation,
    authToken: state.userAuthReducer.authToken,
    authRequestProcessing: state.userAuthReducer.authRequestProcessing,
    serverMessage: state.userAuthReducer.serverMessage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerNewAccount: (userAccount) => dispatch({
      type: 'REGISTER_NEW_ACCOUNT',
      userAccount: userAccount
    }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen)