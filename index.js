const Discord = require("discord.js")
const client = new Discord.Client()
//const fs = require("fs")
//const path = require("path")
const sql = require("sqlite3")
const config = require("./data/config.json")
const commands = require("./messageHandling/commands.js")
const prep = require("./messageHandling/preprocess.js")
const initial = require("./data/initialize.js")

database = initial.init()

client.on("ready", function(){
  console.log("Online and ready")
});

client.on("message", message => {
  if (message.author.bot){
    return null;
  } else {
    //prep.process(message)
    if (message.content.startsWith(config.prefix)){
      let command = message.content.split(' ')[0];
      command = command.slice(config.prefix.length);
      let args = message.content.split(' ').slice(1);
      let cmd = commands.parseCommand(command);
      cmd(message, args)
    }
  }
});

client.login(process.env.token)
