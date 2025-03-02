"use client";
import { getRecentTracks } from "@/app/actions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function NowPlaying() {
  const [track, setTrack] = useState<Track[]>([]);

  useEffect(() => {
    async function fetchRecentTracks() {
      return await getRecentTracks(1);
    }
    fetchRecentTracks().then((res) => setTrack(res));
  }, []);

  if (track.length == 0) return null;

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
