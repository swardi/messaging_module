import React, { Component } from "react";
import {ListGroup, ListGroupItem, Grid} from "react-bootstrap"
import { createFragmentContainer,  QueryRenderer, graphql } from 'react-relay'

import Note from "./note";
import NoteCount from "./noteCount";
import NoteInput from "./noteInput";
import myEnvironment from  "../environment"

export default class Notes extends React.Component {

  render() {
    return (
      <QueryRenderer
        environment={myEnvironment}
        query={graphql`query notesQuery{
                getNotes{
                  id
                  ...note_note
                  ...noteInput_author
                }}`}

        variables={{}}

        render={({error, props}) => {
          if (error) {
            return <div>Error in loading notes!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <div>
            <NoteCount count={props.getNotes.length}/>
            <div className="notes-list slimscrollbar">
              <ListGroup >
                {
                  props.getNotes.map(note=> (
                    <Note note={note} key={note.id}/>   
                  ) )
                }
                 
             </ListGroup>            
            
          </div>
          <NoteInput />
          </div>
          );
        }}
      />
      );
  }
}