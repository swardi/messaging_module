import React from 'react'; 
import {Panel} from "react-bootstrap";

import NotesList from "./notesList"
import NoteInput from "./noteInput"
import "./notes.css";

export default class App extends React.Component {
  render() {
    return (
     <div >
        <h3>Demo notepad</h3>

      
	    <Panel header="My Notes" bsStyle="primary">
	      <NotesList />
          <NoteInput />
	    </Panel>
     </div>
      );
  }
}

