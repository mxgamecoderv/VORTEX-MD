import yts from 'yt-search';

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `✳️ Example: *${usedPrefix + command}* Lil Peep hate my life`;
    
    try {
        let res = await yts(text);
        let vid = res.videos[0];
        
        if (!vid) throw `✳️ Video/Audio not found`;

        let { description, thumbnail, videoId, timestamp, views, ago, url } = vid;
        m.react('🎧');

        let play = `
≡ *🎄 VORTEX-MD MUSIC UNDER THE TREE 🎵*
┌──────────────
▢ 📆 *Uploaded:* ${ago} (About time you found this!)
▢ ⌚ *Duration:* ${timestamp} (Hopefully you’ve got the patience for it.)
▢ 👀 *Views:* ${views.toLocaleString()} (Wow, this one’s popular. Let’s hope it’s not overrated.)
└──────────────
🎅 Thanks for vibing with VORTEX-MD. Now, go spread some holiday cheer—or not. 😉
`

        await conn.sendButton(m.chat, play, null, null, [
            ['🎶 MP3', `${usedPrefix}yta ${url}`],
            ['🎥 MP4', `${usedPrefix}ytv ${url}`]
        ], m, { mentions: [m.sender] });

    } catch (error) {
        console.error('Error in handler:', error);
        // You can choose to notify the user if necessary
        throw 'An error occurred while processing your request.';
    }
};

handler.help = ['play'];
handler.tags = ['dl'];
handler.command = ['play', 'playvid'];
handler.disabled = false;

export default handler;
