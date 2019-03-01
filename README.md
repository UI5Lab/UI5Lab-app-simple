![UI5Lab Logo](https://github.com/UI5Lab/UI5Lab-central/blob/master/docs/media/UI5LabLogoPhoenix.png)

# What is it

UI5Lab is a community driven repository for UI5 Custom Control Libraries. It's purpose is to make it easy for everyone to share, retrieve and use UI5 Custom Controls. Contributions welcome!

# UI5Lab-app-simple

This repository contains a simple app that consumes custom controls from the UI5Lab example library [geometry](https://github.com/UI5Lab/UI5Lab-library-simple). Have a look at our [documentation](http://ui5lab.io/docs/) for more details.

#### Setup

Run the following commands to test or develop this project:

1. Install node.js (get it from [nodejs.org](http://nodejs.org/)).

	> **Note:** If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)

2. Clone the repository and navigate into it
```bash
git clone https://github.com/UI5Lab/UI5Lab-app-simple
cd UI5Lab-app-simple
```

3. Install all npm dependencies (also installs all bower dependencies)
```bash
npm install
```

4. Start a local web server for development

```bash
npm start
```

> **Note:** you can run the app tests with ```npm test```

5. Choose one of the following entry points to open the app

 * [App page](webapp/index.html) Path to the source code for the demo above
 * [Test page](webapp/test/integration/opaTests.qunit.html) A simple integration test written in OPA

# Publish

The [UI5 tooling](https://github.com/SAP/ui5-tooling) creates an optimized app ready to be deployed on a web server.
There are three variants to create an optimized build in the ```dist``` folder included in this repository:

1. Build app and libraries (default)

```bash
npm run build
```

Creates optimized preloads for the app and all used libraries


2. Build app and switch to CDN bootstrap (demo)

```bash
npm run buildCDN
```

Creates an optimized app switched to CDN bootstrap for best loading performance.
You can find the [published app](https://ui5lab.github.io/UI5Lab-app-simple/index.html) in the ```gh-pages``` branch.


3. Self-contained build (minimal)

```bash
npm run buildSelfContained
```

Creates a custom UI5 bundle with a minimal set code both from library and app resources

# Directions

* [Homepage](https://ui5lab.io) - the single point of entry for UI5Lab
* [Documentation](https://ui5lab.io/docs) - project overview and tutorials
* [Browser](https://ui5lab.io/browser) - all UI5Lab libraries and examples
* [Demo](https://ui5lab.github.io/UI5Lab-app-simple/index.html) - an example app consuming simple UI5Lab controls

# Troubleshooting

Issues can be created either in this repository or in any of the contributor repositories depending on where the error came from.
Be sure to include enough details and context to reproduce the issue and follow up with you.

# Contact

We organize this project in [Slack Channel #UI5Lab](https://openui5.slack.com/messages/UI5lab).
If you are interested in what we do and discuss, join with this [invitation link](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/) or visit the homepage [https://ui5lab.io](https://ui5lab.io).

*The UI5Lab Community*
