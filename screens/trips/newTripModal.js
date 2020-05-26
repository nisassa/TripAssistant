import React from 'react';
import { connect } from 'react-redux';
import { 
    Modal,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { globalStyles } from '../../assets/styles/global';
import  AppHeader from '../header';
import Icon from 'react-native-vector-icons/Ionicons';

function AddNewTrip (props) {
    const toggleModal = () => {
        props.toggleAddNewTripModal(false)
    }
    return (
        <Modal
            animationType="fade"
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
                
            </View>
        </Modal>
    )
}

function mapStateToProps (state) {
    return {
        modalIsShown: state.tripsReducer.newTripModalshown
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "toggleAddNewTripModal" : (newValue) => dispatch({ 
            type: "NEW_TRIP_MODAL_TOGGLE", 
            payload: { 
                value : newValue 
            }
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AddNewTrip)
  