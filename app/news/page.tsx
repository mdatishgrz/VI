'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Newspaper, Sparkles, TrendingUp } from 'lucide-react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import {
  AutoVersePageIntro,
  AutoVerseWorkspace,
  avChip,
  avInput,
  avPanel,
  avPanelSoft,
} from '@/components/autoverse-ui'
import { newsStories } from '@/lib/autoverse-data'
import { cn } from '@/lib/utils'

const filters = ['Latest', 'Trending', 'All'] as const

export default function NewsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Latest')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [selectedId, setSelectedId] = useState(newsStories[0].id)

  const visibleStories = useMemo(() => {
    if (filter === 'Trending') return newsStories.filter((item) => item.trending)
    if (filter === 'Latest') return [...newsStories].slice(0, 4)
    return newsStories
  }, [filter])

  const selectedStory = newsStories.find((item) => item.id === selectedId) ?? newsStories[0]

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          <AutoVersePageIntro
            eyebrow="News & Trends"
            title="A premium editorial surface for everything moving the industry."
            description="Browse static stories, open an in-page brief, and subscribe to a mock digest without leaving the product flow."
            aside={<div className={avChip}>Editorial + trend radar</div>}
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

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              {visibleStories.map((story) => (
                <button
                  key={story.id}
                  onClick={() => setSelectedId(story.id)}
                  className={cn(
                    avPanel,
                    'group block w-full overflow-hidden text-left transition hover:-translate-y-1',
                    selectedId === story.id && 'ring-2 ring-[#2563EB]/15'
                  )}
                >
                  <div className="grid gap-0 md:grid-cols-[220px_1fr]">
                    <div className="relative h-56 border-b border-white/70 md:h-full md:border-b-0 md:border-r">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 220px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span className="rounded-full bg-[#2563EB]/10 px-2.5 py-1 text-[#1D4ED8]">{story.category}</span>
                        <span>{story.time}</span>
                        {story.trending && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#22C55E]/10 px-2.5 py-1 text-[#15803D]">
                            <TrendingUp className="h-3.5 w-3.5" />
                            Trending
                          </span>
                        )}
                      </div>
                      <h2 className="mt-4 text-xl font-semibold leading-8 tracking-[-0.03em] text-slate-950">{story.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{story.preview}</p>
                      <p className="mt-4 text-sm font-medium text-slate-500">{story.source}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div className={cn(avPanel, 'overflow-hidden')}>
                <div className="relative h-64 border-b border-white/70">
                  <Image
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#1D4ED8]">
                    {selectedStory.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Newspaper className="h-3.5 w-3.5" />
                    AutoVerse brief • {selectedStory.time}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{selectedStory.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{selectedStory.preview}</p>
                  <div className={cn(avPanelSoft, 'mt-5 p-4 text-sm leading-6 text-slate-700')}>
                    Static briefing: this expanded panel stands in for a full article experience while keeping the product self-contained.
                  </div>
                </div>
              </div>

              <div className={cn(avPanel, 'p-6')}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#15803D]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Digest signup</p>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">Subscribe to AutoVerse Digest</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Receive the strongest global vehicle stories, community shifts, and expert patterns in one concise static digest.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className={avInput}
                  />
                  <button
                    onClick={() => setSubscribed(true)}
                    className="rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
                  >
                    Subscribe
                  </button>
                </div>
                {subscribed && <p className="mt-3 text-sm text-[#15803D]">Static confirmation sent to {email || 'your inbox'}.</p>}
              </div>
            </div>
          </div>
        </div>
      </AutoVerseWorkspace>
    </LayoutWrapper>
  )
}
