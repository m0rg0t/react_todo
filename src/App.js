import React from 'react';
import Header from "components/header";

/**************** styles *************/
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import Groups from 'components/groups/Groups';
import './App.css';
/*************************************/



function App() {
  return (
    <div className="App">
      <Header/>
      <main>
          <Groups />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
