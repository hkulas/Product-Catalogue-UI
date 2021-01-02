import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Belts() {
    const belts = useProducts(['belt']);

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Akcesoria", "Paski"]} links={[Routings.ACCESSORIES, Routings.BELTS]} />
            <Clothes products={belts} />
        </>
    );
}

export default Belts;