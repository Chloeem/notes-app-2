class NotesModel {

  constructor() {
    this.notes = []
  }

  getNotes() {
    return this.notes
  };

  addNote(note) {
    //this.getNotes().push(note);
    this.notes.push(note);
  };

  reset() {
    this.notes = [];
  };

};

module.exports = NotesModel;
