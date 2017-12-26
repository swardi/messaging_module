/**
 * @flow
 * @relayHash 2baefbaaa2f53204695675454a10d78c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type editNoteMutationVariables = {|
  id: string;
  input: {
    noteText?: ?string;
    timeStamp?: ?string;
    author?: ?string;
  };
|};
export type editNoteMutationResponse = {|
  +updateNote: ?{|
    +id: string;
  |};
|};
*/


/*
mutation editNoteMutation(
  $id: ID!
  $input: NoteInput!
) {
  updateNote(id: $id, input: $input) {
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "NoteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "editNoteMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          },
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "NoteInput"
          }
        ],
        "concreteType": "Note",
        "name": "updateNote",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "editNoteMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "NoteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "editNoteMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          },
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "NoteInput"
          }
        ],
        "concreteType": "Note",
        "name": "updateNote",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation editNoteMutation(\n  $id: ID!\n  $input: NoteInput!\n) {\n  updateNote(id: $id, input: $input) {\n    id\n  }\n}\n"
};

module.exports = batch;
