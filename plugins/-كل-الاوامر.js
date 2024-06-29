import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './Menu.png'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `

  > *✧────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────╮*
> *┤ *مرحبا يا ${taguser}*
> *┤ 🤴🏻 المطور :* *Mahmoud Mahmed*
> *┤ #️⃣ الرقم :* *wa.me/201225655220*
> *┤ ✅ الاصدار :* {1.2.0}
> *┤ 🎳 البادئة :* *{•}*
> *┤ 🧜🏽‍♂️ المستخدمين :* *${rtotalreg}* 
> *┤ 🔃 المستوي :* *${level}* 
> *┤  الخبرة :* *${exp}* 
> *┤ *📆 التاريخ :*${date}*
> *┤ 🚀 وقت النشاط:* *${uptime}*
> *┤────────────···*
> *╮───[ اوامر الجروبات ]───✧*
> *┤ 〚 .منشن 〛*
> *┤ 〚 .مخفي او (💎) 〛*
> *┤ 〚 .الاشباح 〛*
> *┤ 〚 .توب 〛*
> *┤ 〚 .بيكرهني 〛*
> *┤ 〚 .حذف 〛*
> *┤ 〚 .لينك 〛*
> *┤ 〚 .رول 〛*
> *┤ 〚 .نزلو 〛*
> *┤ 〚 .دخلو 〛*
> *┤ 〚 .خرجو 〛*
> *┤ 〚 .الادمن 〛*
> *┤ 〚 .الجروب 〛*
> *┤ 〚 .اعدادات 〛*
> *┤ 〚 .فحص 〛*
> *┤ 〚 .تغيرالاسم 〛*
> *┤ 〚 .تغيرالوصف 〛*
> *┤ 〚 .تغيرالصوره 〛*
> *┤ 〚 .تغيرالينك 〛*
> *┤ 〚 .تغيرالمغادره 〛*
> *┤ 〚 .تغيرالترحيب 〛*
> *┤ 〚 .محاكاة 〛*
> *┤ 〚 .معلومات-الجروب 〛*
> *┤ 〚 .جروب فتح 〛*
> *┤ 〚 .جروب غلق 〛*
> *┤ 〚 .انذار 〛*
> *┤ 〚 .حذف-انذار 〛*
> *┤ 〚 .التحذيرات 〛*
> *┤ 〚 .المحفظة 〛*
> *┤ 〚 .المكافحة 〛*
> *┤ 〚 .دعوة 〛*
> *┤ 〚 .اعدادات 〛*
> *╯────────────···*
> *╮───[ اوامر التحميل ]───✧*
> *┤ 〚 .تحميل-عام 〛*
> *┤ 〚 .انستا 〛*
> *┤ 〚 .فيس 〛*
> *┤ 〚 .تويتر 〛*
> *┤ 〚 .تيكتوك 〛*
> *┤ 〚 .درايف 〛*
> *┤ 〚 .سبوتيفاي 〛*
> *┤ 〚 .ميديافاير 〛*
> *┤ 〚 .يوتيوب-اغنيه 〛*
> *┤ 〚 .يوتيوب-فيد 〛*
> *┤ 〚 .يوتيوب-بحث 〛*
> *┤ 〚 .يوتيوب-شغل 〛*
> *┤ 〚 .جوجل-بلاي 〛*
> *┤ 〚 .جوجل 〛*
> *┤ 〚 .صوره 〛*
> *┤ 〚 خلفيه 〛*
> *┤ 〚 .درايف 〛*
> *┤ 〚 .حزمه-استيكر 〛*
> *╯────────────···*
> *╮───[ اوامر التصميم ]───✧*
> *┤〚 .ستك 〛*
> *┤〚 .ستك2 〛*
> *┤〚 .ستك3 〛*
> *┤〚 .ستك4 〛*
> *┤〚 .ستك5 〛*
> *┤〚 .ستك6 〛*
> *┤〚 .ستك7 〛*
> *┤〚 .ستك8 〛*
> *┤〚 .استيكر 〛*
> *┤〚 .توضيح 〛*
> *┤〚 .لكرتون 〛*
> *┤〚 .لرابط 〛*
> *┤〚 .لصوره 〛*
> *┤〚 .لفيديو 〛*
> *┤〚 .لانمي 〛*
> *┤〚 .ملصق 〛*
> *┤〚 .سرقه 〛*
> *┤〚 .ترجمه 〛*
> *┤〚 .دائري 〛*
> *┤〚 .حذف_الخلفية 〛*
> *┤〚 .تصميم 〛*
> *┤〚 .لوغو 〛*
> *┤〚 .لوجو-ناروتو 〛*
> *┤〚 .توضيح 〛*
> *┤〚 .تخيل 〛*
> *┤〚 .شعار 〛*
> *┤〚 .نينجا 〛*
> *┤〚 .صورهai 〛*
> *┤〚 .رابطي 〛*
> *┤〚 .كلمات-اغنيه 〛*
> *┤〚 .باركود 〛*
> *┤〚 .مكس ↜ دمج〛*
> *╯────────────···* 
> *╮───[ اوامر المرح ]───✧*
> *┤〚 .حيوان 〛*
> *┤〚 .طقم 〛*
> *┤〚 .الحب 〛*
> *┤〚 .توب 〛*
> *┤〚 .رونالدو 〛*
> *┤〚 .ميسي 〛*
> *┤〚 .قط 〛*
> *┤〚 .زواج 〛*
> *┤〚 .طلاق 〛*
> *┤〚 .بنت 〛*
> *┤〚 .الكيوت 〛*
> *┤〚 .علاقه 〛*
> *┤〚 .شخصيه 〛*
> *┤〚 .صداقه 〛*
> *┤〚 .هديه 〛*
> *┤〚 .عمري 〛*
> *┤〚 .وفاتي 〛*
> *┤〚 .شاذ 〛*
> *┤〚 .خروف 〛*
> *┤〚 .هل 〛*
> *┤〚 .ايدت 〛*
> *┤〚 .انطق 〛*
> *┤〚 .تهكير 〛*
> *┤〚 .اكس 〛*
> *┤〚 حذف غرفه ↜.delxo 〛*
> *┤〚 .شطرنج 〛* 
> *┤〚 .متفجرات 〛*
> *┤〚 .سلم_وثعبان 〛*
> *┤〚 .تحدي 〛*
> *┤〚 .لعبة 〛*
> *┤〚 .حرب 〛*
> *┤〚 .تفكيك 〛*
> *┤〚 .رياضه 〛*
> *┤〚 .خمن 〛*
> *┤〚 .احزر 〛*
> *┤〚 .عين 〛*
> *┤〚 .ايموجي 〛*
> *┤〚 .نصيحه 〛*
> *┤〚 .بوست 〛*
> *┤〚 .اقتباسات 〛*
> *┤〚 .صراحه 〛*
> *┤〚 .فزوره 〛*
> *┤〚 .اسالني 〛*
> *┤〚 .تحدني 〛*
> *┤〚 .لوخيروك 〛*
> *┤〚 .قلوب 〛*
> *┤〚 .مسابقه 〛*
> *┤〚 .مسابقه-صور 〛*
> *╯────────────···* 
> *╮───[ اوامر المطور ]───✧*
> *┤ 〚 .بريم 〛*
> *┤ 〚 .خفض-بريم 〛*
> *┤ 〚 .المميزين 〛*
> *┤ 〚 .بان 〛*
> *┤ 〚 .رفع-البان 〛*
> *┤ 〚 .اخرج 〛*
> *┤ 〚 .انضم 〛*
> *┤ 〚 .بلوك 〛*
> *┤ 〚 .رفع-البلوك 〛*
> *┤ 〚 .البلوكات 〛*
> *┤ 〚 .حظر 〛*
> *┤ 〚 .الغاء-الحظر 〛*
> *┤ 〚 .المحظورين 〛*
> *┤ 〚 .ستوري 〛*
> *┤ 〚 .نشر 〛*
> *┤ 〚 .تشغيل 〛*
> *┤ 〚 .ايقاف 〛*
> *┤ 〚 .عقد_الايجار 〛*
> *┤ 〚 .انهاء_العقد 〛*
> *┤ 〚 .ريستارت 〛*
> *┤ 〚 .إعادة 〛*
> *┤ 〚 .اخرج 〛*
> *┤────────────···* 
> *╮───[ اوامر الصوت ]───✧*
> *┤〚 .سنجاب 〛*
> *┤〚 .سلس 〛*
> *┤〚 .بطئ 〛*
> *┤〚 .الي 〛*
> *┤〚 .عكس 〛*
> *┤〚 .تسريع-بسيط 〛*
> *┤〚 .سريع 〛*
> *┤〚 .تحسين 〛*
> *┤〚 .منفوخ 〛*
> *┤〚 .عميق 〛*
> *┤〚 .عميق2 〛*
> *╯────────────···* 
> *╮───[ اوامر الالقاب ]───✧*
> *┤〚 .تسجيل 〛*
> *┤〚 .الألقاب 〛*
> *┤〚 .لقبي 〛*
> *┤〚 .لقبه 〛*
> *┤〚 .لقب 〛*
> *┤〚 .حذف_لقب 〛*
> *╯────────────···* > *╮───[ الاوامر الاسلامية ]───✧*
> *┤ 〚 .قران 〛*
> *┤ 〚 .ايه-الكرسي 〛*
> *┤ 〚 .اذكار صباح 〛*
> *┤ 〚 .اذكار مساء 〛*
> *┤ 〚 .ايه 〛*
> *┤ 〚 .ايات 〛*
> *┤ 〚 .اذكار 〛*
> *┤ 〚 .الله 〛*
> *╯────────────···* 
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto2, m);
  }
};
handler.command = /^(oo|pp|ii|ji|كل-الاوامر|op|mk|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
