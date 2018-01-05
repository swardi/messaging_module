/**
 * @flow
 * @relayHash d21ddefd44c2803b8797407d77947413
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type deleteNoteMutationVariables = {|
  input: {
    id: string;
    clientMutationId: string;
  };
|};
export type deleteNoteMutationResponse = {|
  +deleteNote: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation deleteNoteMutation(
  $input: DeleteNoteInput!
) {
  deleteNote(input: $input) {
    deletedId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteNoteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteNoteMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeleteNoteInput!"
          }
        ],
        "concreteType": "DeleteNotePayload",
        "name": "deleteNote",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
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
  "name": "deleteNoteMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteNoteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "deleteNoteMutation",
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
            "type": "DeleteNoteInput!"
          }
        ],
        "concreteType": "DeleteNotePayload",
        "name": "deleteNote",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation deleteNoteMutation(\n  $input: DeleteNoteInput!\n) {\n  deleteNote(input: $input) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
