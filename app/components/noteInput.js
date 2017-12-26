import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import myEnvironment from  "../environment"
import {graphql, commitMutation} from 'react-relay';
import createNoteMutation from "../mutations/createNote";

function commitCreateNote(noteText, author, timeStamp) {
  return commitMutation(
    myEnvironment,
    {
      mutation: createNoteMutation,
      variables: {
        input: {noteText: noteText, author: author, timeStamp: timeStamp},
      },
      onCompleted: (response, errors)=>{
        
      },
      updater : (store, data) => {
        
      }
    }
  );
}

export default class NoteInput extends Component {

  constructor(props) {
    super(props);
    this.state = {noteText: ''};
  }

  handleChange(event) {
    this.setState({noteText: event.target.value})
  }

  handleKeypress (event){
      if (event.key === 'Enter'){
        commitCreateNote( this.state.noteText, "SH", "23234" )      
       // this.setState({noteText:''});
      }
      
  }

  render() {
    
    return (
          <span> 
              <FormGroup controlId="email" bsSize="large">
                <FormControl 
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
 