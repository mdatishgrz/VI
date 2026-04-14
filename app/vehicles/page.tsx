'use client'

import Link from 'next/link'
import {
  BatteryCharging,
  Bike,
  CarFront,
  Plane,
  ShipWheel,
} from 'lucide-react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import {
  AutoVersePageIntro,
  AutoVerseWorkspace,
  avChip,
  avPanel,
  avPanelSoft,
} from '@/components/autoverse-ui'
import { vehicleCategories } from '@/lib/autoverse-data'
import { cn } from '@/lib/utils'

const iconMap = {
  cars: CarFront,
  ev: BatteryCharging,
  bikes: Bike,
  aircraft: Plane,
  ships: ShipWheel,
}

export default function VehiclesPage() {
  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          <AutoVersePageIntro
            eyebrow="Vehicles Hub"
            title="Dedicated spaces for every major vehicle domain."
            description="Each category opens into its own static but fully themed hub with overview content, trends, issues, and related discussions."
            aside={<div className={avChip}>Cars, EVs, bikes, aircraft, ships</div>}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {vehicleCategories.map((category) => {
              const Icon = iconMap[category.slug]

              return (
                <div key={category.slug} className={cn(avPanel, 'flex flex-col p-6')}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{category.shortLabel}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                    </div>
                  </div>

                  <div className={cn(avPanelSoft, 'mt-6 p-4')}>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Headline</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{category.headline}</p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Link href={`/vehicles/${category.slug}?tab=trending`} className={cn(avPanelSoft, 'block p-4')}>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Trending</p>
                      <p className="mt-2 text-sm font-medium text-slate-900">{category.trendingTopic}</p>
                    </Link>
                    <Link href={`/vehicles/${category.slug}?tab=issues`} className={cn(avPanelSoft, 'block p-4')}>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Common issue</p>
                      <p className="mt-2 text-sm font-medium text-slate-900">{category.commonIssue}</p>
                    </Link>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.highlights.map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-4">
                    <Link
                      href={`/vehicles/${category.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
                    >
                      Enter {category.shortLabel} hub
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </AutoVerseWorkspace>
    </LayoutWrapper>
  )
}
