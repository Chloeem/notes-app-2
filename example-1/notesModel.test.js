const NotesModel = require('./notesModel');

describe(NotesModel, () => {
    
    let model;
    beforeEach(() => {
      model = new NotesModel 
    });

    describe('#getNotes', () => {
      
      it('returns an empty array on creation', () => {
        expect(model.getNotes()).toEqual([])
      });

    });

    describe('#addNote', () => {
      
        it('add note to array', () => {
          model.addNote("Buy Milk!");
          model.addNote("Go to the Gym!");  
          expect(model.getNotes()).toEqual(["Buy Milk!", "Go to the Gym!"]);
        });
  
    });
  
    describe('#reset', () => {
      
        it('reset array to empty', () => {
          model.addNote("Buy Milk!");
          model.addNote("Go to the Gym!"); 
          model.reset(); 
          expect(model.getNotes()).toEqual([]);
        });
  
    });
  

});    
