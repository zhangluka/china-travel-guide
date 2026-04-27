# China Travel Guide - MVP Implementation Plan

**Goal:** Build an SEO-optimized English travel guide website for foreign tourists visiting China, starting with Chengdu.

**Architecture:** Next.js static site with MDX content, Tailwind CSS, deployed to Vercel/Cloudflare. Content organized by city with clean URL structure for maximum SEO.

**Tech Stack:** Next.js 15 (App Router, SSG), Tailwind CSS, MDX, TypeScript

---

## URL Structure (SEO-optimized)

```
/                                    # Homepage
/chengdu                             # City overview
/chengdu/giant-panda-base            # Attraction
/chengdu/hotpot-guide                # Food guide
/chengdu/getting-around              # Transport
/chengdu/itinerary-3-days            # Itinerary
/survival/alipay-setup               # Survival guides (universal)
/survival/vpn-guide                  # 
/survival/must-have-apps             #
```

## Content Structure (per city)

```
content/
├── cities/
│   └── chengdu/
│       ├── _meta.json               # City metadata
│       ├── index.mdx                # City overview
│       ├── attractions/
│       │   ├── giant-panda-base.mdx
│       │   ├── jinli-street.mdx
│       │   ├── kuanzhai-alley.mdx
│       │   ├── leshan-buddha.mdx
│       │   └── dujiangyan.mdx
│       ├── food/
│       │   ├── sichuan-food-guide.mdx
│       │   ├── hotpot-guide.mdx
│       │   └── street-food.mdx
│       ├── getting-around.mdx
│       ├── where-to-stay.mdx
│       └── itinerary-3-days.mdx
├── survival/
│   ├── alipay-setup.mdx
│   ├── vpn-guide.mdx
│   ├── must-have-apps.mdx
│   ├── sim-card-vs-esim.mdx
│   └── maps-navigation.mdx
└── global/
    └── _meta.json
```

## Tasks

### Task 1: Initialize Next.js Project
- `npx create-next-app@latest` with TypeScript, Tailwind, App Router
- Set up project at `/Users/bobby/Projects/Github/zhangluka/china-travel-guide`

### Task 2: Create Layout & Homepage
- Root layout with navigation, footer
- Homepage with hero, featured cities, survival guide links
- SEO metadata setup

### Task 3: Build Content System
- MDX processing with next-mdx-remote or @next/mdx
- Content reader utility
- City/attraction page templates

### Task 4: Generate Survival Guide Content (5 pages)
- Alipay setup, VPN guide, Must-have apps, SIM/eSIM, Maps

### Task 5: Generate Chengdu Content (10+ pages)
- City overview, attractions, food, transport, itinerary

### Task 6: SEO & Deploy
- Sitemap, robots.txt, structured data
- Deploy to Vercel
