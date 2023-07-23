const colors = require("ansi-colors");

function calculate(num1, num2, operator) {
	let result;
	switch (operator) {
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			result = num1 / num2;
			break;
	}
	if (result < 0) {
		return colors.green(result);
	} else if (result > 0) {
		return colors.red(result);
	} else {
		return colors.yellow(result);
	}
}

module.exports = calculate;
