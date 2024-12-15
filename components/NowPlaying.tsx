import { getRecentTracks } from "@/app/actions";
import Image from "next/image";
import Link from "next/link";
export default async function NowPlaying() {
  const track = await getRecentTracks(1);
  return (
    <div className="text-right">
      <h3 className="mb-2 font-black">now playing</h3>
      <Link target={"_blank"} href={track[0].url}>
        <Image
          width={144}
          height={144}
          alt={track[0].name}
          className="album"
          src={track[0].image[2]["#text"]}
        />
      </Link>
    </div>
  );
}
