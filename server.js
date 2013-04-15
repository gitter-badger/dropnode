var mdns = require('mdns'),
	os = require( 'os' ),
	narf = require( 'narf' ),
	request = require( 'request' );

// advertise a http server on relavant port
var txt_record = {

	name : 'dropnode'
};

var ad = mdns.createAdvertisement( mdns.tcp('http'), 8080 , { txtRecord : txt_record } );
ad.start();


// watch all http servers
var browser = mdns.createBrowser(mdns.tcp('http'));
browser.on('serviceUp', function(service) {

	if ( service.hasOwnProperty( 'txtRecord' ) ){

		if ( service.txtRecord.hasOwnProperty( 'name' ) ){

			if ( service.txtRecord.name === 'dropnode' ){

				//console.log( 'service up: ', service );
				var data = {};
				data.name = service.name;
				data.port = service.port;

				console.log(  'a' , data );
			}
		}
	}

});
browser.on('serviceDown', function(service) {
  console.log("service down: ", service);
});
browser.start();

// discover all available service types
var all_the_types = mdns.browseThemAll(); // all_the_types is just another browser...


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