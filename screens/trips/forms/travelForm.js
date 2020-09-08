import React from 'react'
import { connect } from 'react-redux'
import {
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    SafeAreaView,
    FlatList
} from 'react-native'
import { formStyle } from '../../../assets/styles/form'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AddItemModal from './addItem'
import Moment from 'moment'

function TravelForm (props) {
    
    Moment.locale('en');

    const addNewItem = (newValue) => {
        props.updateItemValue('itemType', newValue)
    }

    const removeItem = (id, type, stateId) => {
        props.removeItem(id, type, stateId)
    }

    const getTripItems = () => {    
        let result = props.tripItems[props.newTrip.purposeOfTrip].map((item, index) => {
            if (item.hasOwnProperty('type')) {
                if (item.type == 'flight' && item.data.trip == props.newTrip.id) {
                    return {data: item.data, key: item.data._id, index: index};
                }
            }
        })
        return result
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
            <Text style={formStyle.simpleText} >{ props.newTrip.name || 'Name your trip'} <EvilIcons name="pencil" size={30} color="cornflowerblue" /></Text>
            { props.tripItems[props.newTrip.purposeOfTrip].length == 0 && <ScrollView><Text style={ {marginLeft: 10}} >&nbsp;</Text></ScrollView>}
            { props.tripItems[props.newTrip.purposeOfTrip].length > 0 && <FlatList
                    data = {getTripItems()}
                    renderItem={({item}) => 
                        <View style={formStyle.itemView}>
                            <View style={formStyle.inlineBlock} >
                                <MaterialCommunityIcons name='airplane-takeoff' size={40}/>
                                <Text style={formStyle.flightNumber}>{item.data.carrierFsCode} {item.data.flightNumber}</Text>
                            </View>
                            <View style={formStyle.inlineBlock} >
                                <Text style={formStyle.airpportCode}>{item.data.departureAirportFsCode}</Text>
                                <Text style={formStyle.depTime}>{Moment(item.data.departureTime).format('H:mm DMMMYY')}</Text>
                                <Text>Terminal: {item.data.departureTerminal || 'N/a' }</Text>
                            </View>
                            <View style={formStyle.inlineBlock} >
                                <MaterialCommunityIcons name='airplane-landing' size={40}/>
                                <Text style={formStyle.flightNumber}>Eq. {item.data.flightEquipmentIataCode}</Text>
                            </View>
                            <View style={formStyle.inlineBlock} >
                                <Text style={formStyle.airpportCode}>{item.data.arrivalAirportFsCode} </Text>
                                <Text style={formStyle.depTime}>{Moment(item.data.arrivalTime).format('H:mm DMMMYY')}</Text>
                                <Text>Terminal: {item.data.arrivalTerminal || 'N/a' }</Text>
                            </View>
                            <TouchableOpacity onPress={ () => removeItem(item.data._id, 'flight', item.index)} style={formStyle.inlineBlock} >
                                <Ionicons style={formStyle.removeBtn} name="ios-trash" size={40} /> 
                            </TouchableOpacity>
                        </View>
                    }
                />
            }
        </SafeAreaView>
    )
}

function mapStateToProps (state) {
    return {
        newTrip:        state.tripsReducer.newTrip, 
        modalIsShown:   state.tripsReducer.newTripModalShown,
        tripItems:      state.tripsReducer.newTrip.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "updateItemValue" : (itemType, newValue) => dispatch({
            type: "UPDATE_ITEM_VALUE",  payload: { value : newValue, item:  itemType}
        }),
        removeItem : (id, type, stateIndex) =>  dispatch({
            type: "DELETE_ITEM_TO_ADD", payload: { id: id, type: type, stateIndex: stateIndex}
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (TravelForm)