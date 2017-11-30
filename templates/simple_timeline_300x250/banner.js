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
		var rect_1 = bannerboy.createElement({left: 49, top: 95, width: 203, height: 61, parent: banner});
			var rect_1_1 = bannerboy.createElement({backgroundColor: "#ffe54a", width: 168, height: 26, parent: rect_1});
			var rect_1_2 = bannerboy.createElement({backgroundColor: "#ffe54a", top: 35, width: 168, height: 26, parent: rect_1});
			var rect_1_3 = bannerboy.createElement({backgroundColor: "#ffe54a", left: 178, top: 35, width: 25, height: 26, parent: rect_1});
		var border = bannerboy.createElement({border: "solid 1px #000", boxSizing: "border-box", width: width, height: height, parent: banner});

		/* Adjust elements
		================================================= */
		var rectangles = [rect_1_1, rect_1_2];
		var boxes = [rectangles, rect_1_3];

		/* Animations
		================================================= */
		boxes.in = new BBTimeline()
			.staggerFrom(rectangles, 0.3, {x: -width}, 0.1)
			.chain(0.1)
			.from(rect_1_3, 0.3, {scale: 0});

		boxes.out = new BBTimeline()
			.to(rect_1_3, 0.3, {scale: 0})
			.chain()
			.staggerTo(rectangles, 0.3, {x: width, ease: Sine.easeIn}, 0.1);

		/* Timeline
		================================================= */
		main_tl = new BBTimeline({repeat: -1, repeatDelay: 0.5})
		.offset(0.25)
		.add(boxes.in)
		.chain(1)
		.add(boxes.out);

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