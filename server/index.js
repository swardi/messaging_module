var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

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
	    updateNote(id: ID!, noteText: String!): Note
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
  
  findElementPositionById : function(id){
    for(var i=0; i<=notesDb.length; i++){
      if(notesDb[i].id === id)
        return i;
    }
    return -1;
  },

  getNotes: function () {
    return notesDb;
  },

  getNote: function ({id}) {
    if (this.findElementPositionById(id) === -1) {
      throw new Error('no note exists with id ' + id);
    }
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
  updateNote: function ({id, noteText}) {
    var position=this.findElementPositionById(id);
    if (position === -1) {
      throw new Error('no note exists with id ' + id);
    }
    notesDb[position].noteText = noteText;
    return notesDb[position];
  },

  deleteNote : function({id}){
  	var noteIndex = this.findElementPositionById(id)
    if (noteIndex === -1) {
      throw new Error('no note exists with id ' + id);
    }
    
    var note = new Note(notesDb[noteIndex].id, notesDb[noteIndex].noteText, notesDb[noteIndex].author, notesDb[noteIndex].timeStamp)
    notesDb.splice(noteIndex,1);
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