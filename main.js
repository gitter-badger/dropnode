var	os = require( 'os' ),
	narf = require( 'narf' ),
	request = require( 'request' );


/* This is where the magic happens */

var pullRequests = []; //requests the reciever must confirm

var postRequests = []; //files the pusher has yet to push

var serverFunctions = {

	PUT : {

		/* The sender of the file asks the receiver 
		to retrieve it from them, the request is added to the
		pullRequests list for confirmation */
		pullRequest : function( data , callback ){

			//TODO:
			callback( { 'success' : 'target recieved request' } );
		},

		/* The sender cancels the pullRequest removing it 
		from the list */
		cancelRequest : function( data , callback ){

			//TODO:
			callback();
		},

		/* The receiver rejects a request and the request is removed 
		from the postRequests list*/
		rejectReqeust : function( data , callback ){

			//TODO:
			callback( { 'success' : 'recieved rejection' } );
		}
	},

	GET : {

		/* The receiver accepts the request and pulls the file */
		acceptRequest : function( data, callback ){

			//TODO:
			callBack( { 'success' : 'transfer complete' } );
		}
	}
};

var clientFunctions = {

	/* ask a receiver if it wants a file */
	pullRequest : function(){

		var method = 'PUT',
			serverfunction = 'pullRequest';


	}
};

var httpServer = new narf.HttpServer();
httpServer.start( 'auto' );

httpServer.on( 'port' , function( port ){

	console.log( 'running narf on port' , port );

} );