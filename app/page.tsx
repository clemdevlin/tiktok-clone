import Link from "next/link";
import AdBanner from "../components/AdBanner";
import { BentoGridDemo } from "@/components";

export default function Page() {
  return (
    <div>
      <section className="mb-8 mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-4 text-gray-300">
          Next.js + Tailwind Starter
        </h1>
        <p className="mb-6 text-gray-400">
          This starter includes a sample ad component, a shadcn-style Button,
          and Tailwind setup.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-300">
          Ad banner (placeholder)
        </h2>
        <AdBanner />

        <h2 className="text-xl font-semibold mb-2 text-gray-300">UI</h2>
        <Link
          href="/"
          className="inline-block px-4 py-2 rounded-md bg-slate-800 text-white"
        >
          Sample Button
        </Link>
      </section>

      <section>
        <BentoGridDemo />
      </section>
    </div>
  );
}
