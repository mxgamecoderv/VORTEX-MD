import pkg from '@whiskeysockets/baileys';
const { proto, prepareWAMessageMedia, generateWAMessageFromContent } = pkg;
import moment from 'moment-timezone';
import { createHash } from 'crypto';
import { xpRange } from '../lib/levelling.js';

let handler = async (m, { conn, usedPrefix }) => {
    let d = new Date(new Date() + 3600000);
    let locale = 'en';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;

    let user = global.db.data.users[who];
    let { level } = user;
    let { min, xp, max } = xpRange(level, global.multiplier);
    let greeting = ucapan();

    let str = `
      『 *VORTEX-MD* 』  
      © 2024 *MX-GΔMΞCØDΞR*`;

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: str
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "Use The Below Buttons idiot"
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: { url: './assets/Ultra.jpg' } }, { upload: conn.waUploadToServer })),
                        title: null,
                        subtitle: null,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": JSON.stringify({
                                    "title": "TAP TO OPEN",
                                    "sections": [{
                                        "title": "HERE IS BUTTONS MENU AND MAKE SURE YOU DON'T FORGET THEN FOOL SO THAT YOU WON'T DISTURB ME  🥱",
                                        "highlight_label": "𝚅𝙾𝚁𝚃𝙴𝚇",
                                        "rows": [
                                            { "header": "", "title": "🎁 *Bot Menu* - *Bet you still need help, don’t you, idiot?* ", "description": "The Bot's secret control panel. But don't expect to understand it, you clueless mess. 🎅", "id": `${usedPrefix}botmenu` },
{ "header": "", "title": "🖲️ *Owner Menu* - *Yeah, it’s for you, Boss... like you can handle it* 🎄", "description": "For you, the so-called Boss. Not like you can do anything with it, right? 🎁", "id": `${usedPrefix}ownermenu` },
{ "header": "", "title": "🎉 *AI Menu* - *Because you need machines to do everything for you* 🎄", "description": "Your Personal AI Copilots, because we all know you can't do sh*t by yourself. 🎅", "id": `${usedPrefix}aimenu` },
{ "header": "", "title": "🎧 *Audio Menu* - *Fix your trash audio, loser* 🎁", "description": "Tune the MP3/Audio however you wish, though no amount of magic will save your taste in music. 🎄", "id": `${usedPrefix}aeditor` },
{ "header": "", "title": "🍫 *Anime Menu* - *For when you need to escape your miserable life* 🎅", "description": "Animated Images, Stickers, and Videos. Not like you'll ever get a life, though. 🎄", "id": `${usedPrefix}animemenu` },
{ "header": "", "title": "🪁 *Anime Info* - *Like IMDB, but you’ll never understand it* 🎁", "description": "Full Information About Animes, though it's probably too complicated for your brain. 🎄", "id": `${usedPrefix}infoanime` },
{ "header": "", "title": "🛫 *Group Menu* - *For when you want to mess up a group chat* 🎄", "description": "Group shenanigans central, but I know you'll screw it up. 🎁", "id": `${usedPrefix}groupmenu` },
{ "header": "", "title": "🗂️ *Download Menu* - *You won’t use this, idiot* 🎅", "description": "'DL' stands for 'Delicious Loot', though you’ll never find anything worthwhile. 🎄", "id": `${usedPrefix}dlmenu` },
{ "header": "", "title": "🎭 *Fun Menu* - *Good luck having fun, loser* 🎁", "description": "Games, jokes, and instant ROFLs... but we all know you'll ruin it. 🎄", "id": `${usedPrefix}funmenu` },
{ "header": "", "title": "💵 *Economy Menu* - *Your virtual vault of failure* 🎅", "description": "Your personal vault of virtual economy, though you'll never be rich. 🎁", "id": `${usedPrefix}economymenu` },
{ "header": "", "title": "🎮 *Game Menu* - *You’re gonna lose, just admit it* 🎄", "description": "Enter the gaming arena, but we both know you’re gonna fail. 🎅", "id": `${usedPrefix}gamemenu` },
{ "header": "", "title": "🫐 *Sticker Menu* - *Stickers for your sad life* 🎁", "description": "A rainbow of stickers for when your life is as dull as a Christmas tree in January. 🎄", "id": `${usedPrefix}stickermenu` },
{ "header": "", "title": "🖍️ *Fancy Text* - *You can’t even do basic text, huh?* 🎅", "description": "Fancy Text Generator, though you’ll still mess it up. 🎄", "id": `${usedPrefix}fancy` },
{ "header": "", "title": "🎊 *Tool Menu* - *For all your failed projects* 🎁", "description": "Your handy-dandy toolkit, though I know you'll break it. 🎄", "id": `${usedPrefix}toolmenu` },
{ "header": "", "title": "🏵️ *Logo Menu* - *Create a logo that screams failure* 🎄", "description": "Create a logo that screams ‘lost and confused’, just like you. 🎁", "id": `${usedPrefix}logomenu` },
{ "header": "", "title": "🖌️ *Fancy Text2* - *You’ll mess this up too, right?* 🎅", "description": "From Text To Fancy Text As jpg, but we all know you won’t get it right. 🎄", "id": `${usedPrefix}fancy2` },
{ "header": "", "title": "🌄 *NSFW Menu* - *For when your bad decisions get worse* 🎁", "description": "The After Dark menu. Bet you can’t resist. 🎅", "id": `${usedPrefix}nsfwmenu` }

                                        ]
                                    }]
                                })
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": "MENU2 ❇️",
                                    "id": `${usedPrefix}menu2`
                                })
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": "OWNER 🌟",
                                    "url": "https://wa.me/9021506036"
                                })
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": "SCRIPT 💕",
                                    "url": "https://github.com/mxgamecoder/VORTEX-MD"
                                })
                            }
                        ],
                    })
                })
            }
        }
    }, {});

    await conn.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}

handler.help = ['main'];
handler.tags = ['group'];
handler.command = ['menu2', 'help2', 'h', 'commands2'];

export default handler;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

function ucapan() {
    const time = moment.tz('Asia/Karachi').format('HH');
    let res = "happy early in the day☀️";
    if (time >= 4) {
        res = "Good Morning 🥱";
    }
    if (time >= 10) {
        res = "Good Afternoon 🙂";
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇";
    }
    if (time >= 18) {
        res = "Good Night 🌙";
    }
    return res;
}
