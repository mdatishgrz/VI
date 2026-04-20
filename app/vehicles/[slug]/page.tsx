'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import {
  BatteryCharging,
  Bike,
  CarFront,
  Plane,
  ShipWheel,
  Sparkles,
} from 'lucide-react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import {
  AutoVersePageIntro,
  AutoVerseWorkspace,
  avChip,
  avPanel,
  avPanelSoft,
} from '@/components/autoverse-ui'
import { communityPosts, getVehicleCategory, marketplaceListings } from '@/lib/autoverse-data'
import { cn } from '@/lib/utils'

const iconMap = {
  cars: CarFront,
  ev: BatteryCharging,
  bikes: Bike,
  aircraft: Plane,
  ships: ShipWheel,
}

const categoryMap: Record<string, string> = {
  cars: 'Cars',
  ev: 'EV',
  bikes: 'Bikes',
  aircraft: 'Aircraft',
  ships: 'Ships',
}

const hubTabs = ['overview', 'trending', 'issues', 'guides'] as const

export default function VehicleHubDetailPage() {
  const params = useParams<{ slug: string }>()
  const searchParams = useSearchParams()
  const category = useMemo(() => getVehicleCategory(params.slug), [params.slug])
  const initialTab = (searchParams.get('tab')?.toLowerCase() as (typeof hubTabs)[number]) || 'overview'
  const [activeTab, setActiveTab] = useState<(typeof hubTabs)[number]>(
    hubTabs.includes(initialTab) ? initialTab : 'overview'
  )

  const Icon = iconMap[category.slug]
  const relatedPosts = communityPosts.filter((post) => post.category === categoryMap[category.slug]).slice(0, 3)

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-[1500px] px-6 py-8 sm:px-8 lg:px-10">
          <AutoVersePageIntro
            eyebrow={`${category.shortLabel} Hub`}
            title={category.headline}
            description={category.overview}
            aside={<div className={avChip}>{category.metric}</div>}
            actions={
              <Link
                href="/ask-ai"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
              >
                Ask AI about {category.shortLabel}
              </Link>
            }
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className={cn(avPanel, 'p-6')}>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Category</p>
                    <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{category.name}</h2>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {hubTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        'rounded-full px-4 py-2 text-sm font-medium capitalize transition',
                        activeTab === tab ? 'bg-slate-950 text-white' : 'border border-white/80 bg-white/80 text-slate-600'
                      )}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {activeTab === 'overview' && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {category.highlights.map((item) => (
                      <div key={item} className={cn(avPanelSoft, 'p-4 text-sm leading-6 text-slate-700')}>
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'trending' && (
                  <div className={cn(avPanelSoft, 'mt-6 p-5')}>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Trending topic</p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">{category.trendingTopic}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      This topic is currently pulling the highest engagement inside the {category.shortLabel} space.
                    </p>
                  </div>
                )}

                {activeTab === 'issues' && (
                  <div className={cn(avPanelSoft, 'mt-6 p-5')}>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Common issue</p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">{category.commonIssue}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      AutoVerse members are comparing fixes, inspection routines, and expert notes for this issue cluster.
                    </p>
                  </div>
                )}

                {activeTab === 'guides' && (
                  <div className="mt-6 space-y-3">
                    {category.guides.map((guide) => (
                      <div key={guide} className={cn(avPanelSoft, 'flex items-center justify-between px-4 py-3')}>
                        <span className="text-sm text-slate-700">{guide}</span>
                        <Sparkles className="h-4 w-4 text-[#22C55E]" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={cn(avPanel, 'p-6')}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Related discussions</p>
                <div className="mt-5 space-y-3">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((post) => (
                      <Link key={post.id} href={`/community/${post.id}`} className={cn(avPanelSoft, 'block p-4')}>
                        <p className="text-sm font-semibold text-slate-950">{post.title}</p>
                        <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                      </Link>
                    ))
                  ) : (
                    <div className={cn(avPanelSoft, 'p-4 text-sm text-slate-600')}>
                      This category is wired, but its discussion feed is intentionally light in the static demo.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className={cn(avPanel, 'p-6')}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Marketplace crossover</p>
                <div className="mt-5 space-y-3">
                  {marketplaceListings
                    .filter((listing) =>
                      category.shortLabel === 'EV'
                        ? listing.category === 'EV'
                        : category.shortLabel === 'Ships'
                          ? listing.category === 'Marine'
                          : true
                    )
                    .slice(0, 2)
                    .map((listing) => (
                      <Link key={listing.id} href="/marketplace" className={cn(avPanelSoft, 'block p-4')}>
                        <p className="text-sm font-semibold text-slate-950">{listing.title}</p>
                        <p className="mt-2 text-sm text-slate-600">
                          {listing.price} • {listing.location}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>

              <div className={cn(avPanelSoft, 'p-5')}>
                <p className="text-sm font-semibold text-slate-950">Next steps for this hub</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/community" className="text-sm font-medium text-[#2563EB]">
                    Open community
                  </Link>
                  <Link href="/experts" className="text-sm font-medium text-[#2563EB]">
                    View experts
                  </Link>
                  <Link href="/marketplace" className="text-sm font-medium text-[#2563EB]">
                    Browse listings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AutoVerseWorkspace>
    </LayoutWrapper>
  )
}
