let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender);
  let img = 'https://i.imgur.com/tGALoC3.jpeg';
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };

  let messageContent = {
text: '🎄 VORTEX-𝗠𝗗 𝗜𝗦 𝗥𝗨𝗡𝗡𝗜𝗡𝗚 🎅🏼 - And unlike you lazy fools, it’s working hard this Christmas!',
contextInfo: {
  mentionedJid: [m.sender], // Mention the sender who dared to disturb this festive bot
  externalAdReply: {
    title: '🎅🏼 © MX-GΔMΞCØDΞR 🎁', // Ho ho ho, here’s your code Santa!
    body: '🔔 Stop slacking and do something useful for once!', // A gentle nudge for holiday productivity
    thumbnailUrl: img, // A festive thumbnail to get in the holiday spirit
    sourceUrl: 'https://whatsapp.com/channel/0029Vavz0e6E50Ugp30Z6z0W', // Click for some Christmas magic
    mediaType: 1, // Media to grab their attention
    renderLargerThumbnail: true, // Make the thumbnail jolly and big
 
      },
    },
  };

  // Send the message with the external ad reply
  await conn.sendMessage(m.chat, messageContent, { quoted: con });
};

handler.help = ['alive'];
handler.tags = ['main'];
handler.command = /^(alive)$/i;

export default handler;
