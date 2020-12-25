import React from 'react';
import { Card } from 'react-bootstrap';

function ClothesCard(props) {
    const { manufacturer, productName, photoUrl } = props;

    return (
        <div className="col-xl-2 col-lg-3 col-sm-4 col-6 mt-4">
            <Card>
                <Card.Img variant="top" src={photoUrl} />
                <Card.Body>
                    <Card.Title>{manufacturer}</Card.Title>
                    <Card.Text>
                        {productName}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ClothesCard;