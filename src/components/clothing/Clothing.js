import React, { useEffect } from 'react';
import { getClothes } from '../../api/getClothes';
import Clothes from '../products/Clothes';
import SectionHeader from '../shared/SectionHeader';

function Clothing() {

    useEffect(() => {
        const fetchData = async () => {
            await getClothes('clothing').then(res => {
                console.log(res.data)
            })
        }

        fetchData();
    }, []);

    return (
        <>
            <SectionHeader title='Odzież' />
            <Clothes />
        </>
    );
}

export default Clothing;