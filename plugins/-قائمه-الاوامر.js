let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '> *﹝⟣┈┈┈⟢﹝🍄﹞⟣┈┈┈⟢﹞*\n> *مرحبا بك/يصديقي'
 },
 body: {
 text: '> *﹝⟣┈┈┈⟢﹝🍄﹞⟣┈┈┈⟢﹞*\n> *✨هذة هيا قائمه الاوامر✨*\n> *قم بأختيار قسم من القائمه👇🏻*\n> *﹝⟣┈┈┈⟢﹝🍄﹞⟣┈┈┈⟢﹞*\n> *Copyright©* 2024 Mahmoud Al Tarboo.'
  },
  nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '💫 MENU ALL 💫',
  sections: [
  {
  title: 'قسم الاوامر',
  highlight_label: '𝐁𝐎𝐓_𝐓𝐀𝐑𝐁𝐎𝐎',
  rows: [
  {
  header: 'به جميع اوامر الرومات',
  title: '👥Group👥',
  description: '',
  id: '.اوامر-الرومات'
  },
  {
  header: 'هنا تجد اوامر التنزيلات 📥',
  title: '📥Downloads📥✬',
  description: '',
  id: '.اوامر-التنزيلات'
  },
  {
   header: 'هنا اوامر تغيير الصوت🔊',
  title: '🔊Audios🔊',
  description: '',
  id: '.اوامر-الصوت'
  },
  {
    header: 'كل الاوامر الخاصة بالتصميم ☢️',
  title: '☢Design☢️',
  description: '',
  id: '.اوامر-التصميم'
  },
  {
  header: 'كل الاوامر الاسلامية👳🏻‍♂ ',
  title: '‍♂👳🏻‍Islamic👳🏻‍♂',
  description: '',
  id: '.اوامر-اسلامية'
  },
  {
  header: 'هذا القسم خاص بالمطور فقط⚙🤴🏻',
  title: '🤴🏻Owner🤴🏻',
  description: '',
  id: '.اوامر-المطور'
  },
   {
    header: 'هاذا القسم للألقاب🖊️',
  title: '✍️Nicknames✍️',
  description: '',
  id: '.اوامر-الألقاب'
  },
   {
  header: 'هنا قـسم الالعاب والفعاليه🕹️',
  title: '🎲Games🎲',
  description: '',
  id: '.اوامر-الالعاب'
  }, 
   { 
header: 'هنا جميع اوامر البوت',
  title: 'Menu All',
  description: '',
  id: '.كل-الاوامر'
  }
  ]
  }
  ]
  }),
  messageParamsJson: ''
  }, 
  {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "مجموعه الدعم👥",
                                    url: "https://chat.whatsapp.com/HTAcYFJ19sC07ykgnKqBzp",
                                    merchant_url: "https://chat.whatsapp.com/HTAcYFJ19sC07ykgnKqBzp"
  })
  }
  ]
  }
  }
  }
  }
  }, {})

  }

  handler.help = ['info']
  handler.tags = ['main']
  handler.command = ['مهام','ty','er','youssef','ui','op']

  export default handler
