const deleteNoteMutation = graphql`
    mutation deleteNoteMutation($id: ID!){
    deleteNote(id : $id) {
      id
      noteText
    }
}`;

export default deleteNoteMutation;