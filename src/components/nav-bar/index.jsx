import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Icon from "../icon";
import Form from 'react-bootstrap/Form'
import React from "react";
import Image from '../image';

import Func from "../../functions";

const NavigationBar = () => {

    const changeTheme = (themeName) => {
        const theme = Func.getTheme();
        theme.name = themeName;
        Func.setTheme(theme);
        setTimeout(() => {
            window.location.reload();
        });
    }

    const changeDarkTheme = (isDark) => {
        const theme = Func.getTheme();
        theme.isDark = isDark;
        Func.setTheme(theme);
        setTimeout(() => {
            window.location.reload();
        });
    }

    return (<Navbar className="position-absolute w-100 border-bottom" bg="primary" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>BOOTSTRAP-THEMES</Navbar.Brand>
            <Navbar.Toggle aria-controls="app-navbar-nav" />
            <Navbar.Collapse id="app-navbar-nav">
                <Nav activeKey={window.location.pathname} className="me-auto">
                    <Nav.Link href={`${process.env.PUBLIC_URL}/`}>Home</Nav.Link>
                    <Nav.Link href={`${process.env.PUBLIC_URL}/themes`}>Themes</Nav.Link>
                    <Nav.Link href={`${process.env.PUBLIC_URL}/contact-us`}>Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            <div className="nav-dropdown">
                <DropdownButton align="end" className="py-0" id="user-settings" title={<Icon iconName="user" width="2rem" height="2rem" />}>

                    <div className="text-center m-2">
                        <Image className="rounded-circle border-2 mb-2 user-image m-auto d-block" src={`${process.env.PUBLIC_URL}/assets/img/user-image.png`} alt="user image" />
                        <div className="fw-light text-primary">Mohammad Diab</div>
                    </div>
                    <Dropdown.Divider className="mb-1" />

                    <Dropdown.Header className="px-2 py-1">USER</Dropdown.Header>
                    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                    <Dropdown.Item className="text-danger" href="#/action-2">Sign out</Dropdown.Item>

                    <Dropdown.Divider className="mb-1" />
                    <Dropdown.Header className="px-2 py-1">LANGUAGE</Dropdown.Header>
                    <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">عربي</Dropdown.Item>

                    <Dropdown.Divider className="mb-1" />
                    <Dropdown.Header className="px-2 py-1">DISPLAY</Dropdown.Header>
                    <Dropdown.Item onClick={() => { changeTheme('A') }}>
                        <div style={{
                            display: 'inline-block',
                            borderRadius: '0.3rem',
                            backgroundColor: '#0b5ed7',
                            border: '1px solid #dee2e6',
                            width: '1.5rem',
                            height: '1.5rem',
                            verticalAlign: 'middle',
                        }}>
                        </div>
                        <div style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            margin: '0 .5rem',
                        }}>Theme A</div>
                    </Dropdown.Item>

                    <Dropdown.Item onClick={() => { changeTheme('B') }}>
                        <div style={{
                            display: 'inline-block',
                            borderRadius: '0',
                            backgroundColor: '#00bfa5',
                            border: '1px solid #dee2e6',
                            width: '1.5rem',
                            height: '1.5rem',
                            verticalAlign: 'middle',
                        }}>
                        </div>
                        <div style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            margin: '0 .5rem',
                        }}>Theme B</div>
                    </Dropdown.Item>

                    <Form.Check className="py-1 mt-2 bg-dark text-light" style={{
                        borderLeft: 'solid 1rem rgba(0, 0, 0, .0)',
                        borderRight: 'solid 1rem rgba(0, 0, 0, .0)'
                    }} type="switch" id="dark-theme" label="Dark theme" checked={Func.getTheme().isDark} onChange={(e) => { changeDarkTheme(e.target.checked) }} />
                </DropdownButton>
            </div>

        </Container>
    </Navbar>);
}

export default NavigationBar;