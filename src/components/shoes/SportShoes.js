import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function SportShoes() {
    const sportShoes = useProducts('sportShoes');

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Obuwie", "Sportowe"]} links={[Routings.SHOES, Routings.SPORT_SHOES]} />
            <Clothes products={sportShoes} />
        </>
    );
}

export default SportShoes;