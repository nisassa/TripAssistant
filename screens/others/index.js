import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { globalStyles } from '../../assets/styles/global';

function AppOherScreen() {
    return (
        <View style={globalStyles.container} > 
            <Text> AppOherScreen </Text>
        </View>
    )
}

function mapStateToProps (state, props) {
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
) (AppOherScreen)
