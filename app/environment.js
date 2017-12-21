import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

function fetchQuery(operation, variables) {
  console.log("fetching"); 
}

export default const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});
