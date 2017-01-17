'use strict';

// done: Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:
page('/', articleController.init); //eslint-disable-line
page('/about', aboutController.init); //eslint-disable-line

// done: What function do you call to activate page.js? Fire it off now, to execute
page(); //eslint-disable-line
