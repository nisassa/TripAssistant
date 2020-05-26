import React from 'react';
import { 
    View,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { globalStyles } from '../../assets/styles/global';
import { Icon } from 'react-native-elements'
import AddNewTrip from './newTripModal'


function AppTripsScreen(props) {

    const togleAddNewTripModal = () => {
        props.toggleAddNewTripModal(true)
    }

    return (
        <View style={globalStyles.container} > 
            <AddNewTrip />
            <TouchableOpacity 
                style={globalStyles.touchableOpacityCenter}
                onPress={togleAddNewTripModal} >
                <Icon 
                    style={globalStyles.addButton}
                    name="ios-add"
                    type="ionicon"
                    color="darkgray"
                    size={50}
                />
            </TouchableOpacity>
        </View>
    )
}

function mapStateToProps (state, props) {
    return {
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
) (AppTripsScreen)
  