import React from 'react';
import { connect } from 'react-redux';
import {
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    SafeAreaView
} from 'react-native';
import { formStyle } from '../../../assets/styles/form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddItemModal from './addItem';

function TravelForm (props) {
    console.log( "flights" + props.tripsReducer.newTrip.items.flights)
    console.log(props.tripsReducer.newTrip.items)

    const addNewItem = (newValue) => {
        props.updateItemValue('itemType', newValue)
    }

    return (
        <SafeAreaView style={formStyle.container}>
            <View style={formStyle.headerBarContainer}>
                <AddItemModal />
                <ScrollView contentContainerStyle={formStyle.headerBar} horizontal={true} >
                    <TouchableOpacity onPress={ () => addNewItem("flight") } style={formStyle.tripItem}>
                        <Ionicons name="ios-airplane" size={40} />
                        <Text>+ Flight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => addNewItem("train") } style={formStyle.tripItem}>
                        <Ionicons name="ios-train" size={40} />
                        <Text>+ Train</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => addNewItem("bus") } style={formStyle.tripItem}>
                        <Ionicons name="ios-bus" size={40} />
                        <Text>+ Bus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => addNewItem("car") } style={formStyle.tripItem}>
                        <Ionicons name="ios-car" size={40} />
                        <Text>+ Car</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => addNewItem("hotel") } style={formStyle.tripItem}>
                        <Ionicons name="ios-bed" size={40} />
                        <Text>+ Hotel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => addNewItem("activity") } style={formStyle.tripItem}>
                        <Ionicons name="ios-beer" size={40} />
                        <Text>+ Activity</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <ScrollView style={formStyle.tripContainer}>
                <Text style={formStyle.simpleText} >Trip items:</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

function mapStateToProps (state) {
    return {
        newTrip:        state.tripsReducer.newTrip, 
        modalIsShown:   state.tripsReducer.newTripModalShown,
        tripsReducer:   state.tripsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "updateItemValue" : (itemType, newValue) => dispatch({
            type: "UPDATE_ITEM_VALUE",  payload: { value : newValue, item:  itemType}
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (TravelForm)