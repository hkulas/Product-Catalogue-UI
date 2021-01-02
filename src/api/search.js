import axios from "axios"
import Endpoints from "../constants/endpoints";

export const search = async (searchText) => {
    return await axios.get(Endpoints.PRODUCT_SEARCH, { params: { searchText } });
}