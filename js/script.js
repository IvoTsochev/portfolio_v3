// MY WORK PAGE
const dennyConstruction = document.querySelector('#dennyconstruction');
const hikov = document.querySelector('#hikov');
const vasilMatin = document.querySelector('#vasilmatin');
const motoGp = document.querySelector('#motogp');
const v2 = document.querySelector('#v2');
const v1 = document.querySelector('#v1');

const rightWork = document.querySelector('.right-work');

// Denny Listener
dennyConstruction.addEventListener('mouseover', dennyIn);
// dennyConstruction.addEventListener('mouseout', dennyOut);

// Hikov Listener
hikov.addEventListener('mouseover', hikovIn);
// hikov.addEventListener('mouseout', hikovOut);

// Vasil Matin Listener
vasilMatin.addEventListener('mouseover', vasilMatinIn);
// vasilMatin.addEventListener('mouseout', vasilMatinOut);

// MotoGP Fan Shop Listener
motoGp.addEventListener('mouseover', motoGpIn);
// motoGp.addEventListener('mouseout', motoGpOut);

// V2 Listener
v2.addEventListener('mouseover', v2In);
// v2.addEventListener('mouseout', v1Out);

// V1 Listener
v1.addEventListener('mouseover', v1In);
// v1.addEventListener('mouseout', v1Out);

// Denny function
function dennyIn() {
	rightWork.style.backgroundImage = "url('img/dennyconstruction.png')";
}
// function dennyOut() {
// 	rightWork.style.backgroundImage = 'none';
// }

// Hikov function
function hikovIn() {
	rightWork.style.backgroundImage = "url('img/hikov.png')";
}
// function hikovOut() {
// 	rightWork.style.backgroundImage = 'none';
// }

// Vasil Matin function
function vasilMatinIn() {
	rightWork.style.backgroundImage = "url('img/vasilmatin.png')";
}
// function vasilMatinOut() {
// 	rightWork.style.backgroundImage = 'none';
// }

// Moto Gp function
function motoGpIn() {
	rightWork.style.backgroundImage = "url('img/motogp-fan-shop.png')";
}
// function motoGpOut() {
// 	rightWork.style.backgroundImage = 'none';
// }

// V2 function
function v2In() {
	rightWork.style.backgroundImage = "url('img/v2.png')";
}
// function v2Out() {
// 	rightWork.style.backgroundImage = 'none';
// }

// V1 function
function v1In() {
	rightWork.style.backgroundImage = "url('img/v1.png')";
}
// function v1Out() {
// 	rightWork.style.backgroundImage = 'none';
// }
