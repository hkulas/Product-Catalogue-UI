import axios from "axios"
import Endpoints from "../constants/endpoints";

export const createShop = async (name, address, position) => {
    return await axios.post(Endpoints.SHOPS, {
        id: name,
        address,
        location: [
            position.lat, position.lng
        ]
    });
}