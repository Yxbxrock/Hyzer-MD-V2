const hxz = require("hxz-api")
let handler = async(m,{text, conn}) => {

let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.sendFile(m.chat, nowm, null, 'Nih', m)
}
handler.help = ['tiktod'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|tiktod|tiktokdl)$/i

module.exports = handler
