import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../environment'
import {ConnectionHandler} from 'relay-runtime'

const mutation = graphql`
    mutation editNoteMutation($input: UpdateNoteInput!) {
      updateNote(input:$input){
        note{
          id
          noteText
          timeStamp
          author
        }
      }
      }`;


export default function EditNoteMutation(note, noteText, viewerId) {
  const variables = {
    input: {
      id: note.id,
      noteText: noteText,
      author: note.author,
      timeStamp : note.timeStamp,
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
        store.get(note.id).setValue("noteText", noteText);
      }
    },
  )
}

