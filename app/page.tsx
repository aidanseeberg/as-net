import { cormorant, courier } from "./fonts";
import Albums from "@/components/Albums";
import Clock from "@/components/Clock";
import NowPlaying from "@/components/NowPlaying";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="min-h-screen">
      <div
        className={`${courier.className} w-full flex lowercase text-sm justify-between p-2`}
      >
        <p>aseebs.net</p>
        <Clock />
      </div>
      <div className={`${cormorant.className} py-8 md:py-16 lg:pt-32`}>
        <h1
          className={`${cormorant.className} body-padding font-black text-4xl md:text-6xl mb-4 md:mb-8`}
        >
          Aidan Seeberg
        </h1>

        <div className={`text-xl flex w-full flex-col`}>
          <div className={`section hover:bg-blue`}>
            <h2 className={`section-heading`}>{"work"}</h2>
            <p className="text-end">software engineer for Unicorn Auctions</p>
          </div>
          <div className={`section hover:bg-orange`}>
            <h2 className={`section-heading`}>{"projects"}</h2>
            <a href="https://thebeanz.net" target={"_blank"}>
              the beanz
            </a>
          </div>
          <div className={`section hover:bg-green`}>
            <h2 className={`section-heading`}>{"links"}</h2>
            <div className="flex">
              <a href="https://github.com/aidanseeberg" target={"_blank"}>
                github
              </a>
              {","}
              <a
                href="https://www.linkedin.com/in/aidanseeberg/"
                className="ml-2"
                target={"_blank"}
              >
                linkedin
              </a>
            </div>
          </div>

          <div className={`hover:bg-yellow section`}>
            <h2 className={`section-heading`}>{"music"}</h2>
            <div className="flex flex-col items-end gap-2">
              <NowPlaying />
              <Albums />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${courier.className} w-full flex lowercase text-sm justify-between p-2`}
      >
        <p>chicago, il</p>
        <p>music data from last.fm</p>
      </div>
    </main>
  );
}
