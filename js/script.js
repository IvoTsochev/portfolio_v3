document.addEventListener('DOMContentLoaded', function () {



	// BLOG Button
	document.querySelector('.blog-corner').addEventListener('click', () => {
		alert('Upps, this is still under construction')
	});

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
			document.querySelector('.my-work-denny').style.display = 'block';
			document.querySelector('.my-work-hikov').style.display = 'none';
			document.querySelector('.my-work-matin').style.display = 'none';
			document.querySelector('.my-work-motogp').style.display = 'none';
			document.querySelector('.my-work-v1').style.display = 'none';
			document.querySelector('.my-work-v2').style.display = 'none';
		}
		// Hikov function
		function hikovIn() {
			rightWork.style.backgroundImage = "url('img/hikov.png')";
			document.querySelector('.my-work-hikov').style.display = 'block';
			document.querySelector('.my-work-denny').style.display = 'none';
			document.querySelector('.my-work-matin').style.display = 'none';
			document.querySelector('.my-work-motogp').style.display = 'none';
			document.querySelector('.my-work-v1').style.display = 'none';
			document.querySelector('.my-work-v2').style.display = 'none';
		}
		// Vasil Matin function
		function vasilMatinIn() {
			rightWork.style.backgroundImage = "url('img/vasilmatin.png')";
			document.querySelector('.my-work-matin').style.display = 'block';
			document.querySelector('.my-work-hikov').style.display = 'none';
			document.querySelector('.my-work-denny').style.display = 'none';
			document.querySelector('.my-work-motogp').style.display = 'none';
			document.querySelector('.my-work-v1').style.display = 'none';
			document.querySelector('.my-work-v2').style.display = 'none';
		}
		// Moto Gp function
		function motoGpIn() {
			rightWork.style.backgroundImage = "url('img/motogp-fan-shop.png')";
			document.querySelector('.my-work-motogp').style.display = 'block';
			document.querySelector('.my-work-matin').style.display = 'none';
			document.querySelector('.my-work-hikov').style.display = 'none';
			document.querySelector('.my-work-denny').style.display = 'none';
			document.querySelector('.my-work-v1').style.display = 'none';
			document.querySelector('.my-work-v2').style.display = 'none';
		}
		// V2 function
		function v2In() {
			rightWork.style.backgroundImage = "url('img/v2.png')";
			document.querySelector('.my-work-v2').style.display = 'block';
			document.querySelector('.my-work-v1').style.display = 'none';
			document.querySelector('.my-work-motogp').style.display = 'none';
			document.querySelector('.my-work-matin').style.display = 'none';
			document.querySelector('.my-work-hikov').style.display = 'none';
			document.querySelector('.my-work-denny').style.display = 'none';
		}
		// V1 function
		function v1In() {
			rightWork.style.backgroundImage = "url('img/v1.png')";
			document.querySelector('.my-work-v1').style.display = 'block';
			document.querySelector('.my-work-motogp').style.display = 'none';
			document.querySelector('.my-work-matin').style.display = 'none';
			document.querySelector('.my-work-hikov').style.display = 'none';
			document.querySelector('.my-work-denny').style.display = 'none';
			document.querySelector('.my-work-v2').style.display = 'none';
		}
	}


	// NAVIGATION
	function resizeIcons() {
		let allIcons = Array.from(document.querySelectorAll('.inner-nav a svg'));
		allIcons.forEach((e) => {
			e.setAttribute('width', '25px');
		});
	}

	function resizeTimeline() {
		document.querySelector('.timeline svg').setAttribute('width', 'auto');
	}


	if (window.screen.width <= '500') {
		resizeIcons();
		if (document.querySelector('.about')) {
			resizeTimeline();
		}

	}


});
