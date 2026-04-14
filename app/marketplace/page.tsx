'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bookmark, MapPin, ShieldCheck, ShoppingBag } from 'lucide-react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import {
  AutoVersePageIntro,
  AutoVerseWorkspace,
  avChip,
  avPanel,
  avPanelSoft,
} from '@/components/autoverse-ui'
import { marketplaceListings } from '@/lib/autoverse-data'
import { cn } from '@/lib/utils'

const filters = ['All', 'EV', 'Marine', 'Bikes'] as const

export default function MarketplacePage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [savedIds, setSavedIds] = useState<string[]>([])

  const listings = useMemo(() => {
    if (filter === 'All') return marketplaceListings
    return marketplaceListings.filter((item) => item.category === filter)
  }, [filter])

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          <AutoVersePageIntro
            eyebrow="Marketplace"
            title="Browse verified listings without losing the community context."
            description="This static marketplace pairs premium listing cards with expert and community pathways, so the browsing flow feels useful instead of isolated."
            aside={<div className={avChip}>Buy, sell, and explore</div>}
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
            {listings.map((listing) => (
              <div key={listing.id} className={cn(avPanel, 'overflow-hidden')}>
                <div className="relative h-56 border-b border-white/70">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/88 to-transparent" />
                  <button
                    onClick={() =>
                      setSavedIds((prev) =>
                        prev.includes(listing.id) ? prev.filter((item) => item !== listing.id) : [...prev, listing.id]
                      )
                    }
                    className={cn(
                      'absolute right-4 top-4 rounded-full p-2 backdrop-blur-xl transition',
                      savedIds.includes(listing.id)
                        ? 'bg-slate-950 text-white'
                        : 'border border-white/80 bg-white/90 text-slate-600'
                    )}
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="rounded-full bg-[#2563EB]/10 px-2.5 py-1 text-[#1D4ED8]">{listing.category}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#22C55E]/10 px-2.5 py-1 text-[#15803D]">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {listing.status}
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">{listing.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{listing.summary}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="h-4 w-4" />
                    {listing.location}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {listing.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{listing.price}</span>
                    <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]">
                      <ShoppingBag className="h-4 w-4" />
                      Static inquiry
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={cn(avPanelSoft, 'mt-10 flex flex-wrap items-center justify-between gap-4 p-5')}>
            <div>
              <p className="text-sm font-semibold text-slate-950">Need technical confidence before buying?</p>
              <p className="mt-1 text-sm text-slate-600">Use the expert directory or the community before making a decision.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/experts" className="text-sm font-medium text-[#2563EB]">
                Browse experts
              </Link>
              <Link href="/community" className="text-sm font-medium text-[#2563EB]">
                Open community
              </Link>
            </div>
          </div>
        </div>
      </AutoVerseWorkspace>
    </LayoutWrapper>
  )
}
