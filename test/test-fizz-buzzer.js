const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
// describe(function(){	

	it('should return "fizz-buzz" for multiples of 15', function() {

	const normalCases = 
	   [15, 30, 45];

	  normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz-buzz');
    });
  });

	it('should return "fizz" for multiples of 3', function() {

		const normalCases = 
		[3, 6, 9, 12]

	// const normalCases = [
	// 	{num: 15, expected: 'buzz'},
	// 	{num: 25, expected: 'buzz'},
	// 	{num: 40, expected: 'buzz'}
	// ];

	normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz');
    });
  });

	it('should return "buzz" for multiples of 5', function(){

		const normalCases = 
		[5, 10, 20]

	// const normalCases = [
	// 	{num: 18, expected: 'fizz'},
	// 	{num: 30, expected: 'fizz'},
	// 	{num: 36, expected: 'fizz'}
	// ];

	normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('buzz');
    });
  });


	 it('should return number if not mult of 3 or 5', function() {
    [1, 2, 4, 7].forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });

	it('should raise error if input is not a number', function() {
	    // range of bad inputs where not both are numbers
	    const badInputs = [
	      ['a'],
	      ['1'],
	      [false]
	    ];
	    // prove that an error is raised for bad inputs
	    badInputs.forEach(function(input) {
	      (function() {
	          fizzBuzzer(input[0])
	      }).should.throw(Error);
	 });
  });
});


 	