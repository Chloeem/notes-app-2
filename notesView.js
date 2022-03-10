class NotesView {

  constructor(model) {
    this.buttonEl = document.querySelector('#add-note-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model
    
    this.buttonEl.addEventListener('click', () => {
      this.inputEl = document.querySelector('#note-input').value
      this.model.addNote(this.inputEl);
      this.displayNotes();
    });
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(note => {
      note.remove();
    });

    const notes = this.model.getNotes()
    
    notes.forEach( note => { 
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
      document.querySelector('#note-input').value = '';
    })
  }
}

module.exports = NotesView
