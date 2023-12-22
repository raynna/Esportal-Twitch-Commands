$(eval
const data = $(urlfetch json https://api.esportal.com/user_profile/get?username=YOURNAMEHERE);
    if (data.game_stats && data.game_stats[2]) {
        const elo = data.game_stats[2].elo;
        const rankNames = ['Legend', 'Pro', 'Elite', 'Master', 'Veteran', 'Gold', 'Silver'];
        const rankThresholds = { Legend: 2000, Pro: 1800, Elite: 1600, Master: 1400, Veteran: 1200, Gold: 1000, Silver: 0 };

        let rank = 'Unranked';
        for (const name of rankNames) {
            if (elo >= rankThresholds[name]) {
                rank = name;
                break;
            }
        }

        `Rank: ${rank} (Rating: ${elo})`;
    } else {
        'Player not found or no rank available.';
    }
)