const deleteNoteMutation = graphql`
    mutation deleteNoteMutation($id: ID!){
    deleteNote(id : $id) {
      id
    }
}`;

export default deleteNoteMutation;