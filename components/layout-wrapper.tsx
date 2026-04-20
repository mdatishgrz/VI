'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Bell,
  Bot,
  Compass,
  FileText,
  Menu,
  Newspaper,
  Package,
  Plus,
  ShieldCheck,
  User,
  Users,
  Wrench,
  X,
} from 'lucide-react'
import { AutoVerseBrand, avChip, avPanelSoft } from '@/components/autoverse-ui'
import { cn } from '@/lib/utils'
import { currentUser } from '@/lib/autoverse-data'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Compass },
  { name: 'Ask AI', href: '/ask-ai', icon: Bot },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Vehicles', href: '/vehicles', icon: Wrench },
  { name: 'Marketplace', href: '/marketplace', icon: Package },
  { name: 'Experts', href: '/experts', icon: ShieldCheck },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'My Posts', href: '/my-posts', icon: FileText },
  { name: 'Profile', href: '/profile', icon: User },
]

function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const activeItem = navItems.find((item) => isActiveRoute(pathname, item.href))

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white text-slate-900">
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/25 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/70 bg-white/72 px-5 pb-5 pt-6 backdrop-blur-2xl shadow-[0_30px_80px_rgba(15,23,42,0.08)] transition-transform duration-300 md:static md:translate-x-0',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <AutoVerseBrand href="/dashboard" />
          <button className="rounded-full p-2 text-slate-500 md:hidden" onClick={() => setMobileOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className={cn(avPanelSoft, 'mt-6 p-4')}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Workspace</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Premium community tools, AI summaries, and static product flows for every vehicle space.
          </p>
        </div>

        <nav className="mt-6 space-y-1.5">
          {navItems.map((item) => {
            const active = isActiveRoute(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all',
                  active
                    ? 'bg-gradient-to-r from-[#2563EB] to-cyan-400 text-white shadow-[0_14px_28px_rgba(37,99,235,0.22)]'
                    : 'text-slate-600 hover:bg-white/70 hover:text-slate-950'
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto space-y-4">
          <div className={cn(avChip, 'inline-flex w-full items-center justify-center gap-2 text-center text-xs')}>
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            432 experts online now
          </div>

          <Link href="/profile" className={cn(avPanelSoft, 'block p-4')}>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-cyan-400 text-sm font-semibold text-white">
                {currentUser.initials}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-950">{currentUser.name}</p>
                <p className="truncate text-xs text-slate-500">{currentUser.role}</p>
              </div>
            </div>
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="sticky top-0 z-30 border-b border-white/70 bg-white/65 px-4 py-4 backdrop-blur-2xl sm:px-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 text-slate-600 md:hidden" onClick={() => setMobileOpen(true)}>
              <Menu className="h-5 w-5" />
            </button>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">AutoVerse app</p>
              <p className="truncate text-sm text-slate-700">{activeItem?.name ?? 'Workspace'}</p>
            </div>

            <div className="hidden min-w-0 flex-1 md:block">
              <div className="rounded-full border border-white/80 bg-white/85 px-4 py-3 text-sm text-slate-500 shadow-[0_8px_24px_rgba(148,163,184,0.08)]">
                Search communities, vehicles, experts, or marketplace listings...
              </div>
            </div>

            <Link
              href="/create"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)] sm:inline-flex"
            >
              <Plus className="h-4 w-4" />
              Create
            </Link>

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/85 text-slate-600 shadow-[0_8px_24px_rgba(148,163,184,0.08)]">
              <Bell className="h-4 w-4" />
            </button>
          </div>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
