let handler = async (m, { conn, command, text }) => {
let love = `
> *✧────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────╮*
> *┤ 🤴🏻 المطور :* *Mahmoud Mahmed*
> *┤ #️⃣ الرقم :* *wa.me/201225655220*
> *┤ ✅ الاصدار :* {1.2.0}
> *┤ 🎳 البادئة :* *{•}*
> *┤ *📆 التاريخ :*${date}*
> *┤ 🚀 وقت التشغيل:* *${uptime}*
> *┤────────────···*

> *╮───[ اوامر السكس ]───✧*
> *┤〚 .xvideos 〛*
> *┤〚 .videoxxx 〛*
> *┤〚 .hornymenu 〛*
> *┤〚 .pack 〛*
> *┤〚 .pack2 〛*
> *┤〚 .pack3 〛*
> *┤〚 .xnxxdl 〛*
> *┤〚 .pornovidbi 〛*
> *┤〚 .Pornolesv 〛*
> *┤〚 .pornovidg 〛*
> *╯────────────···* 
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(سكس|xxx|xnxx)$/i
export default handler
