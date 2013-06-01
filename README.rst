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

The source for the backbone application is found in the app/ directory.


Node server
-----------

Provides backbone app and rest-api and handles sessions.

Start server with::
	
	./server.js

|	NODE_ENV - 'production' or 'development'
|	PORT     - port the server listens to, default is 3100


MIT Open Source License
-----------------------

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.