import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import myEnvironment from  "../environment"
import deleteNoteMutation from "../mutations/deleteNote";

import {graphql, commitMutation} from 'react-relay';

function commitDelete(id) {
  return commitMutation(
    myEnvironment,
    {
      deleteNoteMutation,
      variables: {
        id: id,
      }
    }
  );
}


export default class NoteControls extends Component {

  constructor(props) {
    super(props);
  }

  deleteNote(){
    commitDelete(this.props.note.id)      
  }

  editNote(){
    console.log("edit note");
  }
  render() {
    
    return (
          <Col md={4}  >
           <button className="fa fa-edit button-bar" onClick={this.editNote.bind(this)}>  </button>
           <button  className="fa fa-remove button-bar" onClick={this.deleteNote.bind(this)}>  </button>
          </Col>     
    );
  }
}