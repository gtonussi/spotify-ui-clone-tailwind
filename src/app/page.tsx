import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  Laptop2Icon,
  LayoutListIcon,
  LibraryIcon,
  Maximize2Icon,
  Mic2Icon,
  PlayIcon,
  RepeatIcon,
  SearchIcon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
  VolumeIcon,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center text-sm font-semibold text-zinc-200 gap-3"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center text-sm font-semibold text-zinc-200 gap-3"
            >
              <SearchIcon />
              Search
            </a>
            <a
              href=""
              className="flex items-center text-sm font-semibold text-zinc-200 gap-3"
            >
              <LibraryIcon />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Minimal Study Techno
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              House Music 2023
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Bullet Holes Radio
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              420Moments
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Pop Up
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Code Mode
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-2">
              <ChevronLeftIcon />
            </button>
            <button className="rounded-full bg-black/40 p-2">
              <ChevronRightIcon />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="group group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                alt="Capa do álbum Wish You Were Here"
                height={104}
                src="/images/wywh.jpg"
                width={104}
              />
              <strong>Wish You Were Here</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                alt="Capa do álbum Wish You Were Here"
                height={104}
                src="/images/wywh.jpg"
                width={104}
              />
              <strong>Wish You Were Here</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                alt="Capa do álbum Wish You Were Here"
                height={104}
                src="/images/wywh.jpg"
                width={104}
              />
              <strong>Wish You Were Here</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                alt="Capa do álbum Wish You Were Here"
                height={104}
                src="/images/wywh.jpg"
                width={104}
              />
              <strong>Wish You Were Here</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/images/wywh.jpg"
                alt="Capa do álbum Wish You Were Here"
                width={104}
                height={104}
              />
              <strong>Wish You Were Here</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/images/wywh.jpg"
                alt="Capa do álbum Wish You Were Here"
                width={104}
                height={104}
              />
              <strong>Wish You Were Here</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for gtonussi</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                alt="Capa do álbum Wish You Were Here"
                className="w-full"
                height={120}
                src="/images/wywh.jpg"
                width={120}
              />

              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Awake at Last, 10 Years, Bush and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                alt="Capa do álbum Wish You Were Here"
                className="w-full"
                height={120}
                src="/images/wywh.jpg"
                width={120}
              />

              <strong className="font-semibold">Daily Mix 2</strong>
              <span className="text-sm text-zinc-500">
                Lone Tusker, Tiësto, Enzo Faleiro and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                alt="Capa do álbum Wish You Were Here"
                className="w-full"
                height={120}
                src="/images/wywh.jpg"
                width={120}
              />

              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Awake at Last, 10 Years, Bush and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                alt="Capa do álbum Wish You Were Here"
                className="w-full"
                height={120}
                src="/images/wywh.jpg"
                width={120}
              />

              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Awake at Last, 10 Years, Bush and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                alt="Capa do álbum Wish You Were Here"
                className="w-full"
                height={120}
                src="/images/wywh.jpg"
                width={120}
              />

              <strong className="font-semibold">Daily Mix 2</strong>
              <span className="text-sm text-zinc-500">
                Lone Tusker, Tiësto, Enzo Faleiro and more
              </span>
            </a>
          </div>
        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            alt="Capa do álbum Wish You Were Here"
            height={56}
            src="/images/wywh.jpg"
            width={56}
          />

          <div className="flex flex-col">
            <strong className="font-normal">Welcome to the Machine</strong>
            <span className="text-xs text-zinc-400">Pink Floyd</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <ShuffleIcon size={20} className="text-zinc-200" />
            <SkipBackIcon size={20} className="text-zinc-200" />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <PlayIcon size={20} />
            </button>

            <SkipForwardIcon size={20} className="text-zinc-200" />
            <RepeatIcon size={20} className="text-zinc-200" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-500">7:25</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mic2Icon size={20} />
          <LayoutListIcon size={20} />
          <Laptop2Icon size={20} />
          <div className="flex items-center gap-4">
            <VolumeIcon size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2Icon size={20} />
        </div>
      </footer>
    </div>
  );
}
