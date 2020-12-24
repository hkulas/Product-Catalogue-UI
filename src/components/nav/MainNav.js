import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Routings from '../constants/routings';

const MainNav = () => {
    const [searchText, setSearchText] = useState();

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <Link to={Routings.HOME} style={{color: 'inherit'}}>CiuchBazar</Link>
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Nav.Link>
                    <Link to={Routings.CLOTHING} style={{color: 'inherit'}}>Odzież</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to={Routings.SHOES} style={{color: 'inherit'}}>Obuwie</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to={Routings.ACCESSORIES} style={{color: 'inherit'}}>Akcesoria</Link>
                </Nav.Link>
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