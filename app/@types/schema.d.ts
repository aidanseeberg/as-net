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

interface TopAlbums {
  topalbums: {
    album: Album[];
  };
}

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
