var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
	input NoteInput {
	    noteText: String
	    timeStamp:   String
	    author : String
	}

	type Note {
	    id: ID!
	    noteText: String!
	    author: String!
	    timeStamp : String!
	 }

	type Query {
	    getNote(id: ID!): Note
	    getNotes : [Note]
      author : String!
	}

	type Mutation {
	    createNote(input: NoteInput): Note
	    updateNote(id: ID!, input: NoteInput): Note
	    deleteNote (id:ID!): Note
	}
  
`);

class Note {
  constructor(id, noteText, author, timeStamp) {
    this.id = id;
    this.noteText = noteText;
    this.author = author;
    this.timeStamp = timeStamp;
  }
}


var notesDb = [];
// The root provides a resolver function for each API endpoint
var root = {
  
  getNotes: function () {
    return notesDb;
  },

  getNote: function ({id}) {
    // if (!notesDb[id]) {
    //   throw new Error('no note exists with id ' + id);
    // }
    return new Note(id, notesDb[id].noteText, notesDb[id].author, notesDb.timeStamp);
  },

  author:function(){
    return "SM";
  },

  createNote: function ({input}) {
    // Create a random id for our "database".
    var id = require('crypto').randomBytes(10).toString('hex');
    var note =new  Note(id, input.noteText, input.author, input.timeStamp);
    notesDb.push(note);
    return note;
  },
  updateNote: function ({id, input}) {
    // if (!notesDb[id]) {
    //   throw new Error('no note exists with id ' + id);
    // }
    // This replaces all old data, but some apps might want partial update.
    notesDb[id] = input;
    return new Note(id, notesDb[id].noteText, notesDb[id].author, notesDb.timeStamp);
  },

  deleteNote : function({id}){
  	// if (!notesDb[id]) {
   //    throw new Error('no note exists with id ' + id);
   //  }
   var note = new Note(notesDb[id].id, notesDb[id].noteText, notesDb[id].author, notesDb[id].timeStamp)
    delete notesDb[id];
    return note;
  }

};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);