import React from 'react';
import {Button, Navbar, Alignment} from "@blueprintjs/core";
import './Header.css';
import {useDispatch} from "react-redux";
import {add} from "reducers/groups/groupsSlice";
import GroupModel from "models/GroupModel";
import {addDefaultCard} from "../../reducers/groups/groupsSlice";

function Header() {
    const dispatch = useDispatch();
    return (
        <header>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>React TODO app</Navbar.Heading>
                    <Navbar.Divider/>
                    <Button className="bp3-minimal" icon="add"
                            onClick={() => dispatch(addDefaultCard())}
                            text="Add Group"/>
                    {/*<Button className="bp3-minimal" icon="document" text="World" />*/}
                </Navbar.Group>
            </Navbar>
        </header>
    );
}

export default Header;