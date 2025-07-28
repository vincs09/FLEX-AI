const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    alias: ["allmenu","fullmenu"],
    use: '.menu',
    desc: "Show all bot commands",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` ╭━━━━━〔𝑭𝑳𝑬𝑿 𝑨𝑰 𝑪𝑶𝑹𝑬〕━━━━╮
┃ 👑 Owner      : ${config.OWNER_NAME}
┃ ⚙️ Prefix     : [${config.PREFIX}]
┃ 🌐 Platform   : LINUX
┃ 📦 Version    : 4.0.0
┃ ⏱️ Runtime    : ${runtime(process.uptime())}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
★★ download menu ★★

🟦 facebook  
📁 mediafire  
🎵 tiktok  
🐦 twitter  
📷 instagram  
📦 apk  
🖼️ img  
▶️ tt2  
📌 pins  
🔄 apk2  
🔵 fb2  
📍 pinterest  
🎶 spotify  
🎧 play  
🎧 play2  
🔉 audio  
🎬 video  
📹 video2  
🎵 ytmp3  
📹 ytmp4  
🎶 song  
🎬 darama  
☁️ gdrive  
🌐 ssweb  
🎵 tiks  

━━━━━━━━━━━━━━━━━━━━━━

★★ group menu ★★

🔗 grouplink  
➕ add  
➖ remove  
👢 kick  
⬆️ promote  
⬇️ demote  
🚮 dismiss  
🔄 revoke  
👋 setgoodbye  
🎉 setwelcome  
🗑️ delete  
🖼️ getpic  
ℹ️ ginfo  
⏳ disappear on/off/7d  
📝 updategname  
📝 updategdesc  
📩 joinrequests  
📨 senddm  
🏃 nikal  
🔇 mute  
🔊 unmute  
🔒 lockgc  
🔓 unlockgc  
📩 invite  
#️⃣ tag  
🏷️ hidetag  
@️⃣ tagall  
👔 tagadmins  

━━━━━━━━━━━━━━━━━━━━━━

★★ reactions menu ★★

👊 bully  
🤗 cuddle  
😢 cry  
🤗 hug  
🐺 awoo  
💋 kiss  
👅 lick  
🖐️ pat  
😏 smug  
🔨 bonk  
🚀 yeet  
😊 blush  
😄 smile  
👋 wave  
✋ highfive  
🤝 handhold  
🍜 nom  
🦷 bite  
🤗 glomp  
👋 slap  
💀 kill  
😊 happy  
😉 wink  
👉 poke  
💃 dance  
😬 cringe  

━━━━━━━━━━━━━━━━━━━━━━

★★ logo maker ★★

💡 neonlight  
🎀 blackpink  
🐉 dragonball  
🎭 3dcomic  
🇺🇸 america  
🍥 naruto  
😢 sadgirl  
☁️ clouds  
🚀 futuristic  
📜 3dpaper  
✏️ eraser  
🌇 sunset  
🍃 leaf  
🌌 galaxy  
💀 sans  
💥 boom  
💻 hacker  
😈 devilwings  
🇳🇬 nigeria  
💡 bulb  
👼 angelwings  
♈ zodiac  
💎 luxury  
🎨 paint  
❄️ frozen  
🏰 castle  
🖋️ tatoo  
🔫 valorant  
🐻 bear  
🔠 typography  
🎂 birthday  

━━━━━━━━━━━━━━━━━━━━━━

★★ owner menu ★★

👑 owner  
📜 menu  
📜 menu2  
📊 vv  
📋 listcmd  
📚 allmenu  
📦 repo  
🚫 block  
✅ unblock  
🖼️ fullpp  
🖼️ setpp  
🔄 restart  
⏹️ shutdown  
🔄 updatecmd  
💚 alive  
🏓 ping  
🆔 gjid  
🆔 jid  

━━━━━━━━━━━━━━━━━━━━━━

★★ fun menu ★★

🤪 shapar  
⭐ rate  
🤬 insult  
💻 hack  
💘 ship  
🎭 character  
💌 pickup  
😆 joke  
❤️ hrt  
😊 hpy  
😔 syd  
😠 anger  
😳 shy  
💋 kiss  
🧐 mon  
😕 cunfuzed  
✋ hand  
🤲 hold  
🤗 hug  
👉 poke  
🎵 hifi  

━━━━━━━━━━━━━━━━━━━━━━

★★ convert menu ★★

🏷️ sticker  
🏷️ sticker2  
😀 emojimix  
✨ fancy  
🖼️ take  
🎵 tomp3  
🗣️ tts  
🌐 trt  
🔢 base64  
🔠 unbase64  
010 binary  
🔤 dbinary  
🔗 tinyurl  
🌐 urldecode  
🌐 urlencode  
🌐 url  
🔁 repeat  
❓ ask  
📖 readmore  

━━━━━━━━━━━━━━━━━━━━━━

★★ ai menu ★★

🧠 ai  
🤖 gpt3  
🤖 gpt2  
🤖 gptmini  
🤖 gpt  
🔵 meta  
📦 blackbox  
🌈 luma  
🎧 dj  
👑 flex  
🤵 flex2  
🧠 gpt4  
🔍 bing  
🎨 imagine  
🖼️ imagine2  
🤖 copilot  

━━━━━━━━━━━━━━━━━━━━━━

★★ main menu ★★

🏓 ping  
🏓 ping2  
🚀 speed  
📡 live  
💚 alive  
⏱️ runtime  
⏳ uptime  
📦 repo  
👑 owner  
📜 menu  
📜 menu2  
🔄 restart  

━━━━━━━━━━━━━━━━━━━━━━

★★ anime menu ★★

🤬 fack  
✅ truth  
😨 dare  
🐶 dog  
🐺 awoo  
👧 garl  
👰 waifu  
🐱 neko  
🧙 megnumin  
👗 maid  
👧 loli  
🎎 animegirl (1–5)  
🎬 anime (1–5)  
📰 animenews  
🦊 foxgirl  
🍥 naruto  

━━━━━━━━━━━━━━━━━

★★ other menu ★★

🕒 timenow  
📅 date  
🔢 count  
🧮 calculate  
🔢 countx  
🎲 flip  
🪙 coinflip  
🎨 rcolor  
🎲 roll  
ℹ️ fact  
💻 cpp  
🎲 rw  
💑 pair (1–3)  
✨ fancy  
🎨 logo <text>  
📖 define  
📰 news  
🎬 movie  
☀️ weather  
📦 srepo  
🤬 insult  
💾 save  
🌐 wikipedia  
🔑 gpass  
👤 githubstalk  
🔍 yts  
📹 ytv  

━━━━━━━━━━━━━━━


> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/dff3u2.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363318767880951@newsletter',
                        newsletterName: config.BOT_NAME,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});
