import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";

export default class NoteCount extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return ( 
           <Row >
             <Col   md={12} >
                {this.props.count} Items
              </Col> 
           </Row>     
    );
  }
}