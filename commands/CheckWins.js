$(eval
const d = $(urlfetch json https://api.esportal.com/user_profile/get?username=$(querystring));
    if (d.game_stats && d.game_stats[2]) {
        const w = d.game_stats[2].wins || 0;
        const l = d.game_stats[2].losses || 0;
        const s = d.game_stats[2].extra.current_winning_streak || 0;
        const r = ((w / (w + l)) * 100).toFixed(2);
        `${d.username} har ${w} wins (Winrate: ${r}%), med en winstreak på ${s}.`;
    } else {
        "Error";
    }
)