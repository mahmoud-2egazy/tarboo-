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
                        title: `> *✧────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────✧*\nمرحبا بك يا ${taguser}`
                    },
                    body: {
                        text: '> *🤴🏻 المطور :*𝑬𝐿𝑻𝑨𝑹𝑩𝑶𝑶*\n> **✅ الاصدار :*{1.2.0}\n> *🎳 البادئة :*{•}*\n> *مرحبا بك ياصديقي لستخدام البوت ومعرفة المميزات اضغط علي الزر بالأسفل*\n*✧────[ 𝐁𝐎𝐓_𝐓𝐀𝐑𝐁𝐎𝐎 ]────✧*.'
                    },
                    footer: {
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
                                            title: '『』MENU ALL《',
                                            highlight_label: '❬ 𝒃𝒐𝒕 𝒕𝒂𝒓𝒃𝒐𝒐 ❭',
                                            rows: [
                                                {
                                                    header: '『』OWNER《',
                                                    title: '⌬ ❛╏اوامر المطور',
                                                    description: 'خاص بالمطور فقط',
                                                    id: '.اوامر-المطور'
                                                },
                                                {
                                                    header: '『』Downloads《 📥',
                                                    title: '⌬ ❛╏اوامر التنزيلات',
                                                    description: 'خاص بالتنزيلات فقط',
                                                    id: '.اوامر-التنزيلات'
                                                },
                                                {
                                                    header: '『』Group《',
                                                    title: '⌬ ❛╏اوامر الرومات',
                                                    description: 'خاص بالرومات فقط',
                                                    id: '.اوامر-الرومات'
                                                },
                                                {
                                                    header: '『』Design《',
                                                    title: '⌬ ❛╏اوامر التصميم',
                                                    description: 'خاص بأوامر التحويل',
                                                    id: '.اوامر-التصميم'
                                                },
                                                {
                                                    header: '『』Audios《‍♂ ',
                                                    title: '⌬ ❛╏اوامر الصوت',
                                                    description: 'خاص بأوامر تغيير الصوت',
                                                    id: '.اوامر-الصوت'
                                                },
                                                {
                                                    header: '『』Games《',
                                                    title: '⌬ ❛╏اوامر الالعاب',
                                                    description: 'خاص بالجيمز',
                                                    id: '.اوامر-الالعاب'
                                                },
                                                {
                                                    header: '『』Entertainment《',
                                                    title: '⌬ ❛╏اوامر الترفيه',
                                                    description: 'اوامر الاسئلة',
                                                    id: '.اوامر-الترفيه'
                                                },
                                                {
                                                    header: '『』Fun《',
                                                    title: '⌬ ❛╏اوامر المرح',
                                                    description: 'اوامر للتسلية',
                                                    id: '.اوامر-المرح'
                                                },
                                                {
                                                    header: '『』Nicknames《',
                                                    title: '⌬ ❛╏اوامر الالقاب',
                                                    description: 'خاص بلألقاب',
                                                    id: '.اوامر-الألقاب'
                                                },
                                                {
                                                    header: '『』Menu All《',
                                                    title: '⌬ ❛╏كل الاوامر',
                                                    description: 'جميع اوامر البوت',
                                                    id: '.كل-الاوامر'
                                                }
                                            ]
                                        }
                                    ]
                                }),
                                messageParamsJson: ''
                            },
                            {
                                name: 'quick_reply',
                                buttonParamsJson: JSON.stringify({
                                    display_text: "المطور",
                                    id: ".المطور"
                                })
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
    }, {});
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['مهام','ty','er','youssef','ui','op']

export default handler;