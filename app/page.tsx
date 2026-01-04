export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="w-full flex justify-center pt-16">
        <iframe
          style={{ border: 0, width: 350, height: 442 }}
          src="https://bandcamp.com/EmbeddedPlayer/track=3254321674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://aidanseeberg.bandcamp.com/track/how-do-you-picture-a-year">
            how do you picture a year ? by Aidan Seeberg
          </a>
        </iframe>
        <div></div>
      </div>
    </main>
  );
}
