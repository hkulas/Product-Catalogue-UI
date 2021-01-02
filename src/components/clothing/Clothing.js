import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Clothing() {
    const clothes = useProducts(['hoodie', 'shirt', 'tshirt', 'trousers', 'underwear']);

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Odzież"]} links={[Routings.CLOTHING]} />
            <Clothes products={clothes} />
        </>
    );
}

export default Clothing;