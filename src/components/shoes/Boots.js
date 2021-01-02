import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Boots() {
    const boots = useProducts(['boots']);

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Obuwie", "Półbuty"]} links={[Routings.SHOES, Routings.BOOTS]} />
            <Clothes products={boots} />
        </>
    );
}

export default Boots;