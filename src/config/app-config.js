export const APP_CONFIG = {
  maintenance: {
    enabled: false,
    reason: "We're upgrading our systems to bring you even better MIDI files! We'll be back shortly."
  },

  purchaseUrl: "https://lunatools.mysellauth.com/product/luna-account-key-upgrade-lifetime",

  security: {
    devtoolsBlocker: {
      enabled: true,
      redirectUrl: "https://www.google.com"
    }
  },
  
  theme: {
    current: "halloween",
    available: ["default", "christmas", "halloween"]
  },
  
  generation: {
    minTime: 6000,
    maxTime: 12000,
    fakeErrorEnabled: true,
    fakeErrorChance: 0.2
  },
  
  genres: {
    "Hip Hop": { enabled: false },
    "Trap": { enabled: false },
    "Lo-Fi": { enabled: false },
    "House": { enabled: true },
    "Techno": { enabled: false },
    "Drum & Bass": { enabled: false },
    "Ambient": { enabled: false },
    "Pop": { enabled: false },
    "R&B": { enabled: false },
    "EDM": { enabled: false }
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
