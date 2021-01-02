import React, { useState } from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import LocateShopsModal from '../locateShops/LocateShopsModal';

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer(props) {
    const [showModal, setShowModal] = useState(true);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
        <Navbar sticky='bottom' className="mt-4" bg="dark" variant="dark">
            <Container>
                <Navbar.Collapse className="justify-content-start">
                    <Navbar.Text>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-white mb-4"><i class="icon-question-sign"></i> Pomoc</h3>
                                <p className="cursor-pointer">Przesyłki</p>
                                <p className="cursor-pointer">Tabela rozmiarów</p>
                                <p className="cursor-pointer">Reklamacje</p>
                                <p className="cursor-pointer">Newsletter</p>
                            </div>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-white mb-4"><i class="icon-headphones"></i> Obsługa klienta</h3>
                                <p className="cursor-pointer" onClick={toggleModal}>Zlokalizuj sklep!</p>
                                <p className="cursor-pointer">FAQ</p>
                                <p className="cursor-pointer">Czas realizacji zamówienia</p>
                                <p className="cursor-pointer">Karty podarunkowe</p>
                            </div>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-white mb-4"><i class="icon-info-sign"></i> Informacje</h3>
                                <p className="cursor-pointer">Regulamin</p>
                                <p className="cursor-pointer">Polityka prywatności</p>
                                <p className="cursor-pointer">Dane firmy</p>
                                <p className="cursor-pointer">Współpraca</p>
                            </div>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <LocateShopsModal show={showModal} handleClose={toggleModal} />
        </>
    );
}

export default Footer;