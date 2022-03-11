class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  createNote(note, callback) {
    fetch('http://localhost:3000/notes', {
    method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({content: `${note}`}),
    })
    .then(response => response.json())
    .then(data => {
      callback(data);
    })
  }
}

module.exports = NotesApi