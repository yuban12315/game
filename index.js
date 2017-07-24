"use strict"
let express=require('express')
let app=express()
let server=require('http').Server(app)
let WebSocketServer = require('ws').Server
let wss=new WebSocketServer({server})
