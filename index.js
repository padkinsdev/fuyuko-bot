const Discord = require("discord.js");
//const config = require("./config_bot.json");

const client = new Discord.Client();

const prefix = "n.";
const embedColor = "0x42b5eb"

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
    } else if (message.content.startsWith(prefix + "invite")){
      const embed = new Discord.RichEmbed()
        .setTitle("Invite me to your server!")
        .setColor(embedColor)
        .setDescription("Use this:\n\nhttps://discordapp.com/api/oauth2/authorize?client_id=609181957783552011&permissions=1598029046&scope=bot")
        .setThumbnail(client.user.avatarURL);
      message.channel.send(embed);
    } else if (message.content.startsWith(prefix + "support")){
      const embed = new Discord.RichEmbed()
        .setTitle("Official support server")
        .setColor(embedColor)
        .setDescription("Join my official support server:\n\nhttps://discord.gg/MnYNvUa")
        .setThumbnail(client.user.avatarURL);
      message.channel.send(embed);
    }
  }
});

client.on("ready", function (){
  client.user.setPresence({game:{name: "Fae <3", type: "WATCHING"}, status: "online"});
});

client.login(process.env.token);
