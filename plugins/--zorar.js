import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    const images = [
        'https://telegra.ph/file/905e3a17e33a046ccadeb.jpg',
        'https://telegra.ph/file/87a1a8aa21442cfd02f51.jpg',
        'https://telegra.ph/file/66977b2c35e28a75c8cb0.jpg',
        'https://telegra.ph/file/dd361573a94ac738dd2dd.jpg'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

    conn.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: `>*✧────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────✧*\n> *🤴🏻 المطور :*𝑬𝐿𝑻𝑨𝑹𝑩𝑶𝑶*\n> **✅ الاصدار :*{1.2.0}\n> *🎳 البادئة :*{•}*\n>*مرحبا بك يا ${taguser} لستخدام البوت ومعرفة المميزات اضغط علي الزر بالأسفل*\n*✧────[ 𝐁𝐎𝐓_𝐓𝐀𝐑𝐁𝐎𝐎 ]────✧*`
                    },
                    body: {
                        text: '> *`افتح القائمة بواسطه الزر`🔘*\n\n> *Copyright©* 2024 Mahmoud Al Tarboo.'
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '『』CLICK《',
                                    sections: [
                                        {
                                            title: '『』CLICK《',
                                            highlight_label: '❬ 𝒕𝒂𝒓𝒃𝒐𝒐 𝒐𝒘𝒏𝒆𝒓 ❭ ',
                                            rows: [
                                                {
                                                    header: '『』OWNER《',
                                                    title: '⌬ ❛╏المطور',
                                                    description: '',
                                                    id: '.المطور'
                                                },
                                                {
                                                    header: '『』PRIVACY《',
                                                    title: '⌬ الاستخدام والخصوصية╏',
                                                    description: '',
                                                    id: '.الاستخدام'
                                                },
                                                {
                                                    header: 'REBORT',
                                                    title: '⌬ ابلاغ ❛╏المطور',
                                                    description: '',
                                                    id: '.بلاغ'
                                                },
                                                {
                                                    header: 'LIST OF COMMANDS ',
                                                    title: '⌬ ❛╏قائمة الاوامر ',
                                                    description: '',
                                                    id: '.مهام'
                                                }
                                            ]
                                        }
                                    ]
                                }),
                                messageParamsJson: ''
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "『』OWNER《",
                                    id: ".المطور"
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "『』Support group《",
                                    url: "https://chat.whatsapp.com/HTAcYFJ19sC07ykgnKqBzp",
                                    merchant_url: "https://chat.whatsapp.com/HTAcYFJ19sC07ykgnKqBzp"
                                })
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['أوامر', 'اوامر', 'الاوامر', 'ألاوامر', 'menu', 'Menu']

export default handler;