'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MessageCircle, Zap, Plus, FileText, User, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { icon: MessageCircle, label: 'Community', href: '/community' },
  { icon: Zap, label: 'Ask AI', href: '/ask-ai' },
  { icon: Plus, label: 'Create Post', href: '/create' },
  { icon: FileText, label: 'My Posts', href: '/my-posts' },
  { icon: User, label: 'Profile', href: '/profile' },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed bottom-6 right-6 md:hidden z-50 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden md:fixed md:left-0 md:top-0 md:bottom-0 md:w-64 md:bg-card md:border-r md:border-border md:flex md:flex-col md:pt-20">
        <nav className="flex-1 px-4 py-8 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-4 text-sm text-foreground/60">
          <p>&copy; 2026 AutoVerse</p>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/50" onClick={() => setIsOpen(false)}>
          <div
            className="absolute right-0 top-0 bottom-0 w-64 bg-card border-l border-border shadow-lg p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors block ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
