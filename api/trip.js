import request from '../utils/request'

export const addTripItem = data => request('trip/add/item', {
    method: 'POST',
    data
})

export const deleteTripItem = data => request('trip/delete/item/' + data.payload.id + '/' + data.payload.type , {
    method: 'POST',
    data
})