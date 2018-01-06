import React, { Component } from "react";
import {ListGroup, ListGroupItem, Grid} from "react-bootstrap"
import { createFragmentContainer,   graphql } from 'react-relay'

import Note from "./note";
import NoteCount from "./noteCount";
import NoteInput from "./noteInput";


class Notes extends React.Component {

  render() {
    return (
        <div>
          <NoteCount count={this.props.viewer.allNotes.edges.length}/>
          <div className="notes-list slimscrollbar">
            <ListGroup >
              {
                this.props.viewer.allNotes.edges.map(({node}, index)=> (
                  <Note note={node} key={node.id} viewer={this.props.viewer}/>
                ) )
              }
               
           </ListGroup>            
        </div>
        <NoteInput viewer={this.props.viewer}/>
      </div>
    );
  }
}

export default createFragmentContainer(Notes, graphql`
  fragment notes_viewer on Viewer {
    ...note_viewer
    allNotes(last: 100) @connection(key: "notes_allNotes", filters: []) {
      edges {
        node {
          id
          noteText
          author
          timeStamp
          ...note_note
        }
      }
    }
  }
`)
