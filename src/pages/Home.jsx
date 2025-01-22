import { useEffect, useState } from "react";


export function Home() {

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <section className="h-screen max-w-screen-xl mx-auto w-11/12 relative bg-black flex items-center justify-center">
        <img
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
          src="/assets/brg-bg.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-fade via-transparent to-hero-fade pointer-events-none"></div>
        {/* <div className="absolute bottom-5 flex flex-col items-center gap-2">
          <p className="text-white uppercase font-light">Les mer</p>
          <div className="">
            <svg
              className="size-5 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div> */}
        <div className={`text-white z-10 flex flex-col gap-8 bg-red transition-all duration-500 ${fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="flex flex-col gap-2 -ml-[2px]">
            <h1 className="text-5xl sm:text-7xl font-bold -ml-[3px]">
              BERGEN E-SPORT
            </h1>
            <p className="text-xl sm:text-2xl font-light">
              Et community for gamere på Vestlandet
            </p>
          </div>

          <a
            className="inline-block w-1/2 sm:w-auto text-center self-start p-2 bg-highlight text-black sm:text-2xl font-bold hover:bg-white/5 hover:backdrop-blur-md hover:text-white transition-all duration-50 ease-out"
            href="https://discord.gg/rPcx5wUDpK"
            target="_blank"
          >
            JOIN DISCORD
          </a>
        </div>
      </section>
    </>
  );
}
