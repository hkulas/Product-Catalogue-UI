import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Tshirts(props) {
    const tshirts = useProducts('tshirts');

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Odzież", "Koszulki"]} links={[Routings.CLOTHING, Routings.T_SHIRTS]} />
            <Clothes products={tshirts} />
        </>
    );
}

export default Tshirts;