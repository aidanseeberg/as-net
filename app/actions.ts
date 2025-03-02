"use server";

export async function getAlbums(limit = 5) {
  const res: TopAlbums = await fetch(
    `http://ws.audioscrobbler.com/2.0?method=user.getTopAlbums&period=7day&limit=${limit}&user=${process.env.LAST_USER}&format=json&api_key=${process.env.LAST_KEY}`
  ).then((res) => res.json());

  return res.topalbums.album;
}

export async function getRecentTracks(limit = 5) {
  const res: RecentTracks = await fetch(
    `http://ws.audioscrobbler.com/2.0?method=user.getRecentTracks&user=${process.env.LAST_USER}&limit=${limit}&page=1&format=json&api_key=${process.env.LAST_KEY}`
  ).then((res) => res.json());

  return res.recenttracks.track;
}
