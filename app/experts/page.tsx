'use client'

import { useMemo, useState } from 'react'
import { BadgeCheck, Clock3, MapPin, MessageSquare } from 'lucide-react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import {
  AutoVersePageIntro,
  AutoVerseWorkspace,
  avChip,
  avPanel,
  avPanelSoft,
} from '@/components/autoverse-ui'
import { expertProfiles } from '@/lib/autoverse-data'
import { cn } from '@/lib/utils'

const filters = ['All', 'EV', 'Marine', 'Aircraft'] as const

export default function ExpertsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [requestedIds, setRequestedIds] = useState<string[]>([])

  const visibleExperts = useMemo(() => {
    if (filter === 'All') return expertProfiles
    return expertProfiles.filter((expert) => expert.specialty.toLowerCase().includes(filter.toLowerCase()))
  }, [filter])

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-[1500px] px-6 py-8 sm:px-8 lg:px-10">
          <AutoVersePageIntro
            eyebrow="Verified Experts"
            title="People you can trust when the thread needs deeper guidance."
            description="This directory is static, but the request actions are wired so the flow feels like a real expert-matching surface."
            aside={<div className={avChip}>3.2K verified specialists</div>}
          />

          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  filter === item ? 'bg-slate-950 text-white' : 'border border-white/80 bg-white/80 text-slate-600'
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {visibleExperts.map((expert) => (
              <div key={expert.id} className={cn(avPanel, 'p-6')}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-cyan-400 text-sm font-semibold text-white">
                      {expert.initials}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{expert.name}</h2>
                      <p className="mt-1 text-sm text-slate-600">{expert.specialty}</p>
                    </div>
                  </div>
                  {expert.featured && (
                    <span className="rounded-full bg-[#22C55E]/10 px-3 py-1 text-xs font-medium text-[#15803D]">Featured</span>
                  )}
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">{expert.bio}</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className={cn(avPanelSoft, 'p-4')}>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Response time</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-slate-800">
                      <Clock3 className="h-4 w-4 text-[#2563EB]" />
                      {expert.responseTime}
                    </p>
                  </div>
                  <div className={cn(avPanelSoft, 'p-4')}>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Helpful rate</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-slate-800">
                      <BadgeCheck className="h-4 w-4 text-[#22C55E]" />
                      {expert.helpfulRate}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="h-4 w-4" />
                  {expert.location}
                </div>

                <button
                  onClick={() =>
                    setRequestedIds((prev) =>
                      prev.includes(expert.id) ? prev.filter((item) => item !== expert.id) : [...prev, expert.id]
                    )
                  }
                  className={cn(
                    'mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium shadow-[0_12px_28px_rgba(37,99,235,0.24)] transition',
                    requestedIds.includes(expert.id)
                      ? 'bg-[#22C55E]/10 text-[#15803D] shadow-none'
                      : 'bg-gradient-to-r from-[#2563EB] to-cyan-400 text-white'
                  )}
                >
                  <MessageSquare className="h-4 w-4" />
                  {requestedIds.includes(expert.id) ? 'Request sent' : 'Request guidance'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </AutoVerseWorkspace>
    </LayoutWrapper>
  )
}
