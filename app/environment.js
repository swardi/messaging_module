import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

const myEnvironment = new Environment({
  network: Network.create((operation, variables) => {
  return fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}),
  store: new Store(new RecordSource()),
});


export default myEnvironment;