import { SECURE_CONFIG } from '@/config/secure-config';

const SESSION_KEY = 'midi_plus_session';
const ENCRYPTION_KEY = 'mp_secure_2024';

const simpleEncrypt = (text) => {
  return btoa(text + ENCRYPTION_KEY);
};

const simpleDecrypt = (encrypted) => {
  try {
    const decrypted = atob(encrypted);
    if (decrypted.endsWith(ENCRYPTION_KEY)) {
      return decrypted.slice(0, -ENCRYPTION_KEY.length);
    }
    return null;
  } catch {
    return null;
  }
};

export const authService = {
  login: (username, password) => {
    const user = SECURE_CONFIG.users.find(
      u => u.username === username && u.password === password
    );
    
    if (user) {
      const sessionData = simpleEncrypt(JSON.stringify({ username, timestamp: Date.now() }));
      localStorage.setItem(SESSION_KEY, sessionData);
      return true;
    }
    return false;
  },
  
  logout: () => {
    localStorage.removeItem(SESSION_KEY);
  },
  
  isAuthenticated: () => {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) return false;
    
    const decrypted = simpleDecrypt(session);
    if (!decrypted) return false;
    
    try {
      const data = JSON.parse(decrypted);
      const hoursSinceLogin = (Date.now() - data.timestamp) / (1000 * 60 * 60);
      return hoursSinceLogin < 24;
    } catch {
      return false;
    }
  },
  
  getCurrentUser: () => {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) return null;
    
    const decrypted = simpleDecrypt(session);
    if (!decrypted) return null;
    
    try {
      const data = JSON.parse(decrypted);
      return data.username;
    } catch {
      return null;
    }
  }
};