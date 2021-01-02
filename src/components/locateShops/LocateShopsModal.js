import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { geolocated } from 'react-geolocated';
import { getNearShops } from '../../api/getNearShops';
import ShopCard from './ShopCard';

function LocateShopsModal(props) {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getNearShops(props.coords.latitude, props.coords.longitude).then(res => {
                setShops(res.data.content);
            })
        }

        if (props.coords && props.show) {
            fetchData();
        }
    }, [props.coords, props.show]);

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Nasze sklepy</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <p>Oto lista naszych sklepów najbliżej Ciebie:</p>
                
                {shops && (
                    <>
                    {shops.slice(0, 10).map(shop => (
                        <ShopCard name={shop.content.id} address={shop.content.address} distance={shop.distance.value} />
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