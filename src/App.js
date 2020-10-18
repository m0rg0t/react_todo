import React from 'react';
import Header from "components/header";

/**************** styles *************/
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import './App.css';
import {add, selectAllGroups} from "reducers/groups/groupsSlice";
import {Button} from "@blueprintjs/core";
import {useDispatch, useSelector} from "react-redux";
import GroupModel from "models/GroupModel";
import Groups from 'components/groups/Groups';
/*************************************/



function App() {
    const dispatch = useDispatch();
    const allGroups = useSelector(selectAllGroups);

  return (
    <div className="App">
      <Header/>
      <main>
          <Button text={"Add new group"} onClick={() => dispatch(
              add(
                  (new GroupModel('someName1')).toJSON()
              )
          )} />
          <Groups />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
