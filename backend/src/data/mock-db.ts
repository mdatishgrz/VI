import {
  ISolution,
  ICommunityPost,
  IVehicleCategory,
  INewsStory,
  IMarketplaceListing,
  IExpertProfile,
  IUserProfile
} from '../models';

export type Solution = Omit<ISolution, keyof import('mongoose').Document>;
export type CommunityPost = Omit<ICommunityPost, keyof import('mongoose').Document | 'solutions'> & { solutions: Solution[] };
export type VehicleCategory = Omit<IVehicleCategory, keyof import('mongoose').Document>;
export type NewsStory = Omit<INewsStory, keyof import('mongoose').Document>;
export type MarketplaceListing = Omit<IMarketplaceListing, keyof import('mongoose').Document>;
export type ExpertProfile = Omit<IExpertProfile, keyof import('mongoose').Document>;
export type UserProfile = Omit<IUserProfile, keyof import('mongoose').Document>;

export const currentUser: UserProfile = {
  name: 'Aria Mendoza',
  initials: 'AM',
  handle: '@ariamoves',
  email: 'aria@autoverse.com',
  location: 'Austin, Texas',
  role: 'Community curator • EV + marine systems',
  joinDate: 'October 2023',
  streak: 37,
  reputation: '12.8K',
  points: 12840,
  solutions: 92,
  savedItems: 27,
  bio: 'Systems-minded vehicle enthusiast focused on EV ownership, marine hybrid retrofits, and translating complex diagnostics into clear next steps.',
}

export const dashboardSignals = [
  {
    title: 'AI Insight Burst',
    value: '18',
    detail: 'Fresh summaries generated across your saved vehicle threads.',
  },
  {
    title: 'Expert Replies',
    value: '43',
    detail: 'Verified specialists responded inside your tracked communities this week.',
  },
  {
    title: 'Marketplace Watch',
    value: '11',
    detail: 'New listings match the alerts you set for EV and marine systems.',
  },
]

export const communityPosts: CommunityPost[] = [
  {
    id: '1',
    title: 'Range dipped after the latest OTA update. Anyone seeing the same thermal curve?',
    excerpt:
      'Owners across three climates compared battery cooling logs and found a clear software-related pattern within hours.',
    description:
      'I updated my 2024 Aurora E7 last night and immediately noticed a lower projected range plus more aggressive fan activity on the first charge cycle.\n\nA few owners in our local group reported the same thing, but only after long highway runs. Has anyone correlated this with outside temperature, charging speed, or a specific battery revision? I am mostly trying to figure out whether this is a calibration issue or a real efficiency hit.',
    summary: 'Early owner data points to a calibration drift after update v4.6 rather than permanent pack degradation.',
    category: 'EV',
    tags: ['Battery', 'Software', 'Charging'],
    vehicleInfo: '2024 Aurora E7 dual-motor',
    author: 'Nadia Chen',
    authorInitials: 'NC',
    authorRole: 'EV owner • Singapore',
    score: 284,
    replies: 41,
    views: 3920,
    savedBy: 1210,
    time: '2 hours ago',
    status: 'Trending',
    solutions: [
      {
        id: 's1',
        author: 'Leona Rhee',
        role: 'Verified EV calibration engineer',
        verified: true,
        content:
          'We are seeing similar reports when the thermal management profile resets its baseline after the OTA. If your usable range estimate recovers after two full charge and drive cycles, it is likely a software model issue rather than battery loss.\n\nStart by logging ambient temp, pack temp, and AC charge rate over the next 48 hours. The strongest signal so far is delayed balancing after overnight charging.',
        time: '48 mins ago',
        score: 112,
        isBestSolution: true,
      },
      {
        id: 's2',
        author: 'Theo V.',
        role: 'Fleet owner',
        verified: false,
        content:
          'We saw the same thing on four vans. Estimates normalized after the second DC fast-charge session, but highway efficiency remained slightly worse until the next patch.',
        time: '32 mins ago',
        score: 38,
      },
    ],
  },
  {
    id: '2',
    title: 'Hybrid propulsion retrofit notes from our 10-day sea trial',
    excerpt:
      'A thread combining telemetry screenshots, supplier feedback, and maintenance lessons from the crew.',
    description:
      'We just wrapped a 10-day sea trial on a harbor support vessel after swapping to a hybrid propulsion stack. Posting the early lessons because the setup looked great on paper but behaved differently under repeated low-speed maneuvering.\n\nMain surprises: inverter cooling needed more airflow than spec, battery discharge estimates were conservative, and captain feedback strongly favored one throttle profile over another. Curious whether others have tuned hybrid workboats for similar duty cycles.',
    summary: 'Cooling, throttle tuning, and operator feedback mattered more than peak power in the first sea-trial results.',
    category: 'Ships',
    tags: ['Marine', 'Hybrid', 'Telemetry'],
    vehicleInfo: '38m harbor support vessel retrofit',
    author: 'Marco Vale',
    authorInitials: 'MV',
    authorRole: 'Marine engineer • Lisbon',
    verifiedAuthor: true,
    score: 191,
    replies: 27,
    views: 2688,
    savedBy: 820,
    time: '5 hours ago',
    status: 'Hot',
    solutions: [
      {
        id: 's3',
        author: 'Captain Elise',
        role: 'Verified maritime operator',
        verified: true,
        content:
          'Your crew feedback on throttle mapping matches what we learned on our pilot boat. We ended up with an "approach mode" profile for low-speed docking and saw both smoother handling and better energy efficiency.',
        time: '2 hours ago',
        score: 67,
        isBestSolution: true,
      },
      {
        id: 's4',
        author: 'HarborGrid',
        role: 'Community member',
        verified: false,
        content:
          'Can you share which cooling loop vendor you used? We saw large swings in inverter temps until we reoriented the return manifold.',
        time: '1 hour ago',
        score: 15,
      },
    ],
  },
  {
    id: '3',
    title: 'Composite panel vibration fix that finally removed cabin resonance',
    excerpt:
      'Pilots and builders layered in materials advice, torque checklists, and vibration test clips from their own projects.',
    description:
      'This started as a small rattle in cruise and turned into a resonant hum that was driving everyone in the cockpit crazy. After balancing the prop and checking the obvious fasteners, we traced the issue to a panel support stack-up inside the cabin.\n\nI am sharing the sequence that finally fixed it because the solution was embarrassingly simple once we understood the harmonic path.',
    summary: 'A panel support and fastener stack-up issue created a resonance path that looked like a much bigger airframe problem.',
    category: 'Aircraft',
    tags: ['Aviation', 'Vibration', 'Build Log'],
    vehicleInfo: 'Experimental composite aircraft',
    author: 'Ari Patel',
    authorInitials: 'AP',
    authorRole: 'Aircraft builder • Austin',
    score: 329,
    replies: 58,
    views: 4410,
    savedBy: 1502,
    time: '8 hours ago',
    status: 'Solved',
    solutions: [
      {
        id: 's5',
        author: 'Marta Jules',
        role: 'Verified airframe technician',
        verified: true,
        content:
          'Your final fix lines up with a classic resonance transfer through interior attachment points. Excellent catch documenting the fastener torque delta before and after the spacer change.',
        time: '3 hours ago',
        score: 94,
        isBestSolution: true,
      },
      {
        id: 's6',
        author: 'RotorSam',
        role: 'Builder',
        verified: false,
        content:
          'I had a similar cabin buzz on a different build and it also turned out to be one hidden interface amplifying the noise. Appreciate the checklist.',
        time: '1 hour ago',
        score: 24,
      },
    ],
  },
  {
    id: '4',
    title: 'Cold-start knock after oil service on a 1.5L daily driver',
    excerpt:
      'The noise fades after five minutes, and I am trying to separate valve-train chatter from an oil-spec mistake.',
    description:
      'Right after a basic service, I started hearing a knocking or ticking sound for the first few minutes of driving. It fades as the engine warms up, which makes me suspect lubrication or clearance rather than a constant mechanical issue.\n\nAnyone seen this right after a service visit? I want to know what to check before going back to the garage.',
    summary: 'Cold-start noise immediately after service often points to oil spec, fill level, or pre-existing valve clearance issues.',
    category: 'Cars',
    tags: ['Engine', 'Noise', 'Maintenance'],
    vehicleInfo: '2018 Halo City 1.5L',
    author: 'Rishi Nair',
    authorInitials: 'RN',
    authorRole: 'Owner • Bengaluru',
    score: 156,
    replies: 22,
    views: 2150,
    savedBy: 630,
    time: '1 day ago',
    status: 'New',
    solutions: [
      {
        id: 's7',
        author: 'K. Morales',
        role: 'Verified master tech',
        verified: true,
        content:
          'Start with the simple checks: confirm oil grade, confirm fill level, and inspect the filter used. If the service shop installed the wrong viscosity, top-end noise on cold start is a very plausible outcome.',
        time: '18 hours ago',
        score: 73,
        isBestSolution: true,
      },
      {
        id: 's8',
        author: 'DailyDriveDan',
        role: 'Owner',
        verified: false,
        content:
          'I had this exact issue after a quick-lube stop. Wrong viscosity caused delayed quieting every morning until I swapped it back.',
        time: '16 hours ago',
        score: 21,
      },
    ],
  },
  {
    id: '5',
    title: 'Which compact OBD scanner is actually worth keeping in the glovebox?',
    excerpt:
      'Need something small enough to leave in the car but reliable enough to use during road trips and community troubleshooting.',
    description:
      'I have been testing compact scanners because I want one dependable tool I can keep in the car for quick checks and shared diagnostics when helping other members.\n\nPriorities are: dependable Bluetooth connection, readable freeze-frame data, and decent coverage for common ABS and battery-management codes.',
    summary: 'People are favoring compact scanners that trade advanced bidirectional features for reliability and clean mobile apps.',
    category: 'Cars',
    tags: ['Tools', 'OBD', 'Diagnostics'],
    vehicleInfo: 'Mixed fleet',
    author: currentUser.name,
    authorInitials: currentUser.initials,
    authorRole: currentUser.role,
    score: 98,
    replies: 19,
    views: 1670,
    savedBy: 440,
    time: '2 days ago',
    status: 'Trending',
    ownedByCurrentUser: true,
    solutions: [
      {
        id: 's9',
        author: 'Leo Grant',
        role: 'Verified technician',
        verified: true,
        content:
          'If glovebox portability matters most, prioritize connection stability over sheer feature count. The community favorites right now are the scanners that pair instantly and surface freeze-frame cleanly on mobile.',
        time: '1 day ago',
        score: 42,
        isBestSolution: true,
      },
    ],
  },
  {
    id: '6',
    title: 'Shared checklist for evaluating used electric workboats before purchase',
    excerpt:
      'Putting together a marketplace-first inspection checklist so buyers can compare listings with the same criteria.',
    description:
      'I am drafting a reusable inspection checklist for anyone comparing used electric workboats in the marketplace. The aim is to give buyers a consistent way to evaluate hull condition, battery data, charging readiness, and support documentation before committing to site visits.\n\nWould love community input before I freeze the version we share with new members.',
    summary: 'The strongest checklist themes are battery transparency, charging compatibility, and actual duty-cycle fit.',
    category: 'Ships',
    tags: ['Marketplace', 'Checklist', 'EV Marine'],
    vehicleInfo: 'Electric workboat shortlist',
    author: currentUser.name,
    authorInitials: currentUser.initials,
    authorRole: currentUser.role,
    score: 74,
    replies: 13,
    views: 980,
    savedBy: 305,
    time: '4 days ago',
    status: 'Solved',
    ownedByCurrentUser: true,
    solutions: [
      {
        id: 's10',
        author: 'Harbor C.',
        role: 'Verified marine surveyor',
        verified: true,
        content:
          'Add shore-power compatibility and battery enclosure access to the checklist. Those two items eliminate a surprising number of superficially attractive listings.',
        time: '3 days ago',
        score: 31,
        isBestSolution: true,
      },
    ],
  },
]

export const vehicleCategories: VehicleCategory[] = [
  {
    slug: 'cars',
    name: 'Cars & SUVs',
    shortLabel: 'Cars',
    description: 'Daily drivers, performance builds, hybrids, and family vehicles.',
    headline: 'The broadest ownership knowledge base on the platform.',
    metric: '14.6K live threads',
    overview: 'From maintenance intervals to tuning experiments, this hub balances practical ownership advice with enthusiast culture.',
    trendingTopic: 'Cold-start diagnostics after service visits',
    commonIssue: 'Phantom warning lights after battery replacement',
    highlights: ['Warranty-friendly DIY guides', 'Parts cross-checks', 'Road-trip preparedness'],
    guides: ['Starter diagnostic flow', 'Brake service planning', 'Used car checklists'],
  },
  {
    slug: 'ev',
    name: 'Electric Vehicles',
    shortLabel: 'EV',
    description: 'Battery behavior, charging, software releases, and electric ownership.',
    headline: 'Where community data and AI summaries make EV ownership easier.',
    metric: '6.2K smart insights',
    overview: 'Track charging behavior, software changes, thermal patterns, and community-tested fixes in one place.',
    trendingTopic: 'Charging curve shifts after OTA updates',
    commonIssue: 'Unexpected overnight battery drain',
    highlights: ['Battery health comparisons', 'Home charging advice', 'Update release tracking'],
    guides: ['Trip-planning templates', 'Cold-weather charging', 'Battery report interpretation'],
  },
  {
    slug: 'bikes',
    name: 'Bikes & Motorcycles',
    shortLabel: 'Bikes',
    description: 'Street bikes, touring rigs, urban mobility, and performance tuning.',
    headline: 'Fast-moving rider knowledge without the noise.',
    metric: '4.8K rider circles',
    overview: 'Maintenance routines, commuter setups, touring advice, and community-tested fixes built for riders.',
    trendingTopic: 'Hybrid motorcycles entering commuter fleets',
    commonIssue: 'Charging-system failures on aging bikes',
    highlights: ['Commuter setups', 'Suspension tuning notes', 'Travel packing systems'],
    guides: ['Chain care calendar', 'Cold-start troubleshooting', 'Helmet tech comparisons'],
  },
  {
    slug: 'aircraft',
    name: 'Aircraft',
    shortLabel: 'Aircraft',
    description: 'General aviation, experimental builds, avionics, and maintenance workflows.',
    headline: 'A calmer place for serious pilot and builder conversations.',
    metric: '2.1K flight groups',
    overview: 'Log build notes, maintenance findings, and reliability discussions with stronger structure than a typical forum.',
    trendingTopic: 'Avionics calibration and cockpit noise fixes',
    commonIssue: 'Vibration paths misread as engine issues',
    highlights: ['Build logs', 'Maintenance checks', 'Pilot-sourced operating notes'],
    guides: ['Pre-flight workflow boards', 'Panel planning', 'Inspection note templates'],
  },
  {
    slug: 'ships',
    name: 'Ships & Marine',
    shortLabel: 'Ships',
    description: 'Commercial vessels, workboats, yachts, and hybrid marine systems.',
    headline: 'Marine conversations with real operator context and technical depth.',
    metric: '1.4K maritime hubs',
    overview: 'Capture retrofit lessons, maintenance routines, emissions planning, and dockside troubleshooting in a shared space.',
    trendingTopic: 'Hybrid retrofits for harbor fleets',
    commonIssue: 'Cooling balance in electric propulsion systems',
    highlights: ['Operator field notes', 'Retrofit comparisons', 'Procurement watchlists'],
    guides: ['Dockside inspection sheets', 'Battery enclosure checks', 'Fleet transition planning'],
  },
]

export const newsStories: NewsStory[] = [
  {
    id: 'n1',
    title: 'AutoVerse maps how AI copilots are changing diagnostics across mixed fleets',
    preview:
      'Communities are using AI summaries to collapse long troubleshooting threads into sharper next actions for owners and professionals.',
    category: 'AI Garage',
    source: 'AutoVerse Mobility Insights',
    time: '2 hours ago',
    trending: true,
    image: '/illustrations/mechanic_hero_isometric_1776066632998.png',
  },
  {
    id: 'n2',
    title: 'Global enthusiast communities are driving the next wave of collaborative knowledge',
    preview:
      'From pilots to riders to fleet operators, smaller expert circles are proving more useful than generic forums for complex issues.',
    category: 'Community',
    source: 'Global Mobility Review',
    time: '5 hours ago',
    trending: true,
    image: '/illustrations/community_network_abstract_1776066653475.png',
  },
  {
    id: 'n3',
    title: 'From search fatigue to guided discovery: better ways to find the right fix faster',
    preview:
      'Members increasingly prefer guided recommendations, confidence signals, and summary cards instead of scrolling endless search results.',
    category: 'Guides',
    source: 'Platform Signals',
    time: '10 hours ago',
    trending: false,
    image: '/illustrations/empty_search_state_1776066673807.png',
  },
  {
    id: 'n4',
    title: 'Marine hybrid programs are quietly becoming the test bed for practical electrification',
    preview:
      'Operators say the most valuable learnings are coming from route-specific use cases, not headline-grabbing prototypes.',
    category: 'Marine',
    source: 'Harbor Systems Weekly',
    time: '1 day ago',
    trending: false,
    image: '/illustrations/community_network_abstract_1776066653475.png',
  },
  {
    id: 'n5',
    title: 'Why vehicle communities are treating verification as a core product feature',
    preview:
      'Reputation systems, expertise labels, and response histories are reshaping how members decide which advice to trust.',
    category: 'Product',
    source: 'Community Design Journal',
    time: '2 days ago',
    trending: true,
    image: '/illustrations/empty_search_state_1776066673807.png',
  },
]

export const marketplaceListings: MarketplaceListing[] = [
  {
    id: 'm1',
    title: 'Zero-emission harbor shuttle',
    category: 'Marine',
    price: '$184K',
    location: 'Oslo, Norway',
    status: 'Verified seller',
    summary: 'Short-route workboat with recent battery health report and dockside charging hardware included.',
    image: '/illustrations/community_network_abstract_1776066653475.png',
    tags: ['Electric', 'Commercial', 'Verified'],
  },
  {
    id: 'm2',
    title: 'Compact EV service van',
    category: 'EV',
    price: '$38K',
    location: 'Berlin, Germany',
    status: 'New listing',
    summary: 'Fleet-maintained van with service history, recent thermal report, and city-duty setup.',
    image: '/illustrations/mechanic_hero_isometric_1776066632998.png',
    tags: ['Fleet', 'Urban', 'Battery report'],
  },
  {
    id: 'm3',
    title: 'Adventure bike with smart telemetry kit',
    category: 'Bikes',
    price: '$11.4K',
    location: 'Barcelona, Spain',
    status: 'Community favorite',
    summary: 'Touring-ready build with upgraded suspension, service logs, and long-range luggage setup.',
    image: '/illustrations/empty_search_state_1776066673807.png',
    tags: ['Touring', 'Upgraded', 'Community rated'],
  },
]

export const expertProfiles: ExpertProfile[] = [
  {
    id: 'e1',
    name: 'Leona Rhee',
    initials: 'LR',
    specialty: 'EV powertrain calibration',
    location: 'Seoul',
    responseTime: '12 min avg',
    helpfulRate: '98%',
    bio: 'Specializes in range modeling, charging behavior, and turning ambiguous battery symptoms into testable next steps.',
    featured: true,
  },
  {
    id: 'e2',
    name: 'Captain Elise Mora',
    initials: 'EM',
    specialty: 'Hybrid marine operations',
    location: 'Rotterdam',
    responseTime: '26 min avg',
    helpfulRate: '95%',
    bio: 'Operator-led guidance on harbor fleets, retrofit planning, and real-world vessel behavior after electrification.',
  },
  {
    id: 'e3',
    name: 'Marta Jules',
    initials: 'MJ',
    specialty: 'Airframe diagnostics',
    location: 'Denver',
    responseTime: '34 min avg',
    helpfulRate: '97%',
    bio: 'Known for clear builder workflows, vibration troubleshooting, and pragmatic avionics upgrade planning.',
  },
]

export const askAiPrompts = [
  'Compare the most likely causes for overnight EV battery drain after an update.',
  'Build a troubleshooting path for a cold-start knocking noise after oil service.',
  'Summarize the strongest community advice for hybrid marine cooling issues.',
  'Show verified expert threads about aircraft cabin vibration fixes.',
]

export const profileActivity = [
  {
    id: 'a1',
    title: 'Your checklist for evaluating used electric workboats was bookmarked 86 times.',
    detail: 'Marketplace members saved it as a buying guide for spring fleet planning.',
    time: '4 hours ago',
  },
  {
    id: 'a2',
    title: 'A verified expert marked your OBD scanner roundup as a strong reference thread.',
    detail: 'The post is now featured in the Cars diagnostics collection.',
    time: 'Yesterday',
  },
  {
    id: 'a3',
    title: 'Your saved EV update discussion received a new summary from AutoVerse AI.',
    detail: 'The summary highlights thermal balancing, charge logs, and version-specific patterns.',
    time: '2 days ago',
  },
]

export const savedCollections = [
  'EV update watchlist',
  'Marine retrofit notes',
  'Compact scanner recommendations',
  'Aircraft vibration fixes',
]

export function getCommunityPost(id: string) {
  return communityPosts.find((post) => post.id === id) ?? communityPosts[0]
}

export function getVehicleCategory(slug: string) {
  return vehicleCategories.find((vehicle) => vehicle.slug === slug) ?? vehicleCategories[0]
}
