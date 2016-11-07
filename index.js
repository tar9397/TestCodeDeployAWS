// Load the http module to create an http server.
// var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);

// var assert = require('assert');
// var Promise = require("bluebird");

var io2 = require('socket.io-client');
var socket2 = io2.connect('http://10.0.132.50:50010');


var arr1 = ['1','2','3'];
var arr2 = ['ar1','ar2','ar3'];
// ********************************************************
//               socket2 client function 
// ********************************************************
// socket2.on('connect', function(){
    // console.log('local service start');
    
    // socket2.emit('redisSub');
    
    // socket2.on('ConfigWebDataEvent', function(data) {
        // console.log("data is: " + JSON.stringify(data));
    // });
    
    // // socket2.on('write_db', function(zone) {
        // // console.log("db data " + zone + " is update");
// // //        UpdateDataServer(zone , 0);
    // // });
    
    // // socket2.on('update_stats', function(data) {
// // //        console.log("update cmd " + data.deviceId );
// // //        console.log("receive update_stats " + JSON.stringify(data));
        // // data.add = data.add - BaseRegiterToRead + 1;
        // // for (var key in map_id_web_client) {
            // // if (map_id_web_client[key] == data.deviceId) {
                // // data.deviceId = key;
                // // console.log("update cmd id " + data.deviceId);
            // // }
        // // }
        // // io.emit('update_control',data);
// // //        UpdateDataServer(zone , 1);
    // // }); 
// });

// socket2.on('disconnect', function(){
    // console.log('local service stop');
// });
   
   
console.log('444555');

console.log('before push' + arr1);
arr1.push(arr2);

console.log('after push' + arr1);