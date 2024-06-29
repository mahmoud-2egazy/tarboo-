import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `*✳️ مــثال :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`;
  if (!args[0].match(/youtu/gi)) throw `❎ تـأكـد أنـه رابـط يــوتيـوب !`;

  m.react(rwait); 

  try {
    let q = '128kbps'; 
    let v = args[0]; 
    const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)); 
    const dl_url = await yt.audio[q].download(); 
    const title = await yt.title; 

    conn.sendFile(
      m.chat,
      dl_url,
      title + '.mp3',
      null, 
      m,
      false,
      { mimetype: 'audio/mpeg' }
    );

    m.react(xmoji); 
  } catch {
    await m.reply(`❎ لـم اسـتطيع تـحمـيل الـملـف !`)
  }
};

handler.help = ['ytmp3 <url>']
handler.tags = ['dl']
handler.command = ['يوتيوب-اغنية', 'يوتيوب-اغنيه'] 

export default handler
