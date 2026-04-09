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
// type: 'top' | 'bottom' — which row the knob is in
// x: SVG x position within the pedal viewBox (0–132)

export const PEDALS = {
  "1991": {
    name: "1991",
    brand: "Funny Little Boxes",
    color: "#e8155e",
    borderColor: "#c0104e",
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
    graphic: "DIRT",
    knobs: [
      { id: "gain",   label: "Gain",   row: "top",    x: 24  },
      { id: "volume", label: "Volume", row: "top",    x: 108 },
      { id: "bass",   label: "Bass",   row: "bottom", x: 24  },
      { id: "middle", label: "Middle", row: "bottom", x: 66  },
      { id: "treble", label: "Treble", row: "bottom", x: 108 },
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
      notes: "Neck pickup. Keep gain modest for the clean-ish tone."
    },
  },
};
