"use client";

import { useToast } from "@/components/ui/toast";
import { useState } from "react";

export default function RandomTailwindPage() {
  const [metrics, setMetrics] = useState({ a: 42, b: 7128 });
  const [fact, setFact] = useState("—");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toast = useToast()

  const randomize = () => {
    setMetrics({ a: Math.floor(Math.random() * 10000), b: Math.floor(Math.random() * 10000) });
  };

  const copyStats = async () => {
    const text = `${metrics.a} | ${metrics.b}`;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied!");
    } catch {
      toast.error("Copy failed");
    }
  };

  const generateFact = () => {
    const n = Math.floor(Math.random() * 900) + 100;
    const facts = [
      `A random number: ${n}`,
      `Did you know? ${n} is a friendly number here.`,
      `Fun fact: ${n} looks cool on a card.`,
      `Quick stat: ${n} users served (imaginary)`,
    ];
    setFact(facts[Math.floor(Math.random() * facts.length)]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* NAVBAR */}
      <header className="bg-white/60 backdrop-blur sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-green-400 flex items-center justify-center text-white font-bold">
                RT
              </div>
              <span className="font-semibold text-lg">RandomTail</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="hover:text-indigo-600">
                Features
              </a>
              <a href="#gallery" className="hover:text-indigo-600">
                Gallery
              </a>
              <a href="#contact" className="hover:text-indigo-600">
                Contact
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
              >
                Try Demo
              </button>
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md hover:bg-slate-100 cursor-pointer"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 shadow-sm">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#features" className="block">
              Features
            </a>
            <a href="#gallery" className="block">
              Gallery
            </a>
            <a href="#contact" className="block">
              Contact
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="w-full mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-600 text-white"
            >
              Try Demo
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <main className="flex-1">
        <section className="hero-bg py-16 bg-gradient-to-br from-indigo-50 to-green-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                A small random demo page built with Tailwind & React
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Use this component inside your Next.js app to quickly prototype a landing page.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#features"
                  className="inline-flex items-center px-5 py-3 rounded-md bg-white border shadow-sm"
                >
                  Explore features
                </a>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center px-5 py-3 rounded-md bg-indigo-600 text-white shadow hover:bg-indigo-700 cursor-pointer"
                >
                  Get started
                </button>
              </div>
            </div>

            {/* RANDOM CARD */}
            <div className="relative">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-white to-slate-50 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-slate-400">Live preview</div>
                    <div className="font-medium">Random Card Widget</div>
                  </div>
                  <div className="text-sm text-slate-400">v1.0</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white border">
                    <div className="text-sm text-slate-500">Metric A</div>
                    <div className="text-2xl font-semibold mt-2">{metrics.a}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white border">
                    <div className="text-sm text-slate-500">Metric B</div>
                    <div className="text-2xl font-semibold mt-2">{metrics.b}</div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={randomize}
                    className="px-3 py-2 rounded-md bg-green-100 text-green-800 text-sm cursor-pointer"
                  >
                    Randomize
                  </button>
                  <button
                    onClick={copyStats}
                    className="px-3 py-2 rounded-md bg-slate-100 text-slate-800 text-sm cursor-pointer"
                  >
                    Copy stats
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL */}
      {modalOpen && (
        <div
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40"
        >
          <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">Micro demo</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-500 cursor-pointer hover:text-slate-700"
              >
                ✕
              </button>
            </div>
            <p className="mt-2 text-slate-600">
              Click the button to generate a fun random fact number.
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={generateFact}
                className="px-4 py-2 rounded-md bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700"
              >
                Generate
              </button>
              <div className="flex-1 p-3 bg-slate-100 rounded-md">{fact}</div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="text-sm text-slate-600">© RandomTail 2025</div>
          <div className="text-sm text-slate-600">Made with ♥ using Tailwind + Next.js</div>
        </div>
      </footer>
    </div>
  );
}
