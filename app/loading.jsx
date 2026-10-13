import React from 'react'
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-white/80 backdrop-blur-sm dark:bg-neutral-950/80">
      {/* Aylanuvchi halqa */}
      <div className="relative h-20 w-20">
        {/* Tashqi yengil to'lqin */}
        <span className="absolute inset-0 animate-ping rounded-full bg-sky-400/30" />

        {/* Fon halqasi */}
        <span className="absolute inset-0 rounded-full border-4 border-sky-100 dark:border-neutral-800" />

        {/* Aylanuvchi gradient qism */}
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-sky-500 border-r-indigo-500" />

        {/* Markazdagi nuqta */}
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-br from-sky-400 to-indigo-500" />
      </div>

      {/* Matn va sakrovchi nuqtalar */}
      <div className="flex items-center gap-1 text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300">
        <span>Yuklanmoqda</span>
        <span className="flex gap-1 pl-1">
          <i className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500 [animation-delay:-0.3s]" />
          <i className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500 [animation-delay:-0.15s]" />
          <i className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-500" />
        </span>
      </div>
    </div>
  )
}