import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import {environment} from "../environment.js"
import NoteControls from "./noteControls";

export default class Note extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return ( 
           <Row md={12} className="underlined-row">
             <Col md={1} >
                SM
              </Col>
             <Col md={7} >
                {this.props.note.noteText}
              </Col>
            <NoteControls note={this.props.note}/>
            <Row className="pull-right timestamp">{this.props.note.timeStamp}</Row>
           </Row>     
    );
  }
}