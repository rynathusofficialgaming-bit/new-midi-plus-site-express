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

  useEffect(() => {
    setIsAuthenticated(authService.isAuthenticated());
    setIsLoading(false);
  }, []);

  const handleLogin = (success) => {
    setIsAuthenticated(success);
  };

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return null;
  }

  const AppContent = () => {
    if (APP_CONFIG.maintenance.enabled) {
      return (
        <>
          <Helmet>
            <title>MIDI PLUS - Maintenance</title>
            <meta name="description" content="MIDI PLUS is currently under maintenance" />
          </Helmet>
          <MaintenanceScreen reason={APP_CONFIG.maintenance.reason} />
        </>
      );
    }

    return (
      <>
        <Helmet>
          <title>MIDI PLUS - AI MIDI Generator</title>
          <meta name="description" content="Generate professional MIDI files with AI technology" />
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
