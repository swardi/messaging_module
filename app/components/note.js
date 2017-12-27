import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import NoteControls from "./noteControls";
import { createFragmentContainer,  graphql, commitMutation } from 'react-relay'
import editNoteMutation from "../mutations/editNote";

class Note extends Component {
  
  commitEdit() {
    return commitMutation(
      this.props.relay.environment,
      {
        mutation:editNoteMutation,
        variables: {
          id: this.props.note.id,
          noteText: this.state.noteTextInEditMode
        }
      }
    );
  }

  constructor(props) {
    super(props);
    this.state = {isEditable: false, noteTextInEditMode: this.props.note.noteText};
  }

  editNote(){
     this.setState({ isEditable: true });
  }

  handleChange(event) {
    this.setState({noteTextInEditMode: event.target.value})
  }

  handleKeypress (event){
      if (event.key === 'Enter'){
        this.commitEdit();
        this.setState({ isEditable: false });
      }
      
  }


  render() {
    console.log("render called again");
    return (
           <Row md={12} className="underlined-row">
             <Col md={1} >
                SM
              </Col>
             <Col md={7} > 
                {this.state.isEditable ? <input type='text' value={this.state.noteTextInEditMode} autoFocus onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeypress.bind(this)}/> : this.props.note.noteText }
             
              </Col>
            <NoteControls note={this.props.note} editNote={this.editNote.bind(this)}/>
            <Row className="pull-right timestamp">{this.props.note.timeStamp}</Row>
           </Row>     

      );
  }
}

export default createFragmentContainer(Note, {
  note: graphql`
    fragment note_note on Note {
      id
      noteText
      timeStamp
      author
      ...noteControls_note
      }
  `,
});
