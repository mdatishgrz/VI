'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Github, KeyRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AutoVerseAuthShell } from '@/components/autoverse-auth-shell'
import { avInput } from '@/components/autoverse-ui'
import { cn } from '@/lib/utils'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('aria@autoverse.com')
  const [password, setPassword] = useState('demo-password')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    router.push('/dashboard?mode=demo')
  }

  async function handleProviderLogin() {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 700))
    router.push('/dashboard?mode=sso')
  }

  return (
    <AutoVerseAuthShell
      eyebrow="Sign In"
      title="Step back into your AutoVerse workspace."
      description="Access the premium community, AI tools, marketplace watchlists, and your saved vehicle threads with a polished demo flow."
      switchLabel="Need an account?"
      switchHref="/register"
      switchText="Create one"
    >
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Sign in to continue</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Use the prefilled demo credentials or try a static provider login to enter the product.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(avInput, 'border-0 shadow-none')}
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Password
            </label>
            <Link href="/forgot-password" className="text-xs font-medium text-[#2563EB] hover:text-blue-700">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={cn(avInput, 'border-0 shadow-none')}
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="h-12 w-full rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
        >
          {isLoading ? 'Signing you in...' : 'Enter AutoVerse'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
        <div className="h-px flex-1 bg-slate-200" />
        Demo providers
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Button
          type="button"
          variant="outline"
          onClick={handleProviderLogin}
          className="h-12 rounded-2xl border-slate-200 bg-white text-slate-700 shadow-[0_8px_20px_rgba(148,163,184,0.1)]"
        >
          <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Google demo
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleProviderLogin}
          className="h-12 rounded-2xl border-slate-200 bg-white text-slate-700 shadow-[0_8px_20px_rgba(148,163,184,0.1)]"
        >
          <Github className="mr-2 h-5 w-5" />
          GitHub demo
        </Button>
      </div>

      <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50/90 p-4 text-sm text-slate-600">
        <div className="flex items-start gap-3">
          <KeyRound className="mt-0.5 h-4 w-4 text-[#2563EB]" />
          This is a static flow. Successful actions route into the themed dashboard without needing a real backend.
        </div>
      </div>
    </AutoVerseAuthShell>
  )
}
