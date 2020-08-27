
const initialState = {
    hasError: false,
    errorMessage: null,
    processingRequest: false,
    newTripModalShown: false,
    newTrip: {
        id: null,  
        isDateTimePickerShown: false,
        purposeOfTrip: false,
        itemToAdd: {
            itemType: "",
            departureDate: "",
            flightNumber: ""
        },
        items:{
            flights : []
        },
    }
}

const tripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TRIP_START_PROCESSING_DATA": {
            return {
                ...state,
                processingRequest: true
            }
        }
        case "TRIP_STOP_PROCESSING_DATA": {
            return {
                ...state,
                processingRequest: false
            }
        }
        case "UPDATE_ITEM_VALUE": {
            return {
                ...state,
                newTrip: {
                    ...state.newTrip,
                    itemToAdd: {
                        ...state.newTrip.itemToAdd,
                        [action.payload.item]: action.payload.value
                    }
                }
            }
        }
        case "TOGGLE_DATE_PICKER" :
            return {
                ...state,
                newTrip: {
                    ...state.newTrip,
                    isDateTimePickerShown: action.payload.value
                }
            }
        case "NEW_TRIP_MODAL_TOGGLE":
            return {
                ...state,
                newTripModalShown: action.payload.value,
            };
        case "CHANGE_TRIP_PURPOSE":
            return {
                ...state,
                newTrip: {
                    ...state.newTrip,
                    purposeOfTrip: action.payload.value,
                }
            };
        case "FAILED_TO_ADD_NEW_TRIP_ITEM": 
            return {
                ...state,
                hasError: true,
                errorMessage: action.message,
                newTrip: {
                    ...state.newTrip,
                    id: action.tripId,
                    itemToAdd: {
                        ...state.newTrip.itemToAdd,
                    }
                }
            }
        case "ADDED_NEW_TRIP_ITEM" : {      
            
            return {
                ...state,
                hasError: false,
                errorMessage: null,
                newTrip: {
                    ...state.newTrip,
                    id: action.tripId,
                    isDateTimePickerShown: false,
                    itemToAdd: {
                        itemType: "",
                        departureDate: "",
                        flightNumber: ""
                    },
                    items: { 
                        ...state.newTrip.items,
                        flights : [
                            ...state.newTrip.items.flights,
                            action.data.item
                            
                        ]
                    }
                },
            }
        }
        case "ERROR_MESSAGE_SEEN" : {
            return {
                ...state,
                hasError: false,
                errorMessage: null,
            }
        }
        default:
            return state
    }
}

export default tripsReducer;