import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GenreSelection from '@/components/steps/GenreSelection';
import KeySelection from '@/components/steps/KeySelection';
import GenerationProcess from '@/components/steps/GenerationProcess';
import DownloadReady from '@/components/steps/DownloadReady';

const MidiGenerator = ({ onLogout }) => {
  const [step, setStep] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedKey, setSelectedKey] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setStep(2);
  };

  const handleKeySelect = (key) => {
    setSelectedKey(key);
    setStep(3);
  };

  const handleGenerationComplete = (link) => {
    setDownloadLink(link);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedGenre(null);
    setSelectedKey(null);
    setDownloadLink(null);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            MIDI PLUS
          </motion.h1>
          <Button
            onClick={onLogout}
            variant="outline"
            className="border-slate-700 hover:bg-slate-800"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <GenreSelection key="genre" onSelect={handleGenreSelect} />
          )}
          {step === 2 && (
            <KeySelection
              key="key"
              genre={selectedGenre}
              onSelect={handleKeySelect}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <GenerationProcess
              key="generation"
              genre={selectedGenre}
              musicKey={selectedKey}
              onComplete={handleGenerationComplete}
            />
          )}
          {step === 4 && (
            <DownloadReady
              key="download"
              genre={selectedGenre}
              musicKey={selectedKey}
              downloadLink={downloadLink}
              onReset={handleReset}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MidiGenerator;