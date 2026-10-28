# Open Knowledge Format (OKF)

Google's v0.1 markdown spec for representing site content as an agent-readable bundle. Introduced on the [Google Cloud blog](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing) on 2026-06-12 and shipped inside Knowledge Catalog.

## What it is

OKF is a directory of cross-linked markdown files. Each file has:

- A YAML frontmatter block (`type` required; `title`, `description`, `resource`, `tags`, `timestamp` recommended)
- A standard markdown body
- Standard markdown links to other files in the bundle or to the web
- Standard tables and code blocks

The spec defines a bundle structure:

```
okf/
├── index.md           # Entry point listing all resources
├── concepts/          # Core ideas, terminology, definitions
├── guides/            # How-to instructions, workflows
├── references/        # API specs, configuration, schemas
└── assets/            # Supporting diagrams, images
```

Google built OKF for enterprise data teams sharing schemas and datasets between Dataplex, BigQuery, and Knowledge Catalog. But because OKF is just cross-linked markdown with metadata, practitioners (popularized by Suganthan Mohanadasan) realized the same bundle format solves agent readability for public websites.

## Difference from llms.txt

| Aspect | llms.txt | OKF |
|---|---|---|
| **Backer** | Community (Answer.AI / Jeremy Howard) | Google Cloud (Knowledge Catalog team) |
| **Structure** | Single markdown file with links and short descriptions | Directory of cross-linked markdown files with YAML frontmatter |
| **Maturity** | Broad adoption (hundreds of sites, tooling exists) | v0.1 (June 2026), weeks old, minimal tooling |
| **Engine support** | Multiple engines read it or parse it via tooling | Google-backed; no confirmed AI Overviews integration today |
| **Complexity** | 15 minutes to write by hand | Requires a directory structure and metadata generation |
| **Use case** | "Here's a curated list of pages for LLMs to read" | "Here's the full site re-rendered as structured markdown" |

They are not mutually exclusive. A site can serve both: `llms.txt` as the index and `okf/` as the bundle it points to.

## How to generate a bundle

### Option 1: Free static generator (recommended)

Use the open-source OKF bundle generator (e.g., via the community CLI or web generator):

1. Point the tool at your sitemap (`https://example.com/sitemap.xml`)
2. Filter to your core informational pages (skip tag archives, pagination, thin pages)
3. Set bundle depth and category mapping
4. Generate the `okf/` directory
5. Commit to your repository or upload to your hosting root so it serves at `/okf/`

### Option 2: WordPress / CMS plugin

If on WordPress, community plugins for OKF generation ship the bundle dynamically from published posts:

1. Install the plugin (search "Open Knowledge Format" or "OKF" in the directory)
2. Select which post types to include (Posts, Pages, Docs — skip WooCommerce transactions, drafts)
3. Configure the refresh schedule (regenerate on publish or daily)
4. Verify the bundle serves at `https://example.com/okf/index.md`

### Option 3: By hand (small sites only)

For a site under 20 pages:

1. Create an `/okf/` directory
2. Create `okf/index.md`:
   ```markdown
   ---
   type: index
   title: [Site Name] Knowledge Bundle
   description: Core documentation and knowledge base for [Site Name]
   timestamp: 2026-10-01
   ---

   # [Site Name] Knowledge Base

   - [Overview](overview.md) — What [Site Name] is and does
   - [Pricing](pricing.md) — Plans, limits, and tiers
   - [Guides](guides/getting-started.md) — Getting started walkthrough
   ```
3. Create individual markdown files for each core page with YAML frontmatter:
   ```markdown
   ---
   type: guide
   title: Getting Started with [Product]
   description: Step-by-step setup guide
   resource: https://example.com/guides/getting-started
   tags: [setup, onboarding]
   timestamp: 2026-10-01
   ---

   # Getting Started
   ...
   ```

## Hosting guidance

- **Static sites (Astro, Next.js, Hugo, Jekyll)**: place in the `public/okf/` folder so it deploys to `/okf/`
- **Reverse proxies (Nginx, Cloudflare Workers)**: route `/okf/*` requests to the bundle storage (S3 bucket or GitHub Pages)
- **Traditional hosting with custom paths**: upload the directory to `/okf/`
- **Closed platforms (Wix, Squarespace, most page-builders)**: you usually can't serve files at custom paths — skip OKF entirely

After it's serving, add a line to `llms.txt` pointing to the bundle so agents that read `llms.txt` (today) can discover the bundle (later).

## When to skip

- Site is <10 pages — overhead exceeds payoff
- Site is on a closed platform that won't allow custom paths
- You're not maintaining `llms.txt`, schema markup, or other machine-readable files (OKF compounds with those; alone it does nothing)
- You can't budget the 30 minutes a quarter to refresh the bundle as content changes

## What to watch

OKF is v0.1, weeks old. Worth tracking, not worth obsessing over:

- Whether Google announces OKF support in AI Overviews / Knowledge Graph (currently no signal)
- Whether non-Google engines (ChatGPT, Perplexity, Claude) announce OKF reading
- Whether the spec moves to v1.0 (breaking changes are possible at <1.0)
- Whether Knowledge Catalog adds public ingestion endpoints
- Adoption signals — search GitHub for `okf/index.md` to see who's shipping bundles
