import React from 'react';
import {Button, Navbar, Alignment} from "@blueprintjs/core";
import './Header.css';
import {useDispatch} from "react-redux";
import {addDefaultCard} from "../../reducers/groups/groupsSlice";
import store from "../../app/store";


function Header() {
    const dispatch = useDispatch();
    return (
        <header>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>React TODO app</Navbar.Heading>
                    <Navbar.Divider/>
                    <Button className="bp3-minimal" icon="add"
                            onClick={() => dispatch(addDefaultCard(store.getState()))}
                            text="Add Group"/>
                </Navbar.Group>
            </Navbar>
        </header>
    );
}

export default Header;