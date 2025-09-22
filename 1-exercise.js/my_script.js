let phrase = 'Hello world';
const myInt = 5;
const myFloat = 6.667;
const lotsOfDecimal = 1.7665849587;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);
console.log(typeof myInt);
console.log(typeof myFloat);
console.log(phrase);
console.log(38 + 72);

/*let displayedAnswer;
let answer = prompt('What is the original name of JavaScript?', '');

if (answer == 'Ecmascript') {
	displayedAnswer = 'that is correct';
	alert(displayedAnswer);
} else {
	displayedAnswer = 'that is wrong, it is Ecmascript';
	alert(displayedAnswer);
}*/

/*let answer = prompt('Please choose a number');

let message =
	answer <= -1
		? 'You have chosen a number below 1 '
		: answer == 0
		? 'you have chosen 0'
		: answer >= 1
		? 'You have chosen an number above 0'
		: 'error in selection';
alert(message);*/

/*let firstSelection = prompt('Please select your first number');
let secondSelection = prompt('please select your second number');

let sum = firstSelection + secondSelection;

let message = sum < 4 ? 'Below' : 'Over';
alert(message);*/

/*let answer = prompt('please select a browser');
let refinedAnswer = answer.toLowerCase();
console.log(refinedAnswer);
if (refinedAnswer == 'safari') {
	let displayedAnswer = 'Thanks for the support';
	alert(displayedAnswer);
} else if (refinedAnswer == 'firefox' || 'opera' || 'chrome' || 'edge') {
	let displayedAnswer = 'Yeap that works too';
	alert(displayedAnswer);
} else {
	let displayedAnswer = 'Hope things workout...';
	alert(displayedAnswer);
}*/

let answer = prompt('Please select a number from 0 to 3');
const convertAnswer = Number(answer);
switch (convertAnswer) {
	case 0:
		alert('You have selected 0');
		break;
	case 1:
		alert('you have selected 1');
		break;
	case 2:
	case 3:
		alert('Good luck');
		break;
	default:
		alert('An unknown value');
}
