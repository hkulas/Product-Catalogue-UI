import React from 'react';
import ClothesCard from './ClothesCard';

function Clothes(props) {

    const ClothesComponent = (props.products && props.products.length > 0) ? props.products.map(item => {
        return (
            <ClothesCard item={item} />
        )
    }) : null;

    return (
        <div className="row ml-2 mr-2">
            {ClothesComponent}
        </div>
    );
}

export default Clothes;