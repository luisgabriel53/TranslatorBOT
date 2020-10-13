const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

exports.run = (bot,message,args) => {
  	 var nomeServer = message.guild.name;
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const help = new MessageEmbed()
      // Set the title of the field
      .setTitle(`- COMMANDS -`)
      // Set the color of the embed
      .setColor('#03C48A')
      .setThumbnail("https://i.ibb.co/jgg6Fs5/logo-translatorbot.png")
      // Set the main content of the embed
      .setDescription('Guide (this):\n```.help``` \n Translate from a language to another language:\n (THE MAXIMUM IS 10 WORDS PER SENTENCE!) \n ```.translate <langFrom-code> <langTo-code> <text>```')
      .addField('Most used languages:', '**en** - English \n **pt** - Portuguese \n **es** - Spanish \n')
      .addField('What is "lang code"?', 'Is a code to refer a language. So, the code of English is **en**, of Portuguese is **pt**, of Spanish is **es**... \n')
      .addField('Click on this link to view all supported languages and your codes:', 'https://translatorbot.gitbook.io/home/languages')
      .addField('How to use?', 'Example: \n ```.translate en pt Hey there!``` \n The result will be: \n **From English:**\n Hey There! \n **To Portuguese:**\n Olá!')
      .addField('View my code on GitHub:', 'https://github.com/luisgabriel53/TranslatorBOT')
    // Send the embed to the same channel as the message
      .setFooter('TranslatorBOT v1.0.0 | 2020');

    message.channel.type === (`"dm"`) + message.reply('I sent a message with a guide in your DM! Check it.');
    message.channel.type === (`"dm"`) + message.author.send(help);
 
}
exports.help = {
	name: "help"
};