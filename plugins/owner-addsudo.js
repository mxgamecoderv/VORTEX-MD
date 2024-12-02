let handler = async (m, { conn, text }) => {
  let who;
  if (m.isGroup) {
    who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  } else {
    who = m.chat;
  }
  
  if (!who) throw 'Tag the person you want to make an Owner and be careful if anything happen am not responsible for it and Merry Christmas 🎄🎁!';
  
  let name = await conn.getName(who);
  if (global.owner.some(owner => owner[0] === who.split('@')[0])) throw 'This person is already an owner!';
  
  global.owner.push([who.split('@')[0], name, true]);
  
  const caption = `Now @${who.split('@')[0]} has been made an Owner🙂!`;
  await conn.reply(m.chat, caption, m, {
    mentions: conn.parseMention(caption),
  });
};

handler.help = ['addowner @user'];
handler.tags = ['owner'];
handler.command = /^(add|give|-)(owner|sudo)$/i;
handler.owner = true;

export default handler;