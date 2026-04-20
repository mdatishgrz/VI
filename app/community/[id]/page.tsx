'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import {
  ArrowLeft,
  ArrowUp,
  Bookmark,
  CheckCircle2,
  MessageSquare,
  Share2,
  Sparkles,
} from 'lucide-react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import {
  AutoVerseWorkspace,
  avPanel,
  avPanelSoft,
  avTextarea,
} from '@/components/autoverse-ui'
import { communityPosts, getCommunityPost } from '@/lib/autoverse-data'
import { cn } from '@/lib/utils'

export default function CommunityPostDetailPage() {
  const params = useParams<{ id: string }>()
  const searchParams = useSearchParams()
  const post = useMemo(() => getCommunityPost(params.id), [params.id])
  const [saved, setSaved] = useState(false)
  const [score, setScore] = useState(post.score)
  const [bestSolutionId, setBestSolutionId] = useState(post.solutions.find((item) => item.isBestSolution)?.id ?? post.solutions[0]?.id)
  const [solutions, setSolutions] = useState(post.solutions)
  const [draft, setDraft] = useState('')

  function handleAddSolution(e: React.FormEvent) {
    e.preventDefault()
    if (!draft.trim()) return

    setSolutions((prev) => [
      ...prev,
      {
        id: `${Date.now()}`,
        author: 'Aria Mendoza',
        role: 'Community curator',
        verified: true,
        content: draft.trim(),
        time: 'Just now',
        score: 1,
      },
    ])
    setDraft('')
  }

  const relatedPosts = communityPosts
    .filter((item) => item.id !== post.id && item.category === post.category)
    .slice(0, 2)

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-8 lg:px-10">
          {searchParams.get('edited') && (
            <div className={cn(avPanelSoft, 'mb-6 p-5 text-sm text-slate-700')}>
              Your static draft was updated successfully. In a real product this change would now sync across the feed.
            </div>
          )}

          <Link href="/community" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" />
            Back to community
          </Link>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <article className={cn(avPanel, 'p-6 sm:p-8')}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="rounded-full bg-[#2563EB]/10 px-3 py-1 text-[#1D4ED8]">{post.category}</span>
                    <span>{post.time}</span>
                    <span>{post.authorRole}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSaved((prev) => !prev)}
                      className={cn(
                        'rounded-full p-2 transition',
                        saved ? 'bg-slate-950 text-white' : 'border border-slate-200 bg-white/80 text-slate-500'
                      )}
                    >
                      <Bookmark className="h-4 w-4" />
                    </button>
                    <button className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-500">
                      <Share2 className="h-4 w-4" />
                    </button>
                    {post.ownedByCurrentUser && (
                      <Link href={`/community/${post.id}/edit`} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700">
                        Edit
                      </Link>
                    )}
                  </div>
                </div>

                <h1 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950">{post.title}</h1>
                <p className="mt-4 text-base leading-8 text-slate-600">{post.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <button
                    onClick={() => setScore((prev) => prev + 1)}
                    className={cn(avPanelSoft, 'flex items-center justify-center gap-2 p-4 text-sm font-medium text-slate-700')}
                  >
                    <ArrowUp className="h-4 w-4 text-[#2563EB]" />
                    {score} upvotes
                  </button>
                  <div className={cn(avPanelSoft, 'p-4 text-center text-sm text-slate-700')}>{post.replies} replies</div>
                  <div className={cn(avPanelSoft, 'p-4 text-center text-sm text-slate-700')}>{post.views.toLocaleString()} views</div>
                </div>

                <div className={cn(avPanelSoft, 'mt-6 p-5')}>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Vehicle context</p>
                  <p className="mt-2 text-sm font-medium text-slate-950">{post.vehicleInfo}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    AutoVerse AI summary: {post.summary}
                  </p>
                </div>
              </article>

              <section className={cn(avPanel, 'p-6')}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Solutions</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                      {solutions.length} replies and proposed fixes
                    </h2>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {solutions.map((solution) => {
                    const highlighted = solution.id === bestSolutionId
                    return (
                      <div
                        key={solution.id}
                        className={cn(
                          avPanelSoft,
                          'p-5',
                          highlighted && 'border-[#22C55E]/30 bg-[#22C55E]/8 shadow-[0_14px_30px_rgba(34,197,94,0.08)]'
                        )}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-950">{solution.author}</p>
                            <p className="text-xs text-slate-500">
                              {solution.role} • {solution.time}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {highlighted && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-[#22C55E]/10 px-3 py-1 text-xs font-medium text-[#15803D]">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                Best solution
                              </span>
                            )}
                            {post.ownedByCurrentUser && !highlighted && (
                              <button
                                onClick={() => setBestSolutionId(solution.id)}
                                className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-medium text-slate-600"
                              >
                                Mark best
                              </button>
                            )}
                          </div>
                        </div>
                        <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700">{solution.content}</p>
                        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                          <ArrowUp className="h-3.5 w-3.5" />
                          {solution.score} helpful votes
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>

              <form onSubmit={handleAddSolution} className={cn(avPanel, 'p-6')}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Add a reply</p>
                    <p className="text-xs text-slate-500">Replies are stored in local state for this static experience.</p>
                  </div>
                </div>
                <textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Share your diagnosis, a checklist, or the fix that worked for you..."
                  className={cn(avTextarea, 'mt-5 min-h-[150px]')}
                />
                <div className="mt-4 flex justify-end">
                  <button className="rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]">
                    Post solution
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className={cn(avPanel, 'p-6')}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#15803D]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Thread summary</p>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">Why this discussion matters</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{post.summary}</p>
              </div>

              <div className={cn(avPanel, 'p-6')}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Related discussions</p>
                <div className="mt-5 space-y-3">
                  {relatedPosts.map((related) => (
                    <Link key={related.id} href={`/community/${related.id}`} className={cn(avPanelSoft, 'block p-4')}>
                      <p className="text-sm font-semibold text-slate-950">{related.title}</p>
                      <p className="mt-2 text-sm text-slate-600">{related.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className={cn(avPanelSoft, 'p-5')}>
                <p className="text-sm font-semibold text-slate-950">Need a different kind of help?</p>
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
