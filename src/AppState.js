import { reactive } from 'vue'
// eslint-disable-next-line no-unused-vars
import Picture from './models/Picture'

export const AppState = reactive({
    /**@type {Picture[]} */
    results: [],
    /**@type {Picture[]} */
    activePicture: null


})