import React, { Component } from "react";
import {ListGroup, ListGroupItem, Grid} from "react-bootstrap"
import { createFragmentContainer,  QueryRenderer, graphql } from 'react-relay'

import Note from "./note";
import NoteCount from "./noteCount";
import myEnvironment from  "../environment"



class Notes extends React.Component {

  render() {
    console.log(this.props);
    return (
            <div>
            <NoteCount count={this.props.notes.length}/>
            <div className="notes-list slimscrollbar">
              <ListGroup >
                {
                  this.props.notes.map(note=> (
                    <Note note={note} key={note.id}/>   
                  ) )
                }
                 
             </ListGroup>            
            
          </div>
          
          </div>

      );
  }
}

export default createFragmentContainer(Notes, {
  notes: graphql`
    fragment notes_notes on Note {
      noteText
      timeStamp
      author
      }
  `,
});







// import React, { Component } from "react";
// import {ListGroup, ListGroupItem, Grid} from "react-bootstrap"
// import { createFragmentContainer,  QueryRenderer, graphql } from 'react-relay'

// import Note from "./note";
// import NoteCount from "./noteCount";
// import myEnvironment from  "../environment"

// export default class Notes extends React.Component {

//   render() {
//     return (
//       <QueryRenderer
//         environment={myEnvironment}
//         query={graphql`query notesQuery{
//                 getNotes{
//                   id
//                   noteText
//                   author
//                   timeStamp
//                 }}`}

//         variables={{}}

//         render={({error, props}) => {
//           console.log(props)
//           if (error) {
//             return <div>Error!</div>;
//           }
//           if (!props) {
//             return <div>Loading...</div>;
//           }
//           return (
//             <div>
//             <NoteCount count={props.getNotes.length}/>
//             <div className="notes-list slimscrollbar">
//               <ListGroup >
//                 {
//                   props.getNotes.map(note=> (
//                     <Note note={note} key={note.id}/>   
//                   ) )
//                 }
                 
//              </ListGroup>            
            
//           </div>
//           </div>
//           );
//         }}
//       />
//       );
//   }
// }

//  createFragmentContainer(Notes, {
//   notes: graphql`
//     fragment notes_notes on Note {
//       noteText
//       timeStamp
//       author
//       }
//   `,
// });