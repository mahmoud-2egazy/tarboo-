//Creditos https://github.com/BrunoSobrino

import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsAvisoAG']()}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 +18 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 #𝙤𝙣 𝙢𝙤𝙙𝙤𝙝𝙤𝙧𝙣𝙮 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n+18 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 #𝙤𝙣 𝙢𝙤𝙙𝙤𝙝𝙤𝙧𝙣𝙮 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}𝙐𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙓𝙑𝙄𝘿𝙀𝙊𝙎\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://www.xvideos.com/video70389849/sexo_en_casa*\n\n𝙐𝙎𝙀 𝘼𝙉 𝙓𝙑𝙄𝘿𝙀𝙊𝙎 𝙇𝙄𝙉𝙆\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} https://www.xvideos.com/video70389849/sex`
try {
await conn.reply(m.chat, `➤ 𝙀𝙎𝙋𝙀𝙍𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘼 𝙌𝙐𝙀 𝙎𝙀 𝙀𝙉𝙑𝙄𝙀 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n\n➤ 𝙋𝙇𝙀𝘼𝙎𝙀 𝙒𝘼𝙄𝙏 𝙁𝙊𝙍 𝙏𝙃𝙀 𝙑𝙄𝘿𝙀𝙊 𝙏𝙊 𝘽𝙀 𝙎𝙀𝙉𝙏`, m)

let res = await fetch(`https://zenzapis.xyz/downloader/xvideos?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()

conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })

} catch (e) {
m.reply(`${lenguajeGB['smsAvisoFG']()}𝙉𝙊 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙊, 𝙐𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙓𝙑𝙄𝘿𝙀𝙊𝙎, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍\n\n𝘿𝙄𝘿𝙉'𝙏 𝙒𝙊𝙍𝙆, 𝙐𝙎𝙀 𝘼𝙉 𝙓𝙑𝙄𝘿𝙀𝙊𝙎 𝙇𝙄𝙉𝙆, 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉`)
console.log(e)
}}
handler.command = /^(xvideosdl|xvideos)$/i
handler.level = 0
handler.limit = 3
export default handler
