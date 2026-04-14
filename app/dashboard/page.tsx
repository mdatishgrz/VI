'use client'

import { Suspense, useMemo, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  ArrowRight,
  Bot,
  Compass,
  Package,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import {
  AutoVersePageIntro,
  AutoVerseStatCard,
  AutoVerseWorkspace,
  avChip,
  avPanel,
  avPanelSoft,
} from '@/components/autoverse-ui'
import {
  communityPosts,
  currentUser,
  dashboardSignals,
  expertProfiles,
  marketplaceListings,
} from '@/lib/autoverse-data'
import { cn } from '@/lib/utils'

const tabs = ['Tracked', 'Trending', 'My posts'] as const

function DashboardPageContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Tracked')
  const welcome = searchParams.get('welcome')
  const mode = searchParams.get('mode')

  const feed = useMemo(() => {
    if (activeTab === 'Trending') {
      return communityPosts.slice(0, 4)
    }

    if (activeTab === 'My posts') {
      return communityPosts.filter((post) => post.ownedByCurrentUser)
    }

    return [...communityPosts]
      .sort((a, b) => b.savedBy - a.savedBy)
      .slice(0, 4)
  }, [activeTab])

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          {(welcome || mode) && (
            <div className={cn(avPanelSoft, 'mb-8 flex flex-wrap items-center justify-between gap-4 p-5')}>
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  {welcome === 'new'
                    ? 'Your demo AutoVerse account is ready.'
                    : 'Welcome back to your AutoVerse workspace.'}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  This app is powered by static data, but every primary flow is wired so you can explore it like a real product.
                </p>
              </div>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
              >
                Explore community
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <AutoVersePageIntro
            eyebrow="Dashboard"
            title={`Good to see you, ${currentUser.name.split(' ')[0]}.`}
            description="Your dashboard blends AI summaries, community momentum, marketplace watchlists, and expert activity into one premium view."
            aside={<div className={avChip}>37 day contribution streak</div>}
            actions={
              <Link
                href="/ask-ai"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
              >
                Open AI workspace
                <Bot className="h-4 w-4" />
              </Link>
            }
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {dashboardSignals.map((signal) => (
              <AutoVerseStatCard
                key={signal.title}
                label={signal.title}
                value={signal.value}
                detail={signal.detail}
              />
            ))}
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div className={cn(avPanel, 'p-6')}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Signal feed</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">What needs your attention next</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        'rounded-full px-4 py-2 text-sm font-medium transition',
                        activeTab === tab
                          ? 'bg-slate-950 text-white shadow-[0_10px_24px_rgba(15,23,42,0.14)]'
                          : 'border border-white/80 bg-white/80 text-slate-600'
                      )}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {feed.map((post) => (
                  <Link key={post.id} href={`/community/${post.id}`} className={cn(avPanelSoft, 'block p-5 transition hover:-translate-y-0.5')}>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                      <span className="rounded-full bg-[#2563EB]/10 px-2.5 py-1 text-[#1D4ED8]">{post.category}</span>
                      <span>{post.time}</span>
                      <span>{post.views.toLocaleString()} views</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-950">{post.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span>{post.score} upvotes</span>
                      <span>{post.replies} replies</span>
                      <span>{post.savedBy} saves</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className={cn(avPanel, 'p-6')}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Collections</p>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">Smart watchlists</h3>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {['EV update watchlist', 'Marine retrofit signals', 'Compact scanner shortlist'].map((item) => (
                    <div key={item} className={cn(avPanelSoft, 'flex items-center justify-between px-4 py-3')}>
                      <span className="text-sm text-slate-700">{item}</span>
                      <Sparkles className="h-4 w-4 text-[#22C55E]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className={cn(avPanel, 'p-6')}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#15803D]">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Marketplace</p>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">Listings you may want to review</h3>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {marketplaceListings.slice(0, 2).map((listing) => (
                    <Link key={listing.id} href="/marketplace" className={cn(avPanelSoft, 'block p-4')}>
                      <p className="text-sm font-semibold text-slate-950">{listing.title}</p>
                      <p className="mt-1 text-sm text-slate-600">
                        {listing.price} • {listing.location}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className={cn(avPanel, 'p-6')}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-[#2563EB]">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Experts</p>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">Fast responders online</h3>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {expertProfiles.slice(0, 2).map((expert) => (
                    <Link key={expert.id} href="/experts" className={cn(avPanelSoft, 'block p-4')}>
                      <p className="text-sm font-semibold text-slate-950">{expert.name}</p>
                      <p className="mt-1 text-sm text-slate-600">
                        {expert.specialty} • {expert.responseTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={cn(avPanel, 'mt-10 flex flex-wrap items-center justify-between gap-4 p-6')}>
            <div>
              <p className="text-sm font-semibold text-slate-950">Today&apos;s strongest signal</p>
              <p className="mt-1 text-sm text-slate-600">
                Communities are clustering around battery software, hybrid marine cooling, and portable diagnostics.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#22C55E]/10 px-4 py-2 text-sm font-medium text-[#15803D]">
              <TrendingUp className="h-4 w-4" />
              Confidence rising across tracked topics
            </div>
          </div>
        </div>
      </AutoVerseWorkspace>
    </LayoutWrapper>
  )
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <LayoutWrapper>
          <AutoVerseWorkspace>
            <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600 sm:px-8 lg:px-10">Loading dashboard...</div>
          </AutoVerseWorkspace>
        </LayoutWrapper>
      }
    >
      <DashboardPageContent />
    </Suspense>
  )
}
