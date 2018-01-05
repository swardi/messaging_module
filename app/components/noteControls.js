import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import { createFragmentContainer,  graphql,  commitMutation } from 'react-relay'
import DeleteNoteMutation from "../mutations/deleteNote";
import {ConnectionHandler} from 'relay-runtime';
import myEnvironment from  "../environment"

export default class NoteControls extends React.Component {

  deleteNote(){
    DeleteNoteMutation(this.props.note.id, "viewer-fixed");
  }

  render() {
    return (
         <Col md={4}  >
            <button 
              className="fa fa-edit button-bar" 
              onClick={this.props.editNote}>  
            </button>
            
            <button  className="fa fa-remove button-bar" onClick={this.deleteNote.bind(this)}>  </button>
        </Col>     
      );
  }
}
