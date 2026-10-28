# Format Volatility — Which Content Formats AI Cites (and How Fast That Changes)

Citation-*source* volatility (Reddit wiped overnight, Gemini favoring owned sites) is covered in [agent-readiness.md](agent-readiness.md). This reference covers the second volatility axis: citation-*format* — which page types AI engines retrieve and cite, and the August 2026 evidence that heavily-exploited formats get demoted.

Read this before recommending comparison pages, listicles, or "best X" content for AI visibility.

## Contents
- The August 2026 ChatGPT Format Shift
- Cross-Platform Format Table
- Why Exploited Formats Get Demoted
- How to Extract ChatGPT's Background Queries (DevTools)
- Measurement Rigor Checklist
- Sources

---

## The August 2026 ChatGPT Format Shift

In mid-August 2026, OpenAI deployed updates to ChatGPT's search retrieval logic (widely termed the 5.6 update by practitioners). Peec AI tracked citation rates across thousands of B2B and SaaS queries before and after the change.

| Content Format | Pre-5.6 Citation Share | Post-5.6 Citation Share | Net Change |
|---|---|---|---|
| **Listicles ("10 Best Tools...")** | 10.1% | 5.0% | **-50.5%** |
| **Comparison Pages ("X vs Y")** | 33.4% | 22.7% | **-32.1%** |
| **Owned "Official" Pages (Product/Docs)** | 18.2% | 34.6% | **+90.1%** |
| **Documentation / Knowledge Base** | 12.0% | 21.8% | **+81.7%** |
| **Pricing Pages** | 4.5% | 8.9% | **+97.8%** |

### What happened:
1. **Demotion of thin aggregators:** ChatGPT cut back heavily on generic affiliate listicles and affiliate-heavy comparison sites.
2. **Surge in `site:` and primary queries:** ChatGPT's automated query expansion (fan-out) shifted toward searching official brand domains directly rather than searching broad category terms.
3. **Primary sources prioritized:** When users ask "How does tool X compare to tool Y?", ChatGPT now seeks the official feature documentation and pricing of X and Y, synthesizing the comparison itself rather than citing a third-party comparison blog post.

---

## Cross-Platform Format Table

Format preferences vary dramatically across AI engines:

| Format | Google AI Overviews | ChatGPT | Perplexity | Gemini | Copilot |
|---|---|---|---|---|---|
| **Official Docs** | High | High | Very High | High | High |
| **Product / Pricing Pages** | Moderate | High | High | High | High |
| **Third-Party Listicles** | Moderate | Low | Moderate | Low | Moderate |
| **Comparison Pages** | Moderate-High | Moderate | High | Moderate | High |
| **Original Research / Data** | Very High | Very High | Very High | Very High | Very High |
| **Reddit / UGC** | High (fluctuates) | Low | Moderate | Low | Moderate |
| **YouTube Video Transcripts** | Very High | Moderate | Moderate | Very High | Moderate |
| **PDF Whitepapers** | Low | Low | High | Low | Moderate |

---

## Why Exploited Formats Get Demoted

Search and AI systems follow a consistent lifecycle:
1. An engine launches with a naive heuristic (e.g., "listicles have high information density").
2. Marketers identify the pattern and produce thousands of formulaic listicles.
3. Users complain that answers cite low-quality, biased affiliate pages.
4. The engine updates its retrieval or reranking layer to penalize formulaic patterns and favor primary sources.

**Takeaway:** Optimizing for *structure* (clean headings, tables, verifiable metrics) is evergreen. Optimizing for a *gimmick format* (churning out 500 programmatic "best X vs Y" articles) is fragile and subject to sudden demotion.

---

## How to Extract ChatGPT's Background Queries (DevTools)

When ChatGPT generates an answer using web search, it executes multiple silent background queries. You can inspect these in your browser:

1. Open Chrome/Firefox DevTools (`F12` or `Cmd+Option+I`) and go to the **Network** tab.
2. Filter network requests by `Fetch/XHR`.
3. In ChatGPT, ask a question relevant to your category (e.g., "What are the best CRM tools for solar installers?").
4. Inspect the streaming conversation response or SSE events payload.
5. Search for `search_queries` or `queries` in the event payloads.
6. Observe the exact strings ChatGPT searched (e.g., `site:g2.com solar crm`, `best solar crm software reviews`, `solar crm pricing`).

**Why this matters:** This reveals ChatGPT's internal fan-out logic for your space, showing you exactly which queries and sources it uses to build its answer.

---

## Measurement Rigor Checklist

When auditing AI citations, avoid anecdotal false conclusions:

- **Run each query 3–5 times per platform**, fresh session each time.
- **Track mention/citation *rate*** ("cited in 3 of 5 runs"), never a yes/no from one run.
- **Report the sample size** with every number ("40% mention rate, n=5") so future-you knows how much to trust it.
- **Compare rates over time, not runs.** A drop from 4/5 to 3/5 is noise; a drop from 4/5 to 0/5 sustained across a month is signal.
- Before diagnosing *why* you're not cited, split causes the way an audit should: **technical** (can't be crawled/parsed — see agent-readiness.md), **comprehension** (AI describes you inaccurately or vaguely), or **trust** (understood but not selected — see citations-vs-recommendations.md).

---

*Sources, all labeled and dated: Peec AI pre/post-5.6 citation data via Tomek Rudzki and Lily Ray (Aug 2026); LinkedIn's AEO guide numbers via Chris Long (Sep 2026, platform-reported); fan-out extraction method as publicly circulated (Aug 2026); measurement-rigor framing credited to Initial Commit's AEO audit skill (Josh Pigford, Aug 2026). All snapshots of a volatile system — verify against your own monitoring.*
