import axios from "axios"
import Endpoints from "../constants/endpoints";

export const getNearShops = async (x, y) => {
    return await axios.get(Endpoints.NEAR_SHOPS, {
        params: {
            x,
            y,
            distance: 10000
        }
    });
}
