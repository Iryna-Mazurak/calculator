let display = document.querySelector('#display');
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
let regex = /\d+\./;

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

function addNumber(number) {
	let value = number;
	if ((display.value === '0') && (number === '.')) {
		display.setAttribute('value', '0.');
	} else if (display.value === '0'){
		display.setAttribute('value', value);
	} else if ((number === '.') && (regex.test(display.value) === true)) {
		display.setAttribute('value', display.value);
	} else {
		display.setAttribute('value', display.value + value);
	}
}

empty.onclick = function () {
	display.setAttribute('value', '0');
};

plus.onclick = function () {
	display.setAttribute('value', 'plus');
};