import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";

export default class NoteControls extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
          <Col md={4}  >
           <button className="fa fa-edit button-bar">  </button>
           <button  className="fa fa-remove button-bar">  </button>
          </Col>     
    );
  }
}