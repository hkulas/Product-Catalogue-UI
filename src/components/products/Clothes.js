import React from 'react';
import * as clothes from '../../mocks/clothes.json';
import ClothesCard from './ClothesCard';

function Clothes(props) {

    const ClothesComponent = (props.clothes && props.clothes.length > 1) ? props.clothes.map(item => {
        return (
            <ClothesCard productName={item.name} manufacturer={item.manufacturer} photoUrl={item.photo_url} />
        )
    }) : null;

    return (
        <div className="row ml-2 mr-2">
            {ClothesComponent}
        </div>
    );
}

export default Clothes;