function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;frmndaa;;;FN:frmndaa\nORG:frmndaa;\nTEL;type=CELL;type=VOICE;waid=6282365089284:+62 823-6508-9294\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '6282365089294', 'frmndaa', m)
m.reply(m.chat,'*itu nomor owner ku*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
