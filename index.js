//this refrences discord.js
const Discord = require('discord.js');
const { prefix, token } = require('./config');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('ready!')
})

client.on('message', message =>{
    //console.log(message.content);

    if(message.content.startsWith(`${prefix}info`)) {
        message.channel.send("Hello, im MüünGuard a fully kitted admin bot tailor made by Sir Beardy for use in this server. i am still in the embryonic stage")
    }
})

client.on('message', message =>{
    if(message.content.startsWith(`${prefix}about`)) {
        message.channel.send("im an open source admin bot. im deployed on this server during the R&D prosess. for more info and source code files click here ---> https://github.com/SirBeardy/MuunGuard")
    }
})


client.login(token)