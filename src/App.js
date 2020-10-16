import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from "./components/header";

/**************** styles *************/
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import './App.css';
import TodoGroup from './components/todoGroup';
/*************************************/

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <TodoGroup/>
        <Counter />        
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
