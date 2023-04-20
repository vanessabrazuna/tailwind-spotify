import {
  Home as HomeIcon,
  Search,
  Library,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          De Volta para o Futuro
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This Is Ed Sheeran
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Tudo a Ver Com Ele
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Mix Rock
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Coldplay
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Justin Bieber
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Outro Eu
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This Is Os Arrais
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          80s Rock Drive
        </a>
      </nav>
    </aside>
  );
}
