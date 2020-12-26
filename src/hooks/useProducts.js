
import { useState, useEffect } from 'react';
import { getClothes } from '../api/getClothes';

function useProducts(category) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getClothes(category).then(res => {
                setProducts(res.data);
            })
        }

        fetchData();
    }, []);

  return products;
}

export default useProducts;