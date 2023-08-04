import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{height: "60px"}}>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
