import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import NoteControls from "./noteControls";
import { createFragmentContainer,  graphql } from 'react-relay'

class Note extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {showEditable: false};
  }


  editNote(){
     this.setState({ showEditable: true });
  }

  render() {
    return (
           <Row md={12} className="underlined-row">
             <Col md={1} >
                SM
              </Col>
             <Col md={7} >
                {this.state.showEditable ? <input type='text'  /> : this.props.note.noteText }
             
              </Col>
            <NoteControls note={this.props.note} editNote={this.editNote}/>
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
