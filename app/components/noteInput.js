import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import {graphql, QueryRenderer, commitMutation, createFragmentContainer} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';

import CreateNoteMutation from "../mutations/createNote";
import myEnvironment from  "../environment"

export default class NoteInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {noteText: ''};  
  }

  handleChange(event) {
    this.setState({noteText: event.target.value})
  }

  handleKeypress (event){
      if (event.key === 'Enter'){
        var date = new Date();
        var timeStamp = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes();
        CreateNoteMutation(this.state.noteText,  timeStamp, "SH", "viewer-fixed", () => this.setState({noteText: ''})  );
      }
      
  }

  render() {
    
    return (
          <span> 
              <FormGroup bsSize="large">
                <FormControl 
                  id="notesInputTextArea"
                  componentClass="textarea" 
                  placeholder="Enter your note" 
                  autoFocus 
                  value={this.state.noteText}
                  onChange={this.handleChange.bind(this)}
                  onKeyPress={this.handleKeypress.bind(this)}> 
              </FormControl>
              </FormGroup> 
          </span>     
    );
  }

}

