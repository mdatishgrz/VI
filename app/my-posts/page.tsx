'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Edit, Eye, MessageSquare, Plus, Trash2 } from 'lucide-react'
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

const tabs = ['All', 'Solved', 'In progress'] as const

export default function MyPostsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('All')
  const [hiddenIds, setHiddenIds] = useState<string[]>([])

  const posts = useMemo(() => {
    let items = communityPosts.filter((post) => post.ownedByCurrentUser && !hiddenIds.includes(post.id))
    if (tab === 'Solved') items = items.filter((post) => post.status === 'Solved')
    if (tab === 'In progress') items = items.filter((post) => post.status !== 'Solved')
    return items
  }, [hiddenIds, tab])

  const metrics = [
    ['Total posts', `${communityPosts.filter((post) => post.ownedByCurrentUser).length}`],
    ['Solved', `${communityPosts.filter((post) => post.ownedByCurrentUser && post.status === 'Solved').length}`],
    [
      'Total views',
      `${communityPosts
        .filter((post) => post.ownedByCurrentUser)
        .reduce((sum, post) => sum + post.views, 0)
        .toLocaleString()}`,
    ],
  ]

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-8 lg:px-10">
          <AutoVersePageIntro
            eyebrow="My Posts"
            title="Manage your threads, edits, and conversation momentum."
            description="Every post here is wired to a static detail view and edit flow so the account experience feels complete."
            aside={<div className={avChip}>Static management actions enabled</div>}
            actions={
              <Link
                href="/create"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
              >
                Create post
                <Plus className="h-4 w-4" />
              </Link>
            }
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {metrics.map(([label, value]) => (
              <div key={label} className={cn(avPanelSoft, 'p-5')}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
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
          </div>

          <div className="mt-8 space-y-4">
            {posts.map((post) => (
              <div key={post.id} className={cn(avPanel, 'p-5')}>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="rounded-full bg-[#2563EB]/10 px-2.5 py-1 text-[#1D4ED8]">{post.category}</span>
                      <span>{post.time}</span>
                      <span>{post.status}</span>
                    </div>
                    <Link href={`/community/${post.id}`} className="block">
                      <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">{post.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                    </Link>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {post.replies} replies
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {post.views.toLocaleString()} views
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/community/${post.id}/edit`}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      <Edit className="h-4 w-4" />
                      Edit
                    </Link>
                    <button
                      onClick={() => setHiddenIds((prev) => [...prev, post.id])}
                      className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {posts.length === 0 && (
              <div className={cn(avPanelSoft, 'p-10 text-center')}>
                <p className="text-lg font-semibold text-slate-950">No posts in this view.</p>
                <p className="mt-2 text-sm text-slate-600">Switch filters or create a new thread to keep the demo moving.</p>
              </div>
            )}
          </div>
        </div>
      </AutoVerseWorkspace>
    </LayoutWrapper>
  )
}
