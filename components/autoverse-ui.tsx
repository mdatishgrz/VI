import type { ReactNode } from 'react'
import Link from 'next/link'
import { Orbit } from 'lucide-react'
import { cn } from '@/lib/utils'

export const avPanel =
  'rounded-[28px] border border-white/80 bg-white/72 backdrop-blur-2xl shadow-[0_28px_80px_rgba(15,23,42,0.12)]'
export const avPanelSoft =
  'rounded-[24px] border border-slate-200/80 bg-white/82 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_36px_rgba(148,163,184,0.14)]'
export const avChip =
  'rounded-full border border-white/80 bg-white/78 px-4 py-2 text-sm text-slate-600 backdrop-blur-xl shadow-[0_10px_25px_rgba(148,163,184,0.12)]'
export const avInput =
  'h-12 rounded-2xl border border-slate-200/80 bg-white/85 px-4 text-sm text-slate-900 shadow-[0_8px_24px_rgba(148,163,184,0.08)] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 placeholder:text-slate-400'
export const avTextarea =
  'w-full rounded-[24px] border border-slate-200/80 bg-white/85 px-4 py-4 text-sm text-slate-900 shadow-[0_8px_24px_rgba(148,163,184,0.08)] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 placeholder:text-slate-400'

export function AutoVerseBrand({
  href = '/',
  compact = false,
}: {
  href?: string
  compact?: boolean
}) {
  return (
    <Link href={href} className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/80 bg-white/85 shadow-[0_12px_30px_rgba(37,99,235,0.18)]">
        <Orbit className="h-5 w-5 text-[#2563EB]" />
      </div>
      {!compact && (
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">AutoVerse</p>
          <p className="text-sm text-slate-600">Global vehicle network</p>
        </div>
      )}
    </Link>
  )
}

export function AutoVerseWorkspace({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative min-h-full overflow-hidden bg-white', className)}>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function AutoVersePageIntro({
  eyebrow,
  title,
  description,
  actions,
  aside,
}: {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
  aside?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-[0_10px_24px_rgba(148,163,184,0.12)]">
          <Orbit className="h-4 w-4 text-[#22C55E]" />
          {eyebrow}
        </div>
        <h1 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-[3.1rem]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {aside}
        {actions}
      </div>
    </div>
  )
}

export function AutoVerseStatCard({
  label,
  value,
  detail,
}: {
  label: string
  value: string
  detail: string
}) {
  return (
    <div className={cn(avPanelSoft, 'p-5')}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-500">{detail}</p>
    </div>
  )
}
