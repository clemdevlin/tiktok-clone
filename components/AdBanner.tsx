'use client'
import { useEffect } from 'react'

/**
 * AdBanner
 * - Placeholder Google AdSense integration. Replace `YOUR_ADSENSE_CLIENT_ID` and `YOUR_AD_SLOT`
 * - For production, follow Google AdSense policies and get approved publisher ID.
 */
export default function AdBanner() {
  useEffect(() => {
    // inject AdSense script only on client
    if (typeof window === 'undefined') return
    if ((window as any).adsbygoogle) return // already loaded
    const s = document.createElement('script')
    s.async = true
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    s.setAttribute('data-ad-client', 'YOUR_ADSENSE_CLIENT_ID') // <-- replace me
    document.head.appendChild(s)
  }, [])

  return (
    <div className="w-full border rounded-md p-3 bg-white">
      {/* Example responsive ad slot */}
      <ins className="adsbygoogle block" style={{display: 'block'}} data-ad-client="YOUR_ADSENSE_CLIENT_ID" data-ad-slot="YOUR_AD_SLOT" data-ad-format="auto" data-full-width-responsive="true"></ins>
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
      <p className="text-sm mt-2 text-gray-500">Replace the placeholder client/slot IDs with your AdSense values.</p>
    </div>
  )
}
