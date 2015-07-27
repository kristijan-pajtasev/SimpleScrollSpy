(function() {
	var body = document.querySelector("body");
	body.addEventListener("scroll", function(event) {
		var height = window.innerHeight;
		var targets = document.querySelectorAll("[data-scrollspy-target]");
		for(var i = 0, length = targets.length; i < length; i++) {
			var target = targets[i];
			var position = target.getBoundingClientRect()
			if(position.top >= 0 && position.top <= 0.5 * height) {
				console.log(target)
				var indicators = document.querySelectorAll("[data-scrollspy-indicator]");
				for(var j = 0, indicatorsLength = indicators.length; j < indicatorsLength; j++) {
					var indicator = indicators[j];
					if(indicator.getAttribute("data-scrollspy-indicator") == target.getAttribute("data-scrollspy-target")) {
						indicator.className = "active";
					} else {
						indicator.className = "";
					}
				}
			}
		}
	})
})();