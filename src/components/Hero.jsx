import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[88vh] md:h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          Futuristic Identity for a Trustless Web
        </div>
        <h1 className="mt-6 bg-gradient-to-r from-cyan-200 via-blue-200 to-fuchsia-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Own your digital identity
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg">
          HoloID is a secure, iridescent identity layer for modern fintech and web apps. Verify users instantly, reduce fraud, and delight with a luminous experience.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#get-started" className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-[2px] py-[2px]">
            <span className="inline-flex items-center gap-2 rounded-[10px] bg-neutral-950 px-6 py-3 font-medium text-white hover:bg-neutral-900 transition-colors">
              Get Started
            </span>
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition-colors">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
