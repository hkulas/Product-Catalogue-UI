import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Hoodies(props) {
    const hoodies = useProducts('hoodies');

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Odzież", "Bluzy"]} links={[Routings.CLOTHING, Routings.HOODIES]} />
            <Clothes products={hoodies} />
        </>
    );
}

export default Hoodies;