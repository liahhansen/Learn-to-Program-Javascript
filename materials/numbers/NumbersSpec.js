describe('Numbers', function () {
    it('a number should equal itself', function() {
        expect(4).toEqual(4);
    });

    it('adding numbers should produce their expected mathematical result', function() {
        expect(20 + 5).toEqual(25);
    });

    it('subtracting numbers should produce the expected mathematical result', function() {
        expect(20 - 5).toEqual(15);
    });

    it('multiplying numbers should produce their expected mathematical result', function() {
        expect(20 * 5).toEqual(100);
    });

    it('dividing numbers should produce their expected mathematical result', function() {
        expect(20 / 5).toEqual(4);
    });

    it('dividing numbers should produce their expected mathematical result', function() {
        expect("hello").toEqual("hello");
    });
});