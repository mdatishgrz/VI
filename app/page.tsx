import Image from 'next/image'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BatteryCharging,
  Bike,
  Bot,
  CarFront,
  CheckCircle2,
  ChevronRight,
  Compass,
  Cpu,
  Factory,
  Globe,
  MessageSquare,
  Newspaper,
  Orbit,
  Plane,
  Radar,
  ShieldCheck,
  ShipWheel,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Wrench,
} from 'lucide-react'

const glassPanel =
  'rounded-[28px] border border-white/80 bg-white/72 backdrop-blur-2xl shadow-[0_28px_80px_rgba(15,23,42,0.12)]'
const glassInset =
  'rounded-[24px] border border-slate-200/80 bg-white/82 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_36px_rgba(148,163,184,0.14)]'
const glassChip =
  'rounded-full border border-white/80 bg-white/72 px-4 py-2 text-sm text-slate-600 backdrop-blur-xl shadow-[0_10px_25px_rgba(148,163,184,0.12)]'

const heroStats = [
  { value: '120K+', label: 'global members' },
  { value: '9.8M', label: 'monthly interactions' },
  { value: '86', label: 'countries active' },
]

const featureCards: Array<{
  title: string
  description: string
  badge: string
  icon: LucideIcon
  preview: 'insights' | 'community' | 'news' | 'market'
}> = [
  {
    title: 'AI-Powered Vehicle Insights',
    description:
      'Context-aware diagnostics that blend platform knowledge, ownership patterns, and maintenance signals.',
    badge: 'AI intelligence',
    icon: Bot,
    preview: 'insights',
  },
  {
    title: 'Community Discussions',
    description:
      'Follow high-signal conversations from riders, captains, pilots, builders, and EV owners in one place.',
    badge: 'Live rooms',
    icon: MessageSquare,
    preview: 'community',
  },
  {
    title: 'Trending News & Updates',
    description:
      'See the stories moving the industry, from battery breakthroughs to aviation tech and marine innovation.',
    badge: 'Trend radar',
    icon: Newspaper,
    preview: 'news',
  },
  {
    title: 'Buy, Sell & Explore',
    description:
      'Browse verified listings, parts, and specialty machines while staying close to the communities behind them.',
    badge: 'Marketplace',
    icon: ShoppingBag,
    preview: 'market',
  },
]

const vehicleCategories: Array<{
  title: string
  description: string
  metric: string
  icon: LucideIcon
}> = [
  {
    title: 'Cars',
    description: 'Design, ownership, restoration, and performance culture.',
    metric: '14.6K live threads',
    icon: CarFront,
  },
  {
    title: 'EV',
    description: 'Battery trends, charging, software, and next-gen mobility.',
    metric: '6.2K smart insights',
    icon: BatteryCharging,
  },
  {
    title: 'Bikes',
    description: 'Urban riding, superbikes, touring, and custom garage stories.',
    metric: '4.8K rider circles',
    icon: Bike,
  },
  {
    title: 'Aircraft',
    description: 'Private aviation, pilot discussions, and aerospace innovation.',
    metric: '2.1K flight groups',
    icon: Plane,
  },
  {
    title: 'Ships',
    description: 'Marine tech, shipping operations, and vessel communities.',
    metric: '1.4K maritime hubs',
    icon: ShipWheel,
  },
]

const communityPosts = [
  {
    name: 'Nadia Chen',
    role: 'EV owner • Singapore',
    initials: 'NC',
    title: 'Range dipped after the last OTA update. Anyone seeing the same thermal curve?',
    excerpt:
      'Owners across three climates compared battery cooling logs and found a clear software-related pattern within hours.',
    upvotes: 284,
    replies: 41,
    accent: 'from-[#2563EB] to-cyan-400',
  },
  {
    name: 'Marco Vale',
    role: 'Marine engineer • Lisbon',
    initials: 'MV',
    title: 'Hybrid propulsion retrofit notes from our 10-day sea trial.',
    excerpt:
      'A thread combining telemetry screenshots, supplier feedback, and maintenance lessons from the crew.',
    upvotes: 191,
    replies: 27,
    accent: 'from-[#22C55E] to-emerald-300',
  },
  {
    name: 'Ari Patel',
    role: 'Aircraft builder • Austin',
    initials: 'AP',
    title: 'Composite panel vibration fix that finally removed cabin resonance.',
    excerpt:
      'Pilots and builders layered in materials advice, torque checklists, and vibration test clips from their own projects.',
    upvotes: 329,
    replies: 58,
    accent: 'from-indigo-400 to-[#2563EB]',
  },
]

const aiHighlights = [
  'Answers across cars, EVs, bikes, aircraft, ships, and industrial machines.',
  'Summarizes long discussion threads into clear next actions in seconds.',
  'Surfaces expert voices, common fixes, and confidence signals before you commit.',
]

const newsCards = [
  {
    title: 'AutoVerse maps how AI copilots are changing diagnostics across mixed fleets',
    category: 'AI Garage',
    image: '/illustrations/mechanic_hero_isometric_1776066632998.png',
  },
  {
    title: 'Global enthusiast communities are driving the next wave of collaborative knowledge',
    category: 'Community',
    image: '/illustrations/community_network_abstract_1776066653475.png',
  },
  {
    title: 'From search fatigue to guided discovery: better ways to find the right fix faster',
    category: 'Guides',
    image: '/illustrations/empty_search_state_1776066673807.png',
  },
]

const platformFeatures: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: 'Real-time discussions',
    description: 'High-signal rooms that stay live across regions, specialties, and vehicle types.',
    icon: Radar,
  },
  {
    title: 'Global community',
    description: 'Local expertise from owners and professionals across a worldwide network.',
    icon: Globe,
  },
  {
    title: 'AI insights',
    description: 'Structured answers that turn scattered information into useful direction fast.',
    icon: Cpu,
  },
  {
    title: 'Verified experts',
    description: 'Identity and expertise layers that make trustworthy guidance easier to spot.',
    icon: ShieldCheck,
  },
]

const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Community', href: '/community' },
      { label: 'AI Mechanic', href: '/ask-ai' },
      { label: 'Marketplace', href: '/marketplace' },
      { label: 'News & Trends', href: '/news' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { label: 'Cars', href: '/vehicles/cars' },
      { label: 'EV', href: '/vehicles/ev' },
      { label: 'Bikes', href: '/vehicles/bikes' },
      { label: 'Aircraft', href: '/vehicles/aircraft' },
      { label: 'Ships', href: '/vehicles/ships' },
      { label: 'Machines', href: '/vehicles' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About AutoVerse', href: '/dashboard' },
      { label: 'Careers', href: '/register' },
      { label: 'Partner Program', href: '/experts' },
      { label: 'Contact', href: '/profile' },
    ],
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-[0_10px_24px_rgba(148,163,184,0.12)]">
        <Orbit className="h-4 w-4 text-[#22C55E]" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  )
}

function FeaturePreview({ type }: { type: 'insights' | 'community' | 'news' | 'market' }) {
  if (type === 'insights') {
    return (
      <div className={`${glassInset} p-4`}>
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <span>AutoVerse AI</span>
          <span className="rounded-full bg-[#22C55E]/10 px-2 py-1 text-[#15803D]">Live</span>
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-[#2563EB]/12 px-4 py-3 text-slate-800">
            Compare charging loss patterns between humid and cold climates for this EV pack.
          </div>
          <div className="max-w-[88%] rounded-2xl rounded-tl-md border border-slate-200 bg-white/90 px-4 py-3 text-slate-700">
            Early signal suggests thermal balancing drift. I found matching cases, top fixes, and expert threads for you.
          </div>
        </div>
      </div>
    )
  }

  if (type === 'community') {
    return (
      <div className={`${glassInset} p-4`}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-[#2563EB] text-sm font-semibold text-white">
            RM
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Rina M.</p>
            <p className="text-xs text-slate-500">Rotorcraft Systems • 4m ago</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-700">
          Any pilots seeing smoother spool-up after the latest avionics calibration patch?
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>184 upvotes</span>
          <span>29 replies</span>
        </div>
      </div>
    )
  }

  if (type === 'news') {
    return (
      <div className={`${glassInset} overflow-hidden`}>
        <div
          className="h-28 border-b border-slate-200"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.18), transparent 28%), radial-gradient(circle at 80% 25%, rgba(34, 197, 94, 0.14), transparent 24%), linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(248, 250, 252, 0.98))',
          }}
        />
        <div className="p-4">
          <div className="inline-flex rounded-full bg-[#2563EB]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1D4ED8]">
            EV intelligence
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Battery-health forums just pushed solid-state coverage to the top of this week&apos;s radar.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${glassInset} p-4`}>
      <div className="flex items-center justify-between text-xs font-medium text-slate-500">
        <span>Verified listing</span>
        <span>Updated now</span>
      </div>
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white/90 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Zero-emission workboat</p>
            <p className="text-xs text-slate-500">Oslo marketplace</p>
          </div>
          <span className="rounded-full bg-[#22C55E]/10 px-3 py-1 text-xs font-semibold text-[#15803D]">
            Verified
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-slate-600">Starting at</span>
          <span className="font-semibold text-slate-900">$184K</span>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-950 selection:bg-[#2563EB]/20 selection:text-slate-950">
      <style>{`
        @keyframes autoverse-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }
        @keyframes autoverse-float-slow {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -16px, 0) rotate(1.2deg); }
        }
        @keyframes autoverse-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.12); opacity: 0.8; }
          50% { box-shadow: 0 0 0 12px rgba(37, 99, 235, 0); opacity: 1; }
        }
        @keyframes autoverse-grid {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 0 64px, 64px 0; }
        }
        .autoverse-float { animation: autoverse-float 7s ease-in-out infinite; }
        .autoverse-float-slow { animation: autoverse-float-slow 9s ease-in-out infinite; }
        .autoverse-pulse { animation: autoverse-pulse 3.2s ease-out infinite; }
        .autoverse-grid {
          animation: autoverse-grid 22s linear infinite;
          background-image:
            linear-gradient(rgba(37, 99, 235, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.07) 1px, transparent 1px);
          background-size: 64px 64px;
        }
      `}</style>

      <div className="relative isolate">
        <div className="autoverse-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
        <div className="absolute left-6 top-24 -z-10 h-72 w-72 rounded-full bg-[#2563EB]/12 blur-3xl" />
        <div className="absolute right-0 top-64 -z-10 h-80 w-80 rounded-full bg-[#22C55E]/10 blur-3xl" />
        <div className="absolute bottom-32 left-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-300/14 blur-3xl" />

        <header className="sticky top-0 z-40 border-b border-white/70 bg-white/65 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/80 bg-white/85 shadow-[0_12px_30px_rgba(37,99,235,0.18)]">
                <Orbit className="h-5 w-5 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">AutoVerse</p>
                <p className="text-sm text-slate-600">Global vehicle network</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
              <Link href="#features" className="transition-colors hover:text-slate-950">
                Features
              </Link>
              <Link href="#vehicles" className="transition-colors hover:text-slate-950">
                Vehicles
              </Link>
              <Link href="#community" className="transition-colors hover:text-slate-950">
                Community
              </Link>
              <Link href="#ai-mechanic" className="transition-colors hover:text-slate-950">
                AI Mechanic
              </Link>
              <Link href="#news" className="transition-colors hover:text-slate-950">
                News
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="hidden rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 sm:inline-flex"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(37,99,235,0.28)] transition-transform hover:-translate-y-0.5"
              >
                Join Community
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </header>

        <main>
          <section className="relative mx-auto max-w-[1500px] px-6 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-32 lg:pt-24">
            <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="max-w-2xl">
                <div className={`${glassChip} mb-8 inline-flex items-center gap-2`}>
                  <span className="autoverse-pulse h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                  Web3-inspired community intelligence for everything that moves
                </div>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[4.85rem] lg:leading-[0.98]">
                  Where the World
                  <span className="block bg-gradient-to-r from-[#2563EB] via-sky-500 to-[#22C55E] bg-clip-text text-transparent">
                    Connects Over Vehicles
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  From cars and EVs to aircraft and ships, explore, share, and connect with enthusiasts worldwide through a premium
                  platform built for discovery, conversation, and intelligent guidance.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-7 py-4 text-base font-medium text-white shadow-[0_20px_45px_rgba(37,99,235,0.28)] transition-transform hover:-translate-y-1"
                  >
                    Join Community
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-white/78 px-7 py-4 text-base font-medium text-slate-800 backdrop-blur-xl transition-colors hover:border-slate-200 hover:bg-white"
                  >
                    Explore Platform
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className={`${glassInset} p-5`}>
                      <div className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{stat.value}</div>
                      <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>Active across:</span>
                  {['Cars', 'EVs', 'Bikes', 'Aircraft', 'Ships', 'Machines'].map((item) => (
                    <span key={item} className={glassChip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[620px]">
                <div className={`${glassPanel} autoverse-float-slow relative overflow-hidden p-5 sm:p-6`}>
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{
                      background:
                        'radial-gradient(circle at top right, rgba(37, 99, 235, 0.14), transparent 34%), radial-gradient(circle at bottom left, rgba(34, 197, 94, 0.12), transparent 28%)',
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">AutoVerse command</p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                          One premium hub for every vehicle conversation
                        </h3>
                      </div>
                      <div className="rounded-full border border-[#22C55E]/20 bg-[#22C55E]/10 px-3 py-1 text-xs font-semibold text-[#15803D]">
                        System healthy
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                      <div className={`${glassInset} p-4`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                              <Bot className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">AI Mechanic</p>
                              <p className="text-xs text-slate-500">Chat preview</p>
                            </div>
                          </div>
                          <Sparkles className="h-5 w-5 text-[#22C55E]" />
                        </div>

                        <div className="mt-4 space-y-3 text-sm">
                          <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#2563EB]/12 px-4 py-3 text-slate-800">
                            Show the highest-signal EV battery discussions happening globally right now.
                          </div>
                          <div className="max-w-[92%] rounded-2xl rounded-tl-md border border-slate-200 bg-white/90 px-4 py-3 text-slate-700">
                            AutoVerse found three fast-rising threads, one verified expert summary, and a charging-loss trend cluster from Europe and APAC.
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className={`${glassInset} p-4`}>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Live categories</p>
                          <div className="mt-3 space-y-3">
                            {[
                              { name: 'EV intelligence', value: '2.6K live' },
                              { name: 'Aviation builds', value: '980 live' },
                              { name: 'Marine systems', value: '1.1K live' },
                            ].map((item) => (
                              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-3 py-2.5">
                                <span className="text-sm text-slate-700">{item.name}</span>
                                <span className="text-xs text-slate-500">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                          <div className={`${glassInset} p-4`}>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Verified experts</p>
                            <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">3,200+</div>
                            <p className="mt-2 text-sm text-slate-500">Mechanics, pilots, captains, and builders.</p>
                          </div>
                          <div className={`${glassInset} p-4`}>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Marketplace velocity</p>
                            <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">18%</div>
                            <p className="mt-2 text-sm text-slate-500">Week-over-week discovery growth.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${glassInset} mt-4 flex items-center gap-4 overflow-hidden p-4`}>
                      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[22px] border border-white/80">
                        <Image
                          src="/illustrations/mechanic_hero_isometric_1776066632998.png"
                          alt="AutoVerse AI mechanic illustration"
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900">Deep knowledge without the clutter</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          Search, summarize, and compare insights across global communities in a single premium workspace.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${glassInset} autoverse-float absolute -left-5 top-8 hidden w-52 p-4 lg:block`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#15803D]">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Active rooms</p>
                      <p className="mt-1 text-xl font-semibold text-slate-950">2.4K</p>
                    </div>
                  </div>
                </div>

                <div className={`${glassInset} autoverse-float-slow absolute -right-4 bottom-16 hidden w-56 p-4 lg:block`}>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {['AL', 'RV', 'KT'].map((item, index) => (
                        <div
                          key={item}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-gradient-to-br from-[#2563EB] to-cyan-400 text-xs font-semibold text-white"
                          style={{ zIndex: 4 - index }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Global experts online</p>
                      <p className="mt-1 text-xs text-slate-500">Instant responses from verified specialists.</p>
                    </div>
                  </div>
                </div>

                <div className={`${glassInset} absolute bottom-2 left-10 hidden w-48 p-4 md:block lg:left-0`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Signal score</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                      <Compass className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-slate-950">94.7%</p>
                      <p className="text-xs text-slate-500">High-confidence discussion discovery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Feature Grid"
              title="A polished platform layer for vehicle intelligence, community, and commerce"
              description="Each surface is designed like a premium product block: clear hierarchy, glass depth, and subtle interaction cues that keep the interface calm."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {featureCards.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className={`${glassPanel} group relative overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-2`}
                  >
                    <div
                      className="absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          'linear-gradient(145deg, rgba(37, 99, 235, 0.08), transparent 45%), radial-gradient(circle at top right, rgba(34, 197, 94, 0.09), transparent 28%)',
                      }}
                    />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="inline-flex rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                            {card.badge}
                          </span>
                          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{card.title}</h3>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">{card.description}</p>
                      <div className="mt-6 flex-1">
                        <FeaturePreview type={card.preview} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section id="vehicles" className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Explore Vehicles"
                title="Move seamlessly between categories without losing context"
                description="Browse dedicated spaces for every major vehicle domain while keeping one connected identity, one feed, and one intelligent search layer."
              />
              <div className={`${glassChip} inline-flex items-center gap-2 self-start`}>
                <Factory className="h-4 w-4 text-[#22C55E]" />
                Machines and industrial mobility are also part of the network
              </div>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {vehicleCategories.map((category) => {
                const Icon = category.icon
                return (
                  <div
                    key={category.title}
                    className={`${glassPanel} group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-2 hover:border-slate-200`}
                  >
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          'radial-gradient(circle at top, rgba(37, 99, 235, 0.12), transparent 32%), linear-gradient(180deg, rgba(255,255,255,0.22), transparent 65%)',
                      }}
                    />
                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/85 text-slate-700 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#2563EB]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-slate-950">{category.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
                      <div className="mt-6 inline-flex rounded-full bg-white/80 px-3 py-1.5 text-xs text-slate-500 shadow-[0_8px_20px_rgba(148,163,184,0.1)]">
                        {category.metric}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section id="community" className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className={`${glassPanel} p-8`}>
                <SectionHeading
                  eyebrow="Community Preview"
                  title="A modern social layer for serious enthusiasts and professionals"
                  description="Posts are structured for signal: identity, expertise, engagement, and the ability to turn discussion into actionable knowledge."
                />

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className={`${glassInset} p-5`}>
                    <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">4.7x</div>
                    <p className="mt-2 text-sm leading-6 text-slate-500">More saved discussions after AI summaries were introduced.</p>
                  </div>
                  <div className={`${glassInset} p-5`}>
                    <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">68%</div>
                    <p className="mt-2 text-sm leading-6 text-slate-500">Of high-performing threads include verified experts or trusted owners.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {communityPosts.map((post) => (
                  <div
                    key={post.title}
                    className={`${glassPanel} group p-5 transition-transform duration-300 hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${post.accent} text-sm font-semibold text-white`}>
                        {post.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-950">{post.name}</p>
                            <p className="text-xs text-slate-500">{post.role}</p>
                          </div>
                          <div className="inline-flex rounded-full bg-[#22C55E]/10 px-3 py-1 text-xs text-[#15803D]">
                            <TrendingUp className="mr-1.5 h-3.5 w-3.5" />
                            Trending discussion
                          </div>
                        </div>

                        <h3 className="mt-4 text-lg font-semibold leading-7 tracking-[-0.03em] text-slate-950">{post.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>

                        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1.5">{post.upvotes} upvotes</span>
                          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1.5">{post.replies} replies</span>
                          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1.5">Saved by 1.2K members</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="ai-mechanic" className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className={`${glassPanel} p-8 lg:p-10`}>
                <SectionHeading
                  eyebrow="AI Mechanic"
                  title="The intelligent layer that turns community scale into useful answers"
                  description="AutoVerse AI helps people move from scattered questions to confident next steps. It reads context, compares similar cases, and highlights the strongest signals from the community."
                />

                <div className="mt-10 space-y-4">
                  {aiHighlights.map((item) => (
                    <div key={item} className={`${glassInset} flex items-start gap-4 p-4`}>
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#15803D]">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className={`${glassInset} p-5`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Average answer time</p>
                    <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">14s</p>
                  </div>
                  <div className={`${glassInset} p-5`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Confidence signals</p>
                    <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">92%</p>
                  </div>
                </div>
              </div>

              <div className={`${glassPanel} relative overflow-hidden p-6 sm:p-8`}>
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    background:
                      'radial-gradient(circle at top left, rgba(37, 99, 235, 0.14), transparent 32%), radial-gradient(circle at bottom right, rgba(34, 197, 94, 0.1), transparent 28%)',
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Preview</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">AI chat workspace</h3>
                    </div>
                    <div className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-600">
                      Multi-domain reasoning
                    </div>
                  </div>

                  <div className={`${glassInset} mt-6 overflow-hidden p-4`}>
                    <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                        <Wrench className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">AutoVerse Mechanic</p>
                        <p className="text-xs text-slate-500">Cross-community diagnostic assistant</p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3 text-sm">
                      <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#2563EB]/12 px-4 py-3 text-slate-800">
                        Give me the likely causes for a high-pitched turbine noise after a marine EV retrofit.
                      </div>
                      <div className="max-w-[92%] rounded-2xl rounded-tl-md border border-slate-200 bg-white/90 px-4 py-3 text-slate-700">
                        I found three common causes: inverter cooling imbalance, shaft alignment drift, and prop load calibration. I also ranked which communities have the strongest supporting evidence.
                      </div>
                      <div className="max-w-[92%] rounded-2xl rounded-tl-md border border-slate-200 bg-white/90 px-4 py-3 text-slate-700">
                        Want the expert breakdown, similar case studies, or a checklist for the dockside inspection first?
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {['Expert breakdown', 'Similar cases', 'Inspection checklist'].map((chip) => (
                        <span key={chip} className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-600">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-6 h-52 overflow-hidden rounded-[26px] border border-white/80">
                    <Image
                      src="/illustrations/mechanic_hero_isometric_1776066632998.png"
                      alt="Futuristic AI mechanic preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/25 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/80 bg-white/82 p-4 backdrop-blur-xl shadow-[0_12px_30px_rgba(148,163,184,0.18)]">
                      <p className="text-sm font-semibold text-slate-900">Signal synthesis in action</p>
                      <p className="mt-2 text-xs leading-6 text-slate-600">
                        AI compares repair context, owner feedback, and verified expert guidance before suggesting next steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="news" className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="News & Trends"
              title="A premium feed for the stories shaping mobility, engineering, and culture"
              description="News cards stay visual and lightweight, helping people scan quickly while still feeling editorial and premium."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {newsCards.map((item) => (
                <article
                  key={item.title}
                  className={`${glassPanel} group overflow-hidden transition-transform duration-300 hover:-translate-y-2`}
                >
                  <div className="relative h-56 overflow-hidden border-b border-white/70">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/10 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1D4ED8] backdrop-blur-xl shadow-[0_10px_24px_rgba(148,163,184,0.16)]">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold leading-8 tracking-[-0.03em] text-slate-950">{item.title}</h3>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                      <span>AutoVerse editorial</span>
                      <span>Updated today</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <SectionHeading
                eyebrow="Platform Features"
                title="Built for speed, trust, and a global sense of motion"
                description="The core platform principles are simple: make discovery fast, make expertise visible, and keep the experience elegant."
              />

              <div className="grid gap-5 sm:grid-cols-2">
                {platformFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className={`${glassPanel} p-6`}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-[#2563EB]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-[1500px] px-6 py-24 sm:px-8 lg:px-10">
            <div className={`${glassPanel} relative overflow-hidden px-8 py-12 sm:px-10 lg:px-14 lg:py-14`}>
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  background:
                    'radial-gradient(circle at 15% 15%, rgba(37, 99, 235, 0.14), transparent 24%), radial-gradient(circle at 80% 30%, rgba(34, 197, 94, 0.1), transparent 22%), linear-gradient(135deg, rgba(255,255,255,0.34), rgba(255,255,255,0.2))',
                }}
              />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="inline-flex rounded-full border border-slate-200 bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                    Join the network
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
                    Join the Future of Vehicle Communities
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                    Step into a premium platform where vehicle culture, expert knowledge, and AI-guided discovery finally live in the same space.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                    <span className={glassChip}>Global member profiles</span>
                    <span className={glassChip}>Verified experts</span>
                    <span className={glassChip}>AI-powered exploration</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-cyan-400 px-8 py-4 text-base font-medium text-white shadow-[0_20px_45px_rgba(37,99,235,0.28)] transition-transform hover:-translate-y-1"
                  >
                    Join Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <div className={`${glassInset} px-5 py-4 text-sm text-slate-600`}>
                    <span className="font-semibold text-slate-950">No clutter.</span> Just premium discovery, conversation, and momentum.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/70 bg-white/55 backdrop-blur-2xl">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-10">
            <div>
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/80 bg-white/85 shadow-[0_12px_28px_rgba(37,99,235,0.14)]">
                  <Orbit className="h-5 w-5 text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">AutoVerse</p>
                  <p className="text-sm text-slate-600">Global vehicle community</p>
                </div>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                A futuristic SaaS platform for every vehicle conversation, from enthusiast culture to expert insight and verified commerce.
              </p>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{column.title}</p>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  {column.links.map((link) => (
                    <Link key={link.label} href={link.href} className="block transition-colors hover:text-slate-950">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
