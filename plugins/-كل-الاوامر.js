import fetch from 'node-fetch';




const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.menu_audios

  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'ar';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `

  > *✧────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────╮*
> *┤ *مرحبا يا ${taguser}*
> *┤ 🤴🏻 المطور :* *Mahmoud Mahmed*
> *┤ #️⃣ الرقم :* *wa.me/201225655220*
> *┤ ✅ الاصدار :* {1.2.0}
> *┤ 🎳 البادئة :* *{•}*
> *┤ *📆 التاريخ :*${date}*
> *┤ 🚀 وقت التشغيل:* *${uptime}*
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
> *╯────────────···*> *╮───[ اوامر التحميل ]───✧*
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
