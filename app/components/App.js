// import React from 'react'; 
// import {Panel} from "react-bootstrap";
// import Notes from "./notes";
// import NoteInput from "./noteInput";

// import "./notes.css";
// import {installRelayDevTools} from 'relay-devtools';
// installRelayDevTools();
// export default class App extends React.Component {
//   render() {
//     return (
//      <div >
//         <h3>Demo notepad</h3>
// 	        <Panel header="My Notes" bsStyle="primary">
//           <Notes />
//           <NoteInput />
// 	    </Panel>
//      </div>
//       );
//   }
// }


import React, { Component } from "react";
import { createFragmentContainer,  QueryRenderer, graphql } from 'react-relay'

import myEnvironment from  "../environment"
import {Panel} from "react-bootstrap"

import Notes from "./notes";
import NoteInput from "./noteInput";


export default class App extends React.Component {

  render() {
    return (
      <QueryRenderer
        environment={myEnvironment}
        query={graphql`query AppQuery{
                author }`}

        variables={{}}

        render={({error, props}) => {
          console.log(props)
          if (error) {
            return <div>Cannot load author!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          console.log(props);
          console.log("#####################");
          return (
           <div >
              <h3>Demo notepad</h3>
               <Panel header="My Notes" bsStyle="primary">
                <Notes author={props.author}/>
                <NoteInput />
           </Panel>
           </div>
          );
        }}
      />
      );
  }
}