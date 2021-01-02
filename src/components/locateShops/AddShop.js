import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createShop } from '../../api/createShop';
import MapComponent from './MapComponent';

function AddShop(props) {
    const [shopName, setShopName] = useState('')
    const [shopAddress, setShopAddress] = useState('')
    const [shopPosition, setShopPosition] = useState(undefined)

    const onFormSubmit = async (event) => {
        event.preventDefault();

        await createShop(shopName, shopAddress, shopPosition)
        .then(res => {
            setShopName('')
            setShopAddress('')
            setShopPosition(undefined)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container">
            <Form onSubmit={onFormSubmit}>
                <div className="row mt-4">
                    <div className="col-12">
                        <Form.Label>Nazwa sklepu</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={shopName} 
                            onChange={(event) => setShopName(event.target.value)} 
                            placeholder="Nazwa sklepu" 
                        />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <Form.Label>Adres sklepu (Ulica, miasto itd)</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={shopAddress} 
                            onChange={(event) => setShopAddress(event.target.value)} 
                            placeholder="Adres sklepu" 
                        />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <Form.Label>Wybierz sklep na mapie (LPM)</Form.Label>
                        <MapComponent shopPosition={shopPosition} setShopPosition={setShopPosition} />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 text-right">
                        <Button variant="success" type='submit'>Dodaj sklep</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default AddShop;