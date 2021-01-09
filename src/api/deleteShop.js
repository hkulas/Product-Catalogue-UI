import axios from "axios"
import Endpoints from "../constants/endpoints";

export const deleteShop = async (id) => {
    return await axios.delete(Endpoints.SHOPS + '/' + id);
}
