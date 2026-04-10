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
// Structure: Band → Album → Song
//
// Single rig (one player / one setup):
// "Song Title": {
//   videoId: "xxxxxxx",   // YouTube video ID, or null
//   pedals: [ { pedal: "1991", settings: { gain1: 75, ... } } ],
//   notes: "Optional text."
// }
//
// Multiple rigs (e.g. rhythm + lead, or different players):
// "Song Title": {
//   videoId: "xxxxxxx",
//   tones: [
//     { label: "Rhythm", pedals: [...], notes: "..." },
//     { label: "Lead",   pedals: [...], notes: "..." },
//   ]
// }
//
// Knob values: 0 = fully CCW, 50 = noon, 100 = fully CW
// Formula: rotate((pct - 50) * 2.7) degrees
// For scran pedal: include toggle: "90s" or toggle: "00s" in settings
// To add a new song: find band/album, add entry, npm run dev to preview

export const TONE_SETTINGS = {
  "Pearl Jam": {
    "Ten (1991)": {
      "Once": {
        videoId: "3ungPCQ1KGY",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Even Flow": {
        videoId: "KJ6xJR2-ilQ",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 85, gain2: 60, volume: 65, bass: 50, middle: 55, treble: 50 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Alive": {
        videoId: "UNwVEcMl6Cw",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 100, gain2: 50, volume: 70, bass: 50, middle: 50, treble: 50 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 100, gain2: 50, volume: 70, bass: 50, middle: 50, treble: 50 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Why Go": {
        videoId: "3p0rkrl1cak",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Black": {
        videoId: "lb24SmBHRDI",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 85, gain2: 70, volume: 65, bass: 60, middle: 50, treble: 40 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 85, gain2: 70, volume: 65, bass: 60, middle: 50, treble: 40 } },
              { pedal: "dirt",  settings: { gain: 60, volume: 60, bass: 60, middle: 50, treble: 40 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Jeremy": {
        videoId: "5P7zH8Eg91I",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Oceans": {
        videoId: "8qOd-TU1a_Q",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Porch": {
        videoId: "zKDDGntSdUs",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 50, gain2: 50, volume: 70, bass: 50, middle: 50, treble: 50 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Garden": {
        videoId: "jOf98kTkIpw",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Deep": {
        videoId: "H2BwPMsTOUI",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Release": {
        videoId: "jeVvtGiXobU",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
    },
    "Vs. (1993)": {
      "Go": {
        videoId: "KjNpdfdECK4",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Animal": {
        videoId: "_NrXBi4dQ_E",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Daughter": {
        videoId: "22Q99YrS0yM",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Glorified G": {
        videoId: "cx7kLHcC_bc",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Rhythm/Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 0, gain2: 50, volume: 70, bass: 50, middle: 50, treble: 50 } },
              { pedal: "1991", settings: { gain1: 100, gain2: 100, volume: 70, bass: 50, middle: 50, treble: 50 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Dissident": {
        videoId: "Dc5nyNJfo0w",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 0, gain2: 50, volume: 70, bass: 50, middle: 50, treble: 50 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "W.M.A.": {
        videoId: "wfTFMlR7lUc",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Blood": {
        videoId: "rpw88a5L9D4",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Rearviewmirror": {
        videoId: "L52z07rrieU",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Rats": {
        videoId: "K3_nc1bvARY",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Elderly Woman": {
        videoId: "ciCNE8lZPLg",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Leash": {
        videoId: "z3rVxdgZsck",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
      "Indifference": {
        videoId: "F9NfCtJkizU",
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 90, gain2: 50, volume: 70, bass: 55, middle: 45, treble: 54 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
    },
    "Yield (1998)": {
      "In Hiding": {
        videoId: null,
        tones: [
          {
            label: "Stone Gossard — Rhythm",
            pedals: [{ pedal: "1991", settings: { gain1: 0, gain2: 20, volume: 65, bass: 50, middle: 50, treble: 50 } }],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
          {
            label: "Mike McCready — Lead",
            pedals: [
              { pedal: "1991", settings: { gain1: 0, gain2: 20, volume: 65, bass: 50, middle: 50, treble: 50 } },
              { pedal: "dirt",  settings: { gain: 65, volume: 60, bass: 55, middle: 50, treble: 45 } },
            ],
            notes: "Bridge pickup. Amp set on very edge of breakup.",
          },
        ],
      },
    },
  },
  "Alice in Chains": {
    "Dirt (1992)": {
      "Down in a Hole": {
        videoId: null,
        pedals: [{ pedal: "dirt", settings: { gain: 55, volume: 65, bass: 60, middle: 45, treble: 50 } }],
        notes: "Bridge pickup. Keep gain modest for the clean-ish tone.",
      },
    },
  },
  "Queens Of The Stone Age": {
    "Songs for the Deaf (2002)": {
      "No One Knows": {
        videoId: null,
        pedals: [{ pedal: "skeleton-key", settings: { gain: 55, tone: 25, volume: 65 } }],
        notes: "Bridge pickup. Amp set on edge of breakup.",
      },
    },
  },
  "Oasis": {
    "Definitely Maybe (1994)": {
      "Supersonic": {
        videoId: null,
        pedals: [{ pedal: "scran", settings: { thick: 45, gain1: 100, gain2: 0, treble: 70, volume: 60, toggle: "90s" } }],
        notes: "Bridge pickup. Amp set on edge of breakup.",
      },
      "Rock 'N' Roll Star": {
        videoId: null,
        pedals: [{ pedal: "scran", settings: { thick: 50, gain1: 50, gain2: 50, treble: 60, volume: 60, toggle: "90s" } }],
        notes: "Bridge pickup. Amp set on edge of breakup.",
      },
    },
  },
};
