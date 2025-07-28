const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "support",
    alias : "version",
    desc: " allmenu",
    category: "allmenu",
    react: "🫅",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃      ⚙️  𝗗𝗠𝗟-𝗠𝗗 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 𝗜𝗡𝗙𝗢      
┗━━━━━━━━━━━━━━━━━━━━━━━┛

👑 *Creator:* ᴅᴀᴜᴅɪ ᴍᴜꜱᴀ ᴍʟɪʟᴀ 🇹🇿  
🧠 *Bot Name:* ᴅᴍʟ-ᴍᴅ  
🔧 *Mode:* ${config.MODE}  
🪄 *Prefix:* ${config.PREFIX}  
💾 *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB  
⚡ *Version:* V.5.0  
⏱ *Uptime:* ${runtime(process.uptime())}

┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃     🌐 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗟𝗜𝗡𝗞𝗦     
┗━━━━━━━━━━━━━━━━━━━━━━━┛

📣 *WhatsApp Channel:*  
🔗 https://whatsapp.com/channel/0029Vb2hoPpDZ4Lb3mSkVI3C

👥 *WhatsApp Group:*  
🔗 https://chat.whatsapp.com/FunyTxSwaKI7E5Q4z8YGbS

📩 *Support Contact:*  
🔗 wa.me/+255?text=Support!

┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃   🔴  𝗗𝗠𝗟-𝗠𝗗 | _Simplicity Meets Power_  
┗━━━━━━━━━━━━━━━━━━━━━━━┛
${readMore}
`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/tjt2z2.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363318767880951@newsletter',
                        newsletterName: '『 DAVINCS-TECH  』',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );


        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
