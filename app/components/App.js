import React from 'react'; 
import {Panel} from "react-bootstrap";
import {QueryRenderer, graphql } from 'react-relay'

import myEnvironment from  "../environment"
import Notes from "./notes";

import "./notes.css";

import {installRelayDevTools} from 'relay-devtools';
installRelayDevTools();

const AppAllNotesQuery = graphql`
  query AppAllNotesQuery {
    viewer {
      ...notes_viewer
    }
  }
`

export default class App extends React.Component {
  render() {
     return (
      <QueryRenderer
      environment={myEnvironment}
      query={AppAllNotesQuery}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
         return  <div >
            <h3>Demo notepad</h3>
              <Panel header="My Notes" bsStyle="primary">
              <Notes viewer={props.viewer}/>
              
          </Panel>
         </div>
        }
        return <div>Loading</div>
      }}
    />
  )
  }
}