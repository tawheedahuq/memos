// ============================================================
// YOUR MEMOS AND PITCHES LIVE HERE.
//
// Every entry needs a "type" field:
//   type: "memo"   → short observational note. Sections: thesis,
//                    catalysts, risks, notes
//   type: "pitch"  → long-form stock pitch. Sections: business,
//                    consensus, thesis (renders as "Variant
//                    perception"), evidence, bull, valuation,
//                    catalysts, risks (renders as "What would
//                    make me wrong"), position, notes
//
// Each collection numbers itself separately — oldest = 001.
// Order in this file doesn't matter; the page sorts by date.
//
// Required: type, ticker, company, date, call, thesis
// call must be one of: "BUY", "HOLD", "SELL", "WATCH"
// date format: "YYYY-MM-DD"
// ============================================================

const MEMOS = [
  {
  type: "memo",
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
},
  {
  type: "memo",
  ticker: "KLAR",
  company: "Klarna Group plc",
  date: "2026-07-06",
  call: "WATCH",
  conviction: "Low-Medium — thesis stage",
  priceTarget: "",
  thesis: `Klarna's core design choice — approve fast, keep friction near zero, don't make the debt feel like debt — is also the thing that's now blindsided three completely different groups within about a year of each other. Mortgage brokers report BNPL usage tanking otherwise-qualified applicants because the aggregate shows up on bank statements even where it doesn't touch a credit score. IPO investors got blindsided when Q3 2025 provisions for credit losses jumped 102% year-over-year ($116M to $235M, per Klarna's own filings) just months after a prospectus a securities class action now alleges understated exactly this risk — down to specifically flagging that customers were financing things like fast-food delivery on installment. And in December 2025, a viral "Klarna glitch" trend turned out to be identity thieves exploiting the same fast, low-friction approval process to open fraudulent accounts in stolen names, leaving innocent people with debt and wrecked credit. Three stakeholders, one mechanism: minimizing visible scrutiny at approval is exactly what makes the product loved at checkout and exactly what makes it capable of surprising someone — a borrower, an investor, a fraud victim — later, once the friction that was removed turns out to have been doing real work.

The financial picture is a genuine recovery story sitting inside that same tension, not a settled one. Q1 2026 revenue hit $1.01B, up 44% year-over-year, with adjusted operating profit of $68M versus just $3M a year earlier — real operating leverage, not a one-off. Provisions for credit losses as a share of GMV have also been declining (0.72% in Q3 2025 to 0.65% in Q4), which Klarna presents as evidence its underwriting is maturing, not concealing risk. I don't think that claim is false, but I also don't think it resolves the lawsuit's core question, which is what Klarna knew at the moment of the IPO, not what its numbers look like a few quarters later. The stock is still trading roughly 50%+ below its $40 IPO price as of mid-2026 (exact level worth checking day-of), which tells me the market hasn't decided this is resolved either.`,
  catalysts: `The thing I'm actually watching is the securities lawsuit, not the next earnings print — Nayak v. Klarna Group is asking a more interesting question than any quarterly number can answer, which is what Klarna's own models actually showed before the IPO, not just what the numbers look like a few quarters later. If discovery in that case surfaces internal risk modeling that contradicts the prospectus, that's the moment this thesis either gets much darker or gets resolved in Klarna's favor. Short of that, Q2 2026 earnings matter mainly as a test of whether Q1's declining loss-provision rate was a real trend or a lucky quarter — one data point isn't a pattern yet. I'm also watching for any regulatory response to the "glitch" fraud wave, since a CFPB or Congressional look at how little friction sits between "click buy" and "get approved" would hit the exact mechanism this whole memo is about, not just a PR problem. And if Fair Financing keeps growing at the clip it did in Q1 2026 (up 138% year-over-year) and starts outgrowing Pay-in-4, that quietly changes the thesis itself — Fair Financing reports to bureaus, so a Klarna that's mostly Fair Financing isn't really the "invisible debt" company anymore.`,
  risks: `That lawsuit cuts both ways, which is the real risk sitting underneath everything else here — if discovery shows Klarna's internal credit models flagged the risk that showed up as a 102% provision spike in Q3 2025, and the prospectus still didn't disclose it, that's a different and much worse story than "growth company hit a rough patch." Sitting underneath that is a prior pattern worth naming honestly: Sweden's FSA reportedly fined Klarna around $46 million in December 2024 for anti-money-laundering violations, before any of this — I haven't traced that figure to a primary regulatory filing myself, so it's worth confirming, but if accurate it suggests this isn't the company's first brush with "risk controls under fire," which matters for how much benefit of the doubt the current recovery story deserves. The stock itself is still down somewhere in the 50-65%+ range from its IPO price depending on which source and date you check — genuinely worth pulling a live quote before this goes out, since the sources I found don't agree. What would actually break the recovery half of this thesis is simple: provisions for credit losses turning back upward as a share of GMV, not just in dollar terms, since dollar growth alone is expected as the loan book scales.`,
  notes: `Primary-sourced this round from Klarna's actual SEC 6-K filings (quarterly P&L, Q1'24 through Q1'26) rather than secondary write-ups — provision-for-credit-losses figures and the 102% YoY figure are confirmed against Klarna's own numbers. Still need to verify: current live stock price (conflicting recent figures); primary source for the Sweden FSA fine; current status of the Nayak lead-plaintiff process past the Feb 20, 2026 deadline; whether "Klarna glitch" prompted any regulatory statement from Klarna itself or the CFPB.`
},
  {
  type: "memo",
  ticker: "HOOD",
  company: "Robinhood Markets, Inc.",
  date: "2026-08-01",
  call: "WATCH",
  conviction: "Low — one metric, not a thesis",
  priceTarget: "",
  thesis: `I've never used Robinhood. I want that on the record at the top, because it changes what this memo is allowed to be. With Klarna I had something to start from — I use the thing, I noticed how it made me feel at checkout, and the numbers came after. Here I had nothing but the filings, so everything below is the second kind of seed: not something I noticed living my life, but something I found by dividing one reported number by another and looking at what came out.

The number is revenue per options contract. Robinhood's Q2 2026 was a record by every headline measure — $1.31 billion of revenue, up 32%, transaction revenue up 44%, options contracts traded up 50% to 774 million. But options revenue only grew 29%, to $342 million. Fifty percent more contracts, twenty-nine percent more money. Divide it out and you get about 44.2 cents of revenue per contract, against 51.5 cents in Q2 2025. That's a 14% decline in what Robinhood earns on each contract, in its largest transaction line, in a quarter everyone called a beat.

Here's the part I want to be honest about, because I almost wrote a much more confident memo than the data deserves. My first instinct was that this was structural — the same shape as the take-rate compression I'd found at Klarna, and I was pleased with myself for spotting it twice. Then I went back further, which I should have done before getting attached. Q4 2024: options revenue $222 million against roughly 477 million contracts, so about 46.5 cents. Which is below the 2025 peak. So the metric didn't fall off a cliff. It climbed through 2025 and then came back down.

For about an hour I thought that killed it. If 2025 was just a good year and 2026 is reversion, there's no memo — that's a chart of normal, and I'd have been reading a story into noise because I wanted the story to be there.

But it doesn't quite reduce to that, and the reason is one decimal place. Q2 2026 came in at 44.2 cents. Q4 2024 was around 46.5. It didn't revert to the old level — it went through it. So what I think I can defend, and only this, is narrow: Robinhood is currently earning less on each options contract than it did before the 2025 boom, and record volume is the only reason that isn't visible in the revenue line. Not "structural decay." Not a trend, yet. Just a low print at a moment when everything else about the business looks like a high.

What I can't tell you is why, and I don't want to pretend the guess is a finding. The reading I find most interesting is behavioral — that if people are trading more contracts and paying less per contract, they're probably buying cheaper, shorter-dated ones, which would mean the platform is monetizing the number of decisions a person makes rather than the size of them. That would rhyme with the event-contract business, where 13.6 billion contracts produced $156 million, or roughly a penny each. But it could just as easily be that Robinhood renegotiated its order-flow economics, or that index options shifted the mix, and Robinhood doesn't disclose enough for me to rule either out. I've read enough of these now to know that the moment I have a satisfying explanation and no way to test it is the moment I should stop typing.

So: WATCH, low conviction, and I'd rather publish it thin and correct than thick and flattering to myself.`,
  catalysts: `The obvious thing to watch is whether Q3 prints below 44 cents. Two more quarters under the 2024 level and this stops being a low print and starts being a direction, which is when it would actually be worth having a view about. One quarter either way tells me almost nothing, and I want to say that now rather than after the fact, so I can't quietly move the goalposts if Q3 comes in at 43 cents and I get excited.

I'm also watching whether Robinhood starts breaking out anything about contract duration or average premium. Right now the mechanism question is unanswerable from public disclosure, and that's the thing standing between this memo and an actual position. If they ever disclose it, this either becomes a real thesis or dies quickly, and both of those are better than where it sits today.

Further out: options are still the biggest transaction line at $342 million, but event contracts went from roughly nothing to $156 million in a year while crypto fell from $358 million in Q4 2024 to $100 million now. If the revenue base keeps rotating like that, "what Robinhood earns per options contract" may just stop being the interesting question, and I'd want to notice that rather than keep tracking a metric because I already started.`,
  risks: `The strongest argument against me is that I'm looking at a mix effect and calling it an economics effect. If the growth in contracts is coming disproportionately from cheap, short-dated options, then revenue per contract falling is arithmetic, not deterioration — the average is moving because the population changed, and Robinhood is making the same money per dollar of premium as it always did. I can't distinguish those two from the outside, and anyone who's actually worked in market structure would probably tell me which it is in about ten seconds.

Second, I'm reasoning from four data points, two of which required me to derive the contract count from a stated percentage rather than read it directly. The Q4 2024 figure especially — I got roughly 477 million contracts by backing out a "38% increase" from the 2025 number, and depending on rounding the real answer is somewhere between about 45.8 and 47.2 cents. If the true figure is at the top of that range, the gap I'm building this on gets thin fast. That's a small enough margin that I don't think I should have strong feelings until I've pulled it from the actual operating data table.

Third, and this is the one that would actually cost money: none of this matters much to the stock right now. Q2 was a beat, revenue is compounding in the thirties, ARPU is up 24% to $187, and the company added nearly a million funded customers. The shares fell about 3% on the print anyway, closing near $89.84 on July 15, which suggests the market is worried about something — but I have no evidence it's worried about this. A metric can be quietly true and completely irrelevant to price for years, and I'd rather admit that than dress a footnote up as a catalyst.`,
  notes: `Still open, and I'd want these before this became anything more than a note to myself: Q4 2025 options revenue (I have the 659 million contract count but not the dollar figure), Q1 2026 options contracts traded (I have $260 million of revenue, up only 8%, but no denominator), and the actual Q4 2024 contract count from the operating data table rather than my back-calculation. Those three cells would turn four scattered points into a proper series.

Also worth flagging honestly: the Q2 2026 net income of $573 million includes a $129 million gain from deconsolidating Robinhood Ventures Fund I, so roughly 14 cents of the $0.62 diluted EPS isn't operating. That has nothing to do with my thesis, but it's the kind of thing I'd want to have noticed on my own rather than had pointed out to me, so I'm writing it down.

Price in the risks section is as of the July 30 close and will be stale by the time anyone reads this. Check it live.`
},
  {
  type: "pitch",
  ticker: "KLAR",
  company: "Klarna Group plc",
  date: "2026-07-30",
  call: "WATCH",
  conviction: "Medium",
  priceTarget: "No target — see Position",
  business: `Written as of July 30, 2026, ahead of Q2 results. Everything below was knowable on that date. I wrote this against a frozen information set and published it late, which is a failure of cadence on my part, not a claim to foresight — nothing after July 30 has been retrofitted in.

A shopper is at checkout with $100 of goods. She picks Klarna. Klarna pays the merchant roughly $97 immediately and collects from her later — in four installments, in thirty days, or over a longer interest-bearing plan. The merchant takes the haircut and gets certainty. Klarna takes the credit risk and the fee. Everything else — the app, the card, the deposits, the shopping assistant — is built on top of that primitive.

The number that matters is why a merchant accepts a fee reportedly running as high as 5.99% plus $0.30, against something closer to 2.9% for standard card processing. (I'm treating that range as approximate — it comes from third-party merchant-facing sources rather than Klarna's filings, and large merchants negotiate down materially.) The answer is in Klarna's own sales material: it tells merchants that offering Klarna raises average order value by roughly 23%, alongside conversion and purchase-frequency lifts. That claim is corroborated in third-party coverage of the company's 2024 metrics — approximately a 2.7% blended take rate across roughly $105 billion of GMV, with the 23% figure attached.

Sit with what that means. Klarna is not selling a payment rail. It is selling a measurable change in consumer behavior, and pricing the fee against the size of that change. The product's value to the merchant is the shopper's misjudgment of what she can afford.`,
  consensus: `Klarna IPO'd in September 2025 at $40, opened at $52, and has spent the time since being repriced downward, hard. The stock has traded between roughly $12 and $57 over the past year and sits well below the offer price. Two shocks did most of the damage. In November 2025, the first quarter as a public company showed provisions for credit losses up 102% year-over-year, to roughly 0.72% of GMV from 0.44%. In February 2026, weak guidance took another 26% out. A securities class action followed in the Eastern District of New York, Nayak v. Klarna Group plc, pleading Sections 11, 12(a)(2) and 15 on the theory that the offering documents understated a known adverse trend in credit losses. Negligence theory, not fraud, and early stage as of this writing.

Against that, the bull case is coherent and, on its face, strong. Q1 2026 was the inflection: revenue $1,012 million, up 44%; GMV $33.7 billion, up 33%; adjusted operating profit of $68 million against $3 million a year earlier; net income positive at $1 million versus a $99 million loss. Provisions came in at $186 million, 55 basis points of GMV, down sequentially. Management said US financing delinquencies 30-plus days past due had improved 36 basis points off their Q2 2025 peak, and framed the book as low-risk on the strength of a $124 average Pay Later balance turning over more than ten times a year.

The strategic story rhymes with the numbers. Klarna now describes itself as a digital bank addressing the entire consumer wallet — Pay Now for everyday spend, Pay Later as a charge-card equivalent, Fair Financing for big tickets. The card has passed five million active users, with management noting debit engagement running above their own expectations. Consumer deposits fund 91% of the balance sheet at roughly 270-day average duration. In July the company applied for a US bank charter, and inked distribution a payments company would kill for: Klarna will power Apple's new US hardware leasing program, and a JPMorgan Payments integration was announced the following day, with Worldpay signed and pending.

So the consensus read is a real business, mispriced by IPO indigestion, de-risking from subprime lender into regulated bank, with credit metrics confirming the transition. I think the de-risking read is partly backwards.`,
  thesis: `My claim: Klarna's improving credit metrics are not primarily evidence of better underwriting. They are partly evidence of a mix shift toward users the merchant fee was never designed to monetize — and that same shift is what's compressing the merchant take rate. Good credit news and bad revenue-quality news are, in this specific business, the same event described twice.

The reason is behavioral, and it starts with how I actually use the product.

I use Klarna as a shield. When I want to buy from a site I don't fully trust, I put Klarna between my money and the merchant. I'm not financing anything. I'm not spreading a cost I can't absorb. I'm buying a layer of separation, and I intend to pay in full. There are a lot of us — Klarna's own disclosure of higher-than-expected debit engagement on the card, and $3.5 billion of Pay in Full volume in Q1, are the shape of this cohort showing up in the data.

Now hold that against the 23% figure. When I use Klarna as a shield, the 23% doesn't happen. I don't buy more. I buy the same thing through a different rail. The salience effect — the thing that makes "four payments of $25" feel materially cheaper than "$100," which it is not — requires that the deferral change my perception of the price. If I'm mentally treating it as paid already, there is nothing to suppress.

That's the mechanism, and it has a direct consequence: the shield user is a fantastic credit and a mediocre customer. She never goes delinquent, so she improves every risk metric management reports. She generates no AOV lift, so the premium merchant fee attached to her transaction is unearned in the only sense that matters commercially. Over time, a merchant who runs the numbers on a Klarna cohort that increasingly looks like this will negotiate the rate down — and Klarna's leverage in that negotiation is exactly the behavioral lift it can no longer fully deliver.

I don't think this is a hypothesis waiting for evidence. I think it's already in the Q1 release, in a line most coverage skipped.`,
  evidence: `Headline take rate — total revenue over GMV — expanded from 2.77% in Q1 2025 to 3.00% in Q1 2026. Roughly 24 basis points. Read alone, that says pricing power. Break it into its parts and it says something else.

Transaction and service revenue, the line that carries the merchant business, went from $519 million to $671 million. That's 29% growth against GMV growth of 33%. As a share of GMV it went from 2.05% down to 1.99% — roughly six basis points of compression.

Interest income went from $182 million to $284 million, up 56%, adding about twelve basis points of take rate. And a new line appeared: gain on sale of consumer receivables, $57 million, worth about seventeen basis points.

So every basis point of headline expansion came from the two lending lines, and then some, because merchant fees were a drag on the total.

The gain-on-sale line is also substantially cosmetic. That $57 million sits against a $50 million fair value adjustment on loans sold and held for sale, buried in funding costs and up 141% year-over-year. Net contribution to profit is small. But it lands in the revenue line, and in the take rate, at full gross value. Strip it out and revenue growth is approximately 36%, not 44%, and take-rate expansion is about seven basis points rather than twenty-four — with the merchant compression still sitting inside it.

The sharpened version: Klarna's revenue growth is increasingly a lending story dressed in network-business clothing, and the network business's own pricing is deteriorating while management tells investors the company is becoming less of a lender. Fair Financing is 12% of GMV. Interest income is 28% of revenue. That gap is the whole argument.

(GMV base: $25,323 million to $33,691 million. The percentages here are my own arithmetic off the reported line items, and "transaction and service revenue" bundles advertising and other merchant services alongside payment fees, so it's a proxy for the network business rather than a pure merchant-fee line.)`,
  bull: `I want to be honest about the strength of the other side, because a thesis that can't state the bull case is a thesis I haven't tested.

The distribution wins are real and they are not small. Powering Apple's US hardware leasing program is a structurally different kind of relationship than being a checkout button at a mid-market retailer — long-duration, high-ticket, attached to a counterparty with the best consumer credit profile in retail. JPMorgan Payments and Worldpay push Klarna into merchant bases it could not reach one integration at a time. If Fair Financing scales through those channels with delinquency behaving, the lending mix shift I'm flagging as a warning is instead simply a better business, and I'm wrong in an expensive way.

The deposit funding is genuinely defensible. Ninety-one percent of the funding base from consumer deposits at 270-day duration, plus a $2 billion forward flow facility added in Q1, is a materially lower and more stable cost of funds than the wholesale-funded BNPL cohort. A US bank charter would extend that.

And the operating leverage is not manufactured. Transaction margin dollars grew at a reported multiple of non-transaction operating expense growth. A company that swung from a $99 million net loss to positive net income in four quarters while growing GMV a third is doing something right at the cost line.

None of that resolves the take-rate question. But it means this is a business with real assets and a real path, not a melting ice cube — which is precisely why the call is WATCH and not SELL.`,
  valuation: `At roughly the current price the market capitalization is approximately $7.25 billion. [FILL IN THE VERIFIED JULY 30 CLOSE BEFORE PUBLISHING — do not leave an approximate price standing in a dated memo.]

Full-year 2026 guidance is GMV above $155 billion at revenue above 2.8% of GMV, which implies revenue north of roughly $4.34 billion. Against that, the stock trades at approximately 1.7x sales for a business growing revenue 36% or better on an underlying basis. That is not expensive, and it is the central reason this is not a short.

I'd also flag that conventional EV-based multiples are close to meaningless here. Klarna is a deposit-funded bank; cash and debt on the balance sheet are operating inputs, not capital structure in the ordinary sense. Anyone building a DCF on this should expect the output to be nearly worthless — the terminal value will swamp everything and the discount rate will be doing all the work. I'd rather anchor on take rate, transaction margin dollars as a percentage of GMV, and provisions as a percentage of GMV, and watch those three converge or diverge over four quarters.`,
  catalysts: `Q2 results in August are the near-term event, and the guidance bar is set low enough to matter: GMV of $35.5 to $36.5 billion, revenue of $960 million to $1.0 billion, transaction margin dollars of $375 to $395 million, and adjusted operating income of $30 to $50 million — the last of which is below the $68 million just delivered in Q1. Management is telling you the second quarter steps back. (I've seen that adjusted operating income range reported as both $30-50M and $30-60M; check the release.)

The specific thing I'll be reading for is not the headline. It's transaction and service revenue as a percentage of GMV. Q1 was 1.99%. If that prints below roughly 1.95% while credit metrics improve again, the thesis is live and the two are moving together exactly as predicted.

Management also said it will begin reporting volume by product and geography and publishing provisions by cohort. That is unusually useful disclosure and it will make this thesis far more testable within two or three quarters — cohort-level provisioning should reveal directly whether the improving credit book is better underwriting or a changing customer mix.

Beyond that: the Apple leasing program ramp, the JPMorgan and Worldpay integrations going live, the US bank charter decision, and any substantive ruling in the EDNY securities litigation.`,
  risks: `The cleanest disconfirmation: transaction and service revenue take rate stabilizes or expands for two consecutive quarters while Fair Financing mix continues rising. That would mean the merchant fee is not behaviorally contingent in the way I've argued — that merchants are paying for distribution, fraud absorption and customer acquisition rather than for the AOV lift specifically, and my whole mechanism is a nice story about a coincidence.

The second: cohort provisioning data, once published, shows credit improvement is driven by underwriting changes within cohorts rather than by mix shift across them. That would directly falsify the shield-user explanation.

The third is subtler and I take it seriously. It's possible the shield-user cohort is strategically valuable precisely because it's unprofitable at the transaction — a low-cost acquisition channel for deposits, card, and eventually Fair Financing. Membership fees in the card segment reportedly grew over 600%. If Klarna is deliberately buying a high-quality customer at a thin margin and monetizing her later through banking products, then take-rate compression is an investment, not a leak. I don't think the disclosure yet lets anyone distinguish these two readings, and I want to say plainly that this is the weakest joint in my argument.

Finally, the honest structural caveat: I am reasoning from one quarter's decomposition. Two data points are not a trend, and a single year-over-year comparison against a quarter that had no gain-on-sale line is a noisy base. I'd want three more quarters before I'd defend this with real conviction.`,
  position: `WATCH. Conviction Medium. No position.

Not a short: roughly 1.7x sales on 36% underlying growth, with a $7 billion market cap already 60%-plus below the IPO debut, is a terrible place to be structurally negative. The asymmetry runs against me.

Not a buy either: the thing that would make this cheap is the network business, and the network business is the part that's deteriorating.

The trigger that converts this to BUY: transaction and service revenue take rate stable or rising for two consecutive quarters, with Fair Financing mix continuing to climb and provisions holding at or below 55 basis points of GMV. That combination would mean Klarna is compounding a lending business without cannibalizing the network — which is the actual bull case, stated properly, and would be worth paying considerably more than 1.7x sales for.

I'll revisit after Q2 and again once cohort provisioning data is published.`,
  notes: `This is the long-form follow-on to Memo 002, written three weeks later on the same name. The memo was about a design choice and who it blindsided. This is about what that design choice does to the income statement, which is a different question and I think a more investable one.

The 23% AOV figure is Klarna's own marketing claim, not my discovery — I first saw it framed as a consumer-harm argument in a Ramsey Solutions piece and went looking for the primary corroboration. What's mine here is the shield-user observation and the connection to the take-rate decomposition.

Still to verify before this can be defended in a room: the July 30 closing price; the merchant fee range against a primary source; the full take-rate arithmetic re-derived by hand from the Q1 6-K rather than from the earnings-release summary; and whether the gain-on-sale and fair-value-adjustment lines net as cleanly as I've assumed.`
},
  {
  type: "pitch",
  ticker: "DKNG",
  company: "DraftKings Inc.",
  date: "2026-08-07",
  call: "WATCH",
  conviction: "Medium",
  priceTarget: "No target — see Position",
  business: `On August 7, DraftKings reported the best quarter it has ever had by every measure of demand, and less money than it made a year ago.

Volume up 15% to $13.1 billion. Monthly unique payers up 9%. Customer acquisition running 75% ahead of last year and 30% ahead of plan, at a cost 25% better than expected. Handle share up for a third consecutive quarter, growing 11% against Flutter's 2%. By any reading, more people wagering more money more often.

Sports revenue fell 10.6%. Adjusted EBITDA fell 62%. The company posted a $67.6 million net loss.

The reason sits in one number: sports net revenue margin — hold — dropped to 6.8% from 8.7% a year earlier. Roughly a fifth of the margin, gone in a quarter.

The stock rose 5.6%.

That gap, between a business whose unit economics deteriorated sharply and a market that read the print as good news, is what this pitch is about. Consensus concluded the shortfall was luck. I think there is a second explanation sitting inside management's own defense of the quarter, and I don't yet know which of us is right.

Start with what hold actually is. Someone wagers $100, DraftKings prices both sides so the house keeps a slice regardless of outcome, and over enough bets that slice is the entire business. But it isn't uniform. A straight bet on a spread is priced near fair and the house keeps very little. A six-leg same-game parlay is priced nowhere near fair and the house keeps a great deal — because almost nobody multiplies six correlated probabilities in their head at the moment they tap the button.

DraftKings understands this exactly. Parlay mix is a metric management reports with pride; on NBA handle this quarter it rose more than 400 basis points.

So the business isn't really "taking bets." It's running a menu where the products people enjoy most are the ones whose prices they can least evaluate. That's a description of where the margin lives, not a complaint. It matters because a competitor has arrived whose entire product is showing people the price.`,
  consensus: `I should say plainly that I didn't discover the prediction-market threat. It's been argued in public for months.

BNP Paribas initiated at the equivalent of sell in May with a $20 target, explicitly on cannibalization by Kalshi and Polymarket, citing survey work that reportedly found more than half of Kalshi and Polymarket users also bet on DraftKings. The stock had already hit a 52-week low in February on those fears, down from around $48.78 last summer. This is a known, priced, publicly contested debate.

The rebuttal is well built and it won the argument on August 7. Twenty-seven of thirty-three analysts were at buy or strong buy when BNP went the other way. Handle keeps growing. DraftKings is taking share from FanDuel, not losing it. The company launched its own exchange, so it captures the category rather than being eaten by it. And Q2 was variance, not erosion — roughly $80 million of the shortfall attributed to customer-friendly outcomes, driven by the Knicks winning the title in DraftKings' single largest state and by World Cup group-stage results, arriving after seven straight months of results breaking the house's way.

The strongest fact in that rebuttal, and the one I keep returning to: the six-month net revenue margin was 7.3% against 7.4% a year earlier. Essentially flat. One quarter went badly. Two quarters together look normal.

So the debate everyone is having is about volume — will exchanges take handle, and can DraftKings defend share. I think that's the wrong axis, and I think the reason is buried in a sentence management offered as reassurance.`,
  thesis: `Earlier this year, defending the business against exactly these fears, DraftKings' CEO said that Predictions had affected handle only slightly, and primarily among low-margin customers.

I read that twice before I understood what I was looking at.

A low-margin sportsbook customer is a price-sensitive one. Someone who bets straight lines and shops the number. The high-margin customer is the parlay buyer — the one whose product is profitable precisely because its true odds are opaque. So the company was saying, accurately and as a defense, that the customers leaving first are the ones who look at prices.

That is not a rebuttal of the threat. It's a description of its first stage.

Here is the claim I want to defend: the danger isn't volume migration. It's that a prediction market makes the price legible, and legibility only runs one way.

This is the same mechanism I wrote about with Klarna, running backwards. Klarna earns a premium merchant fee because splitting a price into four instalments makes the total less salient at the moment of decision — the product's value to the merchant is the shopper's misjudgment of what she can afford. A sportsbook earns its margin the same way. A parlay is profitable because its implied probability is hard to compute, not because a customer weighed the price and accepted it. Both businesses are paid for the gap between the stated number and the real one.

A prediction market closes that gap by design. It quotes probability directly, in cents, on the same event, on a phone the customer is already holding. It doesn't need to steal the bet. It only needs to be visible while the bet is being placed.

Why this matters more than share loss: the two behave completely differently. Handle lost to a competitor is recoverable — spend on promotion, improve the app, take it back. DraftKings has demonstrably been doing that to FanDuel. But a customer who has seen what a fair line looks like cannot unsee it. That knowledge lives in the customer rather than in the market-share table, and it surfaces in hold, not in volume.

Which means the metric consensus is watching would show this last.

And then there's the part that requires no customer to switch venues at all — which is where I think this stops being a competitive story and becomes a structural one. DraftKings now runs its own exchange. An analyst on the call estimated roughly $7 million of gross prediction revenue for the quarter. Against Q2 exchange volume, which I had to derive because only annualized figures were given and which likely ran somewhere between $600 million and $1.3 billion, that implies a take rate somewhere around half a percent to a little over one percent.

Against a 6.8% sportsbook hold.

I want to be careful, because the derivation is rough and the $7 million is an estimate rather than a disclosure. But the order of magnitude survives a great deal of error: the same dollar of consumer volume appears to earn something like five to ten times more at the sportsbook than at the exchange.

So when management says Predictions is growing faster than anticipated, I don't hear a defense. I hear a company describing the rate at which it is moving its own volume onto a fraction of the margin.`,
  evidence: `The metric this thesis lives or dies on moved this quarter, and I did not expect it to move this fast.

Hold fell to 6.8% from 8.7%. Volume rose 15% to $13.1 billion. Sports revenue fell 10.6% to $891.9 million. Total revenue $1,443 million, down 5%. Adjusted EBITDA $114.6 million against $300.6 million. Net loss $67.6 million. And underneath it, the sharpest line in the release: average revenue per monthly unique payer fell 13% to $132, while payers themselves rose 9%.

More customers. More volume. Less money from each of them.

That is precisely the shape the thesis predicts. It is also precisely the shape a bad run of sports results produces, which is the problem.

Management named two causes, and I think the distinction between them is the whole investable question.

The first is sports outcomes — roughly an $80 million headwind. I accept it without argument. The Knicks won the championship in DraftKings' largest state and the World Cup group stage went the bettors' way, after seven consecutive months of the opposite. That is variance and variance mean-reverts. The flat six-month margin is the strongest evidence for this reading and I'm not going to talk around it.

The second cause is promotional spending. And this is where I think consensus let something through.

Promotion is a price concession. It is the house giving back part of its edge to keep a customer. DraftKings acquired about 75% more customers than a year ago, roughly 30% more than planned, and spent about 10% more than expected to do it. Framed as investment, that's a growth story and the market applauded it. Framed as economics, it is a company paying more to hold customers at the exact moment a structurally cheaper venue for the identical wager became available in all fifty states.

Both framings produce the same accounting. They imply opposite futures. Management chose the first one and nobody pushed.

So of the two causes named, one is genuinely random and the other is arguably this thesis wearing a different label. That's the finding. It is not conclusive and I'd be overreaching to pretend otherwise.`,
  bull: `The strongest version of the other side is that I have built a structural story on one quarter of bad luck, and the six-month number says so in plain language. 7.3% against 7.4% is flat. Had June's outcomes broken the other way I would be looking at a hold figure near 8% and would probably never have written this. That bothers me more than is comfortable to admit, and it should be the first thing anyone uses against me.

The business is also genuinely working on every axis consensus cares about. Sportsbook handle up 11% against Flutter's 2%. Handle share improving three quarters running. July handle up 20% after the World Cup with similar growth into August. World Cup handle roughly six times the 2022 tournament, and those customers reportedly kept betting once it ended. Acquisition cost came in about 25% better than planned even while acquisition volume ran 30% ahead. That is not a company losing its customers.

Guidance was maintained at $6.5 to $6.9 billion of revenue and $700 to $900 million of adjusted EBITDA, and the second half carries the NFL season — the highest-volume stretch of the year. If outcomes normalize and football lands well, hold snaps back toward 8% or better and this pitch reads as a student mistaking a weather report for a climate trend.

And the Predictions launch may simply be correct strategy despite its take rate. A low-margin product you own beats a low-margin product your customer uses elsewhere, and there's a plausible reading where the exchange is an acquisition channel feeding the sportsbook rather than a cannibal eating it. I don't have the disclosure to rule that out, and if that's what's happening, my central number is measuring the cost of customer acquisition and calling it margin decay.`,
  valuation: `I don't think I can value this properly yet, and I'd rather say so than produce a number that resembles work.

Full-year guidance is $6.5 to $6.9 billion of revenue and $700 to $900 million of adjusted EBITDA. First half delivered $3.09 billion and $282.5 million, so the back half requires roughly $3.41 to $3.81 billion and $418 to $618 million. That is a substantial step up and it rests almost entirely on the NFL season plus outcome normalization. Cash stood at $983.9 million at June 30, after $154.2 million of buybacks.

Shares were around $23.42 on August 7. [Check live before publishing — this is stale.] I'd want a verified diluted share count before quoting a market cap or an EV/EBITDA multiple, and I don't have one I trust, so I've left it out rather than guess.

What I'd anchor on instead of a multiple: net revenue margin, parlay handle mix, and promotional spend as a percentage of revenue, tracked across four quarters. If I'm right, the first falls, the second stops rising, and the third keeps climbing. If I'm wrong, hold reverts above 8.5% in a normal-outcome quarter and everything else here is noise.

A DCF on this business would be an elaborate way of restating whatever I assumed about hold. I'd rather just argue about hold.`,
  catalysts: `The NFL season is the test, and it's unusually clean. Q3 and Q4 carry the highest volume of the year, and outcome variance across a full football season is far smaller than across a single NBA final. If hold prints below roughly 8% through a normal-outcome NFL quarter, the variance explanation gets very thin. If it prints at 8.5% or better, I should say plainly that I read a story into one bad June.

Second: Predictions revenue, disclosed rather than estimated. Volume ran about $11 billion annualized in July against $2.3 billion in April, with over 600,000 participating customers. The take-rate gap is the strongest quantitative version of this thesis and right now I'm building it on a derived number, which I don't love.

Third, and the one I'd watch if I could only watch one: promotional spend as a share of revenue. Price competition shows up there before it shows up in hold.

Then the regulatory track, which cuts strangely. Robins flagged on the call that regulatory questions leave the long-term prediction-market landscape uncertain. The Third Circuit went Kalshi's way in April; the Ninth heard argument the same month; a split points toward the Supreme Court. An adverse ruling for the exchanges would help DraftKings' sportsbook and hurt its own Predictions product simultaneously. That is a genuinely odd position for a company to occupy, and I don't think the market has priced it coherently in either direction.`,
  risks: `The clean way I'm wrong: hold reverts. Seven months of house-friendly outcomes preceded one bad month, the six-month margin is flat, and mean reversion is the most reliable force in this industry. If Q3 and Q4 print at 8.5% or better, there is no thesis here, and I should write that down in the same place I wrote this rather than quietly migrating to a new metric.

The second way I'm wrong is more interesting, and I can't currently test it. Price legibility may simply not matter to this customer base. People may buy parlays as entertainment rather than as expected value, in which case knowing the price is bad changes behavior no more than knowing lottery odds stops ticket sales. If that's true, the legible-price competitor takes the sharps — who were never profitable anyway — and the parlay customer never looks up. Management's "low-margin customers" line would then be straightforwardly correct rather than an unwitting confession, and my entire reading of it wrong.

I don't know which of us is right about that. It is the crux of the pitch and no filing will settle it. It's a question about people, and I'd want to ask someone who has actually priced a sportsbook.

Third, the take-rate comparison rests on a $7 million analyst estimate and a volume figure I derived from annualized data. The direction is almost certainly right. The magnitude could be badly off.

Fourth, and most practically: I'm negative on the economics and the stock rose 5.6% on the print. Being right about margin structure and wrong about the share price for two years is an entirely normal outcome. A thesis that pays off only when a whole customer base changes how it thinks about price is not a thesis with a timeline.`,
  position: `WATCH. Conviction Medium. No position.

Not a sell, and I want to be specific rather than hiding behind caution. The metric moved exactly as predicted and I still cannot separate my explanation from management's. Both readings fit the same data. One of them is boring and well-supported by the flat six-month figure. Shorting into an NFL season on the interesting explanation would be paying real money for a story I happen to like, which is the failure mode I'm most worried about in myself right now.

Not a buy either. Guidance demands a large second-half step-up, the exchange product appears to earn a fraction of what the sportsbook earns on the same dollar, and promotional intensity is climbing.

What converts this to SELL: two consecutive quarters of net revenue margin below 8% without an outcome explanation, with promotional spend still rising as a share of revenue. That's specific, dated and checkable, and the NFL season delivers it by early next year.

What kills it: hold above 8.5% in a normal-outcome quarter. I'll close it out as wrong, publicly, in this same place.

Five calls on this site and all five are WATCH. I notice that, and I don't think it's a virtue. This is the one with a real trigger attached, and I intend to honor it in both directions.`,
  notes: `This began as a question about Kalshi, which I can't pitch — private, last marked around $22 billion with reports of a raise near $40 billion, no S-1, and management has ruled out a listing before 2027. So I went looking at the other side of the trade, and found the more interesting company was the one being disrupted rather than the one doing it.

Verify before defending: the $7 million prediction-market revenue estimate (analyst-derived, not disclosed); my derivation of Q2 exchange volume from annualized July and April figures; a verified diluted share count; and the live share price, since $23.42 is from August 7.

One loose thread I haven't resolved. Flutter posted a Q2 loss reported around $296 million with its CEO departing, while DraftKings grew handle 11% against Flutter's 2%. If the category were being disrupted evenly, those two shouldn't diverge that far. That either weakens my thesis or says something specific about Flutter, and I don't yet know which.`
}
];
