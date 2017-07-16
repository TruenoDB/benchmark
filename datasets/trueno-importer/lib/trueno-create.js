"use strict";

/**
 * @author Edgardo A. Barsallo Yi (ebarsallo)
 *
 * Create a Trueno graph database.
 * @module trueno-importer
 * @see lib/trueno-importer
 */

/* import modules */
const Promise = require("bluebird");
const Socket = require("uws");
/* Trueno Server */
const url="ws://127.0.0.1:8007";
/* Database */
let dbName;
/* WebSocket connection */
let ws;

/* Create callbacks reference */
var callbacks = {};
/* Callback name */
var counter = "create_1";
/* Payload object */
var payload = {};

/**
 * Create database
 */
function create() {

  payload = {
    callbackIndex: counter,
    action: "create",
    object: {
      index: dbName
    }
  };

  ws.send(JSON.stringify(payload));
  /* adding callback */
  callbacks[counter] = function(results){
    console.log('Graph created: [%s]', dbName);
    process.exit()
  };
}


if ( process.argv.length > 2 ) {
  dbName = process.argv[2];
  /* establish connection with server */
  ws = new Socket(url);
  /* set callbacks */
  ws.on("open", function open() {
    create();
  });

  ws.on("error", function error() {
    console.log("Cannot establish connection with Trueno database");
    process.exit();
  });

  ws.on("message", function(data, flags) {
    let obj = JSON.parse(data);
    callbacks[obj.callbackIndex](obj);
  });

  ws.on("close", function(code, message) {
    console.log("Disconnection: " + code + ", " + message);
  });

} else {
  console.log("usage: trueno-create <database>");
}


