import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendFile(m.chat, json.result.female, 'error.jpg', `جيرل ✨`, m)
//conn.sendButton(m.chat, 'جيرل ✨', wm, json.result.female, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
conn.sendFile(m.chat, json.result.male, 'error.jpg', `بوي ✨`, m)
//conn.sendButton(m.chat, 'بوي ✨', wm, json.result.male, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(تطقيم|مطابقة|ppcouple|طقم|compartirfoto)$/i
export default handler
