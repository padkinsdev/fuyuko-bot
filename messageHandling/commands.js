function hello(message, args){
  message.reply("hello")
}

cmdList = {'hello': hello}

module.exports.parseCommand = function(command){
  if (!(command in cmdList)){
    return null;
  } else {
    return cmdList[command];
  }
}
