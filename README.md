# UI5Lab-app-simple
A simple app to consume artifacts of UI5Lab

### What is in here?

A test app that may be used as a starting point for the UI5Lab repo.
Feel free to adopt!

## Getting started

### The easy way (just run this app)

1. Install node.js (get it from [nodejs.org](http://nodejs.org/)).
 * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)

2. Clone the repository and navigate into it
```sh
git clone https://github.com/openui5/UI5Lab-app-simple
cd UI5Lab-app-simple
```

3. Install all npm dependencies (also installs all bower dependencies)
```sh
npm install
```

4. Deploy the application folder to your favorite webserver and use the [App](webapp/index.html)

### The more detailed way (modify this app to match your requirements)
1. Install node.js (get it from [nodejs.org](http://nodejs.org/)).
 * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)

2. Clone the repository and navigate into it
```sh
git clone https://github.com/openui5/UI5Lab-app-simple
cd UI5Lab-app-simple
```

3. Adapt the file `package.json` to retrieve the desired Custom Control library.
(In this demonstration `ui5lab-library-simple`)

``` json
{
  "scripts": {
    "postinstall": "node postInstall.js"
  },
  "devDependencies": {
    "ui5lab-library-simple": "^0.1.0",
    "fs-extra": "^3.0.0"
  }
}
```

4. Adapt the file `postInstall.json` to copy the files of the Custom Control library from the nodes_modules-directory to the application folder.
(In this demonstration to `./webapp/thirdparty`)

```javascript
var fs = require('fs-extra');

fs.copySync('./node_modules/ui5lab-library-simple/dist/resources/', './webapp/thirdparty');
```

5. Install all npm dependencies (also installs all bower dependencies)

```sh
npm install
```

6. Adapt `index.html` to consume the Custom Control library.
(In this demonstration `ui5lab.geometry`)

```javascript
...
    data-sap-ui-resourceroots='{
        "ui5lab.app.SquareApp": "./",
        "ui5lab.geometry": "./thirdparty/ui5lab/geometry/"
    }'>
...
```

7. Adapt `opaTest.unit.html` to consume the Custom Control library.
(In this demonstration `ui5lab.geometry`)
```javascript
...
	data-sap-ui-resourceroots='{
        "ui5lab.app.SquareApp": "../../",
        "ui5lab.geometry": "../../thirdparty/ui5lab/geometry/"
    }'>
...
```

8. Adapt `App.view.xml` to consume the Custom Controls.
(In this demonstration `ui5lab.geometry.Square`, `ui5lab.geometry.Circle` and `ui5lab.geometry.Triangle`)

```xml
<mvc:View
	controllerName="ui5lab.app.SquareApp.controller.App"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns:lab="ui5lab.geometry"
	xmlns="sap.m">
	<App>
		<pages>
			<Page title="{i18n>title}">
				<content>
					<Slider value="{view>/size}" min="50" max="500"/>
					<lab:Square text="A" size="100"/>
					<lab:Square text="wonderful" size="{view>/size}"/>
					<lab:Square text="pile" size="80"/>
					<lab:Square text="of" size="140"/>
					<lab:Square text="custom" size="90"/>
					<lab:Square text="Squares" size="170"/>
					<lab:Square text="!" size="50"/>
					<lab:Circle text="Circle" size="{view>/size}"/>
					<lab:Triangle text="Triangle" size="{view>/size}" rotation="{= ${view>/size} / 2 - 100}"/>
				</content>
			</Page>
		</pages>
	</App>
</mvc:View>
```

9. Deploy the application folder to your favorite webserver and use the [App](webapp/index.html)

### Directions

[App page](webapp/index.html) An App based on the "UI5 Application" template instantiating ui5lab controls

[Test page](webapp/test/integration/opaTests.qunit.html) A simple integration test written in OPA

### Contributing

Instructions how to connect to the community and contribute to the UI5lab project can be found in the [main repository](https://github.com/openui5/UI5Lab/)!