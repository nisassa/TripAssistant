import request from '../utils/request'

export const addTripItem = data => request('trip/add/item', {
    method: 'POST',
    data
})