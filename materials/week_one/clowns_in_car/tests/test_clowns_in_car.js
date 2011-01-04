describe('ClownsInCar', function () {
    
    var clowns;
    
    beforeEach(function() {
        clowns = new ClownsInCar();
    });


    it('should have default values for members', function() {
        expect(clowns.total).toEqual(0);
				clowns.add(1)
        expect(clowns.total).toEqual(1);
    });

});