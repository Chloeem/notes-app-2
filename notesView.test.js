/**
 * @jest-environment jsdom
 */

const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const fs = require('fs');

describe(NotesView, () => {

  it('Displays 2 notes', () => {

    document.body.innerHTML = fs.readFileSync('./index.html');

    let model = new NotesModel
    model.addNote('Buy milk')
    model.addNote('Go to gym')
  
    let view = new NotesView(model)
  
    view.displayNotes()
  
    expect(document.querySelectorAll('div.note').length).toBe(2)
  })

  it('Adds and displays a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    let model = new NotesModel
    let view = new NotesView(model)
    
    const inputEl = document.querySelector('#note-input')
    inputEl.value = 'Buy groceries'

    const buttonEl = document.querySelector('#add-note-button')
    buttonEl.click()

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Buy groceries')
  })

})