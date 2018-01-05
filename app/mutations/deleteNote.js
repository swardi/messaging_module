import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../environment'
import {ConnectionHandler} from 'relay-runtime'


const mutation = graphql`
  mutation deleteNoteMutation($input: DeleteNoteInput!) {
    deleteNote(input: $input) {
      deletedId
    }
  }
`;

export default function DeleteNoteMutation(noteId, viewerId) {
  const variables = {
    input: {
      id: noteId,
      clientMutationId: ""
    },
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onError: err => console.error(err),
      updater: (store) => {
        const deletedId = store.getRootField('deleteNote').getValue('deletedId')
        const connection = ConnectionHandler.getConnection(store.get("viewer-fixed"), 'notes_allNotes')
        ConnectionHandler.deleteNode(connection, deletedId)
      }
    },
  )
}

