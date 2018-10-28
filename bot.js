const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Who created you?') {
    msg.reply('Kubi12323#2492');
  }
});

client.on('message', msg => {
  if (msg.content === 'Do you like cheesecake?') {
    msg.reply('Of course');
  }
});

client.on('message', msg => {
  if (msg.content === '!cheesecake') {
    msg.reply('GIMME SOME');
  }
});

client.on('message', msg => {
  if (msg.content === '!creator') {
    msg.reply('Kubi12323#2492');
  }
});


client.login('process.env.BOT_TOKEN');
