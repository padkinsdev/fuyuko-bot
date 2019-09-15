const Discord = require("discord.js");
//const config = require("./config_bot.json");

const client = new Discord.Client();

const prefix = "n.";

client.on("message", message => {
  if (message.author.bot){
    return;
  } else if (message.content.startsWith(prefix)){
    if (message.content == prefix + "avatar"){
      message.channel.send(message.author.avatarURL);
    } else if (message.content.startsWith(prefix + "avatar")) {
      let avuser = message.mentions.users.first();
      if (avuser){
        message.channel.send(avuser.avatarURL);
      }
    } else if (message.content == prefix + "hello"){
      message.channel.send ("Hello, <@!" +message.author.id + ">");
    }
    //message.channel.send("I am alive");
  }
});

client.on("ready", function (){
  client.user.setPresence({game:{name: "Fae <3", type: "WATCHING"}, status: "online"});
});

client.login(process.env.token);
