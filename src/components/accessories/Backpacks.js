import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Backpacks() {
    const backpacks = useProducts('backpacks');

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Akcesoria", "Plecaki"]} links={[Routings.ACCESSORIES, Routings.BACKPACKS]} />
            <Clothes products={backpacks} />
        </>
    );
}

export default Backpacks;