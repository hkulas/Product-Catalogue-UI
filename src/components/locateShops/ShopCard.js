import React from 'react';
import { Card } from 'react-bootstrap';

function ShopCard(props) {
    const { name, address, distance } = props;

    const distanceToLabel = () => {
        if (distance < 1) {
            return (distance * 1000).toFixed(0) + 'm'
        } else {
            return distance.toFixed(2) + 'km'
        }
    }

    return (
        <div className="col-12 mt-2">
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {address}
                    </Card.Text>
                    <Card.Text>
                        {distanceToLabel()} od Ciebie
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ShopCard;