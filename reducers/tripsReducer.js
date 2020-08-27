
const initialState = {
    hasError: false,
    errorMessage: null,
    processingRequest: false,
    newTripModalShown: false,
    newTrip: {
        id: null,  
        name: null,
        isDateTimePickerShown: false,
        purposeOfTrip: false,
        itemToAdd: {
            itemType: "",
            departureDate: "",
            flightNumber: ""
        },
        items:[{
            type: 'flight',
            data: {
                _id: '534556566455',
                carrierFsCode: 'BA',
                flightNumber: '206',
                departureAirportFsCode: 'MIA',
                arrivalAirportFsCode: 'LHR',
                departureTime: '2021-07-24T17:05:00.000',
                arrivalTime: '2021-07-25T06:40:00.000',
                stops: 0,
                arrivalTerminal: '3',
                flightEquipmentIataCode: '777',
                isCodeshare: false,
                isWetlease: false,
                serviceType: '',
                serviceClasses: [],
                trafficRestrictions: [],
                codeshares: [],
            }
        }, {
            type: 'flight',
            data: {
                _id: '53453455',
                carrierFsCode: 'BA',
                flightNumber: '206',
                departureAirportFsCode: 'MIA',
                arrivalAirportFsCode: 'LHR',
                departureTime: '2021-07-24T17:05:00.000',
                arrivalTime: '2021-07-25T06:40:00.000',
                stops: 0,
                arrivalTerminal: '3',
                flightEquipmentIataCode: '777',
                isCodeshare: false,
                isWetlease: false,
                serviceType: '',
                serviceClasses: [],
                trafficRestrictions: [],
                codeshares: [],
            }
        }],
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
                    name: action.tripName,
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
                    name: action.tripName,
                    isDateTimePickerShown: false,
                    itemToAdd: {
                        itemType: "",
                        departureDate: "",
                        flightNumber: ""
                    },
                    items: [ 
                        ...state.newTrip.items,
                        {
                            type: action.data.itemType,
                            data: action.data.item
                        }
                    ]
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