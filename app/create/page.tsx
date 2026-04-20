'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, ImagePlus, Sparkles } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { LayoutWrapper } from '@/components/layout-wrapper'
import {
  AutoVersePageIntro,
  AutoVerseWorkspace,
  avChip,
  avInput,
  avPanel,
  avPanelSoft,
  avTextarea,
} from '@/components/autoverse-ui'
import { cn } from '@/lib/utils'

const categories = ['Cars', 'EV', 'Bikes', 'Aircraft', 'Ships', 'Machines']

function CreatePostPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [title, setTitle] = useState(searchParams.get('source') === 'ai' ? 'AI-assisted issue summary' : '')
  const [vehicle, setVehicle] = useState('')
  const [category, setCategory] = useState('EV')
  const [tags, setTags] = useState('')
  const [description, setDescription] = useState(
    searchParams.get('source') === 'ai'
      ? 'AutoVerse AI suggested escalating this issue to the community for owner comparisons and expert validation.'
      : ''
  )
  const [publishing, setPublishing] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setPublishing(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    router.push('/community?created=1')
  }

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-8 lg:px-10">
          <Link href="/community" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" />
            Back to community
          </Link>

          <div className="mt-6">
            <AutoVersePageIntro
              eyebrow="Create Post"
              title="Turn a question into a high-signal thread."
              description="Static post publishing is fully wired: fill the form, publish, and you’ll land back in the community with a success state."
              aside={<div className={avChip}>Structured for better replies</div>}
            />
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <form onSubmit={handleSubmit} className={cn(avPanel, 'space-y-6 p-6 sm:p-8')}>
              {searchParams.get('source') === 'ai' && (
                <div className={cn(avPanelSoft, 'flex items-start gap-3 p-4')}>
                  <Sparkles className="mt-0.5 h-4 w-4 text-[#2563EB]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-950">AI escalation detected</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      We prefilled part of your draft so you can move quickly from AI guidance into community feedback.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium text-slate-700">
                  Problem title
                </label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Summarize the problem in one strong sentence"
                  className={cn(avInput, 'border-0 shadow-none')}
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="vehicle" className="text-sm font-medium text-slate-700">
                    Vehicle or machine
                  </label>
                  <Input
                    id="vehicle"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    placeholder="2024 Aurora E7, hybrid workboat, etc."
                    className={cn(avInput, 'border-0 shadow-none')}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium text-slate-700">
                    Category
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="h-12 w-full rounded-2xl border border-slate-200/80 bg-white/85 px-4 text-sm text-slate-900 shadow-[0_8px_24px_rgba(148,163,184,0.08)] outline-none focus:border-[#2563EB]"
                  >
                    {categories.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="tags" className="text-sm font-medium text-slate-700">
                  Tags
                </label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="battery, cooling, vibration, software"
                  className={cn(avInput, 'border-0 shadow-none')}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-slate-700">
                  Detailed description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the symptoms, timing, environment, what changed, and what you already checked..."
                  className={cn(avTextarea, 'min-h-[220px]')}
                  required
                />
              </div>

              <div className={cn(avPanelSoft, 'flex items-center justify-between gap-4 p-4')}>
                <div>
                  <p className="text-sm font-semibold text-slate-950">Attach media</p>
                  <p className="mt-1 text-sm text-slate-600">Static upload zone for screenshots, sound clips, or inspection images.</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                  <ImagePlus className="h-5 w-5" />
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-3">
                <Link href="/community" className="rounded-full border border-slate-200 bg-white/85 px-5 py-3 text-sm font-medium text-slate-700">
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={publishing}
                  className="rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
                >
                  {publishing ? 'Publishing...' : 'Publish to community'}
                </button>
              </div>
            </form>

            <div className="space-y-6">
              <div className={cn(avPanel, 'p-6')}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Publishing tips</p>
                <div className="mt-5 space-y-3">
                  {[
                    'Lead with the symptom, not the suspected fix.',
                    'Add the vehicle context before listing your checks.',
                    'Use specific tags so experts can find your thread faster.',
                  ].map((tip) => (
                    <div key={tip} className={cn(avPanelSoft, 'p-4 text-sm leading-6 text-slate-700')}>
                      {tip}
                    </div>
                  ))}
                </div>
              </div>

              <div className={cn(avPanel, 'p-6')}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Preview</p>
                <div className={cn(avPanelSoft, 'mt-5 p-5')}>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="rounded-full bg-[#2563EB]/10 px-2.5 py-1 text-[#1D4ED8]">{category}</span>
                    <span>Static draft</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {title || 'Your post title will appear here'}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {description || 'A clean preview helps you judge hierarchy before you publish.'}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(tags ? tags.split(',') : ['battery', 'software']).map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 bg-white/85 px-3 py-1.5 text-xs text-slate-600">
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AutoVerseWorkspace>
    </LayoutWrapper>
  )
}

export default function CreatePostPage() {
  return (
    <Suspense
      fallback={
        <LayoutWrapper>
          <AutoVerseWorkspace>
            <div className="mx-auto max-w-[1400px] px-6 py-10 text-sm text-slate-600 sm:px-8 lg:px-10">Loading composer...</div>
          </AutoVerseWorkspace>
        </LayoutWrapper>
      }
    >
      <CreatePostPageContent />
    </Suspense>
  )
}
