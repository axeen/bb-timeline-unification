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
		var rect_1 = bannerboy.createElement({left: 66, top: 20, width: 168, height: 61, parent: banner});
			var rect_1_1 = bannerboy.createElement({backgroundColor: "#ff7915", width: 168, height: 26, parent: rect_1});
			var rect_1_2 = bannerboy.createElement({backgroundColor: "#ff7915", top: 35, width: 168, height: 26, parent: rect_1});
		var rect_2 = bannerboy.createElement({left: 66, top: 95, width: 168, height: 61, parent: banner});
			var rect_2_1 = bannerboy.createElement({backgroundColor: "#ffe54a", width: 168, height: 26, parent: rect_2});
			var rect_2_2 = bannerboy.createElement({backgroundColor: "#ffe54a", top: 35, width: 168, height: 26, parent: rect_2});
		var rect_3 = bannerboy.createElement({left: 66, top: 170, width: 168, height: 61, parent: banner});
			var rect_3_1 = bannerboy.createElement({backgroundColor: "#2ddf74", width: 168, height: 26, parent: rect_3});
			var rect_3_2 = bannerboy.createElement({backgroundColor: "#2ddf74", top: 35, width: 168, height: 26, parent: rect_3});
		var border = bannerboy.createElement({border: "solid 1px #000", boxSizing: "border-box", width: width, height: height, parent: banner});

		var slice = Array.prototype.slice;
		console.log(slice.call(rect_1.children).concat(slice.call(rect_2.children)).concat(slice.call(rect_3.children)));

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