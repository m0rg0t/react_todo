import React from 'react';
import {Button, Navbar, Alignment} from "@blueprintjs/core";
import './Header.css';
import {useDispatch} from "react-redux";
import {add} from "reducers/groups/groupsSlice";
import GroupModel from "models/GroupModel";

function Header() {
    const dispatch = useDispatch();
    return (
        <header>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>React TODO app</Navbar.Heading>
                    <Navbar.Divider />
                    <Button className="bp3-minimal" icon="home"
                            onClick={() => dispatch(
                                add(
                                    (new GroupModel('someName1')).toJSON()
                                )
                            )}
                            text="Add Group" />
                    {/*<Button className="bp3-minimal" icon="document" text="World" />*/}
                </Navbar.Group>
            </Navbar>
        </header>
    );
}

export default Header;