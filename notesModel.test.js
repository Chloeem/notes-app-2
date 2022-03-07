

describe(notesModel, () => {
    let model;
    beforeEach => {
      const model = new notesModel();  
    }

    describe('test the getNotes() method', () => {

      it("Test getNotes empty", () => {
        
        expect(model).toBeInstanceOf(notesModel());
      });

    });

});    
