import axios from 'axios'

export const nasaApi = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod?api_key=428bvdcsT92Q8nL3f1H0b7rYpntGBrJh3xhH9Nur&date=',
    timeout:3000
})