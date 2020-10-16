import React from 'react';
import {Button, Navbar, Alignment} from "@blueprintjs/core";
import './Header.css';

function Header() {
    return (
        <header>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Blueprint</Navbar.Heading>
                    <Navbar.Divider />
                    <Button className="bp3-minimal" icon="home" text="Hello" />
                    <Button className="bp3-minimal" icon="document" text="World" />
                </Navbar.Group>
            </Navbar>
        </header>
    );
}

export default Header;