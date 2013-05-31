Strekmann boilerplate
=====================

Node.js+express, backbone, brunch, sass+foundation4, testem boilerplate.

Setup
-----

Install dependencies::

	npm install

Build backbone app::

	brunch build

Run server tests::
	
	npm test

Run backbone tests::

	testem

Backbone app
------------

The backbone application builds 3 javascript files and one css file.

|	app.css		 - all styles, vendor and application.
|	vendor.js 	 - vendor files like jquery, backbone, underscore etc.
|	templates.js - application templates as compiled handlebar templates.
|	app.js 		 - backbone application files.

The source for the backbone application is found in the backbone/ directory.


Node server
-----------

Provides backbone app and rest-api and handles sessions.

Start server with::
	
	./server.js

|	NODE_ENV - 'production' or 'development'
|	PORT     - port the server listens to, default is 3100
