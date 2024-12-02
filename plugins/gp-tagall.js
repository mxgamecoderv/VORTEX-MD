let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
  let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
  
  m.reply(
    `🎄 *LOOK WHO'S HERE!* 🎄\n▢ Group: *${groupMetadata.subject}*\n▢ Members: *${participants.length}*\n${text ? `▢ Message: ${text}\n` : ''}\n┌───⊷ *HEY YOU LAZY ONES* 😒\n` +
      users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` +
      '\n└──✪ 𝚅𝙾𝚁𝚃𝙴𝚇 ┃ ᴮᴼᵀ ✪──\n\n🎅 Oh wow, you all actually showed up. Merry Christmas or whatever, don\'t just sit there.'
    ,
    null,
    {
      mentions: users,
    }
  )
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
