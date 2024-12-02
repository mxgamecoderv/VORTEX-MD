import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender)
 if (!text) {
    throw `🎄 Ho Ho Ho, *${name}*! What’s up? You want to talk or just wasting my time? 🤔 Respond with *${usedPrefix + command}* (your message)\n\n📌 Example: *${usedPrefix + command}* Hey bot, what’s cooking?`
}


  m.react('🗣️')

  const msg = encodeURIComponent(text)

  const res = await fetch(`https://ultimetron.guruapi.tech/rekha?prompt=${msg}`)

  const json = await res.json()

  let reply = json.result.response
  m.reply(reply)
}

handler.help = ['bot']
handler.tags = ['fun']
handler.command = /^(alexa)/i

export default handler
