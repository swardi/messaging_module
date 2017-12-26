/**
 * @flow
 * @relayHash fbc7a60dad7b996eb254c1d3df72456d
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
    +noteText: string;
    +timeStamp: string;
    +author: string;
  |};
|};
*/


/*
mutation createNoteMutation(
  $input: NoteInput!
) {
  createNote(input: $input) {
    id
    noteText
    timeStamp
    author
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "noteText",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "timeStamp",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "author",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "noteText",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "timeStamp",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "author",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation createNoteMutation(\n  $input: NoteInput!\n) {\n  createNote(input: $input) {\n    id\n    noteText\n    timeStamp\n    author\n  }\n}\n"
};

module.exports = batch;
