import React from 'react';
import Routings from '../../constants/routings';
import useProducts from '../../hooks/useProducts';
import Clothes from '../products/Clothes';
import SectionBreadcrumb from '../shared/SectionBreadcrumb';

function Accessories() {
    const accessories = useProducts('accessories');

    return (
        <>
            <SectionBreadcrumb breadcrumbs={["Akcesoria"]} links={[Routings.ACCESSORIES]} />
            <Clothes products={accessories} />
        </>
    );
}

export default Accessories;