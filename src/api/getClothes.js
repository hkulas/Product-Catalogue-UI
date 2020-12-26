import axios from "axios"
import Endpoints from "../constants/endpoints";

export const getClothes = async (category) => {
    return await axios.get(Endpoints.CLOTHING, {
        params: {
          category
        }
    });
}