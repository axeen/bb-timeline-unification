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
		var txt_1 = bannerboy.createElement({left: 20, top: 90, width: 168, height: 61, parent: banner});
			var txt_1_1 = bannerboy.createElement({backgroundColor: "#2ddf74", width: 168, height: 26, parent: txt_1});
			var txt_1_2 = bannerboy.createElement({backgroundColor: "#2ddf74", top: 35, width: 168, height: 26, parent: txt_1});
		var txt_2 = bannerboy.createElement({left: 20, top: 90, width: 168, height: 61, parent: banner});
			var txt_2_1 = bannerboy.createElement({backgroundColor: "#2ddf74", width: 168, height: 26, parent: txt_2});
			var txt_2_2 = bannerboy.createElement({backgroundColor: "#2ddf74", top: 35, width: 168, height: 26, parent: txt_2});
		var logo_large = bannerboy.createElement({backgroundColor: "#ffe54a", left: 111, top: 112, width: 168, height: 26, parent: banner});
		var panel_2 = bannerboy.createElement({backgroundColor: "#ff7915", width: 300, height: 65, parent: banner});
		var panel_1 = bannerboy.createElement({backgroundColor: "#ff7915", width: 90, height: 250, parent: banner});
		var logo_small = bannerboy.createElement({backgroundColor: "#ffe54a", left: 225, top: 20, width: 55, height: 70, parent: banner});
		var product = bannerboy.createElement({backgroundColor: "#ffe54a", left: 100, top: 62, width: 100, height: 128, parent: banner});
		var badge = bannerboy.createElement({backgroundColor: "#e7515b", left: 260, top: 210, width: 25, height: 25, parent: banner});
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