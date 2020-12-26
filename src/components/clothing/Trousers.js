import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Trousers(props) {
    const trousers = useProducts('trousers');

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Odzież", "Spodnie"]} links={[Routings.CLOTHING, Routings.TROUSERS]} />
            <Clothes products={trousers} />
        </>
    );
}

export default Trousers;