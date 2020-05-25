import { userAccountStyles } from '../../assets/styles/userAccount/login';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

function LoginHeader (props) {

    const handleGoBack = () => {
        props.resetServerMessage()
        props.navigation.goBack()
    }

    return (
        <View style={userAccountStyles.header}>
            <TouchableWithoutFeedback onPress={ handleGoBack }>
                <Icon name={'ios-arrow-round-back'} style={userAccountStyles.goBackButtton} />
            </TouchableWithoutFeedback>
        </View>
    )
}

function mapStateToProps (state, props) {
    return {}
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      resetServerMessage : () => dispatch({
        type: 'RESET_SERVER_MESSAGE',
      }),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  ) (LoginHeader)
  