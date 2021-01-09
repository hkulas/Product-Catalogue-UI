import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function SingleItem(props) {
    const [index, setIndex] = useState(0);
    const { selectedProduct } = useSelector(state => state);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const Photos = selectedProduct ? selectedProduct.photosUrls.map((url, index) => {
        return (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={url}
                    alt={url}
                />
                <Carousel.Caption>
                    <h3>Zdjęcie {index + 1}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        )
    }) : null;

    let OtherParams = [];
    if (selectedProduct) {
        for (const [key, value] of Object.entries(selectedProduct.otherParameters)) {
            OtherParams.push((
                <div className="row">
                    <div className="col-12">
                        <span><strong>{key}</strong>: {value}</span>
                    </div>
                </div>
            ))
        }
    }

    return (
        <div className="container mt-4">
            {selectedProduct && (
                <>
                    <h2 className="font-weight-bold">{selectedProduct.name}</h2>
                    <h4>{selectedProduct.manufacturer}</h4>
                    <div className="row">
                        <div className="col-4">
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                {Photos}
                            </Carousel>
                        </div>
                        <div className="col-6">
                            {selectedProduct.description && (
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <span>{selectedProduct.description}</span>
                                    </div>
                                </div>

                            )}
                            {OtherParams}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default SingleItem;