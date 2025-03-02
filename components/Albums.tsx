import { getAlbums } from "@/app/actions";
import Link from "next/link";

export default async function Albums() {
  const albums = await getAlbums();
  if (!albums) return;
  return (
    <div className="relative w-fit h-fit text-right">
      <h3 className="mb-2 font-black">top albums of the week</h3>

      <div className="flex flex-col text-end gap-2 relative">
        {albums.slice(0, 5).map((album, i) => (
          <Link
            target={"_blank"}
            href={album.url}
            key={i}
          >{`${album.artist.name} - ${album.name}`}</Link>
          // <div key={i} className="w-fit h-fit">
          //   <Image
          //     alt=""
          //     className={`album`}
          //     width={144}
          //     height={144}
          //     src={album.image[2]["#text"]}
          //   />
          // </div>
        ))}
      </div>
    </div>
  );
}
