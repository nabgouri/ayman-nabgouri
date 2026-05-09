# Portfolio

The developer portfolio presents selected project work with consistent naming, links, screenshots, technology labels, and concise case-study details.

## Language

**Project Entry**:
A single portfolio item shown in the Selected Work grid and its detail modal.
_Avoid_: card, tile

**Hurr App Website**:
The portfolio title for the Hurr marketing and app-info website, distinct from the Hurr mobile app itself.
_Avoid_: Hurr Website, hurr-web, Hurr app

**Live Project Link**:
The public URL used as the primary external action for a portfolio project.
_Avoid_: demo link, deployment URL

**Canonical Product Domain**:
The official public domain for a product across live links, canonical metadata, social metadata, and legal pages.
_Avoid_: site URL, main URL

**Private Source**:
A project source repository that must not be linked from the public portfolio.
_Avoid_: hidden code, unavailable GitHub

**Project Screenshot**:
A visual asset that shows the actual shipped project interface in the portfolio grid and detail modal.
_Avoid_: preview image, thumbnail

**Project Positioning**:
The main angle a portfolio entry uses to explain why the work matters.
_Avoid_: summary, blurb

**Featured Project**:
The first project in the Selected Work grid, used to signal the strongest or most current portfolio work.
_Avoid_: top card, pinned project

**Tech Label**:
A short technology or capability tag shown under a project title in the portfolio grid.
_Avoid_: stack item, badge

## Relationships

- A **Project Entry** may link to source code, a live site, or a video demo.
- **Hurr App Website** is a **Project Entry** for the website layer of the Hurr product, not the mobile app.
- The **Live Project Link** for **Hurr App Website** is `https://hurr.pro`.
- The **Canonical Product Domain** for Hurr is `https://hurr.pro`.
- **Hurr App Website** has **Private Source**, so its **Project Entry** links to the live site only.
- The **Project Screenshot** for **Hurr App Website** should show the website itself, not mobile app screens or an OG Card.
- The **Project Screenshot** for **Hurr App Website** should use a desktop landing-page capture because the portfolio grid is landscape.
- The **Project Positioning** for **Hurr App Website** leads with Arabic-first website craft, trust, RTL design, localization, and deployment; mobile app functionality is context only.
- **Hurr App Website** is the **Featured Project** in the Selected Work grid.
- The **Tech Labels** for **Hurr App Website** are Astro, TypeScript, Cloudflare, RTL, and i18n.

## Example dialogue

> **Dev:** "Should the title be Hurr Website?"
> **Domain expert:** "Use **Hurr App Website** so visitors understand this portfolio item is the website for the app, not the app itself."

## Flagged ambiguities

- "Hurr app website", "hurr-web", and "Hurr Website" were used for the same work — resolved: the portfolio title is **Hurr App Website**.
- The Hurr source repo config referenced `https://hur.app`, but the resolved **Canonical Product Domain** is `https://hurr.pro`.
- The Hurr GitHub repository exists, but it is **Private Source** — resolved: do not show a source-code link in the portfolio.
- Hurr has mobile app screenshots and OG Cards available, but the portfolio item is the website — resolved: use a website **Project Screenshot**.
- Hurr can be captured in mobile or desktop form — resolved: use desktop for the portfolio grid.
- Hurr could be framed as a mobile app project or website project — resolved: frame it as **Hurr App Website** and keep app functionality as supporting context.
- Hurr could be inserted anywhere in the project list — resolved: place **Hurr App Website** first as the **Featured Project**.
- Hurr could show generic implementation labels — resolved: use precise **Tech Labels** from the Hurr website stack.
