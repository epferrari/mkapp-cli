#!/usr/bin/env node

var mkapp;
var resolve = require('resolve');

try {
	mkapp = require( resolve.sync('mkapp',{basedir: process.cwd()}) );
	console.log('Using local mkapp');
	mkapp.parse(process.argv);
}
catch(ex){
	console.log('Cannot find local mkapp, install locally in your project with `npm install mkapp --save`')
}
