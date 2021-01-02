import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createProduct } from '../../api/createProduct';

function AddProduct(props) {
    const [name, setName] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [additionalInputs, setAdditionalInputs] = useState([]);
    const [additionalTextAreas, setAdditionalTextAreas] = useState([]);
    const [photoUrls, setPhotoUrls] = useState([]);

    const addUrl = () => {
        const currentUrls = [...photoUrls];
        currentUrls.push('');
        setPhotoUrls(currentUrls);
    }

    const updateUrl = (newValue, index) => {
        const currentUrls = [...photoUrls];
        currentUrls[index] = newValue
        setPhotoUrls(currentUrls);
    }

    const removeUrl = (index) => {
        let currentUrls = [...photoUrls];
        currentUrls.splice(index, 1);
        setPhotoUrls(currentUrls);
    }

    const appendInput = () => {
        const currentInputs = [...additionalInputs];
        currentInputs.push({name: '', value: ''});
        setAdditionalInputs(currentInputs);
    }

    const appendTextArea = () => {
        const currentTextAreas = [...additionalTextAreas];
        currentTextAreas.push({name: '', value: ''});
        setAdditionalTextAreas(currentTextAreas);
    }

    const updateAdditionalField = (newValue, type, toChange, index) => {
        let currentFields, updateFunction;

        switch (type) {
            case 'textarea':
                currentFields = [...additionalTextAreas];
                updateFunction = setAdditionalTextAreas;
                break;
            case 'input':
                currentFields = [...additionalInputs];
                updateFunction = setAdditionalInputs;
                break;
            default:
                console.log('Something went wrong.');
        }

        if (toChange === 'name') {
            currentFields[index].name = newValue;
        } else {
            currentFields[index].value = newValue;
        }

        updateFunction(currentFields);
    }

    const removeTextArea = (index) => {
        let currentTextAreas = [...additionalTextAreas];
        currentTextAreas.splice(index, 1);
        setAdditionalTextAreas(currentTextAreas);
    }

    const removeInput = (index) => {
        let currentInputs = [...additionalInputs];
        currentInputs.splice(index, 1);
        setAdditionalInputs(currentInputs);
    }

    const onFormSubmit = async (event) => {
        event.preventDefault();

        const otherParameters = {};

        additionalInputs.forEach(input => {
            otherParameters[input.name] = input.value;
        })
        additionalTextAreas.forEach(input => {
            otherParameters[input.name] = input.value;
        })

        await createProduct(name, description, category, otherParameters, photoUrls, manufacturer)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container">
            <div className="col-6 offset-3">
                <Form onSubmit={onFormSubmit}>
                    <div className="row mt-4">
                        <div className="col-12">
                            <Form.Label>Producent</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={manufacturer} 
                                onChange={(event) => setManufacturer(event.target.value)} 
                                placeholder="Producent" 
                            />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <Form.Label>Nazwa</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={name} 
                                onChange={(event) => setName(event.target.value)} 
                                placeholder="Nazwa produktu" 
                            />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <Form.Label>Kategoria produktu</Form.Label>
                            <Form.Control 
                                as="select"
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                            >
                                <option value='tshirt'>Koszulka</option>
                                <option value='hoodie'>Bluza</option>
                                <option value='trousers'>Spodnie</option>
                                <option value='shirt'>Koszula</option>
                                <option value='underwear'>Bielizna</option>
                                <option value='sportShoes'>Obuwie sportowe</option>
                                <option value='boots'>Półbuty</option>
                                <option value='elegantShoes'>Obuwie eleganckie</option>
                                <option value='flipFlop'>Klapk</option>
                                <option value='backpack'>Plecak</option>
                                <option value='hat'>Czapka</option>
                                <option value='watch'>Zegarek</option>
                                <option value='belt'>Pasek</option>
                            </Form.Control>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <Form.Label>Opis produktu</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3}
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            Linki do zdjęć
                        </div>
                    </div>
                    {photoUrls.map((url, index) => (
                        <>
                        <div className="row mt-4">
                            <div className="col-10">
                                <Form.Control 
                                    type="text" 
                                    value={url} 
                                    onChange={(event) => updateUrl(event.target.value, index)} 
                                />
                            </div>
                            <div className="col-2">
                                <Button variant="danger" type='button' onClick={() => removeUrl(index)}>Usuń</Button>
                            </div>
                        </div>
                        </>
                    ))}
                    <div className="row mt-4">
                        <div className="col-12">
                            <Button variant="dark" type='button' onClick={addUrl}>+ Link</Button>
                        </div>
                    </div>
                    {(additionalInputs && additionalInputs.length > 0 || additionalTextAreas && additionalTextAreas.length > 0) && (
                        <>
                        <div className="row mt-2">
                            <div className="col-5 text-center">
                                Nazwa pola
                            </div>
                            <div className="col-5 text-center">
                                Wartość
                            </div>
                        </div>
                        {additionalInputs.map((input, index) => (
                            <div className="row mt-4">
                                <div className="col-5">
                                    <Form.Control
                                        type="text"
                                        key={`inputname${index}`} 
                                        value={input.name}
                                        onChange={(event) => updateAdditionalField(event.target.value, 'input', 'name', index)} 
                                    />
                                </div>
                                <div className="col-5">
                                    <Form.Control 
                                        type="text"
                                        key={`inputvalue${index}`}
                                        value={input.value}
                                        onChange={(event) => updateAdditionalField(event.target.value, 'input', 'value', index)} 
                                    />
                                </div>
                                <div className="col-2">
                                    <Button variant="danger" type='button' onClick={() => removeInput(index)}>Usuń</Button>
                                </div>
                            </div>
                        ))}
                        {additionalTextAreas.map((textArea, index) => (
                            <div className="row mt-4">
                                <div className="col-5">
                                    <Form.Control 
                                        type="text" 
                                        key={`textareaname${index}`}
                                        value={textArea.name}
                                        onChange={(event) => updateAdditionalField(event.target.value, 'textarea', 'name', index)} 
                                    />
                                </div>
                                <div className="col-5">
                                    <Form.Control 
                                        as="textarea" 
                                        rows={3} 
                                        key={`textareavalue${index}`}
                                        value={textArea.value}
                                        onChange={(event) => updateAdditionalField(event.target.value, 'textarea', 'value', index)} 
                                    />
                                </div>
                                <div className="col-2">
                                    <Button variant="danger" type='button' onClick={() => removeTextArea(index)}>Usuń</Button>
                                </div>
                            </div>
                        ))}
                        </>
                    )}
                    <div className="row mt-4">
                        <div className="col-12">
                            <Button variant="dark" type='button' onClick={appendInput}>+ Małe pole</Button>
                            <Button variant="dark" type='button' onClick={appendTextArea}>+ Duże pole</Button>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12 text-right">
                            <Button variant="success" type='submit'>Dodaj produkt</Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default AddProduct;