import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../environment'
import {ConnectionHandler} from 'relay-runtime'

const mutation = graphql`
  mutation createNoteMutation($input: CreateNoteInput!) {
      createNote(input:$input){
        note{
          id
          noteText
          timeStamp
          author

        }
      }
  }
`;

export default function CreateNoteMutation(noteText, timeStamp, author, viewerId, callback) {
  const variables = {
    input: {
      noteText,
      timeStamp,
      author,
      clientMutationId: ""
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        callback()
      },
      updater: (proxyStore) => {
        const newNote = proxyStore.getRootField('createNote').getLinkedRecord('note')
        const connection = ConnectionHandler.getConnection(proxyStore.get("viewer-fixed"), 'notes_allNotes')
        const newEdge = ConnectionHandler.createEdge(proxyStore, connection, newNote, 'NoteEdge');
        ConnectionHandler.insertEdgeAfter(connection, newEdge);
      }
    },
  )
}

