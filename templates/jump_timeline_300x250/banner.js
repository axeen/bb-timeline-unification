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
		var rect_1 = bannerboy.createElement({left: 36, top: 221, width: 30, height: 30, parent: banner});
			var rect_1_1 = bannerboy.createElement({backgroundColor: "#36b1c5", width: 30, height: 30, parent: rect_1});
			var rect_1_2 = bannerboy.createElement({backgroundColor: "#ff7915", left: 8, top: 8, width: 15, height: 15, parent: rect_1});
		var rect_2 = bannerboy.createElement({left: 83, top: 215, width: 35, height: 35, parent: banner});
			var rect_2_1 = bannerboy.createElement({backgroundColor: "#e7515b", width: 35, height: 35, parent: rect_2});
			var rect_2_2 = bannerboy.createElement({backgroundColor: "#2ddf74", left: 9, top: 9, width: 18, height: 18, parent: rect_2});
		var rect_3 = bannerboy.createElement({left: 141, top: 230, width: 20, height: 20, parent: banner});
			var rect_3_1 = bannerboy.createElement({backgroundColor: "#36b1c5", width: 20, height: 20, parent: rect_3});
			var rect_3_2 = bannerboy.createElement({backgroundColor: "#ffe54a", left: 5, top: 5, width: 10, height: 10, parent: rect_3});
		var rect_4 = bannerboy.createElement({left: 179, top: 208, width: 42, height: 42, parent: banner});
			var rect_4_1 = bannerboy.createElement({backgroundColor: "#2ddf74", width: 42, height: 42, parent: rect_4});
			var rect_4_2 = bannerboy.createElement({backgroundColor: "#ff7915", left: 11, top: 11, width: 21, height: 21, parent: rect_4});
		var rect_5 = bannerboy.createElement({left: 242, top: 234, width: 16, height: 16, parent: banner});
			var rect_5_1 = bannerboy.createElement({backgroundColor: "#ffe54a", width: 16, height: 16, parent: rect_5});
			var rect_5_2 = bannerboy.createElement({backgroundColor: "#e7515b", left: 4, top: 4, width: 8, height: 8, parent: rect_5});
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