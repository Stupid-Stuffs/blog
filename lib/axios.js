const { default: axios } = require('axios')
const { getTokenFromLocalStorage } = require('./token')

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
})

export default api
