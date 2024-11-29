let handler = async (m, { conn, text }) => {
  let room = Object.values(conn.game).find(
    room =>
      room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender)
  )
  if (room == undefined) return conn.reply(m.chat, `✳️ You are not in game of TicTacToe 🎮, why are you like this`, m)
  delete conn.game[room.id]
  await conn.reply(m.chat, `✅ The session of *tictactoe is restarted 🎮, dont make the same mistake again like last time*`, m)
}
handler.help = ['delttt']
handler.tags = ['game']
handler.command = ['delttc', 'delttt', 'delxo']

export default handler
