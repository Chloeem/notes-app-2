/**
 * @jest-environment jsdom
 */

const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const fs = require('fs');
const NotesApi = require('./notesApi');
require('jest-fetch-mock').enableMocks();


describe(NotesView, () => {

  it('Displays 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    let model = new NotesModel();
    model.addNote('Buy milk')
    model.addNote('Go to gym')
  
    let view = new NotesView(model)
  
    view.displayNotes()
  
    expect(document.querySelectorAll('div.note').length).toBe(2)
  })

  it('Adds and displays a new note', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    let model = new NotesModel();
    let api = new NotesApi();
    let view = new NotesView(model, api);
    
    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'Buy groceries';

    fetch.mockResponseOnce(JSON.stringify({
      notes: ['Buy groceries']
    }));
    
    const buttonEl = document.querySelector('#add-note-button')
    buttonEl.click()

    setTimeout(() => {
      try {
        expect(document.body.querySelectorAll('div.note').length).toBe(1);
        expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Buy groceries');
        done();
      } catch (error) {
        done(error);
      }
    });
  })

  it('Displays the correct number of notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    let model = new NotesModel();
    let api = new NotesApi();
    let view = new NotesView(model, api);

    model.addNote('Hello');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
  });

})