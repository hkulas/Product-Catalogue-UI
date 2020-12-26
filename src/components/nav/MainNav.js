import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Routings from '../../constants/routings';

const inheritStyle = {
    color: 'inherit'
}

const MainNav = () => {
    const [searchText, setSearchText] = useState('');
    const [showClothingDropdown, setShowClothingDropdown] = useState(false);
    const [showShoesDropdown, setShowShoesDropdown] = useState(false);
    const [showAccessoriesDropdown, setShowAccessoriesDropdown] = useState(false);

    const toggleClothingDropdown = () => {
        setShowClothingDropdown(!showClothingDropdown);
    }

    const toggleShoesDropdown = () => {
        setShowShoesDropdown(!showShoesDropdown);
    }

    const toggleAccessoriesDropdown = () => {
        setShowAccessoriesDropdown(!showAccessoriesDropdown);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <Link to={Routings.HOME} style={inheritStyle}>CiuchBazar</Link>
            </Navbar.Brand>

            <Nav className="mr-auto">
                <NavDropdown title="Odzież" id="collasible-nav-dropdown"
                    onMouseEnter={toggleClothingDropdown} 
                    onMouseLeave={toggleClothingDropdown}
                    show={showClothingDropdown}
                >
                    <NavDropdown.Item>
                        <Link to={Routings.CLOTHING} style={inheritStyle}>Wszystkie Kategorie</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.CLOTHING + Routings.T_SHIRTS} style={inheritStyle}>Koszulki</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.CLOTHING + Routings.HOODIES} style={inheritStyle}>Bluzy</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.CLOTHING + Routings.TROUSERS} style={inheritStyle}>Spodnie</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.CLOTHING + Routings.SHIRTS} style={inheritStyle}>Koszule</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.CLOTHING + Routings.UNDERWEAR} style={inheritStyle}>Bielizna</Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Obuwie" id="collasible-nav-dropdown"
                    onMouseEnter={toggleShoesDropdown} 
                    onMouseLeave={toggleShoesDropdown}
                    show={showShoesDropdown}
                >
                    <NavDropdown.Item>
                        <Link to={Routings.SHOES} style={inheritStyle}>Wszystkie Kategorie</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.SHOES + Routings.SPORT_SHOES} style={inheritStyle}>Obuwie sportowe</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.SHOES + Routings.BOOTS} style={inheritStyle}>Półbuty</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.SHOES + Routings.ELEGANT_SHOES} style={inheritStyle}>Obuwie eleganckie</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.SHOES + Routings.FLIP_FLOPS} style={inheritStyle}>Klapi</Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Akcesoria" id="collasible-nav-dropdown"
                    onMouseEnter={toggleAccessoriesDropdown} 
                    onMouseLeave={toggleAccessoriesDropdown}
                    show={showAccessoriesDropdown}
                >
                    <NavDropdown.Item>
                        <Link to={Routings.ACCESSORIES} style={inheritStyle}>Wszystkie Kategorie</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.ACCESSORIES + Routings.BACKPACKS} style={inheritStyle}>Plecaki</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.ACCESSORIES + Routings.HATS} style={inheritStyle}>Czapki</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.ACCESSORIES + Routings.WATCHES} style={inheritStyle}>Zegarki</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link to={Routings.ACCESSORIES + Routings.BELTS} style={inheritStyle}>Paski</Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
            <Form inline onSubmit={(event) => {
                event.preventDefault();
                console.log('Request do bazy z wyszukaniem produktu: ' + searchText);
            }}>
                <FormControl 
                    type="text" 
                    placeholder="Wpisz nazwę produktu..." 
                    value={searchText}
                    onChange={(newValue) => setSearchText(newValue.target.value)} 
                    className="mr-sm-2"
                />
                <Button variant="outline-info">Szukaj</Button>
            </Form>
        </Navbar>
    )
}

export default MainNav;