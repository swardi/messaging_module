
const createNoteMutation = graphql`
  mutation createNoteMutation($input: NoteInput!) {
      createNote(input:$input){
        id
      }
  }
`;

export default createNoteMutation;