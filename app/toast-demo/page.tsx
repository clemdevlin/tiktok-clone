"use client";
// ------------------
// Example Usage Page

import { useToast } from "@/components/ui/toast";

// ------------------
export default function ToastDemoPage() {
  const toast = useToast();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-800">
      <h1 className="text-3xl font-bold mb-8">Tailwind Toast Component Demo</h1>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => toast.success("Success! Everything worked fine.")}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Success
        </button>
        <button
          onClick={() => toast.error("Something went wrong!")}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Error
        </button>
        <button
          onClick={() => toast.warning("Be careful! Something looks odd.")}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Warning
        </button>
        <button
          onClick={() => toast.info("Here’s an informational message.")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Info
        </button>
        <button
          onClick={() => toast.custom("Custom style toast ✨")}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Custom
        </button>
      </div>
    </div>
  );
}
