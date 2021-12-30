let moment = require('moment-timezone')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `${ucapan()}
Halo👋
Ada Yang Bisa Saya Bantu?
Tekan MENU`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: gambar() }, 
           hydratedFooterText: `uptime: ${uptime}`,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍instagram',
               url: instagram
             }

           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.customPrefix = /^bot$/i // ketik bot (tanpa prefix)
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  if (time >= 4) {
    res = "Selamat pagi🌄"
  }
  if (time > 8) {
    res = "Selamat siang🏞️"
  }
  if (time >= 14) {
    res = "Selamat sore🌇"
  }
  if (time >= 18) {
    res = "Selamat malam🌃"
  }
  return res
}
function gambar() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  if (time >= 4) {
    res = fs.readFileSync('./media/pagi.jpg')
  }
  if (time > 9) {
    res = fs.readFileSync('./media/siang.jpg')
  }
  if (time >= 14) {
    res = fs.readFileSync('./media/sore.jpg')
  }
  if (time >= 18) {
    res = fs.readFileSync('./media/malam.jpg')
  }
  return res
}
