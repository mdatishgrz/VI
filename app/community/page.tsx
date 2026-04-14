'use client'

import { Suspense, useMemo, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  ArrowUp,
  Bookmark,
  CheckCircle2,
  Filter,
  MessageSquare,
  Plus,
  Search,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import {
  AutoVersePageIntro,
  AutoVerseWorkspace,
  avChip,
  avPanel,
  avPanelSoft,
} from '@/components/autoverse-ui'
import { communityPosts } from '@/lib/autoverse-data'
import { cn } from '@/lib/utils'

const tabs = ['Trending', 'Newest', 'Solved'] as const

function CommunityPageContent() {
  const searchParams = useSearchParams()
  const [tab, setTab] = useState<(typeof tabs)[number]>('Trending')
  const [query, setQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(4)
  const [savedIds, setSavedIds] = useState<string[]>(communityPosts.filter((post) => post.savedBy > 1000).map((post) => post.id))
  const [voteMap, setVoteMap] = useState<Record<string, number>>(
    Object.fromEntries(communityPosts.map((post) => [post.id, post.score]))
  )

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    let posts = [...communityPosts]
    if (tab === 'Newest') posts = posts.sort((a, b) => b.views - a.views)
    if (tab === 'Solved') posts = posts.filter((post) => post.status === 'Solved')
    if (tab === 'Trending') posts = posts.sort((a, b) => b.score - a.score)

    if (!normalizedQuery) return posts

    return posts.filter((post) => {
      const haystack = `${post.title} ${post.excerpt} ${post.category} ${post.tags.join(' ')}`.toLowerCase()
      return haystack.includes(normalizedQuery)
    })
  }, [query, tab])

  const createdBanner = searchParams.get('created')

  function handleUpvote(id: string) {
    setVoteMap((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }))
  }

  function toggleSaved(id: string) {
    setSavedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          {createdBanner && (
            <div className={cn(avPanelSoft, 'mb-8 flex items-center justify-between gap-4 p-5')}>
              <div>
                <p className="text-sm font-semibold text-slate-950">Your post was published into the static feed.</p>
                <p className="mt-1 text-sm text-slate-600">
                  The app is still running on demo data, but the publish flow is wired and ready.
                </p>
              </div>
              <Link href="/my-posts" className="text-sm font-medium text-[#2563EB]">
                View my posts
              </Link>
            </div>
          )}

          <AutoVersePageIntro
            eyebrow="Community"
            title="High-signal conversations from owners, builders, operators, and experts."
            description="Search, sort, and save the discussions that matter most. This feed is mock-backed, but its interactions are wired like a real product surface."
            aside={<div className={avChip}>12.4K members • 432 online</div>}
            actions={
              <Link
                href="/create"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
              >
                New post
                <Plus className="h-4 w-4" />
              </Link>
            }
          />

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className={cn(avPanelSoft, 'flex items-center gap-3 px-4 py-3 lg:w-[420px]')}>
              <Search className="h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts, vehicles, tags, or symptoms..."
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {tabs.map((item) => (
                <button
                  key={item}
                  onClick={() => setTab(item)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition',
                    tab === item ? 'bg-slate-950 text-white' : 'border border-white/80 bg-white/80 text-slate-600'
                  )}
                >
                  {item}
                </button>
              ))}
              <div className={cn(avChip, 'inline-flex items-center gap-2 text-xs')}>
                <Filter className="h-3.5 w-3.5" />
                Static filters enabled
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
            <div className="space-y-4">
              {filteredPosts.slice(0, visibleCount).map((post) => (
                <div key={post.id} className={cn(avPanel, 'p-5')}>
                  <div className="flex gap-4">
                    <div className="hidden w-16 shrink-0 flex-col items-center rounded-[22px] border border-slate-200 bg-white/90 py-4 md:flex">
                      <button
                        onClick={() => handleUpvote(post.id)}
                        className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-[#2563EB]"
                      >
                        <ArrowUp className="h-4 w-4" />
                      </button>
                      <span className="mt-2 text-sm font-semibold text-slate-950">{voteMap[post.id]}</span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                          <span className="rounded-full bg-[#2563EB]/10 px-2.5 py-1 text-[#1D4ED8]">{post.category}</span>
                          <span>{post.time}</span>
                          <span>{post.author}</span>
                        </div>
                        <button
                          onClick={() => toggleSaved(post.id)}
                          className={cn(
                            'rounded-full p-2 transition',
                            savedIds.includes(post.id)
                              ? 'bg-slate-950 text-white'
                              : 'border border-slate-200 bg-white/90 text-slate-500 hover:text-slate-950'
                          )}
                        >
                          <Bookmark className="h-4 w-4" />
                        </button>
                      </div>

                      <Link href={`/community/${post.id}`} className="block">
                        <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">{post.title}</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                      </Link>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <button
                              key={tag}
                              onClick={() => setQuery(tag)}
                              className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600"
                            >
                              #{tag}
                            </button>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                          {post.status === 'Solved' && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#22C55E]/10 px-3 py-1.5 text-[#15803D]">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Solved
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1">
                            <MessageSquare className="h-3.5 w-3.5" />
                            {post.replies} replies
                          </span>
                          <span>{post.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setVisibleCount((prev) => prev + 2)}
                className="w-full rounded-full border border-white/80 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 shadow-[0_10px_24px_rgba(148,163,184,0.08)]"
              >
                Load more posts
              </button>
            </div>

            <div className="space-y-6">
              <div className={cn(avPanel, 'p-6')}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#15803D]">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Momentum</p>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">What is rising right now</h3>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {['Battery software', 'Marine hybrid cooling', 'Portable diagnostics', 'Aircraft vibration'].map((item) => (
                    <div key={item} className={cn(avPanelSoft, 'flex items-center justify-between px-4 py-3')}>
                      <span className="text-sm text-slate-700">{item}</span>
                      <Sparkles className="h-4 w-4 text-[#22C55E]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className={cn(avPanel, 'p-6')}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Community stats</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    ['12.4K', 'Members'],
                    ['3.2K', 'Verified experts'],
                    ['94.7%', 'Signal score'],
                  ].map(([value, label]) => (
                    <div key={label} className={cn(avPanelSoft, 'p-4 text-center')}>
                      <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{value}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={cn(avPanelSoft, 'p-5')}>
                <p className="text-sm font-semibold text-slate-950">Need deeper guidance?</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Move from discussion to action with AI summaries, expert discovery, and marketplace watchlists.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/ask-ai" className="text-sm font-medium text-[#2563EB]">
                    Ask AI
                  </Link>
                  <Link href="/experts" className="text-sm font-medium text-[#2563EB]">
                    Browse experts
                  </Link>
                  <Link href="/marketplace" className="text-sm font-medium text-[#2563EB]">
                    Open marketplace
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

export default function CommunityPage() {
  return (
    <Suspense
      fallback={
        <LayoutWrapper>
          <AutoVerseWorkspace>
            <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600 sm:px-8 lg:px-10">Loading community...</div>
          </AutoVerseWorkspace>
        </LayoutWrapper>
      }
    >
      <CommunityPageContent />
    </Suspense>
  )
}
