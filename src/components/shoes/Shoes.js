import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Shoes() {
    const shoes = useProducts('shoes');

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Obuwie"]} links={[Routings.SHOES]} />
            <Clothes products={shoes} />
        </>
    );
}

export default Shoes;