"use server";
interface Album {
  name: string;
  playcount: string;
  url: string;
  "@attr": { rank: string };
  artist: {
    name: string;
    url: string;
    mbid: string;
  };
  image: {
    size: string;
    "#text": string;
  }[];
}
interface TopAlbums {
  topalbums: {
    album: Album[];
  };
}
export async function getAlbums(limit = 5) {
  const res: TopAlbums = await fetch(
    `http://ws.audioscrobbler.com/2.0?method=user.getTopAlbums&period=7day&limit=${limit}&user=${process.env.LAST_USER}&format=json&api_key=${process.env.LAST_KEY}`
  ).then((res) => res.json());

  return res.topalbums.album;
}

interface Track {
  name: string;
  artist: {
    "#text": string;
    mbid: string;
  };
  album: {
    "#text": string;
    mbid: string;
  };
  date: {
    uts: string;
    "#text": string;
  };
  url: string;
  image: {
    size: string;
    "#text": string;
  }[];
}
interface RecentTracks {
  recenttracks: {
    track: Track[];
    "@attr": {
      user: string;
      totalPages: string;
      page: string;
      perPage: string;
    };
  };
}
export async function getRecentTracks(limit = 5) {
  const res: RecentTracks = await fetch(
    `http://ws.audioscrobbler.com/2.0?method=user.getRecentTracks&user=${process.env.LAST_USER}&limit=${limit}&page=1&format=json&api_key=${process.env.LAST_KEY}`
  ).then((res) => res.json());

  return res.recenttracks.track;
}
