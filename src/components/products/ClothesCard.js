import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Routings from '../../constants/routings';

function ClothesCard(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { manufacturer, name, photosUrls } = props.item;

    const selectProduct = () => {
        dispatch({
            type: 'SELECT_PRODUCT',
            payload: props.item
        });
        history.push(Routings.ITEM + props.item._id.date);
    }

    return (
        <div className="col-xl-2 col-lg-3 col-sm-4 col-6 mt-4">
            <Card onClick={selectProduct} className="cursor-pointer">
                <Card.Img variant="top" src={photosUrls[0]} />
                <Card.Body>
                    <Card.Title>{manufacturer}</Card.Title>
                    <Card.Text>
                        {name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ClothesCard;