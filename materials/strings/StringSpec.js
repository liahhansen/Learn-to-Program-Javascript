// Written by Rachel Myers as a introduction to test-first javascript development.
// Inspired by and very nearly lifted from Jim Weirich's Ruby Koans, which are awesome.


// Replace the nulls to make the specs pass and reach javascript enlightenment.

describe('Strings', function () {
    
	// Creating Strings
	it('should create a new string with either single or double quotes', function() {
	    expect("We have acrobats!").toEqual(null);
	});

	it('should use single quotes to contain double quotes', function(){
		expect('I said, "We have clowns!"').toEqual(null);
	});

	it("should use double quotes to contain single quotes", function(){
		expect("It's a limited engagement.").toEqual(null);
	});


	// Character and Substring Access

	string = "We have acrobats!";

	it("should use charAt to access a character from a string", function(){
		character = string.charAt(4);
		expect(character).toEqual(null);
	});

	it("returns empty string if index is larger than string", function(){
		no_such_character = string.charAt(17);
		expect(no_such_character).toEqual(null);
	});

	it("should use indexOf to find index of 'bats' substring", function(){
		index = string.indexOf("bats");
		expect(index).toEqual(null);
	});

	it ("should return -1 if there's substring doesn't exist", function(){
		no_such_index = string.indexOf("birds");
		expect(no_such_index).toEqual(null);
	});

	it ("show indexOf is will not find Bats", function(){
		no_such_index = string.indexOf("Bats");
		expect(no_such_index).toEqual(null);
	});

	// Concatenation and Splitting Strings
	
	var question = "And do you know what else?";
	var answer = "We also have lots of clowns."  ;
	var elaboration = "But they all fit in one car!";

	it ("should concatenate strings", function(){
		concatenation = null + " " + null;
		expect(concatenation).toEqual('And do you know what else? We also have lots of clowns.');
	});
	
	it ("should split strings by spaces", function(){
		split_answer = answer.split(" ");
		expect(split_answer).toEqual([null, null, null, null, null, null]);
	});
	
	it ("should split an empty string into an array containing an empty string", function(){
		empty_split = "".split();
		expect(empty_split).toEqual([null]);
	});
	
	it ("should split strings by any character we choose", function(){
		answer_split_by_o = answer.split(["o"]);
		expect(answer_split_by_o).toEqual([null, null, null, null, null]);
	});

	// Formating Strings
	var statement = "I love the circus!";
	var statement_with_white = "  I love the circus!  ";
	
	it ("should make a statement uppercase", function(){
		screaming = statement.toUpperCase();
		expect(screaming).toEqual(null);
	});
	
	it ("should make a statement lowercase", function(){
		whispering = statement.toLowerCase();
		expect(whispering).toEqual(null);
	});

	it ("should remove white space", function(){
		trimmed = statement_with_white.trim();
		expect(trimmed).toEqual(null);
	});
});