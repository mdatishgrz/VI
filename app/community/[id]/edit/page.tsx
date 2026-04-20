'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Save } from 'lucide-react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import {
  AutoVersePageIntro,
  AutoVerseWorkspace,
  avChip,
  avInput,
  avPanel,
  avTextarea,
} from '@/components/autoverse-ui'
import { getCommunityPost } from '@/lib/autoverse-data'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

export default function EditCommunityPostPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const post = useMemo(() => getCommunityPost(params.id), [params.id])
  const [title, setTitle] = useState(post.title)
  const [description, setDescription] = useState(post.description)
  const [tags, setTags] = useState(post.tags.join(', '))
  const [vehicleInfo, setVehicleInfo] = useState(post.vehicleInfo)
  const [saving, setSaving] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    router.push(`/community/${post.id}?edited=1`)
  }

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-[1300px] px-6 py-8 sm:px-8 lg:px-10">
          <Link href={`/community/${post.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" />
            Back to thread
          </Link>

          <div className="mt-6">
            <AutoVersePageIntro
              eyebrow="Edit Post"
              title="Refine your thread without breaking the visual flow."
              description="This edit view is wired for a static demo: save actions route you back into the detail page with a success state."
              aside={<div className={avChip}>Editing post #{post.id}</div>}
            />
          </div>

          <form onSubmit={handleSubmit} className={cn(avPanel, 'mt-10 space-y-6 p-6 sm:p-8')}>
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium text-slate-700">
                Title
              </label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className={cn(avInput, 'border-0 shadow-none')} />
            </div>

            <div className="space-y-2">
              <label htmlFor="vehicle" className="text-sm font-medium text-slate-700">
                Vehicle info
              </label>
              <Input
                id="vehicle"
                value={vehicleInfo}
                onChange={(e) => setVehicleInfo(e.target.value)}
                className={cn(avInput, 'border-0 shadow-none')}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="tags" className="text-sm font-medium text-slate-700">
                Tags
              </label>
              <Input id="tags" value={tags} onChange={(e) => setTags(e.target.value)} className={cn(avInput, 'border-0 shadow-none')} />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-slate-700">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={cn(avTextarea, 'min-h-[260px]')}
              />
            </div>

            <div className="flex flex-wrap justify-end gap-3">
              <Link href={`/community/${post.id}`} className="rounded-full border border-slate-200 bg-white/85 px-5 py-3 text-sm font-medium text-slate-700">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
              >
                {saving ? 'Saving...' : 'Save changes'}
                <Save className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </AutoVerseWorkspace>
    </LayoutWrapper>
  )
}
