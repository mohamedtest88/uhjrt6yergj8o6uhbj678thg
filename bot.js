const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا بيك');
  }
});

client.login('token');
client.on('message', msg => {
  if (msg.content === 'مرحبا') {
    msg.reply('مرحب بيك');
  }
});

client.login('token');
client.on('message', message => { /// edit fox
      if(message.content ===  "M.hide") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليس لديك صلاحية ادمن :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('تم اخفاء الشات ! :white_check_mark:  ') ///edit fox
 }
});


client.on('message', message => {
      if(message.content === "M.show") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليست لديك صلاحية ادمن :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('تم اضهار الشات ')
 }
});

client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' |M.help|','|M.help|','|M.help|','|M.help|','|M.help|'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/iXMiDo`);
    }, ms);
console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
   let embed = new Discord.RichEmbed()
   let args = message.content.split(' ').slice(1).join(' ');
if(message.content.startsWith( 'M.' + 'sh')) {  //البريفكس
       message.guild.members.forEach(member => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
           member.send(` ${args}`);

        });
    }
    

});

