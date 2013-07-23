#!/usr/bin/env node

var mdns = require( 'mdns' ),
	os = require( 'os' );
	


console.log( 'process arguments' , process.argv );


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