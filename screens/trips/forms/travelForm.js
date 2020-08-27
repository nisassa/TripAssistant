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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AddItemModal from './addItem'
import Moment from 'moment'

function TravelForm (props) {
    
    Moment.locale('en');

    const addNewItem = (newValue) => {
        props.updateItemValue('itemType', newValue)
    }

    const getTripItems = () => {    
        let result = props.tripItems.map((item) => {
            if (item.type == 'flight') {
                return {data: item.data, key: item.data._id};
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
            <Text style={formStyle.simpleText} >{ props.newTrip.name || 'Name your trip'}</Text>
            { props.tripItems.length > 0 && <FlatList
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
                                <Text style={formStyle.flightNumber}>&nbsp;</Text>
                            </View>
                            <View style={formStyle.inlineBlock} >
                                <Text style={formStyle.airpportCode}>{item.data.arrivalAirportFsCode} </Text>
                                <Text style={formStyle.depTime}>{Moment(item.data.arrivalTime).format('H:mm DMMMYY')}</Text>
                                <Text>Terminal: {item.data.arrivalTerminal || 'N/a' }</Text>
                            </View>
                            <TouchableOpacity style={formStyle.inlineBlock} >
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
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (TravelForm)