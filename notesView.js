class NotesView {

  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model
  }

  displayNotes() {
    const notes = this.model.getNotes()
    
    notes.forEach( note => { 
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }
}

module.exports = NotesView
