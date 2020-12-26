import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Underwear(props) {
    const underwear = useProducts('underwear');

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Odzież", "Bielizna"]} links={[Routings.CLOTHING, Routings.UNDERWEAR]} />
            <Clothes products={underwear} />
        </>
    );
}

export default Underwear;