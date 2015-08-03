// LICENSE - http://opensource.org/licenses/MIT
define(function(require) {
	var Adapt = require("coreJS/adapt");

	Adapt.on("app:dataReady", function() {
		if(!Adapt.config.get("_showIds")) return;

		var views = ["menu","page","article","block","component"];

		Adapt.on(views.join("View:postRender ") + "View:postRender", function(view) {
			var $container = $(getContainerDiv(view.model.get("_type"),view.model.get("_parentId")), view.$el);
			if($container.length > 0) {
				var idDiv = "<div style='padding:5px;position:inherit;font-size:12pt;border:1px dashed;top:-5px;'>" + view.model.get("_id") + "</div>";
				$container.prepend(idDiv);
			}
		});

		var getContainerDiv = function(type, parentId) {
			switch(type) {
				case "page":
					return ".page-header-inner";
				case "article":
					return ".article-header";
				case "block":
					return ".block-inner";
				case "component":
					return ".component-inner";
				default:
					return "";
			}
		}
	});
});
