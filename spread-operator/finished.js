// PART 1
// Copy all contents of week1 into another array week2 using the spread operator.

const week1 = ["Mon", "Tue", "Wed", "Thur", "Fri"];
const week2=[...week1];
console.log(week2)


// PART 2
// Create a function that will merge two arrays together

const spices = ["salt", "pepper", "cumin", "oregano"];
const mainDish = ["pasta", "tomato", "cheese", "carrots"];

function makeDish() {
	// TODO
    // return [...spices,...mainDish]
    return spices.concat(mainDish);
}


console.log(makeDish(spices, mainDish))
