import React from 'react';
import { connect } from 'react-redux';
import {
    TouchableOpacity,
    View,
    Text,
    Modal,
    Alert
} from 'react-native';
import { formStyle } from '../../../assets/styles/form';
import { tripStyles } from '../../../assets/styles/trips';
import FlightItem from './parts/flight';
import { userAccountStyles } from '../../../assets/styles/userAccount/login'
import AnimatedLoader from "react-native-animated-loader"

function AddItem (props) {
    
    const handleAddItem = () => {    
        props.registerNewTripItem(props.newTrip.itemToAdd, props.newTrip.id, props.userId)
    }

    const showErrorMessage = () => {
        props.hasError == true && props.processingRequest !== true && setTimeout(function () {
            Alert.alert(
              "Something went wrong",
              props.errorMessage,
              { cancelable: false }
            )
            props.errorMessageSeen()
        }, 500)
    }
    
    const displayItemComponent = () => {
        
        if (props.newTrip.itemToAdd.itemType === "flight") {
            return (
                <FlightItem />
            )
        }
    };
    
    return (
        <Modal
            visible={ props.newTrip.itemToAdd.itemType !== "" }
            transparent={true}
        >   
            <AnimatedLoader
                visible={props.processingRequest}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../../../assets/lottiefiles/loader.json")}
                animationStyle={userAccountStyles.lottie}
                speed={1}
            />
            <View style={formStyle.modalContainer}>
                <View style={formStyle.addItemModal}>
                    { showErrorMessage() }
                    { displayItemComponent() }   
                    <View style={formStyle.footerContainer} >
                        <TouchableOpacity 
                            style={tripStyles.tripTypebutton}
                            onPress={() => props.updateItemValue('itemType', '')}
                        >
                            <Text> Cancel </Text>
                        </TouchableOpacity> 
                        <TouchableOpacity 
                            style={[tripStyles.tripTypebutton, formStyle.successButon]}
                            onPress={ () => handleAddItem() } > 
                            <Text> Add { props.newTrip.itemToAdd.itemType } </Text>
                        </TouchableOpacity> 
                    </View>
                </View>
                <View style={formStyle.addItemModalMask}>
                </View>
            </View>
        </Modal>
    )
}

function mapStateToProps (state) {
    return {
        processingRequest: state.tripsReducer.processingRequest,
        newTrip:  state.tripsReducer.newTrip,
        userId: state.userAuthReducer.userId,
        hasError: state.tripsReducer.hasError,
        errorMessage: state.tripsReducer.errorMessage,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "registerNewTripItem": (item, tripId, userID) => dispatch({
            type: 'REGISTER_NEW_TRIP_ITEM',
            item: item,
            tripId: tripId,
            userId: userID
        }),
        "updateItemValue" : (item, value) => dispatch({
            type: "UPDATE_ITEM_VALUE",  payload: { value : value, item:  item}
        }),
        "errorMessageSeen" : () => dispatch({
            type: "ERROR_MESSAGE_SEEN",  payload: {}
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AddItem)