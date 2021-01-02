const BASE_URL = 'https://localhost:8080'

class Endpoints {
    static PRODUCT = BASE_URL + '/product';
    static PRODUCT_CATEGORY = Endpoints.PRODUCT + '/category';
    static PRODUCT_SEARCH = Endpoints.PRODUCT + '/search';
    static SHOPS = BASE_URL + '/location';
    static ALL_SHOPS = Endpoints.SHOPS + '/all';
    static NEAR_SHOPS = Endpoints.SHOPS + '/near';
}

export default Endpoints;