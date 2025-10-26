export const APP_CONFIG = {
  maintenance: {
    enabled: false,
    reason: "We're upgrading our systems to bring you even better MIDI files! We'll be back shortly."
  },

  security: {
    devtoolsBlocker: {
      enabled: true,
      redirectUrl: "https://www.google.com"
    }
  },
  
  theme: {
    current: "christmas",
    available: ["default", "christmas", "halloween"]
  },
  
  generation: {
    minTime: 3000,
    maxTime: 8000,
    fakeErrorEnabled: false,
    fakeErrorChance: 0.5
  },
  
  genres: {
    "Hip Hop": { enabled: true },
    "Trap": { enabled: true },
    "Lo-Fi": { enabled: true },
    "House": { enabled: false },
    "Techno": { enabled: true },
    "Drum & Bass": { enabled: true },
    "Ambient": { enabled: true },
    "Pop": { enabled: true },
    "R&B": { enabled: true },
    "EDM": { enabled: true }
  },
  
  keys: [
    "A Major - F# Minor",
    "Ab Major - F Minor",
    "B Major - G# Minor",
    "Bb Major - G Minor",
    "C Major - A Minor",
    "D Major - B Minor",
    "Db Major - Bb Minor",
    "E Major - C# Minor",
    "Eb Major - C Minor",
    "F Major - D Minor",
    "G Major - E Minor",
    "Gb Major - Eb Minor"
  ],
  
  loadingMessages: [
    "🎵 Analyzing musical patterns...",
    "🎹 Crafting the perfect melody...",
    "🎼 Generating chord progressions...",
    "🎶 Thinking of ideas...",
    "✨ Making the flow smooth...",
    "🔥 Adding that special sauce...",
    "🎧 Fine-tuning the rhythm...",
    "💫 Polishing your MIDI file...",
    "🚀 Almost there...",
    "🎨 Creating musical magic..."
  ]
};

export const API_ENDPOINT = '/api';