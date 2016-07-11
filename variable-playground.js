var person = {
	name: 'bob',
	age: 21
};

function updatePerson (obj) {
	// obj = {    // this reassigns the variable...does not update
	// 	name: 'bob',
	// 	age: 24
	// };
	obj.age = 24;
}

updatePerson(person);
console.log(person);

// ARRAY example

var grades = [15, 88];

function addGrade (grades) {
	grades.push(55);
	debugger;
	
	grades = [12, 33, 99];  // this should not work
}

addGrade(grades);
console.log(grades);