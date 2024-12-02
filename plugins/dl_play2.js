import ytdl from 'youtubedl-core';
import axios from 'axios';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';

const streamPipeline = promisify(pipeline);

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example: ${usedPrefix}${command} naruto blue bird`;
  await m.react('⏳'); // Assuming rwait is an emoji

  try {
    const query = encodeURIComponent(text);
    const response = await axios.get(`https://apisku-furina.vercel.app/api/downloader/play?q=${query}&apikey=indradev`);
    const result = response.data.results[0];

    if (!result) throw 'Video Not Found, Try Another Title';

    const { title, thumbnail, duration, views, uploaded, url } = result;

    const captvid = `
┌──「 *🎄 TIKTOK STALKING 🎅* 
▢ *🔖 Name:* ${res.name} (Nice name—assuming you didn’t steal it!)
▢ *🔖 Username:* ${res.username} (Catchy, or trying too hard?)
▢ *👥 Followers:* ${res.followers.toLocaleString()} (Quite the crowd, huh?)
▢ *🫂 Following:* ${res.following.toLocaleString()} (Don’t forget quality over quantity!)
▢ *📌 Bio:* ${res.desc || "No bio? Come on, even Santa has one!"}

▢ *🔗 Link:* https://tiktok.com/${res.username.replace(/^@/, '')}
└────────────
🎁 Thanks for using *VORTEX-MD*! Remember, TikTok fame doesn’t make you a star, but it’s fun to pretend. 😉
`

    await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid }, { quoted: m });

    const audioStream = ytdl(url, {
      filter: 'audioonly',
      quality: 'highestaudio',
    });

    const tmpDir = os.tmpdir();
    const audioPath = `${tmpDir}/${title}.mp3`;
    const writableStream = fs.createWriteStream(audioPath);

    await streamPipeline(audioStream, writableStream);

    const doc = {
      audio: {
        url: audioPath,
      },
      mimetype: 'audio/mpeg',
      ptt: false,
      waveform: [100, 0, 0, 0, 0, 0, 100],
      fileName: title,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: url,
          title: title,
          body: 'HERE IS YOUR SONG',
          sourceUrl: url,
          thumbnail: await (await conn.getFile(thumbnail)).data,
        },
      },
    };

    await conn.sendMessage(m.chat, doc, { quoted: m });

    // Cleanup
    await fs.promises.unlink(audioPath);
    console.log(`Deleted audio file: ${audioPath}`);
  } catch (error) {
    console.error(error);
    throw 'An error occurred while searching for YouTube videos.';
  }
};

handler.help = ['play'].map((v) => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^play7$/i;
handler.exp = 0;

export default handler;
