import axios from "axios"
import Endpoints from "../constants/endpoints";

export const createProduct = async (name, description, category, otherParameters, photosUrls, manufacturer) => {
    console.log(otherParameters);

    return await axios.post(Endpoints.PRODUCT, {
        name,
        description,
        category,
        otherParameters,
        photosUrls,
        manufacturer
    });
}