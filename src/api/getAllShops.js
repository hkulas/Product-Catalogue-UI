import axios from "axios"
import Endpoints from "../constants/endpoints";

export const getAllShops = async () => {
    return await axios.get(Endpoints.ALL_SHOPS);
}