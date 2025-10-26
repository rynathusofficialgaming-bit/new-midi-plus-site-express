import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DownloadReady = ({ genre, musicKey, downloadLink, onReset }) => {
  const handleDownload = () => {
    if (downloadLink) {
      window.location.href = downloadLink;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[60vh]"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="mb-8"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl"
          />
          <CheckCircle className="w-24 h-24 text-green-500 relative z-10" />
        </div>
      </motion.div>

      <h2 className="text-4xl font-bold text-white mb-4">Your MIDI is Ready! 🎉</h2>
      <p className="text-slate-400 mb-8 text-center max-w-md">
        Your custom MIDI file has been generated successfully and is ready to download.
      </p>

      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8 w-full max-w-md">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Genre:</span>
            <span className="text-blue-400 font-semibold">{genre}</span>
          </div>
          <div className="h-px bg-slate-700/50" />
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Key:</span>
            <span className="text-purple-400 font-semibold">{musicKey}</span>
          </div>
          <div className="h-px bg-slate-700/50" />
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Format:</span>
            <span className="text-green-400 font-semibold">MIDI (.mid)</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={handleDownload}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg rounded-full"
        >
          <Download className="w-5 h-5 mr-3" />
          Download MIDI
        </Button>
        <Button
          onClick={onReset}
          variant="outline"
          className="border-slate-700 hover:bg-slate-800 px-8 py-6 text-lg rounded-full"
        >
          <RotateCcw className="w-5 h-5 mr-3" />
          Generate Another
        </Button>
      </div>
    </motion.div>
  );
};

export default DownloadReady;