import React from 'react';
import { useSelector } from 'react-redux';
import Clothes from '../products/Clothes';

function SearchResults() {
    const { foundProducts } = useSelector(state => state);

    return (
        <>
            <h4 className="m-4">Znalezione produkty</h4>
            <Clothes products={foundProducts} />
        </>
    );
}

export default SearchResults;