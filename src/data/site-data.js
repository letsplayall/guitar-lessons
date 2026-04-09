// ─── SITE DATA ────────────────────────────────────────────────────────────────
// This is the single source of truth for the whole site.
// RiffMap exports a site-data.json that gets merged in here.
// Tone settings are added manually per song.

export const SITE = {
  title: "Let's Play All",
  tagline: "Guitar Lessons // Grunge & Alt-Rock",
  url: "https://letsplayallguitar.com",
  youtube: "https://www.youtube.com/@LetsPlayAll",
  patreon: "https://www.patreon.com/letsplayall",
};

// ─── PEDAL DEFINITIONS ────────────────────────────────────────────────────────
// Each pedal defines its knob layout. Order matters — it controls display order.
//
// Knob fields:
//   id            — key into settings object
//   label         — display text
//   x             — SVG x position (0–132)
//   row           — 'top' | 'bottom' — maps to y=40 / y=95 (can be overridden with y)
//   y             — explicit SVG y position (overrides row)
//   labelPosition — 'below' (default) | 'above'
//   type          — 'knob' (default) | 'toggle'
//
// Pedal fields:
//   graphicType   — 'text' (default) | 'png' | 'label-box'
//   graphicPng    — path to PNG (for graphicType:'png'), e.g. '/pedals/file.png'
//   graphic       — text string (for graphicType:'text' or 'label-box')
//   knobColor     — outer knob fill (default #1c1c1c)
//   knobInnerColor — inner knob fill (default #2a2a2a)

export const PEDALS = {
  "1991": {
    name: "1991",
    brand: "Funny Little Boxes",
    color: "#e8155e",
    borderColor: "#c0104e",
    graphicType: "text",
    graphic: "1991",
    knobs: [
      { id: "gain1",  label: "Gain 1", row: "top",    x: 24  },
      { id: "gain2",  label: "Gain 2", row: "top",    x: 66  },
      { id: "volume", label: "Volume", row: "top",    x: 108 },
      { id: "bass",   label: "Bass",   row: "bottom", x: 24  },
      { id: "middle", label: "Middle", row: "bottom", x: 66  },
      { id: "treble", label: "Treble", row: "bottom", x: 108 },
    ],
  },
  "dirt": {
    name: "Dirt",
    brand: "Funny Little Boxes",
    color: "#e8620a",
    borderColor: "#c04d00",
    graphicType: "text",
    graphic: "DIRT",
    knobs: [
      { id: "gain",   label: "Gain",   row: "top",    x: 24  },
      { id: "volume", label: "Volume", row: "top",    x: 108 },
      { id: "bass",   label: "Bass",   row: "bottom", x: 24  },
      { id: "middle", label: "Middle", row: "bottom", x: 66  },
      { id: "treble", label: "Treble", row: "bottom", x: 108 },
    ],
  },
  "skeleton-key": {
    name: "Skeleton Key",
    brand: "Funny Little Boxes",
    color: "#d42b1e",
    borderColor: "#a01810",
    graphicType: "png",
    graphicPng: "/pedals/skeleton-key.png",
    knobs: [
      { id: "gain",   label: "Gain",   x: 26,  y: 52, labelPosition: "above" },
      { id: "tone",   label: "Tone",   x: 106, y: 52, labelPosition: "above" },
      { id: "volume", label: "Volume", x: 106, y: 98, labelPosition: "above" },
    ],
  },
  "scran": {
    name: "Scran",
    brand: "SoundLad Liverpool",
    color: "#f0f0f0",
    borderColor: "#cccccc",
    graphicType: "union-jack",
    knobColor: "#c8a84b",
    knobInnerColor: "#d4b055",
    knobOuterR: 15,
    knobInnerR: 11,
    knobStroke: "#a08030",
    knobTexture: true,
    knobIndicatorColor: "#111",
    knobLabelColor: "#fff",
    knobLabelOffset: 22,
    knobs: [
      { id: "thick",  label: "thick",  x: 24,  y: 42  },
      { id: "gain1",  label: "gain 1", x: 66,  y: 42  },
      { id: "gain2",  label: "gain 2", x: 108, y: 42  },
      { id: "treble", label: "treble", x: 24,  y: 100 },
      // toggle: settings value is "00s" or "90s"
      { id: "toggle", label: "Toggle", x: 66,  y: 100, type: "toggle" },
      { id: "volume", label: "volume", x: 108, y: 100 },
    ],
  },
};

// ─── TONE SETTINGS ────────────────────────────────────────────────────────────
// Format per song:
// "Band Name": {
//   "Song Title": {
//     pedals: [
//       { pedal: "1991", settings: { gain1: 75, gain2: 60, volume: 70, bass: 55, middle: 45, treble: 50 } }
//     ],
//     notes: "Optional text — pickup position, amp settings, etc."
//   }
// }
//
// Knob values: 0 = fully CCW, 50 = noon, 100 = fully CW
// Formula: rotate((pct - 50) * 2.7) degrees

export const TONE_SETTINGS = {
  "Pearl Jam": {
    "Even Flow": {
      pedals: [
        {
          pedal: "1991",
          settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 }
        }
      ],
      notes: "Bridge pickup. Amp fairly clean — the 1991 is doing the work."
    },
    "Black": {
      pedals: [
        {
          pedal: "1991",
          settings: { gain1: 85, gain2: 70, volume: 65, bass: 60, middle: 50, treble: 40 }
        }
      ],
      notes: "Neck pickup for the verse. Roll back volume knob slightly."
    },
  },
  "Alice in Chains": {
    "Down in a Hole": {
      pedals: [
        {
          pedal: "dirt",
          settings: { gain: 55, volume: 65, bass: 60, middle: 45, treble: 50 }
        }
      ],
      notes: "Bridge pickup. Keep gain modest for the clean-ish tone."
    },
  },
    "Queens Of The Stone Age": {
    "No One Knows": {
      pedals: [
        {
          pedal: "skeleton-key",
          settings: { gain: 55, tone: 25,volume: 65 }
        }
      ],
      notes: "Bridge pickup. Amp set on edge of breakup."
    },
  },
    "Oasis": {
    "Supersonic": {
      pedals: [
        {
          pedal: "scran",
          settings: { thick: 45, gain1: 100, gain2: 0, treble: 70, volume: 60, toggle: "90s"}
        }
      ],
      notes: "Bridge pickup. Amp set on edge of breakup."
    },
        "Rock 'N' Roll Star": {
      pedals: [
        {
          pedal: "scran",
          settings: { thick: 50, gain1: 50, gain2: 50, treble: 60, volume: 60, toggle: "90s"}
        }
      ],
      notes: "Bridge pickup. Amp set on edge of breakup."
    },
  },
};
