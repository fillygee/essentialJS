const calculate = require("./calculate");
const prompt = require("readline-sync");
const colors = require("ansi-colors");

while (true) {
	let operator;
	while (true) {
		operator = prompt.question("Please enter your operator: ");
		if (
			operator !== "+" &&
			operator !== "-" &&
			operator !== "*" &&
			operator !== "/"
		) {
			console.log(
				colors.yellow("Please enter a valid operator [e.g '+', '-', '*', '/']")
			);
			continue; // Restart the loop
		}
		break; // Break out of the loop if the operator is valid
	}

	let num1;
	while (true) {
		num1 = prompt.question("Please enter your first number: ");
		if (isNaN(num1)) {
			console.log(colors.yellow("Only numbers are allowed. Please try again."));
			continue; // Restart the loop
		}
		num1 = parseFloat(num1);
		break; // Break out of the loop if the first number is valid
	}

	let num2;
	while (true) {
		num2 = prompt.question("Please enter your second number: ");
		if (isNaN(num2)) {
			console.log(colors.yellow("Only numbers are allowed. Please try again."));
			continue; // Restart the loop
		}
		num2 = parseFloat(num2);
		break; // Break out of the loop if the second number is valid
	}

	// Now, perform the calculation using the entered operator
	const result = calculate(num1, num2, operator);
	console.log(`The result is: ${result}`);

	// Ask the user if they want to perform another calculation
	const continueCalculation = prompt.question(
		"Do you want to perform another calculation? (yes/no): "
	);
	if (continueCalculation.toLowerCase() !== "yes") {
		break; // Exit the loop if the user doesn't want to continue
	}
}
