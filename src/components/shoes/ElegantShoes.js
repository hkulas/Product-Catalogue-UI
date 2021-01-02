import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function ElegantShoes() {
    const elegantShoes = useProducts(['elegantShoes']);

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Obuwie", "Eleganckie"]} links={[Routings.SHOES, Routings.ELEGANT_SHOES]} />
            <Clothes products={elegantShoes} />
        </>
    );
}

export default ElegantShoes;