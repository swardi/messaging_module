const editNoteMutation = graphql`
    mutation editNoteMutation($id: ID!, $noteText: String!) {
      updateNote(id: $id, noteText:$noteText){
        id
      }
}`;

export default editNoteMutation;