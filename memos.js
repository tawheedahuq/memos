// ============================================================
// YOUR MEMOS LIVE HERE.
// To publish a new memo: copy the block below, fill it in,
// and add it anywhere in this list (order doesn't matter —
// the page sorts by date automatically). Then commit the file.
//
// Required fields: ticker, company, date, call, thesis
// Optional fields: conviction, priceTarget, catalysts, risks, notes
// call must be one of: "BUY", "HOLD", "SELL", "WATCH"
// date format: "YYYY-MM-DD"
// ============================================================

const MEMOS = [
  {
  ticker: "TSLA",
  company: "Tesla, Inc.",
  date: "2026-07-03",
  call: "WATCH",
  conviction: "Low-Medium — thesis stage",
  priceTarget: "",
  thesis: `The most useful data point I found on this company wasn't in the 10-K — it was in a demo video. At a recent event, an Optimus V2.3 unit served popcorn to attendees. It moved smoothly, with none of the jitter you'd expect from early-stage hardware. But it was also visibly teleoperated, running basic scripted instructions rather than independent judgment — and the people interacting with it didn't find it unsettling. My read: we don't fear machines that clearly lack independent judgment, no matter how smooth their movements are. We fear the presence of intelligence that could outmatch our own. Right now, everyone watching Optimus knows a person is driving it. The moment that stops being visibly true is the moment public sentiment around this technology shifts. That threshold isn't in any analyst model I've seen, but I think it's the real trigger the market is implicitly pricing without naming.

Financially, the near-term picture doesn't support paying up for that bet yet. Automotive is still 73% of revenue, and it's the segment eroding — operating margin has fallen every year since 2022, from roughly 17% down to 4.6% in 2025, a trend that predates the robotics narrative entirely. The one segment actually accelerating is the least glamorous one: energy storage (Megapack, Powerwall), up 27% year-over-year. Meanwhile R&D spend rose over 40%, explicitly funneled into AI and robotics. At today's valuation, an investor isn't buying "Tesla, car company." They're buying "Tesla, a bet that the robotics story matures faster than the core business erodes," priced with very little room to be wrong about timing.

The honest tension I keep landing on is that Tesla's scale is real, but scale in car manufacturing doesn't automatically prove out in robot manufacturing — those aren't the same supply chain, and I haven't seen evidence yet that they are. What actually moves me toward WATCH instead of SELL is the energy segment growing 27% underneath all this noise, quietly, without anyone's attention on it. That's the part of this company I'd trust with money today. The robotics bet is the part I'd want to watch, not fund yet — and I think that distinction matters more than any bull/bear scorecard.`,
  catalysts: `A deployment milestone where Optimus performs an unscripted task on a live factory floor — the clearest sign the "intelligence becomes visible" threshold is approaching. Confirmed movement toward the commercial sale window management has floated for consumers (2027-2028 has been mentioned publicly; not yet verified against a direct Tesla source). Regulatory clarity — a bill is currently sitting in Congress (the Humanoid ROBOT Act), text not yet published as of late June 2026. Any earnings call where management reports a real Optimus usage metric instead of a demo update. Continued energy-segment growth outpacing automotive — if this becomes the recognized growth story, that's a different, more grounded thesis than the robotics narrative.`,
  risks: `Automotive operating margin has declined for three straight years (17% in 2022 to 4.6% in 2025) — the core cash engine is deteriorating independent of the robotics bet. Valuation (P/E roughly 360-386x as of early July 2026) already prices in significant optionality, leaving little room for a slower timeline. Musk has a well-documented pattern of ambitious robotics/autonomy timelines slipping; that history should discount any new target date, including 2027-2028. China reportedly accounts for the large majority of humanoid robot installations globally at a fraction of Western unit cost (approximate, sourced from press coverage rather than a filing). Global regulation is undefined; could accelerate or delay adoption depending how it resolves. Three things that would invalidate this thesis entirely: Tesla quietly deprioritizes Optimus; automotive margins keep compressing toward breakeven with no Optimus revenue by 2027-2028; or a safety incident/credibility issue around how autonomous the public demos actually are.`,
  notes: `Worth naming honestly: this pick sits outside the fintech/behavioral niche I'm building this portfolio around. Publishing it deliberately alongside a fintech memo the same week so my actual focus is visible from day one. To verify before/after publishing: exact Optimus commercial timeline, extent of teleoperation vs. autonomy in public demos, status of the Humanoid ROBOT Act text, China unit-cost figures, and a direct balance-sheet ROIC build (this uses a vendor-calculated ~6.3% ROIC, not one I reconstructed myself from NOPAT and invested capital).`
}
];
