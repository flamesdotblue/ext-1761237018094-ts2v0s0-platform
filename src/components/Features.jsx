import { ShieldCheck, CreditCard, Globe, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Bank-grade security',
    desc: 'End-to-end encryption, device binding, and hardware-backed keys keep identities safe.'
  },
  {
    icon: CreditCard,
    title: 'Fintech-first',
    desc: 'KYC-ready primitives and seamless payment flows built for compliance and conversion.'
  },
  {
    icon: Globe,
    title: 'Universal login',
    desc: 'One luminous identity across web and mobile. Less friction, more trust.'
  },
  {
    icon: CheckCircle2,
    title: 'Verified at a glance',
    desc: 'A holographic profile card and blue check signal authenticity instantly.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Everything you need for trusted identity</h2>
          <p className="mt-3 text-neutral-300">Secure, modern, and designed for the next wave of financial applications.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500/30 via-blue-500/30 to-fuchsia-500/30 text-cyan-200">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
