class NotesView {

  constructor(model, api) {
    this.api = api;
    this.buttonEl = document.querySelector('#add-note-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;
    
    this.buttonEl.addEventListener('click', () => {
      this.inputEl = document.querySelector('#note-input').value;

      this.api.createNote((this.inputEl), data => {
        this.model.addNote(this.inputEl);
        this.displayNotes();
      });

      this.displayNotes();
    });
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(note => {
      note.remove();
    });

    const notes = this.model.getNotes();
    
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
