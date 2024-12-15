import { getAlbums } from "@/app/actions";
import Image from "next/image";
export default async function Albums() {
  const albums = await getAlbums();
  if (!albums) return;
  return (
    <div className="relative w-fit h-fit text-right">
      <h3 className="mb-2">top albums of the week</h3>

      <div className="w-[336px] h-36 relative">
        {albums.toReversed().map((album, i) => (
          <div
            key={i}
            className="hover:z-20 w-fit h-fit absolute top-0"
            style={{ right: i * 48 }}
          >
            <Image
              alt=""
              className={`album`}
              width={144}
              height={144}
              src={album.image[2]["#text"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
