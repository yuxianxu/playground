// Unit Testing: Setting up data with beforeEach

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        model = new User();
        console.log('Dylan');
    });
    
    describe('default values', () => {
        it('first name defaults to empty', () => {
            // assert
            console.log(1)
            expect(model.firstName).toBe('');
        });
    
        it('last name defaults to empty', () => {
            // assert
            console.log(2)            
            expect(model.lastName).toBe('');
        });
    
        it('middle name defaults to empty', () => {
            // assert
            console.log(3)
            expect(model.middleName).toBe('');
        }); 
    });

    describe('full name', () => {

        beforeEach(() => {
            model = new User({ firstName: 'Yuxian', lastName: 'Xu'});
        });

        it('middle initial when middleName is defined with first and last', () => {
           
            model.middleName = 'Xu';            
           
            const result = model.fullName;
           
            expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);
        });

        it('when no middle name return just first and last', () => {
            
            //arrange
            model.middleName = '';

            //act
            const result = model.fullName;

            //assert
            expect(result).toBe(`${model.firstName} + ${model.lastName}`);
        });
    });
});