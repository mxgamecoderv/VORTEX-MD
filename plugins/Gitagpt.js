import fetch from 'node-fetch'

let gitagptHandler = async (m, { text, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `🎄 Ho Ho Ho, *${name}*! You can't just leave me hanging. Provide some text or quote a message if you actually want a response. ❄️ Remember, GitaGPT is still in the testing phase, so don’t be surprised if it gets things wrong. 😉`
    
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat)
    const prompt = encodeURIComponent(text)
    const endpoint = `https://ultimetron.guruapi.tech/gita?prompt=${prompt}`

    const response = await fetch(endpoint)
    const data = await response.json()
    const result = data.completion

    m.reply(result)
  } catch (error) {
    console.error('Error:', error)
    throw `*ERROR*`
  }
}
gitagptHandler.help = ['gitagpt']
gitagptHandler.tags = ['AI']
gitagptHandler.command = ['gitagpt']
gitagptHandler.diamond = false

export default gitagptHandler
