import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";

export default class NoteInput extends Component {

  constructor(props) {
    super(props);
  }

  handleKeypress (event){
    console.log("keypress");
  }

  render() {
    
    return (
          <span> 
              <FormGroup controlId="email" bsSize="large">
                <FormControl 
                  componentClass="textarea" 
                  placeholder="Enter your note" 
                  autoFocus 
                  value=""
                  onKeyPress={this.handleKeypress.bind(this)}> 
              </FormControl>
              </FormGroup> 
          </span>     
    );
  }
}
 