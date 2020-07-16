

document.addEventListener("DOMContentLoaded", function () {

	const swup = new Swup();
	init();
	swup.on('contentReplaced', init);


	function init() {
		if (document.querySelector('.my-work')) {
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
			// Hikov Listener
			hikov.addEventListener('mouseover', hikovIn);
			// Vasil Matin Listener
			vasilMatin.addEventListener('mouseover', vasilMatinIn);
			// MotoGP Fan Shop Listener
			motoGp.addEventListener('mouseover', motoGpIn);
			// V2 Listener
			v2.addEventListener('mouseover', v2In);
			// V1 Listener
			v1.addEventListener('mouseover', v1In);

			// Denny function
			function dennyIn() {
				rightWork.style.backgroundImage = "url('img/dennyconstruction.png')";
				console.log('denny')
			}
			// Hikov function
			function hikovIn() {
				rightWork.style.backgroundImage = "url('img/hikov.png')";
			}
			// Vasil Matin function
			function vasilMatinIn() {
				rightWork.style.backgroundImage = "url('img/vasilmatin.png')";
			}
			// Moto Gp function
			function motoGpIn() {
				rightWork.style.backgroundImage = "url('img/motogp-fan-shop.png')";
			}
			// V2 function
			function v2In() {
				rightWork.style.backgroundImage = "url('img/v2.png')";
			}
			// V1 function
			function v1In() {
				rightWork.style.backgroundImage = "url('img/v1.png')";
			}
		}
		
	}



});