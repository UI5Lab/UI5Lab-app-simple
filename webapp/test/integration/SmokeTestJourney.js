
sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/opaQunit"
], function (Opa5, opaTest) {
	"use strict";

	QUnit.module("Smoke Test");

	Opa5.extendConfig({
		autoWait : true
	});

	opaTest("Should see 7 wonderful squares, 1 Circle (Square with round edges) and 1 Triangle", function(Given, When, Then) {
		// Act
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "ui5lab.app.GeometryApp"
			},
			hash: ""
		});

		// Assert
		Then.waitFor({
			controlType: "sap.m.Slider",
			success : function () {
				Opa5.assert.ok(true, "Found a Slider");
			},
			errorMessage : "Could not find a Slider"
		});

		Then.waitFor({
			controlType: "ui5lab.geometry.Square",
			success : function (aSquares) {
				Opa5.assert.strictEqual(aSquares.length, 8, "Found 8 Squares with pointed and round edges");
			},
			errorMessage : "Could not find a single Square"
		});

		Then.waitFor({
			controlType: "ui5lab.geometry.Circle",
			success : function (aCircles) {
				Opa5.assert.strictEqual(aCircles.length, 1, "Found 1 Circle");
			},
			errorMessage : "Could not find a single Circle"
		});

		Then.waitFor({
			controlType: "ui5lab.geometry.Triangle",
			success : function (aTriangle) {
				Opa5.assert.strictEqual(aTriangle.length, 1, "Found 1 Triangle");
			},
			errorMessage : "Could not find a single Triangle"
		});

		// Cleanup
		Then.iTeardownMyUIComponent();
	});

});