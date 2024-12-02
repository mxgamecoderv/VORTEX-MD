import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  if (!global.db.data.chats[m.chat].nsfw)
    throw `🎅 *HO HO HO!* This group isn't naughty enough for NSFW. Turn it on with *${usedPrefix}enable* nsfw.`;

  let userAge = global.db.data.users[m.sender].age;
  if (userAge < 17) throw `🎄 *NO ENTRY FOR KIDS!* Come back when you’re old enough to handle it.`;

  try {
    m.reply(global.wait);
    let res = await fetch('https://api.guruapi.tech/hanime/trend');
    let json = await res.json();

    if (!json || json.length === 0) throw '*ERROR: Looks like Santa’s list is empty.*';

    let topTrending = json.slice(0, 8);

    let message = `🔥🎅 *Top 8 Trending Naughty Hentai for Christmas!* 🎅🔥\n\n`;

    topTrending.forEach((data, index) => {
      message += `
${index + 1}. *${data.name}*
   🎁 Link: https://hanime.tv/videos/hentai/${data.slug}
   👀 Views: ${data.views}
   🛷 Enjoy the sleigh ride!
`;
    });

    await conn.sendFile(
      m.chat,
      topTrending[0].cover_url,
      'hanime.jpeg',
      `${message}\n🎄 *Don't overdo it, it’s Christmas after all!*`,
      m
    );
  } catch (error) {
    console.error(error);
    throw `*🚨 ERROR: Looks like the Grinch stole your request. Try again later!*`;
  }
};

handler.command = /^hentai$/i;
export default handler;
