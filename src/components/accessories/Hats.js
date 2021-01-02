import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Hats() {
    const hats = useProducts(['hat']);

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Akcesoria", "Czapki"]} links={[Routings.ACCESSORIES, Routings.HATS]} />
            <Clothes products={hats} />
        </>
    );
}

export default Hats;