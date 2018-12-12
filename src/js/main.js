let display_input = document.querySelector('#display');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let dot = document.getElementById('dot');
let empty = document.getElementById('empty');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let multiplication = document.querySelector('#multiplication');
let division = document.querySelector('#division');
let plus_minus = document.querySelector('#plus_minus');
let percentage = document.querySelector('#percentage');
let regex = /\d+\./;
let equally = document.querySelector('#equally');
let result = 0;

one.onclick = function() {addNumber(1)};
two.onclick = function() {addNumber(2)};
three.onclick = function() {addNumber(3)};
four.onclick = function() {addNumber(4)};
five.onclick = function() {addNumber(5)};
six.onclick = function() {addNumber(6)};
seven.onclick = function() {addNumber(7)};
eight.onclick = function() {addNumber(8)};
nine.onclick = function() {addNumber(9)};
zero.onclick = function() {addNumber(0)};
dot.onclick = function() {addNumber('.')};
plus.onclick = function() {addNumber(' + ')};
minus.onclick = function() {addNumber(' - ')};
multiplication.onclick = function() {addNumber(' * ')};
division.onclick = function() {addNumber(' / ')};

function addNumber(number) {
	let value = number;
	if ((display_input.value === '0') && (number === '.')) {
		display_input.setAttribute('value', '0.');
	} else if (display_input.value === '0'){
		display_input.setAttribute('value', value);
		result = value;
		console.log(result);
	} else if ((number === '.') && (regex.test(display_input.value) === true)) {
		display_input.setAttribute('value', display_input.value);
	} else {
		display_input.setAttribute('value', display_input.value + value);
		result += value.toString();
		console.log(result);
	}
}

empty.onclick = function () {
	display_input.setAttribute('value', '0');
};

plus_minus.onclick = function () {
	if ((display_input.value !== '0') && (display_input.value !== '0.')){
		if (display_input.value[0] !== '-') {
			display_input.setAttribute('value', '-' + display_input.value);
		} else {
			let display_value = document.querySelector('#display').value;
			let a = display_value.substr(1);
			display_input.setAttribute('value', a);
		}
	}
};

equally.onclick = function () {
	let final_result = eval(result);
	// console.log(splited_result);
	// for (let i = 0; i < splited_result.length; i++) {
	// 	if ((/\d+/.test(splited_result[i])) === true){
	// 		final_result.push(parseInt(splited_result[i]));
	// 	} else {
	// 		final_result.push(splited_result[i]);
	// 	}
	// 	console.log(final_result);
	// }
	display_input.setAttribute('value', final_result);
};