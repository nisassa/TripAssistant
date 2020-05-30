

const initialState = {
    newTripModalShown: false,
    purposeOfTrip: false
}

const tripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_TRIP_MODAL_TOGGLE":
            return {
                ...state,
                newTripModalShown: action.payload.value,
            };
        case "CHANGE_TRIP_PURPOSE":
            return {
                ...state,
                purposeOfTrip: action.payload.value,
            };
        default:
            return state
    }
}

export default tripsReducer;