$(eval const data = $(urlfetch json https://api.esportal.com/user_profile/get?username=$(querystring));
    if (data.game_stats && data.game_stats[2]) {
        const t = data.game_stats[2].extra.flashes_thrown || 0;
        const e = data.game_stats[2].extra.flashes_effective || 0;
        `${data.username} har kastat ${t} flashes, men bara ${e} har funkat.`;
    } else {
        "Error"
    }
)