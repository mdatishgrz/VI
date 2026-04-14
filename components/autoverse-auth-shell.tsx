import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AutoVerseBrand, avPanel, avPanelSoft } from '@/components/autoverse-ui'

export function AutoVerseAuthShell({
  title,
  description,
  eyebrow,
  switchLabel,
  switchHref,
  switchText,
  children,
}: {
  title: string
  description: string
  eyebrow: string
  switchLabel: string
  switchHref: string
  switchText: string
  children: ReactNode
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F5F9FF] text-slate-950 selection:bg-[#2563EB]/20">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 12% 18%, rgba(37, 99, 235, 0.18), transparent 22%), radial-gradient(circle at 86% 14%, rgba(34, 197, 94, 0.11), transparent 18%), radial-gradient(circle at 50% 82%, rgba(125, 211, 252, 0.18), transparent 25%), linear-gradient(180deg, #F9FBFF 0%, #EEF5FF 50%, #E6EEF8 100%)',
        }}
      />
      <div className="pointer-events-none absolute left-8 top-20 h-72 w-72 rounded-full bg-[#2563EB]/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#22C55E]/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <AutoVerseBrand />
          <div className="text-sm text-slate-600">
            {switchLabel}{' '}
            <Link
              href={switchHref}
              className="inline-flex items-center gap-1 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 font-medium text-slate-900 shadow-[0_8px_20px_rgba(148,163,184,0.12)] transition hover:border-slate-200"
            >
              {switchText}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[0.95fr_0.8fr]">
          <div className="max-w-xl">
            <div className="inline-flex rounded-full border border-white/80 bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-[0_10px_24px_rgba(148,163,184,0.12)]">
              {eyebrow}
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-8 text-slate-600">{description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className={`${avPanelSoft} p-5`}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Global access</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Browse communities across cars, EVs, aircraft, ships, and specialty machines.
                </p>
              </div>
              <div className={`${avPanelSoft} p-5`}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Static demo flow</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Every action is wired with mock state so the product feels complete even without a backend.
                </p>
              </div>
            </div>
          </div>

          <div className={`${avPanel} p-8 sm:p-10`}>{children}</div>
        </div>
      </div>
    </div>
  )
}
