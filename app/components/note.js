import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";

import NoteControls from "./noteControls";

export default class Note extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return ( 
           <Row md={12} className="underlined-row">
             <Col md={8} >
                This is a note
              </Col>
            <NoteControls />
            <Row className="pull-right timestamp">21/12/2017 9:30</Row>
           </Row>     
    );
  }
}