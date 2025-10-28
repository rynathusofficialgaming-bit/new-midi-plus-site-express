import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { authService } from '@/services/auth-service';
import { APP_CONFIG } from '@/config/app-config';
import LoginScreen from '@/components/LoginScreen';
import MaintenanceScreen from '@/components/MaintenanceScreen';
import MidiGenerator from '@/components/MidiGenerator';
import ThemeEffects from '@/components/ThemeEffects';
import DevToolsBlocker from '@/components/DevToolsBlocker';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    try {
      // Check if authService exists and is valid
      if (!authService || typeof authService.isAuthenticated !== 'function') {
        throw new Error('authService is not properly initialized.');
      }

      const result = authService.isAuthenticated();
      setIsAuthenticated(result);
    } catch (err) {
      console.error('Authentication check failed:', err);
      setErrorMessage(err.message);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = (success) => {
    setIsAuthenticated(success);
  };

  const handleLogout = () => {
    try {
      authService.logout?.();
    } catch (err) {
      console.warn('Logout failed:', err);
    }
    setIsAuthenticated(false);
  };

  // -----------------------------
  // Prevent blank screens
  // -----------------------------

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
        <p className="text-lg animate-pulse">Loading MIDI PLUS...</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-red-400">
        <h2 className="text-2xl font-bold mb-2">App Error</h2>
        <p className="text-center text-sm max-w-md mb-4">{errorMessage}</p>
        <p className="text-xs opacity-70">Check the console for details.</p>
      </div>
    );
  }

  const AppContent = () => {
    // Maintenance mode check
    if (APP_CONFIG.maintenance.enabled) {
      return (
        <>
          <Helmet>
            <title>MIDI PLUS - Maintenance</title>
            <meta
              name="description"
              content="MIDI PLUS is currently under maintenance"
            />
          </Helmet>
          <MaintenanceScreen reason={APP_CONFIG.maintenance.reason} />
        </>
      );
    }

    // Main app flow
    return (
      <>
        <Helmet>
          <title>MIDI PLUS - AI MIDI Generator</title>
          <meta
            name="description"
            content="Generate professional MIDI files with AI technology"
          />
        </Helmet>

        <ThemeEffects theme={APP_CONFIG.theme.current} />

        {!isAuthenticated ? (
          <LoginScreen onLogin={handleLogin} />
        ) : (
          <MidiGenerator onLogout={handleLogout} />
        )}

        <Toaster />
      </>
    );
  };

  return (
    <DevToolsBlocker>
      <AppContent />
    </DevToolsBlocker>
  );
}

export default App;
