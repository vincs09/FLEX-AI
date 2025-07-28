const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "movie",
    desc: "Fetch detailed information about a movie.",
    category: "utility",
    react: "🎬",
    filename: __filename
},
async (conn, mek, m, { from, reply, sender, args }) => {
    try {
        // Properly extract the movie name from arguments
        const movieName = args.length > 0 ? args.join(' ') : m.text.replace(/^[\.\#\$\!]?movie\s?/i, '').trim();
        
        if (!movieName) {
            return reply("🔫 *Listen up, wise guy!* You gotta tell me which picture you're lookin' for.\n_Example: .movie The Godfather_");
        }

        const apiUrl = `https://apis.davidcyriltech.my.id/imdb?query=${encodeURIComponent(movieName)}`;
        const response = await axios.get(apiUrl);

        if (!response.data.status || !response.data.movie) {
            return reply("🚫 *Fuggedaboutit!* Couldn't find that flick. Double-check the name and try again, capiche?");
        }

        const movie = response.data.movie;
        
        // Format the caption with a mafia style
        const dec = `
🎬 *${movie.title}* (${movie.year}) ${movie.rated || ''}

⭐ *The Score:* ${movie.imdbRating || 'N/A'} | 🍅 *The Rotten Tomatoes Hit:* ${movie.ratings.find(r => r.source === 'Rotten Tomatoes')?.value || 'N/A'} | 💰 *The Take:* ${movie.boxoffice || 'N/A'}

📅 *Released on:* ${new Date(movie.released).toLocaleDateString()}
⏳ *Running Time:* ${movie.runtime}
🎭 *The Gig:* ${movie.genres}

📝 *The Lowdown:* ${movie.plot}

🎥 *The Boss Behind It:* ${movie.director}
✍️ *The Penman:* ${movie.writer}
🌟 *The Crew:* ${movie.actors}

🌍 *Homeland:* ${movie.country}
🗣️ *The Lingo:* ${movie.languages}
🏆 *The Riches:* ${movie.awards || 'None to speak of'}

[See the Dossier on IMDb](${movie.imdbUrl})

> *ENGINE CORE BY DAVINCS*`;

        // Send message with the requested format
        await conn.sendMessage(
            from,
            {
                image: { 
                    url: movie.poster && movie.poster !== 'N/A' ? movie.poster : 'https://files.catbox.moe/p04ckz.jpg'
                },
                caption: dec,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363318767880951@newsletter',
                        newsletterName: 'FLEX MOVIES',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.error('Movie command error:', e);
        reply(`❌ *Something went south, boss:* ${e.message}`);
    }
});
