//script.js
document.addEventListener('DOMContentLoaded',
	function () {
		
		console.log('DOMContentLoaded');
		const navItems = document
			.querySelectorAll('.nav-item');

		navItems.forEach(item => {
			var pgurl = window.location.href.substr(window.location.href
				.lastIndexOf("/")+1);
			// select a inside this li
			var a = item.querySelector('a');
            if (a.getAttribute('href') == pgurl) {
                item.classList.add('active');
            }
		});
	});
