import axios from "axios"
import Endpoints from "../constants/endpoints";

export const getClothes = async (categories) => {
    return await axios.post(Endpoints.PRODUCT_CATEGORY, {
      categories
    });
}