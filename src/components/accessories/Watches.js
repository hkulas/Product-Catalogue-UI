import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Watches() {
    const watches = useProducts('watches');

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Akcesoria", "Zegarki"]} links={[Routings.ACCESSORIES, Routings.WATCHES]} />
            <Clothes products={watches} />
        </>
    );
}

export default Watches;