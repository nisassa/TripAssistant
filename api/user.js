import request from '../utils/request'

export const createUserAccount = data => request('user/authentication/register', {
    method: 'POST',
    data
})

export const loginAttemt = data => request('user/authentication/login', {
    method: 'POST',
    data
}) 