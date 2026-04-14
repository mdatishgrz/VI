'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, Bookmark, CheckCircle2, LogOut, Shield } from 'lucide-react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import {
  AutoVersePageIntro,
  AutoVerseWorkspace,
  avChip,
  avPanel,
  avPanelSoft,
} from '@/components/autoverse-ui'
import { currentUser, profileActivity, savedCollections } from '@/lib/autoverse-data'
import { cn } from '@/lib/utils'

const tabs = ['Activity', 'Saved', 'Settings'] as const

export default function ProfilePage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('Activity')
  const [notifications, setNotifications] = useState(true)
  const [privacyMode, setPrivacyMode] = useState(false)

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
          <AutoVersePageIntro
            eyebrow="Profile"
            title="Your identity layer across the AutoVerse network."
            description="Track your contributions, saved collections, and static account settings inside the same premium light-glass system."
            aside={<div className={avChip}>{currentUser.reputation} reputation</div>}
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <div className={cn(avPanel, 'p-6 text-center')}>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-cyan-400 text-3xl font-semibold text-white">
                  {currentUser.initials}
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{currentUser.name}</h2>
                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#22C55E]/10 px-3 py-1 text-xs font-medium text-[#15803D]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified member
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{currentUser.bio}</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    [currentUser.solutions.toString(), 'Solutions'],
                    [currentUser.savedItems.toString(), 'Saved'],
                    [currentUser.streak.toString(), 'Streak'],
                  ].map(([value, label]) => (
                    <div key={label} className={cn(avPanelSoft, 'p-4')}>
                      <p className="text-xl font-semibold tracking-[-0.04em] text-slate-950">{value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={cn(avPanelSoft, 'space-y-2 p-4')}>
                <button className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white/80">
                  <span className="inline-flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#2563EB]" />
                    Security preferences
                  </span>
                  Enabled
                </button>
                <button className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white/80">
                  <span className="inline-flex items-center gap-2">
                    <Bell className="h-4 w-4 text-[#2563EB]" />
                    Notification center
                  </span>
                  {notifications ? 'On' : 'Off'}
                </button>
                <Link
                  href="/login"
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
                >
                  <span className="inline-flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </span>
                  Demo
                </Link>
              </div>
            </div>

            <div className={cn(avPanel, 'p-6')}>
              <div className="flex flex-wrap gap-2">
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

              {tab === 'Activity' && (
                <div className="mt-6 space-y-4">
                  {profileActivity.map((activity) => (
                    <div key={activity.id} className={cn(avPanelSoft, 'p-5')}>
                      <p className="text-sm font-semibold text-slate-950">{activity.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{activity.detail}</p>
                      <p className="mt-3 text-xs text-slate-500">{activity.time}</p>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'Saved' && (
                <div className="mt-6 space-y-4">
                  {savedCollections.map((item) => (
                    <div key={item} className={cn(avPanelSoft, 'flex items-center justify-between p-5')}>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">{item}</p>
                        <p className="mt-1 text-sm text-slate-600">Saved collection for fast retrieval across the product.</p>
                      </div>
                      <Bookmark className="h-4 w-4 text-[#2563EB]" />
                    </div>
                  ))}
                </div>
              )}

              {tab === 'Settings' && (
                <div className="mt-6 space-y-4">
                  <div className={cn(avPanelSoft, 'flex items-center justify-between p-5')}>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">Email notifications</p>
                      <p className="mt-1 text-sm text-slate-600">Receive digests and high-priority expert replies.</p>
                    </div>
                    <button
                      onClick={() => setNotifications((prev) => !prev)}
                      className={cn(
                        'rounded-full px-4 py-2 text-sm font-medium',
                        notifications ? 'bg-[#22C55E]/10 text-[#15803D]' : 'bg-slate-100 text-slate-600'
                      )}
                    >
                      {notifications ? 'Enabled' : 'Disabled'}
                    </button>
                  </div>

                  <div className={cn(avPanelSoft, 'flex items-center justify-between p-5')}>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">Privacy mode</p>
                      <p className="mt-1 text-sm text-slate-600">Reduce visibility of activity in public community surfaces.</p>
                    </div>
                    <button
                      onClick={() => setPrivacyMode((prev) => !prev)}
                      className={cn(
                        'rounded-full px-4 py-2 text-sm font-medium',
                        privacyMode ? 'bg-[#2563EB]/10 text-[#1D4ED8]' : 'bg-slate-100 text-slate-600'
                      )}
                    >
                      {privacyMode ? 'On' : 'Off'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </AutoVerseWorkspace>
    </LayoutWrapper>
  )
}
