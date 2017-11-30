var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = bannerboy.utils.getDimensions().width;
	var height = bannerboy.utils.getDimensions().height;
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, backgroundColor: "#fff", overflow: "hidden", cursor: "pointer", parent: document.body});
	var main_tl;

	var images = [
		//
	];

	bannerboy.preloadImages(images, function() {

		/* Create elements
		================================================= */
		var bg = bannerboy.createElement({backgroundColor: "#b4b397", width: 300, height: 250, parent: banner});
		var rect_1 = bannerboy.createElement({left: 138, top: 179, width: 25, height: 26, parent: banner});
			var rect_1_1 = bannerboy.createElement({backgroundColor: "#ffe54a", width: 25, height: 26, parent: rect_1});
			var rect_1_2 = bannerboy.createElement({backgroundColor: "#ff7915", left: 6, top: 7, width: 13, height: 13, parent: rect_1});
		var border = bannerboy.createElement({border: "solid 1px #000", boxSizing: "border-box", width: width, height: height, parent: banner});

	  /* Adjust elements
		================================================= */

		/* Animations
		================================================= */

		/* Timeline
		================================================= */
		main_tl = new BBTimeline()
		.offset(0.25)

		/* Interactions
		================================================= */
		banner.onclick = function() {
			//
		};

		/* Helpers
		================================================= */

		/* Scrubber
		================================================= */
		function scrubber(tl) {
			if (window.location.origin == "file://") {
				bannerboy.include(["../bannerboy_scrubber.min.js"], function() {
					if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
				});
			}
		}
	});
};