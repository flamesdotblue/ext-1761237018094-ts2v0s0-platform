import { Shield, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-500 to-fuchsia-500 p-[2px]">
            <div className="h-full w-full rounded-md bg-neutral-950 grid place-items-center">
              <Shield className="h-4 w-4 text-cyan-400" />
            </div>
          </div>
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">HoloID</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#security" className="hover:text-white transition-colors">Security</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 text-sm text-white hover:bg-white/10 transition-colors">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-[2px]">
            <span className="inline-flex h-full w-full items-center rounded-md bg-neutral-950 px-4 text-sm font-medium text-white hover:bg-neutral-900 transition-colors">Get Started</span>
          </button>
        </div>
      </div>
    </header>
  );
}
