let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database, I won't tell you again bastard`

  let pp = './assets/B.jpg'
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(850)

  let lkr
  switch (command) {
    case 'listmenu':
    case 'menulist':
      lkr = '*Ready to jingle your bells? Here are your ticket options. If you mess up, Santa wont be so jolly with you:*\n\n' +
        '🌅 *' +
        usedPrefix +
        "botmenu* - The Bot's naughty list. Don’t screw it up.\n\n" +
        '🖲️ *' +
        usedPrefix +
        "ownermenu* - For the big boss. Are you even worthy?\n\n" +
        '🛫 *' +
        usedPrefix +
        'groupmenu* - Groups to wrangle your chaos.\n\n' +
        '🗂️ *' +
        usedPrefix +
        "dlmenu* - ‘DL’ stands for ‘Don’t Lose it.’\n\n" +
        '🎭 *' +
        usedPrefix +
        "funmenu* - Games, jokes, and instant mayhem.\n\n" +
        '💵 *' +
        usedPrefix +
        'economy* - Your vault of imaginary riches.\n\n' +
        '🎮 *' +
        usedPrefix +
        'gamemenu* - Play hard or stay bored.\n\n' +
        '🫐 *' +
        usedPrefix +
        'stickermenu* - Stickers galore for your cringe moments.\n\n' +
        '🪙 *' +
        usedPrefix +
        "toolsmenu* - The toolbox for fixing your dumb mistakes.\n\n" +
        '🧲 *' +
        usedPrefix +
        'logomenu* - Create a logo that’s not totally embarrassing.\n\n' +
        '💟 *' +
        usedPrefix +
        'nsfwmenu* - Santa’s naughty corner. You’re welcome.\n\n' +
        '🌀 *' +
        usedPrefix +
        'aimenu* - Your digital elf helper. Try not to break it.\n\n' +
        '🎧 *' +
        usedPrefix +
        'aeditor* - Make your music less awful.\n\n' +
        '🎉 *' +
        usedPrefix +
        'animemenu* - Anime chaos for weebs like you.\n\n' +
        '🍒 *' +
        usedPrefix +
        'reactions* - Anime reactions for your drama.\n\n' +
        '🪁 *' +
        usedPrefix +
        'infoanime* - Anime ratings because you’re picky.\n\n' +
        '💡 *' +
        usedPrefix +
        'imagen* - Design images that might not suck.\n\n' +
        '🃏 *' +
        usedPrefix +
        'randompic* - Random pics for wasting time.\n\n' +
        '🎥 *' +
        usedPrefix +
        'randomvid* - Random videos to kill boredom.\n\n' +
        '🖍️ *' +
        usedPrefix +
        'fancy* - Fancy text for your plain words.\n\n' +
        '🖌️ *' +
        usedPrefix +
        'fancy2* - Add some sparkle to your sad fonts.'
        
        break

 case 'botmenu':
      lkr = `
╭───『 🎄 *Christmas Bot Menu* 🎁 』─⛄

🎅 ◈ •quran  
      Get divine guidance straight from the holy texts. 

🤶 ◈ •autoreact  
      Let the bot handle reactions like a festive elf. 

🎄 ◈ •gita  
      Seek wisdom from the Bhagavad Gita this holiday season. 

⏳ ◈ •ping  
      Test your connection faster than Santa's sleigh. 

🎅 ◈ •uptime  
      See how long the bot has been jingling. 

🎁 ◈ •alive  
      Check if the bot's still spreading holiday cheer. 

🧑‍🎄 ◈ •language  
      Change the bot's language like changing carols. 

🎄 ◈ •server  
      Get server details in the Christmas spirit. 

🎁 ◈ •rentbot  
      Rent your personal Santa (bot). 

🎅 ◈ •listrent  
      See who else has a rented elf. 

⛔ ◈ •stoprent  
      End your bot rental; Santa needs a break. 

🎄 ◈ •botinfo  
      Learn more about your Christmas bot companion. 

🤶 ◈ •owner  
      Contact the head elf (bot owner). 

🎅 ◈ •script  
      Get the blueprint for Santa's helper (source code). 

🎁 ◈ •speedtest  
      Test speeds faster than reindeer dashing. 

🎄 ◈ •runtime  
      How long has this bot been ho-ho-hopping? 

🎁 ◈ •menu  
      Access the ultimate Christmas feast of features. 

⛄ ◈ •menu2  
      A second serving of festive options. 

🎅 ◈ •menu3  
      Even more holiday cheer! 

🤶 ◈ •menu4  
      Wrapping it all up like a Christmas gift. 

🎄 ◈ •donate  
      Support Santa's workshop (bot maintenance). 

🎅 ◈ •groups  
      Manage your Christmas caroling groups. 

🎁 ◈ •blocklist  
      Naughty list for blocking grinches. 

🎄 ◈ •listprem  
      Who’s on Santa's premium list? 

🎅 ◈ •listmenu  
      View a decorated menu of choices. 

⛄ ◈ •mrcs  
      Special Christmas features for premium users. 

🎄 ◈ © MX-GΔMΞCØDΞR - Bringing festive vibes to your chat!

╰─────────🎄
`
// Your bot menu message here
      break
      case 'aimenu':
 lkr = `
╭───『 🎄 *Christmas AI Menu* 🎁 』─⛄

🎅 ◈ •chatgpt  
      Your festive AI assistant for all things merry.

🤶 ◈ •googleit  
      Find answers faster than Santa delivers gifts. 

🎄 ◈ •blackbox  
      Unwrap the secrets with this tool. 

🎁 ◈ •gpt4  
      Advanced AI spreading holiday cheer. 

🎅 ◈ •travel  
      Plan your holiday journeys with precision. 

🎄 ◈ •blackpink  
      Celebrate Christmas with your favorite idols. 

🎁 ◈ •image  
      Create festive images for the season. 

⛄ ◈ •google  
      The ultimate sleigh ride for searching the web. 

🎅 ◈ •bro  
      Your AI buddy for casual chats this holiday. 

🎄 ◈ •ai  
      Dive into artificial intelligence, Christmas style. 

🎁 ◈ •fact  
      Learn amazing holiday facts and beyond. 

🤶 ◈ •why  
      Unravel the mysteries of Christmas (and more).

╰─────────🎄
`
//
 break
      case 'imagen':
      case 'imagenai':
lkr = `
╔══🎨══『 🌟 *Imagen Menu* 🎁 』══🎨══╗

🎅 🎨 • *hercai-lexica*  
      Explore creative AI-generated lexicon art.

🤶 🎨 • *hercai-raava*  
      Discover festive Raava-style designs.

🎄 🎨 • *hercai-shonin*  
      Transform images with Shonin's unique touch.

🎁 🎨 • *hercai-cartoon*  
      Cartoonify your world this holiday season.

⛄ 🎨 • *hercai-animefy*  
      Bring Christmas to life with anime-styled edits.

🎅 🎨 • *hercai-prodia*  
      Elevate images with Prodia's AI expertise.

🎁 🎨 • *hercai-simurg*  
      Create magical visuals, Simurg style.

🎄 🎨 • *photoleap*  
      Leap into advanced photo editing.

🎅 🎨 • *realistic*  
      Design lifelike Christmas scenes and memories.

🤶 🎨 • *lexica*  
      Generate holiday-themed lexica designs.

⛄ 🎨 • *dalle*  
      Create stunning, festive art with AI.

╚═════════🎄══╝
` //
 break
    case 'ownermenu':
lkr = `
🎄 ╔═『 🌟 *Owner Menu* 🎁 』══╗ 🎄

🎅 🎯 • *enable*  
🤶 🎯 • *intro*  
🎄 🎯 • *banchat*  
🎁 🎯 • *autoreact*  
⛄ 🎯 • *unbanchat*  
🎅 🎯 • *banuser*  
🎄 🎯 • *unbanuser*  
🎁 🎯 • *broadcast*  
⛄ 🎯 • *broadcastgc*  
🎅 🎯 • *readviewonce*  
🎄 🎯 • *setprivacy*  
🎁 🎯 • *setppbot*  
⛄ 🎯 • *setprefix*  
🎅 🎯 • *resetprefix*  
🎄 🎯 • *getfile*  
🎁 🎯 • *getplugin*  
⛄ 🎯 • *plugins*  
🎅 🎯 • *listplugins*  
🎄 🎯 • *install*  
🎁 🎯 • *remove*  
⛄ 🎯 • *savecontact*  
🎅 🎯 • *fakereply*  
🎄 🎯 • *delcmd*  
🎁 🎯 • *listcmd*  
⛄ 🎯 • *getmsg*  
🎅 🎯 • *addprem*  
🎄 🎯 • *delprem*  
🎁 🎯 • *addsudo*  
⛄ 🎯 • *delsudo*  
🎅 🎯 • *addowner*  
🎄 🎯 • *delowner*  
🎁 🎯 • *allvars*  
⛄ 🎯 • *broadcast*  
🎅 🎯 • *fullpp*  
🎄 🎯 • *inspect*  
🎁 🎯 • *cleartmp*  
⛄ 🎯 • *clearchat*  
🎅 🎯 • *restart*  
🎄 🎯 • *savefile*  
🎁 🎯 • *logout*  
⛄ 🎯 • *unban*  
🎅 🎯 • *update*  
🎄 🎯 • *intro*  
🎁 🎯 • *ban*  
⛄ 🎯 • *var*  
🎅 🎯 • *afk*  
🎄 🎯 • *save*  
🎁 🎯 • *allow*  
⛄ 🎯 • *listban*  
🎅 🎯 • *join*

🎄 ╚═════════════╝ 🎄`
 //
      break
      case 'randompic':
lkr = `
🎄 ╔══『 🌟 *RandomPic Menu* 🎁 』═╗ 🎄

🎅 📸 • *chinese*  
🤶 📸 • *malaysia*  
🎄 📸 • *hijab*  
🎁 📸 • *japanese*  
⛄ 📸 • *korean*  
🎅 📸 • *malay*  
🎄 📸 • *random*  
🎁 📸 • *random2*  
⛄ 📸 • *thai*  
🎅 📸 • *vietnamese*  
🎄 📸 • *indo*  
🎁 📸 • *girl*  
⛄ 📸 • *person*  
🎅 📸 • *boneka*  
🎄 📸 • *blackpink3*  
🎁 📸 • *bike*  
⛄ 📸 • *antiwork*  
🎅 📸 • *aesthetic*  
🎄 📸 • *justina*  
🎁 📸 • *doggo*  
⛄ 📸 • *cat*  
🎅 📸 • *cosplay2*  
🎄 📸 • *car*  
🎁 📸 • *profile2*  
⛄ 📸 • *notnot*  
🎅 📸 • *kpop*  
🎄 📸 • *kayes*  
🎁 📸 • *ulzzanggirl*  
⛄ 📸 • *ulzzangboy*  
🎅 📸 • *ryujin*  
🎄 📸 • *pubg*  
🎁 📸 • *wallml*  
⛄ 📸 • *wallhp*  

🎄 ╚═══════════╝ 🎄`
 //
      break
      case 'randomvid':
lkr = `
🎄 ╔══『 🌟 *RandomVid Menu* 🎁 』═╗ 🎄

🎅 🎥 • *tiktokgirl*  
🤶 🎥 • *tiktokghea*  
🎄 🎥 • *tiktokbocil*  
🎁 🎥 • *tiktoknukhty*  
⛄ 🎥 • *tiktoksantuy*  
🎅 🎥 • *tiktokkayes*  
🎄 🎥 • *tiktokpanrika*  
🎁 🎥 • *tiktoknotnot*  

🎄 ╚═════════════╝ 🎄`
 //
      break
    case 'groupmenu':
lkr = `
╭─【 *🎄 Christmas Group Menu 🎅* 】──
│
│ 🎁 • kick
│ 🎄 • wyr
│ 🎅 • promote
│ 🎄 • demote
│ 🎁 • groupinfo
│ ❄️ • getjids
│ 🎅 • resetlink
│ 🎄 • antilink
│ 🎁 • link
│ 🎄 • setpp
│ 🎅 • setname
│ ❄️ • setdesc
│ 🎁 • setwelcome
│ 🎄 • setbye
│ 🎅 • hidetag
│ 🎄 • tagall
│ ❄️ • totag
│ 🎁 • notify
│ 🎅 • delwarn
│ 🎄 • warn
│ 🎁 • unwarn
│ 🎄 • warns
│ 🎅 • add
│ 🎁 • delete
│ 🎄 • group
│ 🎅 • enable
│ 🎄 • disable
│ 🎁 • toxic
│ 🎅 • ship
│ ❄️ • register
│ 🎄 • unreg
│ 🎁 • mysn
│ 🎅 • poll
│ 🎄 • simulate
│ 🎁 • admins
│
╰────────────
`
//
      break
    case 'downloadermenu':
    case 'dlmenu':
    case 'downloads':
lkr = `
╭──【 *🎄 Christmas Download Menu 🎅* 】──
│
│ 🎁 • likee
│ 🎄 • pinterest
│ 🎅 • threads
│ 🎁 • capcut
│ 🎄 • itunes
│ 🎅 • playvid
│ ❄️ • play
│ 🎄 • playvid2
│ 🎁 • play2
│ 🎄 • play5
│ 🎅 • mega
│ 🎁 • ytsearch
│ 🎄 • ytmp3 
│ 🎅 • ytmp4
│ ❄️ • gdrive
│ 🎄 • gitclone 
│ 🎁 • twitter
│ 🎅 • tiktok
│ ❄️ • tiktokstalk
│ 🎄 • insta
│ 🎁 • igstory
│ 🎅 • igstalk
│ ❄️ • facebook
│ 🎄 • wallpapers
│ 🎁 • rwall
│ 🎅 • rnekos
│ ❄️ • swdl
│ 🎄 • dlstatus
│
╰───────────────
`
 //
      break
    case 'economymenu':
    case 'economy':
 lkr = `
╭───【 *🎄 Christmas Economy Menu 🎅* 】──
│
│ 🎁 • claim/daily
│ 🎄 • weekly
│ 🎅 • monthly
│ 🎁 • wallet
│ 🎄 • withdraw
│ 🎅 • leaderboard
│ ❄️ • levelup
│ 🎄 • addxp
│ 🎁 • buych
│ 🎄 • buyall
│ 🎅 • addgold
│ ❄️ • bank
│ 🎄 • deposit
│ 🎁 • give
│ 🎅 • bet
│ ❄️ • heal
│ 🎄 • craft
│ 🎁 • balance
│ 🎅 • shop
│ ❄️ • sell
│ 🎄 • rob
│ 🎁 • adventure
│ 🎅 • opencrate
│ ❄️ • mine
│ 🎄 • work
│ 🎁 • transfer
│ 🎅 • todiamond
│ ❄️ • tomoney
│
╰─────────────
`
//
      break
    case 'funmenu':
lkr = `
╭──【 *🎄 Christmas Fun Menu 🎅* 】──
│
│ 🎁 • character
│ 🎄 • truth
│ 🎅 • dare
│ ❄️ • hack
│ 🎄 • flirt
│ 🎁 • gay
│ 🎅 • shayeri
│ ❄️ • ship
│ 🎄 • waste
│ 🎁 • alexa
│ 🎅 • simpcard
│ ❄️ • hornycard
│ 🎄 • ytcomment
│ 🎁 • stupid
│ 🎅 • lolicon
│
╰──────────────
`
 //
      break
      case 'animereactions':
case 'reactions':
lkr = `
╭───【 *🎄 Christmas Reactions 🎅* 】───
│
│ 🎁 • bully
│ 🎄 • cuddle
│ 🎅 • cry
│ ❄️ • hug
│ 🎄 • awoo
│ 🎁 • kiss
│ 🎅 • lick
│ ❄️ • pat
│ 🎄 • smug
│ 🎁 • bonk
│ 🎅 • yeet
│ ❄️ • blush
│ 🎄 • wave
│ 🎁 • highfive
│ 🎅 • handhold
│ ❄️ • nom
│ 🎄 • bite
│ 🎁 • glomp
│ 🎅 • slap
│ ❄️ • kill
│ 🎄 • happy
│ 🎁 • wink
│ 🎅 • poke
│ ❄️ • dance
│ 🎄 • cringe
│
╰───────────────
`
 //
      break
    case 'animemenu':
lkr = `
╭───【 *Anime Collection* 】───
│
│ 🌸 • waifu
│ 🐾 • neko
│ 💖 • loli
│ 💑 • couplepp
│ 🎥 • toanime
│ 🍥 • naruto
│ 🌑 • itachi
│ 🎬 • akira
│ 🌹 • asuna
│ 🐉 • akiyama
│ 🍜 • boruto
│ 💳 • hornycard
│ 👧 • ayuzawa
│ 🌸 • anna
│ 🍒 • chiho
│ 🍁 • chitoge
│ 💀 • deidara
│ ⚔️ • erza
│ 🌼 • elaina
│ ❄️ • emilia
│ 🔥 • hestia
│ 💎 • hinata
│ 🌿 • inori
│ 🏵️ • isuzu
│ 🍂 • kagura
│ 🎶 • kaori
│ 💫 • keneki
│ 🎭 • kurumi
│ 💥 • madara
│ 💖 • mikasa
│ 🎤 • miku
│ 🍃 • minato
│ 🧡 • nezuko
│ 🌸 • sagiri
│ 🦋 • sasuke
│ 🌺 • sakura
│ 🌟 • kotori
│
╰─────────────
`
 //
      break
      case 'infoanime':
lkr = `
╭───【 🎄 *Info Anime* 🎄 】───
│
│ 🎁 • anime waifu
│ 🎅 • anime neko
│ 🦌 • anime loli
│ 🎄 • anime naruto
│ 🧸 • anime itachi
│ ❄️ • anime akira
│ 🌟 • anime asuna
│ 🎀 • anime akiyama
│ 🌟 • anime boruto
│ 🎁 • anime ayuzawa
│ 🎄 • anime anna
│ 🌲 • anime chiho
│ 🎁 • anime chitoge
│ 🦌 • anime deidara
│ 🎅 • anime erza
│ 🌟 • anime elaina
│ ❄️ • anime emilia
│ 🎄 • anime hestia
│ 🎀 • anime hinata
│ 🎁 • anime inori
│ 🌲 • anime isuzu
│ 🎅 • anime kagura
│ 🦌 • anime kaori
│ 🌟 • anime keneki
│ ❄️ • anime kurumi
│ 🎄 • anime madara
│ 🎁 • anime mikasa
│ 🎀 • anime miku
│ 🦌 • anime minato
│ 🎅 • anime nezuko
│ 🎁 • anime sagiri
│ 🎄 • anime sasuke
│ 🎄 • anime sakura
│ 🌲 • anime kotori
│
╰────────────────
`
 //
      break
    case 'gamemenu':
    case 'gamesmenu':
lkr = `
╭───【 🎄 *Game* 🎮 】───
│
│ 🎁 • tictactoe
│ 🎅 • delttt
│ 🦌 • chess
│ ❄️ • math
│ 🌟 • math answer
│ 🎄 • ppt
│ 🎀 • slot
│ 🌲 • cock-fight
│ 🎁 • roulette
│ 🎅 • casino
│ 🦌 • guessflag
│ 🎄 • fhint
│
╰──────────
`
 //
      break
    case 'stickermenu':
lkr = `
╭───【 🎄 *Sticker* 🎅 】───
│
│ 🎁 • s
│ 🦌 • tenor
│ 🎄 • take
│ ❄️ • scircle
│ 🌟 • smaker
│ 🎀 • removebg
│ 🎄 • smeme
│ 🎁 • trigger
│ 🦌 • stickers
│ ❄️ • getsticker
│ 🌲 • tgsticker
│ 🎁 • emojimix
│ 🎅 • toimg
│ 🦌 • tovid
│ 🎄 • quote
│ 🎁 • quoted
│ 🎀 • rc
│ 🌟 • ttp
│ 🎄 • ttp2
│ 🎅 • attp
│ 🎁 • attp2
│ 🦌 • attp3
│
╰───────────────
`
 //
      break
    case 'toolmenu':
    case 'toolsmenu':
lkr = `
╭───【 🎄 *Sticker* 🎅 】───
│
│ 🎁 • s
│ 🦌 • tenor
│ 🎄 • take
│ ❄️ • scircle
│ 🌟 • smaker
│ 🎀 • removebg
│ 🎄 • smeme
│ 🎁 • trigger
│ 🦌 • stickers
│ ❄️ • getsticker
│ 🌲 • tgsticker
│ 🎁 • emojimix
│ 🎅 • toimg
│ 🦌 • tovid
│ 🎄 • quote
│ 🎁 • quoted
│ 🎀 • rc
│ 🌟 • ttp
│ 🎄 • ttp2
│ 🎅 • attp
│ 🎁 • attp2
│ 🦌 • attp3
│
╰─────────────
`
 //
break
case 'aeditor':
case 'audioeditor':
lkr = `
╭───【 🎄 *Tools* 🎅 】───
│
│ 🎁 • autosticker
│ 🦌 • topdf
│ ❄️ • whatmusic
│ 🎄 • filelength
│ 🎅 • tempmail
│ 🎁 • checkmail
│ 🦌 • course
│ ❄️ • calc
│ 🌟 • google
│ 🎄 • googleit
│ 🎁 • linux
│ 🦌 • imdb
│ 🎄 • reddit
│ 🎅 • lyrics
│ ❄️ • readmore
│ 🌲 • ssweb
│ 🎁 • carbon
│ 🎄 • element
│ 🎅 • translate
│ ❄️ • tourl
│ 🌟 • trace
│ 🎄 • wikipedia
│ 🎁 • nowa
│ 🎅 • qrmaker
│ 🦌 • readqr
│ ❄️ • fancy
│ 🎄 • fancy2
│ 🎁 • weather
│ 🎅 • tocartoon
│ 🎄 • quote
│ 🦌 • technews
│ 🎁 • define
│ 🎄 • itunes
│ 🎅 • pokedex
│ 🎄 • removebg
│ 🎁 • tinyurl/shorturl
│ ❄️ • readvo
│ 🎄 • true
│ 🎅 • wa
│ 🦌 • pokedex
│ 🎁 • voz
│ 🎄 • remin
│ ❄️ • enhance
│
╰────────────────
`
 //
      break
    case 'nsfwmenu': 
lkr = `
╭───【 🎄 *Nsfw* 🎅 】───
│
│ 🎁 • genshin
│ 🦌 • swimsuit
│ ❄️ • schoolswimsuit
│ 🎄 • white
│ 🎅 • barefoot
│ 🎁 • touhou
│ 🦌 • gamecg
│ ❄️ • hololive
│ 🎄 • uncensored
│ 🎅 • sunglasses
│ 🎁 • glasses
│ 🦌 • weapon
│ ❄️ • shirtlift
│ 🎄 • chain
│ 🎅 • fingering
│ 🎁 • flatchest
│ 🦌 • torncloth
│ ❄️ • bondage
│ 🎄 • demon
│ 🎅 • wet
│ 🎁 • pantypull
│ 🦌 • headdress
│ ❄️ • headphone
│ 🎄 • tie
│ 🎅 • anusview
│ 🎁 • shorts
│ 🦌 • stockings
│ ❄️ • topless
│ 🎄 • beach
│ 🎅 • bunnygirl
│ 🎁 • bunnyear
│ 🦌 • idol
│ ❄️ • vampire
│ 🎄 • gun
│ 🎅 • maid
│ 🎁 • bra
│ 🦌 • nobra
│ ❄️ • bikini
│ 🎄 • whitehair
│ 🎅 • blonde
│ 🎁 • pinkhair
│ 🦌 • bed
│ ❄️ • ponytail
│ 🎄 • nude
│ 🎅 • dress
│ 🎁 • underwear
│ 🦌 • foxgirl
│ ❄️ • uniform
│ 🎄 • skirt
│ 🎅 • sex
│ 🎁 • sex2
│ 🦌 • sex3
│ ❄️ • breast
│ 🎄 • twintail
│ 🎅 • spreadpussy
│ 🎁 • tears
│ 🦌 • seethrough
│ ❄️ • breasthold
│ 🎄 • drunk
│ 🎅 • fateseries
│ 🎁 • spreadlegs
│ 🦌 • openshirt
│ ❄️ • headband
│ 🎄 • food
│ 🎅 • close
│ 🎁 • tree
│ 🦌 • nipples
│ ❄️ • erectnipples
│ 🎄 • horns
│ 🎅 • greenhair
│ 🎁 • wolfgirl
│ 🦌 • catgirl
│ ❄️ • nsfw
│ 🎄 • ass
│ 🎅 • boobs
│ 🎁 • lesbian
│ 🦌 • pussy
│ ❄️ • pack
│ 🎄 • xvid
│ 🎅 • xnxx
│
╰─────────────────
`
 //
      break
    case 'logomenu':
    case 'makermenu':
lkr = `
  ╭───【 🎄 *Maker* 🎅 】───
  │
  │ 🎁 • blur
  │ 🦌 • enhance
  │ ❄️ • difuminar2
  │ 🎄 • hornycard
  │ 🎅 • hornylicense
  │ 🎁 • gfx1
  │ 🦌 • gfx2
  │ ❄️ • gfx3
  │ 🎄 • gfx4
  │ 🎅 • gfx5
  │ 🎁 • gfx6
  │ 🦌 • gfx7
  │ ❄️ • gfx8
  │ 🎄 • gfx9
  │ 🎅 • gfx10
  │ 🎁 • gfx11
  │ 🦌 • gfx12
  │ ❄️ • simpcard
  │ 🎄 • itssostupid
  │ 🎅 • iss
  │ 🎁 • stupid
  │ 🦌 • tweet <comment>
  │ ❄️ • lolicon
  │ 🎄 • logololi
  │ 🎅 • ytcomment <comment>
  │
  ╰─────────────────
`
 //
      break
    default:
      lkr = `Invalid command. Type ${usedPrefix}list to see available options 😡 did i not tell you to read the instructions well.`
  }

  conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })

  let done = '🤔'
  m.react(done)
}

handler.help = [
  'listmenu',
  'menulist',
  'aimenu',
  'animereactions',
  'reactions',
  'imagen',
  'imagenai',
  'animemenu',
  'aeditor',
  'audioeditor',
  'infoanime',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloads',
  'downloadermenu',
  'economymenu',
  'economy',
  'funmenu',
  'gamemenu',
  'gamesmenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'makermenu',
  'randompic',
  'randomvid',
  'toolsmenu',
  'toolmenu',
]
handler.tags = ['main']
handler.command = [
  'listmenu',
  'menulist',
  'aimenu',
  'animereactions',
  'reactions',
  'imagen',
  'imagenai',
  'animemenu',
  'aeditor',
  'audioeditor',
  'infoanime',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloads',
  'downloadermenu',
  'economymenu',
  'economy',
  'funmenu',
  'gamemenu',
  'gamesmenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'makermenu',
  'randompic',
  'randomvid',
  'toolsmenu',
  'toolmenu',
]

export default handler
