import { getAlbums } from "@/app/actions";

export default async function Albums() {
  const albums = await getAlbums();
  if (!albums) return;
  return (
    <div className="relative w-fit h-fit text-right">
      <h3 className="mb-2">top albums of the week</h3>

      <div className="w-[336px] h-36 relative bg-purple">
        {albums.toReversed().map((album, i) => (
          <div
            key={i}
            className="hover:z-20 w-fit h-fit absolute top-0"
            style={{ right: i * 48 }}
          >
            <img className={`album`} src={album.image[2]["#text"]} />
          </div>
        ))}
      </div>
    </div>
  );
}