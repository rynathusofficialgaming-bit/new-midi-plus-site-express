import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock } from 'lucide-react';

const MaintenanceScreen = ({ reason }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          className="inline-block mb-8"
        >
          <Wrench className="w-24 h-24 text-yellow-500" />
        </motion.div>

        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Under Maintenance
        </h1>

        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 mb-6">
          <p className="text-xl text-slate-300 mb-4">{reason}</p>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Clock className="w-5 h-5" />
            <span>We'll be back soon!</span>
          </div>
        </div>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-500"
        >
          Thank you for your patience
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MaintenanceScreen;