import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function FlipFlops() {
    const flipFlops = useProducts('flipFlops');

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Obuwie", "Klapki"]} links={[Routings.SHOES, Routings.FLIP_FLOPS]} />
            <Clothes products={flipFlops} />
        </>
    );
}

export default FlipFlops;