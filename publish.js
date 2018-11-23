const glob = require('glob');
const fs = require('fs-extra');
const replace = require('replace-in-file');

// copy over ui5lab library files to local thirdparty folder in dist
fs.copySync('./node_modules/ui5lab-library-simple/dist/resources/', './dist/thirdparty');

// find all entry points
var aResults;
var aEntryPoints = glob.sync('dist/**/*.html');
console.log("Updating all entry points for publishing...");
console.log(aEntryPoints);

// replace library path
console.log("Replacing local namespace with thirdparty namespace...");
aResults = replace.sync({
	files: aEntryPoints,
	from: /"ui5lab": "(.*)resources\/ui5lab"/g,
	to: '"ui5lab": "$1thirdparty\/ui5lab"'
});
console.log(aResults);

// replace local bootstrap
console.log("Replacing local bootstrap with CDN bootstrap...");
aResults = replace.sync({
	files: aEntryPoints,
	from: /src=".*resources\/sap\-ui\-core.js"/g,
	to: 'src="https://openui5.hana.ondemand.com/resources/sap-ui-core.js"'
});

// replace local link tags
console.log("Replacing <link> tags...");
aResults = replace.sync({
	files: aEntryPoints,
	from: /<link rel="stylesheet" href=".*resources\/sap/g,
	to: '<link rel="stylesheet" href="https://openui5.hana.ondemand.com/resources/sap'
});
console.log(aResults);

// replace local script tags
console.log("Replacing <script> tags...");
aResults = replace.sync({
	files: aEntryPoints,
	from: /<script src=".*resources\/sap/g,
	to: '<script src="https://openui5.hana.ondemand.com/resources/sap'
});
console.log(aResults);

console.log("All done, app in dist folder is ready to be published!");