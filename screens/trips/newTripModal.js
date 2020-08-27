import React from 'react';
import { connect } from 'react-redux';
import { 
    Modal,
    TouchableWithoutFeedback,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { globalStyles } from '../../assets/styles/global';
import { tripStyles } from '../../assets/styles/trips';
import  AppHeader from '../header';
import Icon from 'react-native-vector-icons/Ionicons';
import TravelForm from './forms/travelForm';

function AddNewTrip (props) {
    
    const changeTripPurpose = (newValue) => {
        props.changeTripPurpose(newValue)
    }

    const toggleModal = () => {
        if (props.purposeOfTrip !== false) {
            props.changeTripPurpose(false)
        } else {
            props.toggleAddNewTripModal(false)
        }
    }
    
    const askPurposeOfTrip = () => {
        if (props.purposeOfTrip === false) {
            return (
                <View style={tripStyles.tripTypeContainer}>
                    <Text style={tripStyles.tripPurpose}> What is the purpose {"\n"}of your trip? </Text>
                    <TouchableOpacity onPress={ () => changeTripPurpose("Travelling") }>
                        <Text style={tripStyles.tripTypebutton} > Travelling </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => changeTripPurpose("Commuting") }>
                        <Text style={tripStyles.tripTypebutton} > Commuting </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => changeTripPurpose("Business travel") }>
                        <Text style={tripStyles.tripTypebutton} > Business travel </Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            if (props.purposeOfTrip === "Travelling" || props.purposeOfTrip === "Business travel") {
                return <TravelForm />
            } else {
                return (
                    <Text>Render the form for {props.purposeOfTrip}</Text>    
                )
            }
        }
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalIsShown}
        >
            <AppHeader 
                headerTitle="Add New Trip"
                leftComponent={
                    <TouchableWithoutFeedback onPress={ toggleModal }>
                        <Icon name={'ios-arrow-round-back'} style={globalStyles.goBackButtton} />
                    </TouchableWithoutFeedback>
                }
            />
            <View style={globalStyles.container}>
                { askPurposeOfTrip() }
            </View>
        </Modal>
    )
}

function mapStateToProps (state) {
    return {
        modalIsShown: state.tripsReducer.newTripModalShown,
        purposeOfTrip: state.tripsReducer.newTrip.purposeOfTrip
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "toggleAddNewTripModal" : (newValue) => dispatch({ 
            type: "NEW_TRIP_MODAL_TOGGLE",  payload: { value : newValue }
        }),
        "changeTripPurpose" : (newValue) => dispatch({ 
            type: "CHANGE_TRIP_PURPOSE", payload: { value : newValue }
        }),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AddNewTrip)
  