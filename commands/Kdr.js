$(eval const data = $(urlfetch json https://api.esportal.com/user_profile/get?username=YOURNAMEHERE);
  if (data.game_stats && data.game_stats[2]) {
    const a = data.game_stats[2].extra.assists || 0;
    const k = data.game_stats[2].kills || 0;
    const d = data.game_stats[2].deaths || 0;
    const r = d !== 0 ? (k / d).toFixed(2) : "N/A";
    `${data.username} har Kills: ${k}, Deaths: ${d}, Assists: ${a}, Ratio: ${r}`;
  } else {
    "Could not find kdr."
  }
)
