# Let's Play All — Website

Astro-based site for letsplayallguitar.com.

## Structure

```
src/
  data/
    site-data.js      ← Single source of truth. Edit this for new tone settings.
  components/
    PedalDiagram.astro ← Reusable pedal SVG — pass pedalId + settings, get a diagram.
  layouts/
    BaseLayout.astro   ← Shared header, footer, nav, fonts, GA.
  pages/
    index.astro        ← Landing page
    lessons/index.astro ← Guitar lessons (links to RiffMap export for now)
    tone/index.astro   ← Tone settings page — auto-generated from site-data.js
```

## Adding tone settings for a new song

Open `src/data/site-data.js` and find `TONE_SETTINGS`. Add your song:

```js
"Pearl Jam": {
  "Alive": {
    pedals: [
      {
        pedal: "1991",
        settings: { gain1: 80, gain2: 65, volume: 70, bass: 55, middle: 50, treble: 45 }
      }
    ],
    notes: "Bridge pickup. Amp on edge of breakup."
  },
  // ...existing songs
}
```

Knob values: **0** = fully counter-clockwise · **50** = noon · **100** = fully clockwise.

## Adding a new pedal

Add its definition to `PEDALS` in `site-data.js`:

```js
"my-pedal": {
  name: "My Pedal",
  brand: "Brand Name",
  color: "#hexcolor",
  borderColor: "#hexcolor",
  graphic: "TEXT",   // displayed on the pedal face
  knobs: [
    { id: "gain",   label: "Gain",   row: "top",    x: 24  },
    { id: "volume", label: "Volume", row: "top",    x: 108 },
    { id: "bass",   label: "Bass",   row: "bottom", x: 24  },
    { id: "middle", label: "Middle", row: "bottom", x: 66  },
    { id: "treble", label: "Treble", row: "bottom", x: 108 },
  ],
}
```

## Publishing

```bash
npm run build   # builds to ./dist/
```

Push `dist/` to the `gh-pages` branch, or push the whole repo and let GitHub Actions build it.

## Dev

```bash
npm run dev     # starts local server at localhost:4321
```
