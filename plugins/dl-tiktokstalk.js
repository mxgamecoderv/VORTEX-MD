import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {
  if (!text) throw `✳️Enter the Username of a TikTok user `
  let res = await fg.ttStalk(args[0])
  let txt = `
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

  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['downloader']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
