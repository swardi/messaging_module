import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import NoteControls from "./noteControls";
import { createFragmentContainer,  graphql, commitMutation } from 'react-relay'
import EditNoteMutation from "../mutations/editNote";

class Note extends Component {
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
        EditNoteMutation(this.props.note, this.state.noteTextInEditMode, "viewer-fixed")
        this.setState({ isEditable: false });
      }    
  }

  render() {
    return (
           <Row md={12} className="underlined-row">
             <Col md={1} >
                {this.props.note.author}
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

export default createFragmentContainer(Note, graphql`
  fragment note_viewer on Viewer {
    id
  }
  fragment note_note on Note {
    id
    noteText
    author
    timeStamp
  }
`)
