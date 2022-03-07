const NotesModel = require('./notesModel');

describe(NotesModel, () => {

    describe('#getNotes', () => {
      
      let model;

      beforeEach(() => {
        model = new NotesModel 
      });

      it('returns an empty array on creation', () => {
        expect(model.getNotes()).toEqual([])
      });

    });

});    
