import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from "./components/header";

/**************** styles *************/
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import './App.css';
import TodoGroup from './components/todoGroup';
import {add} from "./reducers/groups/groupsSlice";
import {Button} from "@blueprintjs/core";
import {useDispatch} from "react-redux";
import GroupModel from "./models/GroupModel";
/*************************************/

function App() {
    const dispatch = useDispatch();

  return (
    <div className="App">
      <Header/>
      <main>
          <Button text={"Add new group"} onClick={() => dispatch(add(new GroupModel('someName1')))} />
        <TodoGroup/>
        <Counter />        
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
