import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import { createFragmentContainer,  graphql,  commitMutation } from 'react-relay'
import deleteNoteMutation from "../mutations/deleteNote";

class NoteControls extends React.Component {
  
  commitDelete() {
    return commitMutation(
      this.props.relay.environment,
      {
        mutation:deleteNoteMutation,
        variables: {
          id: this.props.note.id,
        },
        optimisticUpdater : store => {
            var notes=store.getRoot().getLinkedRecords("getNotes");

            ConnectionHandler.deleteNode(notes, this.props.note.id);

        },
        updater: (store, data) =>{

        }
      }
    );
  }

  deleteNote(){
    this.commitDelete()      
  }

  render() {
    return (
           <Col md={4}  >
              <button 
                className="fa fa-edit button-bar" 
                onClick={this.props.editNote.bind(this)}>  
              </button>
              
              <button  className="fa fa-remove button-bar" onClick={this.deleteNote.bind(this)}>  </button>
          </Col>     
      );
  }
}

export default createFragmentContainer(NoteControls, {
  note: graphql`
    fragment noteControls_note on Note {
      id
      noteText
      }
  `,
});
