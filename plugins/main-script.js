import { promises } from 'fs'
import { join } from 'path'
import axios from 'axios'

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/mxgamecoder/VORTEX-MD'

  try {
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/)

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)

    if (response.status === 200) {
      const repoData = response.data

      // Format the repository information with festive emojis
      const formattedInfo = `
🎄 *Merry Christmas!* 🎄
📂 *Repository Name:* ${repoData.name}
🎅 *Description:* ${repoData.description || 'No description provided'}
👤 *Owner:* ${repoData.owner.login}
⭐ *Stars:* ${repoData.stargazers_count}
🍴 *Forks:* ${repoData.forks_count}
🌐 *URL:* ${repoData.html_url}
      `.trim()

      // Send the formatted information as a festive message
      await conn.relayMessage(
        m.chat,
        {
          requestPaymentMessage: {
            currencyCodeIso4217: 'INR',
            amount1000: 69000,
            requestFrom: m.sender,
            noteMessage: {
              extendedTextMessage: {
                text: formattedInfo,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                  },
                },
              },
            },
          },
        },
        {}
      )
    } else {
      // Handle the case where the API request fails
      await conn.reply(m.chat, '🎅 Unable to fetch repository information. 🎁', m)
    }
  } catch (error) {
    console.error(error)
    await conn.reply(m.chat, '🎄 An error occurred while fetching repository information. 🎅', m)
  }
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'repo', 'script']

export default handler
