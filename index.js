const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
  //response.sendFile(__dirname + '/site/index.html');
  
  //app.use(morgan('combined'))
});

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
//const Colours = require("colors");

const Client = new Discord.Client();
const client = new Discord.Client();

//const token = process.env.TOKEN;
const prefix = "!";
const message = "";

var request = require('request');

var developerids = ["204669722094993417"]
var nullPlaceholder = "null";

var serverIP = "158.69.118.73";
var serverPort = "25615";
//var isOnline = "null";
client.on('ready',() => {
  console.log(`Logged in as: ${client.user.tag}!`);
  console.log(`Client Id: ${client.user.id}!`);
  console.log(`Is client Verified?: ${client.user.verified}!`);
  console.log(`Client Created on: ${client.user.createdAt}!`);
  
    
  //hook.send('I am now alive!');
    
  //game(streamingGame);
});

client.on('message', message => {
    if (message.author === client.user) return;
    if(message.author.bot) return;

  
  
});


client.login(process.env.TOKEN);