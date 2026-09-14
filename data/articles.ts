import { Article, CategorySlug } from "@/types/article";
import { authors } from "@/data/authors";

type ArticleInput = Omit<Article, "wordCount" | "readTimeMinutes">;

const rawArticles: ArticleInput[] = [
  // --- World ---
  {
    id: "3f2a9c1e-6b7d-4e1a-9c3f-1a2b3c4d5e6f",
    slug: "coastal-cities-unveil-joint-flood-defense-pact",
    headline: "Coastal Cities Unveil Joint Flood Defense Pact After Years of Talks",
    dek: "Twelve port cities across three continents agree to share early-warning data and engineering costs as sea levels keep climbing.",
    author: authors.alvarado,
    category: "world",
    tags: ["climate", "infrastructure", "diplomacy"],
    publishedAt: "2026-09-08T09:15:00.000Z",
    updatedAt: "2026-09-08T09:15:00.000Z",
    heroImageAlt: "Aerial view of a seawall under construction along a city coastline",
    body: [
      "Representatives from twelve coastal cities signed a joint flood-defense pact on Tuesday, ending nearly three years of negotiation over how to split the cost of shared sea-level monitoring and emergency infrastructure.",
      "The agreement, brokered through a UN-backed climate resilience office, commits each city to contribute engineering data to a common early-warning network and to pool funding for storm-surge barriers in the hardest-hit locations first.",
      "\"No single city can engineer its way out of this alone,\" said one delegate involved in the talks. \"The tide doesn't respect municipal boundaries, and neither should our defenses.\"",
      "Critics note the pact includes no binding enforcement mechanism, relying instead on annual public reporting to pressure signatories into compliance. Supporters counter that shared data alone will save lives by giving low-lying neighborhoods days of extra warning before major surges.",
      "Construction on the first jointly funded barrier segments is expected to begin within eighteen months, pending final environmental review in each participating jurisdiction.",
    ],
    featured: true,
  },
  {
    id: "8b1d4f77-2c9e-4a3b-8f61-5d7e9a0c1b2d",
    slug: "landmark-trade-corridor-opens-after-decade-delay",
    headline: "Landmark Trade Corridor Opens After a Decade of Delay",
    dek: "A rail link connecting two long-estranged trading partners finally carries its first freight shipment.",
    author: authors.alvarado,
    category: "world",
    tags: ["trade", "infrastructure"],
    publishedAt: "2026-09-05T07:40:00.000Z",
    updatedAt: "2026-09-05T07:40:00.000Z",
    heroImageAlt: "Freight train crossing a newly built bridge at dawn",
    body: [
      "A freight rail corridor first proposed more than a decade ago finally carried its inaugural shipment this week, cutting transit times between the two neighboring economies from eleven days by sea to under thirty hours by rail.",
      "The project survived two changes of government, a currency crisis, and a lengthy border dispute before construction crews broke ground on the final bridge section last year.",
      "Logistics analysts say the corridor could reroute as much as eight percent of regional container traffic within its first two years of operation, particularly for perishable goods that previously spoiled during longer sea transit.",
      "Local officials at the opening ceremony were quick to frame the corridor as a symbol of reconciliation rather than pure commerce, though trade ministers on both sides acknowledged the economic incentives did most of the work.",
    ],
  },
  {
    id: "c1a2b3d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
    slug: "disputed-election-results-trigger-recount-in-three-provinces",
    headline: "Disputed Election Results Trigger Recount in Three Provinces",
    dek: "A margin of under half a percent has plunged the national vote into a legal standoff that could last weeks.",
    author: authors.alvarado,
    category: "world",
    tags: ["elections", "politics"],
    publishedAt: "2026-09-11T18:20:00.000Z",
    updatedAt: "2026-09-12T06:05:00.000Z",
    heroImageAlt: "Election workers counting ballots under fluorescent light",
    body: [
      "Election officials ordered a full recount in three provinces on Thursday after preliminary results showed the top two candidates separated by fewer than eleven thousand votes nationwide.",
      "Both campaigns have deployed legal teams to observe the recount, which is expected to take up to two weeks given the volume of mail-in ballots still being verified.",
      "International observers who monitored the vote described the process as largely orderly, though they flagged isolated reporting delays in rural precincts that briefly fueled speculation of irregularities on social media.",
      "Markets in the affected country dipped modestly on the uncertainty, with analysts cautioning that a prolonged dispute could delay budget negotiations already running behind schedule.",
    ],
  },

  // --- Business ---
  {
    id: "d2e3f4a5-6b7c-4d8e-9f0a-1b2c3d4e5f6a",
    slug: "central-banks-signal-rate-pause-amid-cooling-inflation",
    headline: "Central Banks Signal Rate Pause as Inflation Cools Faster Than Expected",
    dek: "Policymakers in three major economies hint at holding steady next quarter, easing pressure on markets rattled by a turbulent summer.",
    author: authors.chandrasekaran,
    category: "business",
    tags: ["economy", "interest-rates", "markets"],
    publishedAt: "2026-09-10T08:00:00.000Z",
    updatedAt: "2026-09-10T14:32:00.000Z",
    heroImageAlt: "Exterior of a central bank building at dusk",
    body: [
      "Central bankers across three major economies signaled this week that a prolonged pause in interest rate hikes is increasingly likely, following inflation data that surprised to the downside for a second consecutive month.",
      "The shift comes after consumer price figures released Wednesday showed a sharper-than-expected cooldown, driven largely by falling energy costs and a stabilizing housing market.",
      "Markets responded cautiously, with bond yields dipping and equity futures edging higher in after-hours trading as investors recalibrated expectations for the pace of future policy moves.",
      "Some analysts warned against reading too much into a single data point, noting that core inflation measures excluding food and energy remain above target in two of the three economies.",
      "Still, the tone from policymakers marked a clear departure from the more hawkish language used just months ago, and futures markets now price in a pause at the next scheduled meeting with high confidence.",
    ],
    featured: true,
  },
  {
    id: "e3f4a5b6-7c8d-4e9f-0a1b-2c3d4e5f6a7b",
    slug: "grocery-chain-merger-clears-antitrust-review",
    headline: "Grocery Chain Merger Clears Antitrust Review With Store Divestiture Condition",
    dek: "Regulators approve the deal on condition that the combined company sell off dozens of overlapping locations.",
    author: authors.chandrasekaran,
    category: "business",
    tags: ["mergers", "retail", "regulation"],
    publishedAt: "2026-09-09T13:10:00.000Z",
    updatedAt: "2026-09-09T13:10:00.000Z",
    heroImageAlt: "Exterior of a large grocery store with a nearly empty parking lot",
    body: [
      "Antitrust regulators cleared the merger of two of the country's largest grocery chains on Tuesday, but only after the companies agreed to divest 63 stores in markets where the combined chain would have controlled an outsized share of local grocery sales.",
      "The approval ends nearly eighteen months of regulatory scrutiny that included two rounds of extended review and a threatened lawsuit that was ultimately dropped after the divestiture concessions were finalized.",
      "Consumer advocacy groups remain split on the outcome. Some argue the divestitures are sufficient to preserve local competition, while others contend that a smaller competitor buying the divested stores wholesale could still recreate concentrated market power within a few years.",
      "Shares of both companies rose modestly on the news, though analysts noted that integration costs and labor union negotiations remain significant open questions for the newly combined entity.",
    ],
  },
  {
    id: "f4a5b6c7-8d9e-4f0a-1b2c-3d4e5f6a7b8c",
    slug: "startup-unveils-on-device-translation-chip",
    headline: "Startup Unveils On-Device Translation Chip That Works Without Internet",
    dek: "The palm-sized processor claims to translate 40 languages in real time, no cloud connection required.",
    author: authors.okafor,
    category: "business",
    tags: ["startups", "funding", "hardware"],
    publishedAt: "2026-09-12T15:00:00.000Z",
    updatedAt: "2026-09-12T15:00:00.000Z",
    heroImageAlt: "Close-up of a small circuit board resting on a workbench",
    body: [
      "A three-year-old hardware startup announced Friday that it has raised $42 million in Series B funding to scale production of a dedicated translation chip small enough to fit inside a pair of earbuds.",
      "The chip performs speech translation entirely on-device across 40 languages, sidestepping the latency and privacy concerns that come with routing audio through cloud servers.",
      "Investors in the round include two hardware-focused venture funds and a strategic stake from a major consumer electronics manufacturer that is reportedly evaluating the chip for a future product line.",
      "The company's founders, both former researchers at a large chipmaker, say the real breakthrough was not the translation model itself but compressing it to run within the power budget of a hearing-aid-sized device.",
    ],
  },

  // --- Tech ---
  {
    id: "a5b6c7d8-9e0f-4a1b-2c3d-4e5f6a7b8c9d",
    slug: "browser-maker-rolls-out-default-tracker-blocking",
    headline: "Major Browser Maker Rolls Out Default Tracker Blocking for All Users",
    dek: "The change, quietly enabled in the latest update, is expected to disrupt ad measurement across the industry.",
    author: authors.okafor,
    category: "tech",
    tags: ["privacy", "browsers", "advertising"],
    publishedAt: "2026-09-07T11:25:00.000Z",
    updatedAt: "2026-09-07T11:25:00.000Z",
    heroImageAlt: "Laptop screen showing a browser privacy settings panel",
    body: [
      "One of the world's most widely used browsers began blocking third-party tracking scripts by default this week, a change rolled out silently in a routine update and only confirmed by the company after independent researchers flagged the shift.",
      "The move brings the browser in line with two competitors that adopted similar default blocking over the past two years, leaving one major holdout that continues to rely heavily on tracking-based advertising revenue.",
      "Ad-tech companies reacted swiftly, with several publicly traded measurement firms seeing their stock prices dip on concern that campaign attribution data will become significantly noisier.",
      "Publishers, meanwhile, are being pushed further toward first-party data strategies and server-side tracking, a trend that analysts say has been building for years but is now accelerating faster than most ad budgets can adapt to.",
    ],
  },
  {
    id: "b6c7d8e9-0f1a-4b2c-3d4e-5f6a7b8c9d0e",
    slug: "open-source-database-project-reaches-1-0",
    headline: "Long-Running Open Source Database Project Finally Reaches Version 1.0",
    dek: "After eight years of development, the project's maintainers say it's ready for production workloads.",
    author: authors.okafor,
    category: "tech",
    tags: ["open-source", "databases", "developers"],
    publishedAt: "2026-09-13T10:00:00.000Z",
    updatedAt: "2026-09-13T10:00:00.000Z",
    heroImageAlt: "Terminal window showing database migration logs",
    body: [
      "An open source database project that began as a weekend experiment eight years ago officially reached its 1.0 release this week, a milestone its maintainers say reflects a deliberate refusal to rush stability guarantees.",
      "The project, which specializes in embedded analytical workloads, has quietly become a dependency in several widely used data tools despite never leaving beta status until now.",
      "\"We wanted the version number to mean something,\" one of the two original maintainers said in the release announcement. \"A lot of projects hit 1.0 to make a marketing splash. We hit it because we finally trust the on-disk format enough to promise we won't break it.\"",
      "The release includes a formal backward-compatibility policy for the first time, along with a paid support tier aimed at funding continued maintenance — a step several dependents had been requesting for years.",
    ],
  },
  {
    id: "c7d8e9f0-1a2b-4c3d-4e5f-6a7b8c9d0e1f",
    slug: "regulators-open-inquiry-into-app-store-fees",
    headline: "Regulators Open Formal Inquiry Into App Store Fee Structures",
    dek: "The probe targets fee tiers that critics say disproportionately burden small developers.",
    author: authors.okafor,
    category: "tech",
    tags: ["regulation", "app-stores", "developers"],
    publishedAt: "2026-09-06T16:45:00.000Z",
    updatedAt: "2026-09-06T16:45:00.000Z",
    heroImageAlt: "Rows of mobile app icons displayed on a phone screen",
    body: [
      "Regulators opened a formal inquiry this week into the fee structures used by the two dominant mobile app stores, focusing specifically on whether small developers pay disproportionately more relative to the platform costs they generate.",
      "The inquiry follows a wave of complaints from independent developers who argue that recent fee-tier changes, marketed as relief for small businesses, actually narrowed eligibility compared to previous programs.",
      "Both platform operators say their fee structures already offer some of the lowest rates in the industry for smaller developers and have pledged to cooperate fully with the inquiry.",
      "A preliminary report is expected within four months, though any resulting policy changes would likely take considerably longer to implement given the scale of both platforms' developer ecosystems.",
    ],
  },

  // --- Sports ---
  {
    id: "d8e9f0a1-2b3c-4d4e-5f6a-7b8c9d0e1f2a",
    slug: "underdog-side-clinches-continental-title-in-extra-time",
    headline: "Underdog Side Clinches Continental Title in Dramatic Extra-Time Finish",
    dek: "A last-minute header sends supporters into raptures and caps a remarkable tournament run.",
    author: authors.lindqvist,
    category: "sports",
    tags: ["football", "tournament"],
    publishedAt: "2026-09-13T21:45:00.000Z",
    updatedAt: "2026-09-13T21:45:00.000Z",
    heroImageAlt: "Players celebrating on a football pitch under stadium lights",
    body: [
      "In a finish few saw coming when the tournament began five weeks ago, the lowest-seeded team in the field clinched the continental title with a header in the 119th minute of extra time.",
      "The goal, scored by a 22-year-old substitute making just his third appearance of the tournament, sent the traveling section of supporters into scenes that will likely be replayed for years.",
      "The winning side's manager, who took the job on an interim basis after the previous coach was dismissed midseason, credited a change in defensive shape for the team's improbable run through the knockout stages.",
      "For the runners-up, who had been favorites heading into the final, the defeat extends a difficult stretch that has now seen the club fall short in three major finals over the past four years.",
    ],
    featured: true,
  },
  {
    id: "e9f0a1b2-3c4d-4e5f-6a7b-8c9d0e1f2a3b",
    slug: "veteran-pitcher-announces-retirement-after-record-season",
    headline: "Veteran Pitcher Announces Retirement After Record-Setting Final Season",
    dek: "The 41-year-old closes out a two-decade career with a league record he says he never expected to chase.",
    author: authors.lindqvist,
    category: "sports",
    tags: ["baseball", "retirement"],
    publishedAt: "2026-09-04T14:00:00.000Z",
    updatedAt: "2026-09-04T14:00:00.000Z",
    heroImageAlt: "Baseball pitcher mid-windup on the mound",
    body: [
      "A pitcher who debuted more than two decades ago announced his retirement on Friday, closing out a career that includes a league record for career strikeouts he set just last month.",
      "\"I always said I'd know when it was time,\" he told reporters at a press conference alongside his longtime teammates. \"The record wasn't the goal. It just happened to show up at the end of a really long road.\"",
      "Teammates and opposing players alike paid tribute across social media, with several current stars crediting him as the pitcher who taught them how to prepare between starts.",
      "His number is expected to be retired by his longtime club in a ceremony next season, and multiple analysts have already flagged him as a lock for first-ballot hall of fame induction.",
    ],
  },
  {
    id: "f0a1b2c3-4d5e-4f6a-7b8c-9d0e1f2a3b4c",
    slug: "transfer-window-record-fee-shatters-league-benchmark",
    headline: "Record Transfer Fee Shatters Domestic League Benchmark",
    dek: "The move eclipses the previous record by nearly forty percent, raising fresh questions about spending controls.",
    author: authors.lindqvist,
    category: "sports",
    tags: ["football", "transfers"],
    publishedAt: "2026-09-01T12:30:00.000Z",
    updatedAt: "2026-09-01T12:30:00.000Z",
    heroImageAlt: "Player holding up a club scarf at a stadium press conference",
    body: [
      "A domestic transfer record that had stood for six years was shattered this week when a mid-table club completed the signing of a 24-year-old winger for a fee nearly forty percent higher than the previous benchmark.",
      "The deal, funded largely through a new ownership group's investment, immediately reignited debate over financial fair play rules that critics say have failed to keep pace with the scale of modern transfer spending.",
      "The selling club's fans reacted with a mix of celebration over the windfall and frustration at losing their most productive attacker just as the season was getting underway.",
      "League officials declined to comment directly on the fee but confirmed that all standard financial disclosures required for the transfer had been submitted and reviewed.",
    ],
  },

  // --- Culture ---
  {
    id: "a1b2c3d4-5e6f-4a7b-8c9d-0e1f2a3b4c5e",
    slug: "reissued-cult-film-finds-unexpected-second-life",
    headline: "Reissued Cult Film Finds Unexpected Second Life With a New Generation",
    dek: "A box-office failure on release three decades ago is now selling out midnight screenings nationwide.",
    author: authors.nakamura,
    category: "culture",
    tags: ["film", "revival"],
    publishedAt: "2026-09-03T09:00:00.000Z",
    updatedAt: "2026-09-03T09:00:00.000Z",
    heroImageAlt: "Marquee of an old cinema lit up at night",
    body: [
      "A film that grossed barely a tenth of its production budget on release thirty years ago is now selling out midnight screenings across the country following a newly restored theatrical rerelease.",
      "Word of mouth on short-form video platforms is largely credited with the revival, as clips of the film's most visually distinctive sequences circulated widely among viewers who had never heard of it before this year.",
      "The director, now in her seventies, said she never expected to see the film find an audience in her lifetime. \"We made something we believed in and it just didn't land with the audience of its moment,\" she said. \"Apparently it landed with a different one.\"",
      "Distributors are reportedly fast-tracking a companion documentary about the film's troubled production, hoping to capitalize on the renewed interest before it fades.",
    ],
  },
  {
    id: "b2c3d4e5-6f7a-4b8c-9d0e-1f2a3b4c5d6e",
    slug: "independent-bookstores-report-strongest-sales-in-years",
    headline: "Independent Bookstores Report Strongest Sales Figures in Over a Decade",
    dek: "A mix of community events, curated staff picks, and a backlash to algorithmic recommendations is driving the trend.",
    author: authors.nakamura,
    category: "culture",
    tags: ["books", "retail"],
    publishedAt: "2026-09-02T10:15:00.000Z",
    updatedAt: "2026-09-02T10:15:00.000Z",
    heroImageAlt: "Interior of a small independent bookstore with shelves of books",
    body: [
      "Independent bookstores across the country reported their strongest collective sales figures in over a decade this year, according to a trade association survey released this week.",
      "Store owners point to a mix of factors: a resurgence of in-person book clubs, viral staff-recommendation displays, and what several described as reader fatigue with algorithmic recommendations from larger online retailers.",
      "\"People are telling us they want a human to just hand them a book,\" said one shop owner whose store has doubled its event calendar over the past two years. \"It sounds simple, but it's clearly what a lot of readers were missing.\"",
      "Industry analysts caution the growth is coming off a low base after years of decline, but agree that the trend line has meaningfully reversed for the first time since large online retailers began dominating book sales.",
    ],
  },
  {
    id: "c3d4e5f6-7a8b-4c9d-0e1f-2a3b4c5d6e7f",
    slug: "city-orchestra-debuts-ai-assisted-score-to-mixed-reviews",
    headline: "City Orchestra Debuts AI-Assisted Score to Mixed Reviews",
    dek: "Critics are split on whether a human-AI collaborative symphony represents innovation or gimmick.",
    author: authors.nakamura,
    category: "culture",
    tags: ["music", "ai"],
    publishedAt: "2026-09-14T08:30:00.000Z",
    updatedAt: "2026-09-14T08:30:00.000Z",
    heroImageAlt: "Orchestra performing on stage in a concert hall",
    body: [
      "The city's philharmonic orchestra premiered a symphony this week composed in collaboration with an AI system trained on the composer's own earlier work, drawing a sharply divided response from critics in attendance.",
      "The composer, who provided the initial themes and made final editorial decisions on the AI-generated variations, described the process as \"argument, not automation.\"",
      "One prominent critic called the final movement \"the most emotionally alive fifteen minutes of new orchestral music I've heard this year,\" while another dismissed the entire piece as \"technically impressive and creatively hollow.\"",
      "Regardless of critical reception, the orchestra confirmed the performance sold out within hours of tickets going on sale, and a recording is already scheduled for release early next year.",
    ],
  },

  // --- Opinion ---
  {
    id: "d4e5f6a7-8b9c-4d0e-1f2a-3b4c5d6e7f8a",
    slug: "opinion-cities-need-boring-infrastructure-not-landmarks",
    headline: "Opinion: Cities Need Boring Infrastructure More Than They Need Landmarks",
    dek: "The ribbon-cutting ceremony gets the headlines. The sewer upgrade underneath it is what actually saves a city.",
    author: authors.whitfield,
    category: "opinion",
    tags: ["urbanism", "policy"],
    publishedAt: "2026-09-09T06:00:00.000Z",
    updatedAt: "2026-09-09T06:00:00.000Z",
    heroImageAlt: "Construction crew working on underground pipes at a city street",
    body: [
      "Every mayor wants a landmark. Few want to fund what's underneath it. That imbalance, more than any single policy failure, explains why so many growing cities keep discovering their infrastructure can't handle growth until the exact moment it can't.",
      "The pattern is familiar: a gleaming new public building draws ribbon-cutting coverage while the water mains beneath the street it sits on haven't been touched since the prior generation of urban planners retired.",
      "None of this is a call for civic austerity. It's the opposite: an argument that the most ambitious thing a city can build is capacity nobody sees, because it's the thing that lets everything else — the landmarks included — keep working when the population doubles.",
      "Until budget cycles reward the unglamorous long-term fix as visibly as they reward the ribbon-cutting, cities will keep choosing the photo opportunity over the pipe. Voters can change that math faster than any planning department can.",
    ],
  },
  {
    id: "e5f6a7b8-9c0d-4e1f-2a3b-4c5d6e7f8a9b",
    slug: "opinion-the-four-day-week-debate-is-asking-wrong-question",
    headline: "Opinion: The Four-Day Week Debate Is Asking the Wrong Question",
    dek: "The real fight isn't over how many days we work — it's over who gets to decide.",
    author: authors.whitfield,
    category: "opinion",
    tags: ["labor", "workplace"],
    publishedAt: "2026-09-12T06:00:00.000Z",
    updatedAt: "2026-09-12T06:00:00.000Z",
    heroImageAlt: "Empty office desk with a calendar showing a long weekend",
    body: [
      "Every few months another trial of the four-day workweek reports its results, and every few months the same debate replays: does it work, does productivity hold up, does it scale beyond the kind of company that volunteers for a pilot in the first place.",
      "These are reasonable questions. They are also, increasingly, beside the point. The more interesting number in most of these trials isn't the productivity delta — it's who initiated the trial in the first place, and how few workers had any say before it started.",
      "A four-day week imposed from the top is a scheduling change. A four-day week negotiated by the people doing the work is something closer to a redistribution of power. Both can produce identical spreadsheets. Only one of them changes anything that matters.",
      "If the next round of trials wants to tell us something new, it should stop measuring output and start measuring who was in the room when the decision got made.",
    ],
  },
  {
    id: "f6a7b8c9-0d1e-4f2a-3b4c-5d6e7f8a9b0c",
    slug: "opinion-stop-blaming-algorithms-for-what-editors-used-to-do",
    headline: "Opinion: Stop Blaming Algorithms for What Editors Used to Do Badly Too",
    dek: "Recommendation systems didn't invent bad editorial judgment. They just made it measurable.",
    author: authors.whitfield,
    category: "opinion",
    tags: ["media", "technology"],
    publishedAt: "2026-09-14T06:00:00.000Z",
    updatedAt: "2026-09-14T06:00:00.000Z",
    heroImageAlt: "Newsroom with editors reviewing layouts on multiple screens",
    body: [
      "It has become fashionable to describe recommendation algorithms as the reason news coverage skews toward outrage and spectacle, as though a golden era of purely editorial judgment preceded them. It didn't.",
      "Front pages have chased scandal, tragedy, and conflict since long before any newsroom had a personalization engine. What's different now isn't the incentive — it's that the incentive is finally visible in a dashboard instead of hidden behind an editor's gut instinct.",
      "That visibility is uncomfortable, and uncomfortable in a useful way. A metric that quantifies what already-existing bias rewards is not the same thing as creating the bias. Blaming the measurement tool lets the underlying judgment call off the hook entirely.",
      "The right response isn't nostalgia for a pre-algorithmic newsroom that was, by most honest accounts, no less prone to chasing attention. It's building better feedback loops for the humans who still make the final call on what leads the page.",
    ],
  },
];

function countWords(paragraphs: string[]): number {
  return paragraphs.reduce((total, paragraph) => total + paragraph.trim().split(/\s+/).length, 0);
}

export const articles: Article[] = rawArticles.map((article) => {
  const wordCount = countWords(article.body);
  return {
    ...article,
    wordCount,
    readTimeMinutes: Math.max(1, Math.ceil(wordCount / 200)),
  };
});

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return articles.filter((article) => article.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}

export function getFeaturedArticle(): Article {
  return articles.find((article) => article.featured) ?? articles[0];
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return articles
    .filter((candidate) => candidate.category === article.category && candidate.id !== article.id)
    .slice(0, limit);
}
