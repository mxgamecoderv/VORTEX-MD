let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text)
    throw `🎄 Seriously, you can't even enter a number? Get it together! 😒\n\n📌 Example :\n*${usedPrefix + command}*923444844060`
  if (text.includes('+')) throw `🎅 Leave the *+* out of it, genius. Enter the number without it!`
  if (isNaN(text)) throw '📌 Only numbers, no spaces, no funny business. 🤦‍♂️'

  let group = m.chat
  let link = 'https://chat.whatsapp.com/' + (await conn.groupInviteCode(group))

  await conn.reply(
    text + '@s.whatsapp.net',
    `≡ *INVITATION TO GROUP*\n\nA user has graciously invited you to join this group. 🎁\n\n${link}`,
    m,
    { mentions: [m.sender] }
  )
  m.reply(`✅ Congrats, you actually did it! An invite was sent to the user. Merry Christmas! 🎄`)
}
handler.help = ['invite <923xxx>']
handler.tags = ['group']
handler.command = ['invite', 'invitar']
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
