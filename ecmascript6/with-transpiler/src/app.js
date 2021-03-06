// ===============================================
// LET
// ===============================================

(function () {
	let x = 10;

	if (true) {
		let x = 2;
		console.log('LET: X equals ' + x);
	}

	console.log('LET: X equals ' + x);
})();

// ===============================================
// CONST
// ===============================================

(function() {
	const MY_CONSTANT = 1;
	// uncomment for error
	// MY_CONSTANT = 3;
})();

// ===============================================
// ARROW FUNCTIONS
// ===============================================
(function() {
	let numbers = [1,2,3,4,5];
	let doubleNumbers = numbers.map( number => number * 2);
	console.log('ARROW FUNCTIONS: Double Numbers: ' + doubleNumbers);
	let numbersTotal = numbers.reduce( (prev, current) => prev + current );
})();

// ===============================================
// CONST
// ===============================================

// ===============================================
// CONST
// ===============================================

// ===============================================
// CONST
// ===============================================

// ===============================================
// CONST
// ===============================================