import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Lock, User, ShoppingCart } from 'lucide-react';
import { authService } from '@/services/auth-service';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { APP_CONFIG } from '@/config/app-config';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const success = authService.login(username, password);
      
      if (success) {
        toast({
          title: "Welcome to MIDI PLUS! 🎵",
          description: "Login successful",
        });
        onLogin(true);
      } else {
        toast({
          title: "Access Denied",
          description: "Invalid username or password",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 800);
  };

  const handlePurchase = () => {
    if (APP_CONFIG.purchaseUrl) {
      window.location.href = APP_CONFIG.purchaseUrl;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 p-8">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
              <Music className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              MIDI PLUS
            </h1>
            <p className="text-slate-400">AI-Powered MIDI Generation</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Authenticating...' : 'Login'}
            </Button>
          </form>

          {APP_CONFIG.purchaseUrl && (
            <>
              <div className="relative flex py-5 items-center">
                  <div className="flex-grow border-t border-slate-700"></div>
                  <span className="flex-shrink mx-4 text-slate-500">Or</span>
                  <div className="flex-grow border-t border-slate-700"></div>
              </div>
  
              <Button
                onClick={handlePurchase}
                variant="outline"
                className="w-full bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-semibold py-3 rounded-lg transition-all"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Purchase Access
              </Button>
            </>
          )}

          <div className="mt-6 text-center text-sm text-slate-400">
            <p>Secure access to premium MIDI generation</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginScreen;
