'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  MessageSquare,
  Send,
  Sparkles,
  Wrench,
} from 'lucide-react'
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
import { askAiPrompts, communityPosts } from '@/lib/autoverse-data'
import { cn } from '@/lib/utils'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

function buildStaticResponse(input: string) {
  const lower = input.toLowerCase()

  if (lower.includes('battery') || lower.includes('charge') || lower.includes('ev')) {
    return `I found a strong EV pattern match.\n\n1. Compare charge-loss behavior before and after the most recent software change.\n2. Capture ambient temperature, charge rate, and battery preconditioning state.\n3. Review community threads where verified experts saw balancing drift rather than real capacity loss.\n\nBest next step: start with the EV update discussions, then escalate to Community if you want owner comparison data.`
  }

  if (lower.includes('noise') || lower.includes('knock') || lower.includes('engine')) {
    return `This reads like a cold-start mechanical or lubrication path.\n\n1. Verify oil grade, fill level, and filter choice first.\n2. Listen for whether the sound fades as temperature rises.\n3. Compare with community fixes involving valve clearance, timing components, or post-service mistakes.\n\nBest next step: collect one short clip and post it to Community if you want a mechanic-style second opinion.`
  }

  if (lower.includes('marine') || lower.includes('ship') || lower.includes('vessel')) {
    return `Marine hybrid and retrofit discussions point to three likely areas.\n\n1. Cooling loop balance and airflow.\n2. Shaft alignment or prop load calibration.\n3. Software settings that behave differently under repeated low-speed maneuvers.\n\nBest next step: compare your symptoms against the hybrid workboat threads, then use Marketplace or Experts if you need operator-specific guidance.`
  }

  return `I scanned the strongest matching static signals for your question.\n\n1. Narrow the vehicle type and the exact symptom window.\n2. Pull the most relevant community threads with verified expert replies.\n3. Turn the discussion into a step-by-step inspection checklist.\n\nBest next step: tell me the vehicle category, when the issue happens, and anything you have already tested.`
}

export default function AskAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'AutoVerse AI is ready. Ask about cars, EVs, bikes, aircraft, ships, or machines and I will summarize the strongest community signals for you.',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const relatedThreads = useMemo(() => communityPosts.slice(0, 3), [])

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userInput = input.trim()
    setMessages((prev) => [...prev, { id: `${Date.now()}`, role: 'user', content: userInput }])
    setInput('')
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 900))

    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        content: buildStaticResponse(userInput),
      },
    ])
    setIsLoading(false)
  }

  return (
    <LayoutWrapper>
      <AutoVerseWorkspace>
        <div className="mx-auto max-w-[1500px] px-6 py-8 sm:px-8 lg:px-10">
          <AutoVersePageIntro
            eyebrow="AI Mechanic"
            title="Ask AutoVerse AI for direction before you dig deeper."
            description="This static AI workspace simulates how the product summarizes strong community patterns, expert replies, and next-step checklists."
            aside={<div className={avChip}>Multi-domain reasoning enabled</div>}
            actions={
              <Link
                href="/create?source=ai"
                className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-5 py-3 text-sm font-medium text-slate-800 shadow-[0_10px_24px_rgba(148,163,184,0.12)]"
              >
                Escalate to community
                <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className={cn(avPanel, 'flex min-h-[680px] flex-col p-6')}>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">AutoVerse AI</p>
                    <p className="text-xs text-slate-500">Static diagnostic guidance with premium UI</p>
                  </div>
                </div>
                <div className="rounded-full bg-[#22C55E]/10 px-3 py-1 text-xs font-medium text-[#15803D]">Live demo</div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {askAiPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => setInput(prompt)}
                    className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-left text-xs font-medium text-slate-600 shadow-[0_8px_20px_rgba(148,163,184,0.08)] transition hover:border-slate-300 hover:text-slate-950"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex-1 space-y-4 overflow-y-auto pr-2">
                {messages.map((message) => (
                  <div key={message.id} className={cn('flex gap-3', message.role === 'user' ? 'justify-end' : 'justify-start')}>
                    {message.role === 'assistant' && (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}
                    <div
                      className={cn(
                        'max-w-[85%] whitespace-pre-wrap rounded-[24px] px-4 py-4 text-sm leading-7 shadow-[0_12px_30px_rgba(148,163,184,0.08)]',
                        message.role === 'user'
                          ? 'rounded-tr-md bg-gradient-to-r from-[#2563EB] to-cyan-400 text-white'
                          : 'rounded-tl-md border border-slate-200 bg-white/90 text-slate-700'
                      )}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="rounded-[24px] border border-slate-200 bg-white/90 px-4 py-4 text-sm text-slate-500">
                      AutoVerse AI is building your static response...
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>

              <form onSubmit={sendMessage} className="mt-6 rounded-[28px] border border-white/80 bg-white/85 p-3 shadow-[0_12px_30px_rgba(148,163,184,0.1)]">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe your vehicle issue, maintenance question, or trend you want summarized..."
                  className={cn(avTextarea, 'min-h-[96px] border-0 bg-transparent p-0 shadow-none')}
                />
                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-xs text-slate-500">Static demo actions are powered by local state only.</p>
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Send
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className={cn(avPanel, 'p-6')}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#15803D]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Prompt ideas</p>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">High-signal starting points</h3>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    'Compare similar cases',
                    'Summarize verified replies',
                    'Build an inspection checklist',
                  ].map((item) => (
                    <div key={item} className={cn(avPanelSoft, 'px-4 py-3 text-sm text-slate-700')}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className={cn(avPanel, 'p-6')}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-[#2563EB]">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Related threads</p>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">Community context</h3>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {relatedThreads.map((post) => (
                    <Link key={post.id} href={`/community/${post.id}`} className={cn(avPanelSoft, 'block p-4')}>
                      <p className="text-sm font-semibold text-slate-950">{post.title}</p>
                      <p className="mt-2 text-sm text-slate-600">{post.summary}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className={cn(avPanelSoft, 'p-5')}>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                    <Wrench className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">When to escalate</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      If you need owner comparisons, photos, sound clips, or expert validation, jump from AI into the community posting flow.
                    </p>
                    <Link href="/create?source=ai" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#2563EB]">
                      Create a community post
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
