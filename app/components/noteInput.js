import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import {graphql, commitMutation, createFragmentContainer} from 'react-relay';
import createNoteMutation from "../mutations/createNote";

class NoteInput extends Component {

  constructor(props) {
    super(props);
    this.state = {noteText: ''};
  }

  commitCreateNote(noteText, author, timeStamp) {
    var self=this;
    return commitMutation(
      self.props.relay.environment,
      {
        mutation: createNoteMutation,
        variables: {
          input: {noteText: noteText, author: author, timeStamp: timeStamp},
        },
        onCompleted: (response, errors)=>{
          self.setState({noteText: ''})
        },
        updater: (store) => {
          const payload = store.getRootField('createNote');
          const record = store.create(payload.getValue('id'), 'Note');
          console.log(payload);
        },
        
      }
    );
}

  handleChange(event) {
    this.setState({noteText: event.target.value})
  }

  handleKeypress (event){
      if (event.key === 'Enter'){
        this.commitCreateNote( this.state.noteText, "SH", "23234" )      
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
 

 export default createFragmentContainer(NoteInput, {
  author: graphql`
    fragment noteInput_author on Note {
      author
      }
  `,
});
