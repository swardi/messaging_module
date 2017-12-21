import React, { Component } from "react";
import {ListGroup, ListGroupItem, Grid} from "react-bootstrap"
import Note from "./note";

export default class NotesList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
          <div className="notes-list slimscrollbar">

            <ListGroup >
               <Note /> 
               <Note /> 
               <Note /> <Note /> 
               <Note /> 
               <Note /> <Note /> 
               <Note /> 
               <Note /> 
            </ListGroup>
            
            
          </div>     
    );
  }
}