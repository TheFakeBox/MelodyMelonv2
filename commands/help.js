/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: '🎹 Play', value: 'Stream a song from a given link or text from sources' },
          { name: '⏹️ Stop', value: 'Makes the bot stop playing music and leave the voice' },
          { name: '📊 Queue', value: 'View and manage the song queue of this server' },
          { name: '⏭️ Skip', value: 'Skip the current playing song' },
          { name: '⏸️ Pause', value: 'Pause the currently playing song' },
          { name: '▶️ Resume', value: 'Resume the current paused song' },
          { name: '🔁 Loop', value: 'Toggle loop mode for queue and current song' },
          { name: '🔄 Autoplay', value: 'Enable or disable autoplay [play random songs ]' },
          { name: '⏩ Seek', value: 'Seek to a specific time in the current song' },
          { name: '⏮️ Previous', value: 'Play the previous song in the queue' },
          { name: '🔀 Shuffle', value: 'Shuffle the songs in queue' },
          { name: '📃 playlist', value: 'manage the playlists' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=66845f7a&is=66830dfa&hm=329ab5cf9e921ea8d70583f76c0a987319fc59eedea50265c4317c5f5d81a1a3&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
          { name: '🏓 Ping', value: "Check the bot's latency" },
          { name: '🗑️ Clear', value: 'Clear the song queue of this server' },
          { name: '⏱️ Time', value: 'Display the current song playback time' },
          { name: '🎧 Filter', value: 'Apply filters to enhance the sound as you love' },
           { name: '🎵 Now Playing', value: 'Display the currently playing song information' },
          { name: '🔊 Volume', value: 'Adjust the music volume [ hearing at high volumes is risky ]' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=66845f7a&is=66830dfa&hm=329ab5cf9e921ea8d70583f76c0a987319fc59eedea50265c4317c5f5d81a1a3&')
      const button1 = new ButtonBuilder()
        .setLabel('My Online Store')
        .setURL('https://www.etsy.com/shop/redbottees/?etsrc=sdt')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/jSWEmQTAdS')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
