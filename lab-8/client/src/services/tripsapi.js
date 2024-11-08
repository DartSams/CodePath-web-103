import { request } from '../utilities/api' 

const tripsURL = '/api/trips'

const getAllTrips = () => request('GET', tripsURL)
const getTripsById = (id) => request('GET', `${tripsURL}/${id}`)
const createTrip = (trip) => request('POST', tripsURL, trip)
const updateTrip = (trip) => request('PATCH', `${tripsURL}/${trip.id}`, trip)
const deleteTrip = (id) => request('DELETE', `${tripsURL}/${id}`)

export default {
    getAllTrips,
    getTripsById,
    createTrip,
    updateTrip,
    deleteTrip 
}