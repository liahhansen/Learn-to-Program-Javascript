describe('jQuery DOM Manipulation', function () {
		beforeEach(function() {
			loadFixtures('melonBalls.html');
		});
		
		// Manipulating Tag Contents
    it('can find contents of h1 tag', function() {
    	expect($("h1").text()).toContain(null)
    });

    it('can change contents of h1 tag', function() {
	  	expect($("h1").text()).toContain(null)
			$("h1").text("The Cheese Slicer takes REVENGE!")
    	expect($("h1").text()).toContain(null)
    });

		// Manipulating CSS
    it('can determine css rules for selected objects', function() {
			expect($("h1").css("background-color")).toContain(null)
    });

    it('can move the h1 tag from left to right by adding a class', function() {
			expect($("h1").hasClass("right")).toBe(null)
			expect($("h1").css("text-align")).not.toBe(null)
	  	$("h1").addClass("right")
			expect($("h1").css("text-align")).toBe(null)
			expect($("h1").hasClass("right")).toBe(null)
    });

		// Traversing the DOM: http://api.jquery.com/category/traversing/
    it('can determine parent', function() {
	  	expect($(".emph").parent()).toBe(null) //Hint: try the tag name of the parent element rather than the whole element
    });

    it('can determine children', function() {
	  	expect($("#needed").children().first()).toBe(null) //Hint: try the tag name of the child element rather than the whole element
    });
});