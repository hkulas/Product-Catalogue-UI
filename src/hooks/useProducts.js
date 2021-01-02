
import { useState, useEffect } from 'react';
import { getClothes } from '../api/getClothes';

function useProducts(categories) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log(categories);
            await getClothes(categories).then(res => {
                setProducts(res.data);
            })
        }

        fetchData();
    }, []);

  return products;
}

export default useProducts;