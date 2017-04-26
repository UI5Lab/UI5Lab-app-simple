sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("ui5lab.app.SquareApp.controller.App", {
		onInit: function () {
			var oViewModel = new JSONModel({
				size : 200
			});
			this.getView().setModel(oViewModel, "view");
		}
	});
});