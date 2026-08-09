# SinLess Games — Gilded Dominion

The design language should feel like **a royal war banner forged into a modern game-studio interface**: obsidian black, aged gold, polished silver, sharp geometry, restrained metallic highlights, heraldic details, and cinematic negative space.

## Core palette

I sampled the logo itself as the basis for these colors.

| Role           | Color                         |       Hex |
| -------------- | ----------------------------- | --------: |
| Obsidian       | Near-black primary background | `#020201` |
| Night Steel    | Raised background             | `#0D0E0F` |
| Iron           | Cards / surfaces              | `#151619` |
| Forged Steel   | Secondary surface             | `#202126` |
| Royal Gold     | Primary brand accent          | `#D5AA56` |
| Antique Gold   | Buttons / borders             | `#B58535` |
| Burnished Gold | Dark metallic accent          | `#936A29` |
| Bronze Shadow  | Deep gold shading             | `#674D22` |
| Platinum       | Primary silver                | `#DCD8D2` |
| Steel Silver   | Secondary silver              | `#9F9C97` |
| Gunmetal       | Muted UI text/borders         | `#5F5D5A` |
| Warm Ivory     | Main readable text            | `#F1EDE6` |

### Recommended hierarchy

**Gold is the authority color. Silver is the supporting color. Black owns the canvas.**

That means gold should be used for:

- primary CTAs
- selected navigation
- important headings
- active states
- key dividers
- badges for important content
- subtle decorative framing

Silver should be used for:

- secondary headings
- icons
- metadata
- secondary controls
- neutral borders

Do **not** make every border and piece of text gold. That would cheapen the metallic effect.

---

# Visual style

## Backgrounds

The page itself should almost always remain close to pure black.

Instead of obvious gray cards everywhere, build subtle depth:

```css
--sg-bg: #020201;
--sg-bg-raised: #0d0e0f;
--sg-surface: #151619;
--sg-surface-raised: #202126;
```

Hero sections can use very subtle radial lighting:

```css
background:
  radial-gradient(circle at 50% 10%, rgba(181, 133, 53, 0.09), transparent 42%),
  #020201;
```

That gives the gold a faint cinematic illumination without turning the page orange.

---

# Metallic gold

Don't use a flat yellow for major branded elements.

Use a metallic gold gradient selectively:

```css
background: linear-gradient(
  135deg,
  #674d22 0%,
  #b58535 25%,
  #e4bf6d 48%,
  #936a29 72%,
  #d5aa56 100%
);
```

Use that for things like:

- hero title accents
- primary button borders
- major section ornaments
- premium badges

For normal UI controls, use solid `#B58535` or `#D5AA56`.

---

# Silver

The dragon/lion balance is important. Gold shouldn't completely dominate the interface.

A metallic silver treatment can be:

```css
background: linear-gradient(
  135deg,
  #5f5d5a 0%,
  #9f9c97 28%,
  #eeeae4 50%,
  #8e8b87 72%,
  #dcd8d2 100%
);
```

Again, use it sparingly.

---

# Typography

The logo has a **Roman / medieval / heraldic** character.

For display typography, I'd use something in the **Cinzel / Trajan-style family**.

### Display

**Cinzel**

Use for:

- hero headings
- game titles
- major section headings
- important labels
- special buttons

Example:

```css
font-family: "Cinzel", serif;
font-weight: 600;
letter-spacing: 0.04em;
```

### Interface/body

Use a highly readable modern sans-serif such as:

**Inter**

```css
font-family: "Inter", sans-serif;
```

This contrast is important.

If the whole website uses a medieval serif, the UI will become tiring to read.

### Recommended hierarchy

```text
HERO / GAME TITLE
Cinzel 700
56–88px desktop
38–52px mobile
tracking: .03em

PAGE TITLE
Cinzel 600
40–56px

SECTION TITLE
Cinzel 600
28–36px

CARD TITLE
Cinzel 600
18–22px

BODY
Inter 400
16–18px

LABEL / META
Inter 500
12–14px
tracking: .08em
```

---

# Shape language

This logo has **points, blades, shields, arches, claws and hard edges**.

Your UI should reflect that.

### Avoid

```text
border-radius: 24px
border-radius: 32px
giant pill buttons
bubble-shaped cards
```

That would fight the logo.

Instead:

```css
--radius-xs: 2px;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
```

Some major branded components can use **clipped corners**:

```css
clip-path: polygon(
  10px 0,
  100% 0,
  100% calc(100% - 10px),
  calc(100% - 10px) 100%,
  0 100%,
  0 10px
);
```

That immediately connects the interface with the sword/emblem geometry.

---

# Borders

Don't surround everything in bright gold.

Default:

```css
border: 1px solid rgba(220, 216, 210, 0.12);
```

Interactive:

```css
border-color: rgba(213, 170, 86, 0.45);
```

Highlighted:

```css
border-color: #b58535;
```

You can occasionally use a subtle top edge:

```css
border-top: 1px solid rgba(213, 170, 86, 0.65);
```

That creates a premium look without turning everything into a picture frame.

---

# Buttons

### Primary

Black text on metallic gold would work extremely well.

```css
.sg-button-primary {
  background: linear-gradient(135deg, #936a29, #d5aa56 45%, #b58535);

  color: #050505;
  border: 1px solid #d5aa56;
  border-radius: 4px;

  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
```

Hover should brighten slightly rather than glow like neon.

### Secondary

```css
background: transparent;
color: #dcd8d2;
border: 1px solid rgba(220, 216, 210, 0.3);
```

Hover:

```css
border-color: #d5aa56;
color: #d5aa56;
```

---

# Cards

Don't make the website a wall of generic floating rectangles.

When cards are needed:

```css
background:
  linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.025),
    rgba(255, 255, 255, 0.005)
  ),
  #0d0e0f;

border: 1px solid rgba(220, 216, 210, 0.12);
border-radius: 4px;
```

Hover:

```css
transform: translateY(-2px);
border-color: rgba(213, 170, 86, 0.5);
```

Maybe a tiny gold line appears across the top.

No giant glow.

---

# Navigation

I would make the main navbar:

- black or nearly black
- 70–80px tall desktop
- logo on left
- silver navigation labels
- selected route in gold
- subtle bottom border
- CTA framed in gold

Something like:

```text
[ SINLESS GAMES ]

GAMES     STUDIO     NEWS     COMMUNITY     CAREERS

                               [ JOIN THE REALM ]
```

Active nav:

```css
color: #d5aa56;
```

And a narrow gold underline could animate underneath.

---

# Homepage hero

I can see a very strong composition for this brand.

```text
                     SINLESS GAMES EMBLEM

              CREATE WORLDS. DEFY LIMITS.

           We create dark, immersive worlds where
           player choice shapes what survives.

           [ EXPLORE OUR GAMES ]   [ OUR STUDIO ]


────────────────────────────────────────────────────
```

Large environmental artwork could sit behind it with a nearly black overlay.

The logo itself should **not** be surrounded by a glowing halo.

Use cinematic light instead:

```text
black
→ deep charcoal
→ faint warm gold light
→ artwork
```

---

# Decorative language

Pull directly from the emblem.

Use:

- thin gold horizontal rules
- sword-tip shapes
- pointed separators
- heraldic arches
- extremely subtle dragon/lion patterns
- angular corner ornaments
- symmetrical framing on major hero areas

For example:

```text
──────────── ◆ ────────────
```

or something inspired by the sword point:

```text
─────────── ▼ ───────────
```

These can become recognizable SinLess Games UI motifs.

---

# Motion

The logo looks heavy and prestigious.

Animations should therefore feel **deliberate**, not bouncy.

Good:

- 180–300ms fades
- slow gold underline expansion
- subtle image scale on hover
- 1–3px vertical movement
- metallic shimmer used extremely rarely
- parallax on major artwork
- cinematic section reveals

Bad:

- bouncing buttons
- constant glowing
- particles covering everything
- floating cards
- rainbow gradients
- twitchy hover animations

---

# MUI foundation

For your existing MUI application, I would eventually establish something roughly like:

```ts
const sinlessGamesTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#D5AA56",
      light: "#E4BF6D",
      dark: "#936A29",
      contrastText: "#020201"
    },

    secondary: {
      main: "#DCD8D2",
      light: "#F1EDE6",
      dark: "#9F9C97",
      contrastText: "#020201"
    },

    background: {
      default: "#020201",
      paper: "#0D0E0F"
    },

    text: {
      primary: "#F1EDE6",
      secondary: "#9F9C97"
    },

    divider: "rgba(220, 216, 210, 0.12)"
  },

  shape: {
    borderRadius: 4
  },

  typography: {
    fontFamily: '"Inter", sans-serif',

    h1: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 700,
      letterSpacing: "0.03em"
    },

    h2: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 600,
      letterSpacing: "0.025em"
    },

    h3: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 600,
      letterSpacing: "0.02em"
    },

    button: {
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }
})
```

## The overall feeling

Think:

**Dark fantasy × medieval heraldry × premium collector's edition × modern game studio.**

Not:

**Black + yellow gaming website.**

The dragon, lion, sword, gold, silver and black give you enough visual vocabulary that **SinLess Games can have a genuinely recognizable UI system** instead of relying on the usual gaming-site clichés.

I would also update the `ui_ux` Codex agent we just designed with this **exact brand system**, so every time you tell Codex to build or redesign a SinLess Games page, it automatically treats **Gilded Dominion** as the canonical design language.
