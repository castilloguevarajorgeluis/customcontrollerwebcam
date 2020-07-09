/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ynstestcamera/ywatestcamera/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});