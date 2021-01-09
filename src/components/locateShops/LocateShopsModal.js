import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { geolocated } from 'react-geolocated';
import { deleteShop } from '../../api/deleteShop';
import { getNearShops } from '../../api/getNearShops';
import ShopCard from './ShopCard';

function LocateShopsModal(props) {
    const [shops, setShops] = useState([]);

    const fetchShops = async () => {
        await getNearShops(props.coords.latitude, props.coords.longitude).then(res => {
            setShops(res.data.content);
        })
    }

    useEffect(() => {
        if (props.coords && props.show) {
            fetchShops();
        }
    }, [props.coords, props.show]);

    return (
        <Modal show={props.show} onHide={props.handleClose} scrollable={true} >
            <Modal.Header closeButton>
                <Modal.Title>Nasze sklepy</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <p>Oto lista naszych sklepów najbliżej Ciebie:</p>
                
                {shops && (
                    <>
                    {shops.slice(0, 10).map(shop => (
                        <div className="row">
                            <div className="col-11">
                                <ShopCard name={shop.content.id} address={shop.content.address} distance={shop.distance.value} />
                            </div>
                            <div className="col-1 align-self-center">
                                <i className="icon-trash cursor-pointer" style={{color: 'red'}} onClick={async () => {
                                    await deleteShop(shop.content.id).then(async (res) => {
                                        await fetchShops();
                                    });
                                }}></i>
                            </div>
                        </div>
                    ))}
                    </>
                )}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={props.handleClose}>
                    Zrozumiano!
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(LocateShopsModal);
// export default LocateShopsModal;