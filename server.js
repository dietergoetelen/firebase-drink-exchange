(function () {
    'use strict';
    
    var express = require('express'),
    	app = express(),
	port = Number(process.env.PORT || 5000);

    app.use(express.static(__dirname + '/public'));
    
    app.get('*', function (req, res) {
        res.sendfile('public/index.html');
    });
    
    app.listen(port, function () {
        console.log('Server listening on port 3000');
    });
}());
