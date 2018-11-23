QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"ui5lab/app/GeometryApp/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});