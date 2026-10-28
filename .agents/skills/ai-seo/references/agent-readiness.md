# Agent Readiness — Can an Agent Reach, Navigate, and Parse Your Site?

AI visibility work splits into two layers: what your content says (the rest of this skill) and whether an agent can *get to it at all*. This reference covers the second layer — the access/discovery/parseability audit — plus the emerging shift from agent-*readable* to agent-*actionable* sites.

Two free scoring tools shipped in August 2026 and turned this into a measurable discipline:

| Tool | Run It | Method |
|---|---|---|
| **Is Agentic** | `npx is-agentic` or [is-agentic.com](https://is-agentic.com) | Tests discovery files, content negotiation, Markdown headers, bot permissions |
| **Frase Agent Readiness Checker** | [frase.io/tools/agent-readiness](https://www.frase.io/tools/agent-readiness) | Audits renderability, semantic structure, schema, bot accessibility |

---

## The 4 Layers of Agent Readiness

```
Layer 4: Actionability  (WebMCP, tool endpoints, JSON actions)
Layer 3: Parseability   (Semantic HTML, clean Markdown, minimal JS bloat)
Layer 2: Discovery      (llms.txt, llms-full.txt, Link headers, OKF)
Layer 1: Access         (robots.txt, WAF, bot permissions, Cloudflare)
```

---

## Layer 1: Access (Can Bots Reach the Server?)

Before optimizing text, verify your server doesn't reject AI agents:

1. **Audit `robots.txt` Permissions:**
   - Explicitly permit search discovery bots (`OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`, `Bingbot`, `Googlebot`).
   - Distinguish search crawlers from bulk training crawlers (`GPTBot`, `ClaudeBot`). You can disallow training while allowing search citation.
2. **Check Cloudflare / WAF Rules:**
   - Cloudflare's "AI Scraper and Crawler Blocking" toggle blocks all bots by default. If enabled, it blocks search engines from citing your site in real-time answers.
   - Configure custom WAF rules to allow legitimate search bots while blocking abusive scrapers.
3. **Verify HTTP Status Codes for Bots:**
   - Check that `curl -A "OAI-SearchBot" https://yourdomain.com` returns `200 OK`, not `403 Forbidden` or a Cloudflare turnstile challenge.

---

## Layer 2: Discovery (Can Bots Map Your Knowledge?)

Help agents find your most authoritative resources without crawling thousands of pagination links:

1. **`llms.txt` at Root:**
   - Host `/llms.txt` following the [llmstxt.org](https://llmstxt.org) standard.
   - Provide a concise title, description, and markdown links to core documentation, pricing, and product pages.
2. **`llms-full.txt` for Deep Context:**
   - Host `/llms-full.txt` containing full-text concatenated markdown of core docs for LLMs with large context windows.
3. **HTTP `Link` Header for Markdown Content Negotiation:**
   - Send a `Link` response header on HTML pages pointing to the equivalent Markdown version:
     `Link: <https://example.com/docs/pricing.md>; rel="alternate"; type="text/markdown"`
   - Agents (like Claude Code or Cursor) will pull the lightweight markdown directly instead of scraping the HTML DOM.
4. **Open Knowledge Format (OKF):**
   - For sites with deep structured documentation, consider serving an `/okf/` bundle (see [okf.md](okf.md)).

---

## Layer 3: Parseability (Can Bots Extract Plain Meaning?)

When an agent visits an HTML page, it should extract content cleanly:

1. **SSR / Static HTML vs. Client-Side Rendering:**
   - Essential content (pricing, feature tables, core descriptions) must be present in the initial server response.
   - Heavy Single Page Applications (SPAs) where content is injected via JavaScript after 3 API calls frequently fail bot extraction.
2. **Semantic HTML Hierarchy:**
   - Use `<main>`, `<article>`, `<header>`, `<nav>`, and `<aside>`.
   - Maintain strict heading hierarchy (`<h1>` -> `<h2>` -> `<h3>`) without skipping levels.
3. **Dedicated Machine-Readable Pages:**
   - Provide `/pricing.md` or `/pricing.txt` with plain-text tables for buying agents evaluating options.

---

## Layer 4: Actionability (Can Agents Perform Tasks?)

Beyond reading information, the web is shifting toward agentic execution:

1. **WebMCP (Web Model Context Protocol):**
   - Expose tools and action schemas via standardized endpoints so agents can execute workflows (e.g., check availability, calculate quotes) on behalf of users.
2. **Standardized Commerce Protocols (UCP):**
   - Google and industry partners are exploring Universal Commerce Protocol standards for programmatic catalog discovery and checkout.

---

## Checklist: 15-Minute Agent Readiness Audit

- [ ] `curl -A "OAI-SearchBot" https://yoursite.com` returns `200`
- [ ] `curl -A "PerplexityBot" https://yoursite.com` returns `200`
- [ ] `/robots.txt` explicitly allows search bots
- [ ] Cloudflare / WAF bot management allows verified search bots
- [ ] `/llms.txt` exists at root and links to core pages
- [ ] `/pricing.md` or plain-text pricing exists
- [ ] Initial HTML payload contains complete text without requiring client JS execution
- [ ] Schema markup (`Organization`, `Article`, `Product`) validates in Google Rich Results Test

---

*Agent-readiness check taxonomy distilled from Vercel/Ora's Is Agentic (is-agentic.com) and Frase's Agent Readiness Checker (both August 2026, credited); citation-volatility events practitioner-reported (Ashni of Hype Partners (@ashnichrist) and others, August 2026) — labeled accordingly, verify against your own monitoring.*
