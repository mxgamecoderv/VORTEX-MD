import fetch from 'node-fetch';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!args[0]) {
    throw `✳️ Enter the Instagram Username\n\n📌Example: ${usedPrefix + command} mxgamecoder`;
  }
  
  try {
    let response = await fetch(`https://www.guruapi.tech/api/igstalk?username=${args[0]}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data from API');
    }

    let res = await response.json();

    let te = `
🎄──「 *STALKING UNDER THE MISTLETOE* 」──🎄
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Followers:* ${res.followers} (Why so popular? Chill, it’s just Instagram!)
▢ *🫂Following:* ${res.following} (That’s a lot of people. Obsessed much?)
▢ *📌Bio:* ${res.biography || "This person is so boring they didn’t even write a bio."}
▢ *🏝️Posts:* ${res.posts} (Is this their life or a photoshoot?)
▢ *🔗 Link:* https://instagram.com/${res.username.replace(/^@/, '')} (Don’t pretend you’re not clicking this.)
🎅────────────
`

    await conn.sendFile(m.chat, res.profile_picture, 'profile_picture.png', te, m);

  } catch (error) {
    console.error(error);
    throw 'An error occurred while fetching the Instagram profile. Please try again later.';
  }
};

handler.help = ['igstalk'];
handler.tags = ['downloader'];
handler.command = ['igstalk'];

export default handler;

