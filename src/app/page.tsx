import {
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react"

import Image from "next/image"

import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-justin.jpeg"
                width={80}
                height={80}
                alt="Capa do álbum do cantor"
              />
              <strong>Justice</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-nirvana.jpeg"
                width={80}
                height={80}
                alt="Capa do álbum do cantor"
              />
              <strong>Nevermind</strong>
              <button
                className="w-12 h-12 flex items-center justify-center pl-1 rounded-full 
              bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-back-to-future.jpeg"
                width={80}
                height={80}
                alt="Capa do álbum do cantor"
              />
              <strong className="w-32">Back To The Future</strong>
              <button
                className="w-12 h-12 flex items-center justify-center pl-1 rounded-full 
              bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-bon-jovi.png"
                width={80}
                height={80}
                alt="Capa do álbum do cantor"
              />
              <strong className="w-32">Bon Jovi Greatest Hits</strong>
              <button
                className="w-12 h-12 flex items-center justify-center pl-1 rounded-full 
              bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-coldplay.jpeg"
                width={80}
                height={80}
                alt="Capa do álbum do cantor"
              />
              <strong className="w-32">A Head Full Of Dreams Tour</strong>
              <button
                className="w-12 h-12 flex items-center justify-center pl-1 rounded-full 
              bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
              >
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpeg"
                width={80}
                height={80}
                alt="Capa do álbum do cantor"
              />
              <strong>=</strong>
              <button
                className="w-12 h-12 flex items-center justify-center pl-1 rounded-full 
              bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"
              >
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Vanessa Brazuna
          </h2>

          <div className="grid grid-cols-6 gap-5 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/ 10"
            >
              <Image
                src="/album-coldplay.jpeg"
                className="w-full"
                width={102}
                height={102}
                alt="Capa do álbum do cantor"
              />
              <strong className="font-semibold ">Coldplay</strong>
              <span className="text-sm text-zinc-400">Álbum . 2017</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album.jpeg"
                className="w-full"
                width={102}
                height={102}
                alt="Capa do álbum do cantor"
              />
              <strong className="font-semibold ">Ed Sheeran</strong>
              <span className="text-sm text-zinc-400">Álbum . 2021</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album-back-to-future.jpeg"
                className="w-full"
                width={102}
                height={102}
                alt="Capa do álbum do cantor"
              />
              <strong className="font-semibold ">Back to Future</strong>
              <span className="text-sm text-zinc-400">Álbum . 1985</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album-justin.jpeg"
                className="w-full"
                width={102}
                height={102}
                alt="Capa do álbum do cantor"
              />
              <strong className="font-semibold ">Justin Bieber</strong>
              <span className="text-sm text-zinc-400">Álbum . 2021</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album-nirvana.jpeg"
                className="w-full"
                width={102}
                height={102}
                alt="Capa do álbum do cantor"
              />
              <strong className="font-semibold ">Nirvana</strong>
              <span className="text-sm text-zinc-400">Álbum . 1991</span>
            </a>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
