import camelize from "camelize";
import { locations } from "./LocationMock";

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject)=> {
        const locationMock = locations[searchTerm]

        if(!locationMock) {
            reject("location not found")
        }
        resolve(locationMock)
    })
}

export const locationTransform = (result) => {
    const {geometry = {}} = camelize(result.results)[0]
    const { lat, lng } = geometry.location
    return { lat, lng, viewport: geometry.viewport }
}