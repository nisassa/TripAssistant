import { fromJS } from 'immutable'

export const initialState = fromJS({
    newTripModalshown: false
})

const tripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_TRIP_MODAL_TOGGLE":
            return {
                ...state,
                newTripModalshown: action.payload.value,
            };
        default:
            return state
    }
}

export default tripsReducer;