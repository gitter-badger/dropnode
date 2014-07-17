'use strict';


module.exports = function dustjs(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-jade');

	// Options
	return {
	    build: {
	        files: [
	            {
	                expand: true,
	                cwd: 'tmp/',
	                src: '**/*.jade',
	                dest: '.build/templates',
	                ext: '.js'
	            }
	        ],
	        options: {
	            fullname: function (filepath) {
	                var path = require('path'),
	                    name = path.basename(filepath, '.jade'),
	                    // Hardcoded to forwards slash on purpose. This is due to the way that grunt handles globbing.
	                    // Patterns like **/*.dust are always expanded using '/' with no consideration to the host OS
	                    // separator. This caused issues when trying to build on win_32
	                    parts = filepath.split('/'),
	                    fullname = parts.slice(3, -1).concat(name);

	                // Hardcoded to forwards slash on purpose. Keeps compatibility on win_32
	                return fullname.join('/');
	            }
	        }
	    }
	};
};
