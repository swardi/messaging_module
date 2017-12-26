/**
 * @flow
 * @relayHash bf5d0bda3f514f0dda8cd0f94a68fae6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type createNoteMutationVariables = {|
  input: {
    noteText?: ?string;
    timeStamp?: ?string;
    author?: ?string;
  };
|};
export type createNoteMutationResponse = {|
  +createNote: ?{|
    +id: string;
  |};
|};
*/


/*
mutation createNoteMutation(
  $input: NoteInput!
) {
  createNote(input: $input) {
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "NoteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createNoteMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "NoteInput"
          }
        ],
        "concreteType": "Note",
        "name": "createNote",
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
  "name": "createNoteMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "NoteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "createNoteMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "NoteInput"
          }
        ],
        "concreteType": "Note",
        "name": "createNote",
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
  "text": "mutation createNoteMutation(\n  $input: NoteInput!\n) {\n  createNote(input: $input) {\n    id\n  }\n}\n"
};

module.exports = batch;
