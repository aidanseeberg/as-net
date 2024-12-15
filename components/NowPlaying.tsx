import { getRecentTracks } from "@/app/actions";

export default async function NowPlaying() {
  const track = await getRecentTracks(1);
  return (
    <div className="text-right">
      <h3 className="mb-2">now playing</h3>

      <img
        alt={track[0].name}
        className="album"
        src={track[0].image[2]["#text"]}
      />
    </div>
  );
}
