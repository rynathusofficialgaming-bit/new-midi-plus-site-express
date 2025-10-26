import React from 'react';
import { motion } from 'framer-motion';
import { Music2, Zap, Waves, Radio } from 'lucide-react';
import { midiService } from '@/services/midi-service';

const genreIcons = {
  "Hip Hop": Music2,
  "Trap": Zap,
  "Lo-Fi": Waves,
  "House": Radio,
  "Techno": Zap,
  "Drum & Bass": Music2,
  "Ambient": Waves,
  "Pop": Radio,
  "R&B": Music2,
  "EDM": Zap
};

const GenreSelection = ({ onSelect }) => {
  const genres = midiService.getAvailableGenres();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Choose Your Genre</h2>
        <p className="text-slate-400">Select the style of MIDI you want to generate</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {genres.map((genre, index) => {
          const Icon = genreIcons[genre] || Music2;
          return (
            <motion.button
              key={genre}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(genre)}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all group"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all">
                  <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <span className="text-white font-semibold">{genre}</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default GenreSelection;