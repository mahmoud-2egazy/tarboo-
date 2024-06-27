import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('*[❗] لا يمكن أن يزيد الفيديو عن 10 ثوانٍ*')
let img = await q.download?.()
if (!img) throw `*[❗] قم بالرد على مقطع فيديو أو صورة أو أدخل رابط الصورة ‏.jpg الذي سيتم تحويله إلى ملصق، يجب عليك الرد أو ${usedPrefix + command}*`
let out
try {
stiker = await sticker(img, false, global.packname, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('*[❗] الرابط / الينك / الرابط غير صالح، تم إنهاء الرابط / الينك / يجب أن يكون الرابط .jpg مثال https://telegra.ph/file/23d46531a498ea7b6eb03.jpg*')
}} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
else throw '*هذا الامر خاص بتحويل صورة او فيديو كامل الى ملصق كامل يعني بدون قص الملصق والنتيجة تكون جميلة بحيت تحصل على ملصق كامل  *'
}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^sfull|استك-كامل|ملصق|استيكر$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
