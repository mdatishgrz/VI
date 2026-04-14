'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, MailCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AutoVerseAuthShell } from '@/components/autoverse-auth-shell'
import { avInput } from '@/components/autoverse-ui'
import { cn } from '@/lib/utils'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('aria@autoverse.com')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <AutoVerseAuthShell
      eyebrow="Reset Access"
      title="Recover your AutoVerse login in one step."
      description="This mock flow sends a static reset confirmation so the auth journey feels complete without needing a real email service."
      switchLabel="Remembered it?"
      switchHref="/login"
      switchText="Back to sign in"
    >
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">Reset password</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Enter your email and we&apos;ll generate a demo reset confirmation.
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
          />
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
        >
          Send reset link
        </Button>
      </form>

      {sent && (
        <div className="mt-6 rounded-[24px] border border-[#22C55E]/20 bg-[#22C55E]/8 p-4 text-sm text-slate-700">
          <div className="flex items-start gap-3">
            <MailCheck className="mt-0.5 h-4 w-4 text-[#15803D]" />
            Static confirmation sent to <span className="font-medium text-slate-950">{email}</span>. In a real app this would deliver a reset token.
          </div>
        </div>
      )}

      <Link href="/login" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
        <ArrowLeft className="h-4 w-4" />
        Return to sign in
      </Link>
    </AutoVerseAuthShell>
  )
}
