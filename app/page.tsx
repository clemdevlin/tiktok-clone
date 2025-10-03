import Link from 'next/link'
import AdBanner from '../components/AdBanner'

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Next.js + Tailwind Starter</h1>
      <p className="mb-6">This starter includes a sample ad component, a shadcn-style Button, and Tailwind setup.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ad banner (placeholder)</h2>
        <AdBanner />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">UI</h2>
        <Link href="/" className="inline-block px-4 py-2 rounded-md bg-slate-800 text-white">Sample Button</Link>
      </section>
    </div>
  )
}
