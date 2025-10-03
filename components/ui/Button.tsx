'use client'
import { ReactNode } from 'react'

export default function Button({ children, onClick }: { children: ReactNode, onClick?: () => void }) {
  return (
    <button onClick={onClick} className="px-4 py-2 rounded-xl shadow-sm bg-gradient-to-r from-sky-500 to-indigo-600 text-white">
      {children}
    </button>
  )
}
