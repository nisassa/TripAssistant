import React from 'react';
import {
    KeyboardAvoidingView,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { formStyle } from '../../../../assets/styles/form';
import { connect } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';

const FlightItem = (props) => {
    
    Moment.locale('en');
        
    const onDateChange = (event, date) => {
        props.updateItemValue('departureDate', date);
    }

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss} 
            accessible={false} 
            >
            <KeyboardAvoidingView style={formStyle.tripItemContainer}> 
                <Ionicons style={formStyle.itemIcon} name="ios-airplane" size={60} />
                    <View style={ formStyle.fullWidhtContainer }>
                        <TextInput 
                            onChangeText={ (val) => props.updateItemValue('flightNumber', val) } 
                            style={formStyle.itemInput}  
                            placeholder="Flight Number" 
                            value={props.itemToAdd.flightNumber}
                        />
                        <TouchableOpacity onPress={() => {
                            props.toggleDatePicker(! props.isDateTimePickerShown)
                            Keyboard.dismiss()
                        }}>
                            <Text style={formStyle.itemInput}>{props.itemToAdd.departureDate ? Moment(props.itemToAdd.departureDate).format('D MMM YYYY') : 'Departure Date' }</Text>
                        </TouchableOpacity>
                        {props.isDateTimePickerShown && <DateTimePicker
                            testID="dateTimePicker"
                            value={props.itemToAdd.departureDate || new Date()}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={onDateChange}/>
                        }
                    </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

function mapStateToProps (state) {
    return {
        isDateTimePickerShown: state.tripsReducer.newTrip.isDateTimePickerShown,
        itemToAdd: state.tripsReducer.newTrip.itemToAdd,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "toggleDatePicker" : (newValue) => dispatch({ 
            type: "TOGGLE_DATE_PICKER",  payload: { value : newValue }
        }),
        "updateItemValue" : (itemType, newValue) => dispatch({
            type: "UPDATE_ITEM_VALUE",  payload: { value : newValue, item:  itemType}
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (FlightItem)
