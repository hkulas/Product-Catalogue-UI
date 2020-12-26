import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Shirts(props) {
    const shirts = useProducts('shirts');

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Odzież", "Koszule"]} links={[Routings.CLOTHING, Routings.SHIRTS]} />
            <Clothes products={shirts} />
        </>
    );
}

export default Shirts;