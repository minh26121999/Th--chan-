var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
token: auth.token,
autorun: true
});

bot.on('ready', function (evt) {
logger.info('Connected');
logger.info('Logged in as: ');
logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
// Our bot needs to know if it will execute a command
// It will listen for messages that will start with `-`
if (message.substring(0, 1) == '-') {
var args = message.substring(1).split(' ');
var cmd = args[0];

    args = args.splice(1);
    switch(cmd) {
        // -thongu
        case 'thongu':
            bot.sendMessage({ to: channelID, message:'Ngu cái quần què, ném vòng chết mẹ giờ :punch::skin-tone-2: '});    
        break;    
        // -betkeo
        case 'betkeo':
            bot.sendMessage({ to: channelID, message:'Có thế cũng hỏi, ra đê ở luôn đi :smiling_imp: '})
        break;
        // -thodethuong
        case 'thodethuong':
            bot.sendMessage({ to: channelID, message:'Baka, cái đấy ai chả biết >.<'})
        break;
        // -thooi
        case 'thooi':
            bot.sendMessage({ to: channelID, message:'Dạ, có thố đây :heart_eyes: '})
        break;
        // -hola
        case 'hola':
            bot.sendMessage({ to: channelID, message:'Hola hola, sặc thú :kissing_smiling_eyes: '})
        break;
        default: 
            bot.sendMessage({ to: channelID, message:'Spam qq gì lắm, cho bay màu giờ !'})
        break;
        // -nochuituithooi
        case 'nochuituithooi':
            bot.sendMessage({ to: channelID, message:'Đâu đứa nào dám chủi đại nhân,để thố cho mất màu luôn :rage: '})
        break;        
    }
}
});

// THIS MUST BE THIS WAY
client.login{process.env.NDc3ODg5MDQyNTE2ODAzNjA0.DlHNKA.49hpKNnYYcR4fZ70fjX9y-qJaVk};