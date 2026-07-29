/*
* Original author: HG
* Latest contributor: HG
* Client name: Immersicom
* Project name: Immersicom
* Project number: 0
* Main purpose: Node, Express,  server controller.
**/
(function () {
    const express = require('express');
    const path = require('path');
    
    const app = require('express')();
    const http = require('http').Server(app);
    
    // Crose origen responses
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    // Point static path to dist 
    app.use(express.static(__dirname + '/'));
    
    // Catch all other routes and return the index or any other file
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + 'index.html'));
    });
    
    
    /*****************************************************
     * Get port form eviroment and add store in Express. *
     *****************************************************/
    
    const port = process.env.PORT || 80;
    app.set('port', port);
    
    /**
     * Listen on provided port, on all network interface
     */
    http.listen(port, () => { console.log(`API running on localhost:${port}`) });
    
      // Load app Dependancy Injection Into Models 
      module.exports = app;
    })();
    