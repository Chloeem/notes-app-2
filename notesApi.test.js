/**
 * @jest-environment jsdom
 */


const NotesApi = require('./notesApi');
const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads the notes', async () => {
    // let model = new NotesModel
    // let view = new NotesView(model)
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      notes: ['Ruby on Rails']
    }));

    api.loadNotes((data) => {
      expect(data.notes[0]).toBe('Ruby on Rails');
    });
  });
});