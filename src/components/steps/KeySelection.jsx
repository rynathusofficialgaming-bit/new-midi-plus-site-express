import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_CONFIG } from '@/config/app-config';

const KeySelection = ({ genre, onSelect, onBack }) => {
  const keys = APP_CONFIG.keys;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <Button
        onClick={onBack}
        variant="ghost"
        className="mb-4 text-slate-400 hover:text-white"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Genres
      </Button>

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
          <Music className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 font-semibold">{genre}</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Select Your Key</h2>
        <p className="text-slate-400">Choose the musical key for your MIDI file</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {keys.map((key, index) => (
          <motion.button
            key={key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.03 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(key)}
            className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 hover:border-purple-500/50 transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold text-lg">{key}</span>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-600/30 transition-all">
                <Music className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default KeySelection;