"use client";
import { useEffect, useState } from "react";
import { useToast } from "./ui/toast";

/**
 * AdBanner
 * - Placeholder Google AdSense integration. Replace `YOUR_ADSENSE_CLIENT_ID` and `YOUR_AD_SLOT`
 * - For production, follow Google AdSense policies and get approved publisher ID.
 */
export default function AdBanner() {
  const [text, setText] = useState("");
  const toast = useToast();
  useEffect(() => {
    toast.info(text);
  }, [text]);
  useEffect(() => {
    // inject AdSense script only on client
    if (typeof window === "undefined") return;
    if ((window as any).adsbygoogle) return; // already loaded
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    s.setAttribute("data-ad-client", "ca-pub-5453841433165690"); // <-- replace me
    document.head.appendChild(s);
  }, []);

  return (
    <div className="relative w-full h-64 border rounded-md bg-slate-700 mb-4">
      <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full h-full bg-transparent shadow p-5 border-none focus:outline-none absolute inset-0 text-sm text-gray-200 resize-none" placeholder="Replace the placeholder client/slot IDs with your AdSense values."></textarea>

      {/* Example responsive ad slot */}
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5453841433165690"
        data-ad-slot="YOUR_AD_SLOT"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
    </div>
  );
}
