import { SECURE_CONFIG } from '@/config/secure-config';
import { APP_CONFIG } from '@/config/app-config';

export const midiService = {
  getMidiLink: (genre, key) => {
    const genreLinks = SECURE_CONFIG.midiLinks[genre];
    if (!genreLinks) return null;
    
    const keyLinks = genreLinks[key];
    if (!keyLinks || keyLinks.length === 0) return null;
    
    // Randomly select one link from the array
    const randomIndex = Math.floor(Math.random() * keyLinks.length);
    return keyLinks[randomIndex];
  },
  
  getAvailableGenres: () => {
    return Object.keys(APP_CONFIG.genres).filter(
      genre => APP_CONFIG.genres[genre].enabled
    );
  },
  
  shouldShowFakeError: () => {
    if (!APP_CONFIG.generation.fakeErrorEnabled) return false;
    return Math.random() < APP_CONFIG.generation.fakeErrorChance;
  },
  
  getRandomGenerationTime: () => {
    const { minTime, maxTime } = APP_CONFIG.generation;
    return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  },
  
  getRandomLoadingMessage: () => {
    const messages = APP_CONFIG.loadingMessages;
    return messages[Math.floor(Math.random() * messages.length)];
  }
};