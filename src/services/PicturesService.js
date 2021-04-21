import Picture from "../models/Picture";
import { nasaApi } from "./AxiosService";
import { AppState } from "../AppState"



class PicturesService {
    async getPictures(query){
        const response = await nasaApi.get(query)
        AppState.results = new Picture(response.data)
    }

    setActive(picture){
        AppState.activePicture = picture
    }
}


export const picturesService = new PicturesService