import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Loader2, AlertCircle } from 'lucide-react';
import { midiService } from '@/services/midi-service';
import { Button } from '@/components/ui/button';

const GenerationProcess = ({ genre, musicKey, onComplete }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [showError, setShowError] = useState(false);
  const [isPreparing, setIsPreparing] = useState(true);

  const willError = useMemo(() => midiService.shouldShowFakeError(), []);

  useEffect(() => {
    let messageTimer, progressTimer, completionTimer, errorTimeout;

    if (willError) {
      errorTimeout = setTimeout(() => {
        setShowError(true);
        setIsPreparing(false);
      }, 2000 + Math.random() * 1500);
    } else {
      const generationTime = midiService.getRandomGenerationTime();
      const messageInterval = 800;
      const progressInterval = 50;
      
      setIsPreparing(false);

      messageTimer = setInterval(() => {
        setCurrentMessage(midiService.getRandomLoadingMessage());
      }, messageInterval);

      progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + (100 / (generationTime / progressInterval));
        });
      }, progressInterval);

      completionTimer = setTimeout(() => {
        const link = midiService.getMidiLink(genre, musicKey);
        onComplete(link);
      }, generationTime);
    }

    return () => {
      clearInterval(messageTimer);
      clearInterval(progressTimer);
      clearTimeout(completionTimer);
      clearTimeout(errorTimeout);
    };
  }, [genre, musicKey, onComplete, willError]);

  const handleRetry = () => {
    window.location.reload();
  };

  if (showError) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh]"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <AlertCircle className="w-24 h-24 text-red-500" />
        </motion.div>
        <h2 className="text-3xl font-bold text-white mb-4">Oops! Something went wrong</h2>
        <p className="text-slate-400 mb-8 text-center max-w-md">
          We encountered an issue while generating your MIDI file. Please try again.
        </p>
        <Button
          onClick={handleRetry}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          Try Again
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[60vh]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="mb-8"
      >
        <Loader2 className="w-20 h-20 text-blue-500" />
      </motion.div>

      <motion.h2
        key={currentMessage || 'Preparing generation...'}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-2xl font-semibold text-white mb-8 text-center"
      >
        {isPreparing ? 'Preparing generation...' : currentMessage}
      </motion.h2>

      <div className="w-full max-w-md">
        <div className="bg-slate-800/50 rounded-full h-3 overflow-hidden border border-slate-700/50">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-center text-slate-400 mt-4">{Math.round(progress)}%</p>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-6 py-3">
          <span className="text-slate-300">Genre:</span>
          <span className="text-blue-400 font-semibold">{genre}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">Key:</span>
          <span className="text-purple-400 font-semibold">{musicKey}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GenerationProcess;