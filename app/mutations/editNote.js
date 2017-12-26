const editNoteMutation = graphql`
    mutation editNoteMutation($id: ID!, $input: NoteInput!) {
      updateNote(id: $id, input:$input){
        id
      }
}`;

export default editNoteMutation;