/**
 * @flow
 * @relayHash 3e4c54189a76892421a812befc367ead
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type editNoteMutationVariables = {|
  input: {
    author?: ?string;
    id: string;
    noteText?: ?string;
    timeStamp?: ?string;
    clientMutationId: string;
  };
|};
export type editNoteMutationResponse = {|
  +updateNote: ?{|
    +note: ?{|
      +id: string;
      +noteText: string;
      +timeStamp: string;
      +author: string;
    |};
  |};
|};
*/


/*
mutation editNoteMutation(
  $input: UpdateNoteInput!
) {
  updateNote(input: $input) {
    note {
      id
      noteText
      timeStamp
      author
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateNoteInput!",
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
            "name": "input",
            "variableName": "input",
            "type": "UpdateNoteInput!"
          }
        ],
        "concreteType": "UpdateNotePayload",
        "name": "updateNote",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Note",
            "name": "note",
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
        "name": "input",
        "type": "UpdateNoteInput!",
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
            "name": "input",
            "variableName": "input",
            "type": "UpdateNoteInput!"
          }
        ],
        "concreteType": "UpdateNotePayload",
        "name": "updateNote",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Note",
            "name": "note",
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
        "storageKey": null
      }
    ]
  },
  "text": "mutation editNoteMutation(\n  $input: UpdateNoteInput!\n) {\n  updateNote(input: $input) {\n    note {\n      id\n      noteText\n      timeStamp\n      author\n    }\n  }\n}\n"
};

module.exports = batch;
