import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeEffects = ({ theme }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (theme === 'christmas' || theme === 'halloween') {
      const particleCount = theme === 'christmas' ? 50 : 30;
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
        size: theme === 'christmas' ? 10 + Math.random() * 20 : 20 + Math.random() * 30
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [theme]);

  if (theme === 'default') return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {theme === 'christmas' && (
        <>
          <style>{`
            body {
              background: linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a) !important;
            }
            .snowflake {
              color: #fff;
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            }
          `}</style>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute snowflake"
              style={{
                left: `${particle.x}%`,
                fontSize: `${particle.size}px`,
                top: '-20px'
              }}
              animate={{
                y: ['0vh', '110vh'],
                x: [0, Math.sin(particle.id) * 50, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              ❄
            </motion.div>
          ))}
        </>
      )}

      {theme === 'halloween' && (
        <>
          <style>{`
            body {
              background: linear-gradient(to bottom right, #1a0a2e, #2d1b4e, #0f0519) !important;
            }
          `}</style>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute"
              style={{
                left: `${particle.x}%`,
                fontSize: `${particle.size}px`,
                top: '-50px'
              }}
              animate={{
                y: ['0vh', '110vh'],
                x: [0, Math.sin(particle.id * 2) * 100, 0],
                rotate: [0, 360, 0]
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]">
                {['🎃', '👻', '🕷️', '🦇'][Math.floor(Math.random() * 4)]}
              </span>
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-orange-900/20 pointer-events-none" />
        </>
      )}
    </div>
  );
};

export default ThemeEffects;