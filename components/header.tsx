'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Car, MessageSquare, Compass, PlusCircle, UserCircle, Globe } from 'lucide-react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth)

  const navLinks = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'Ask AI', href: '/ask-ai', icon: MessageSquare },
    { name: 'Community', href: '/community', icon: Compass },
    { name: 'Vehicles Hub', href: '/vehicles', icon: Car },
    { name: 'News & Trends', href: '/news', icon: Globe },
  ]

  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="container max-w-[1500px] mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
            AV
          </div>
          <div className="flex flex-col">
             <span className="hidden sm:inline font-extrabold text-[15px] leading-tight text-foreground tracking-tight">AutoVerse</span>
             <span className="hidden sm:inline font-semibold text-[10px] leading-tight text-primary">GLOBAL VEHICLE NETWORK</span>
          </div>
        </Link>

        {/* Global Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" className="h-9 font-semibold text-foreground/80" asChild>
                 <Link href="/create"><PlusCircle className="w-4 h-4 mr-2" /> Post Issue</Link>
              </Button>
              <div className="w-px h-5 bg-border mx-1"></div>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary rounded-full bg-muted/50" asChild>
                 <Link href="/profile" aria-label="User Profile"><UserCircle className="w-5 h-5" /></Link>
              </Button>
            </>
          ) : (
            <Button className="h-9 font-semibold shadow-sm rounded-lg" asChild>
               <Link href="/login">Sign In</Link>
            </Button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-foreground/80 hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card lg:hidden absolute w-full shadow-lg">
          <div className="container max-w-[1500px] mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
               <Link 
                 key={link.name}
                 href={link.href} 
                 className="text-foreground/80 hover:text-primary hover:bg-muted/50 px-3 py-2 rounded-lg transition-colors font-semibold flex items-center gap-3"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 <link.icon className="w-5 h-5" />
                 {link.name}
               </Link>
            ))}
            <div className="h-px bg-border my-2"></div>
            <Link 
               href="/create" 
               className="text-foreground/80 hover:text-primary hover:bg-muted/50 px-3 py-2 rounded-lg transition-colors font-semibold flex items-center gap-3"
             >
               <PlusCircle className="w-5 h-5" />
               Create Post
             </Link>
             <Link 
               href="/profile" 
               className="text-foreground/80 hover:text-primary hover:bg-muted/50 px-3 py-2 rounded-lg transition-colors font-semibold flex items-center gap-3"
             >
               <UserCircle className="w-5 h-5" />
               Profile
             </Link>
            <div className="grid grid-cols-2 gap-2 mt-2">
               <Button variant="outline" className="w-full font-semibold" asChild>
                 <Link href="/login">Sign In</Link>
               </Button>
               <Button className="w-full font-semibold shadow-sm" asChild>
                 <Link href="/register">Get Started</Link>
               </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
