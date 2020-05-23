import { userAccountStyles } from '../../assets/styles/userAccount/login';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableWithoutFeedback } from 'react-native';

function LoginHeader (props) {

    const handleGoBack = () => {
        props.navigation.goBack()
    }

    return (
        <TouchableWithoutFeedback onPress={ handleGoBack }>
            <View style={userAccountStyles.header}>
                <Icon name={'ios-arrow-round-back'} style={userAccountStyles.goBackButtton} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default LoginHeader