/**
 * @flow
 * @relayHash 4bdf0ef537db31388dbf259dfb16dee5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type editNoteMutationVariables = {|
  id: string;
  noteText: string;
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
  $noteText: String!
) {
  updateNote(id: $id, noteText: $noteText) {
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
        "name": "noteText",
        "type": "String!",
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
            "name": "noteText",
            "variableName": "noteText",
            "type": "String!"
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
        "name": "noteText",
        "type": "String!",
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
            "name": "noteText",
            "variableName": "noteText",
            "type": "String!"
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
  "text": "mutation editNoteMutation(\n  $id: ID!\n  $noteText: String!\n) {\n  updateNote(id: $id, noteText: $noteText) {\n    id\n  }\n}\n"
};

module.exports = batch;
