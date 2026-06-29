import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

interface AuthPortalProps {
  onSuccess?: () => void;
}

type AuthMode = 'login' | 'register';

const SPRING_SNAPPY = { type: 'spring', stiffness: 400, damping: 25 } as const;
const SPRING_SMOOTH = { type: 'spring', stiffness: 300, damping: 28 } as const;
const SPRING_BOUNCY = { type: 'spring', stiffness: 500, damping: 15 } as const;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: SPRING_BOUNCY 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: SPRING_SMOOTH 
  }
};

const AuthPortal: React.FC<AuthPortalProps> = ({ onSuccess }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form states
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleToggleMode = () => {
    setMode((prev) => (prev === 'login' ? 'register' : 'login'));
    setErrorMsg(null);
    setNim('');
    setPassword('');
    setName('');
    setEmail('');
  };

  const validateNim = (val: string) => {
    return /^\d*$/.test(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Basic validation
    if (mode === 'login') {
      if (!nim) {
        setErrorMsg('NIM tidak boleh kosong');
        return;
      }
      if (!password) {
        setErrorMsg('Password tidak boleh kosong');
        return;
      }
      if (nim !== '102022500174') {
        setErrorMsg('NIM tidak ditemukan. Silakan daftar akun terlebih dahulu.');
        return;
      }
    } else {
      if (!name || !nim || !email || !password) {
        setErrorMsg('Semua field wajib diisi');
        return;
      }
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      if (onSuccess) onSuccess();
    }, 1500);
  };

  const handleSsoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (onSuccess) onSuccess();
    }, 1500);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07070e] font-sans text-[#f5f3ff]">
      {/* Background Orbs & Mesh - Made larger and more vibrant */}
      <div className="absolute top-[-15%] left-[-15%] h-[600px] w-[600px] rounded-full bg-[#c084fc] opacity-40 blur-[140px] mix-blend-screen" />
      <div className="absolute right-[-15%] bottom-[-15%] h-[500px] w-[500px] rounded-full bg-[#22f5e0] opacity-35 blur-[120px] mix-blend-screen" />
      <div className="absolute top-[35%] left-[55%] h-[400px] w-[400px] rounded-full bg-[#ec4899] opacity-30 blur-[100px] mix-blend-screen" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDE2OCwgODUsIDI0NywgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNjBoNjBWMEgweiIvPjwvZz48L3N2Zz4=')] opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={SPRING_SMOOTH}
        className="relative z-10 w-full max-w-md p-8 sm:p-10"
      >
        {/* Glassmorphism Card - Made brighter with 2xl blur and 200 saturate */}
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_0_60px_rgba(168,85,247,0.25)] backdrop-blur-2xl backdrop-saturate-200">
          
          <motion.div 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_BOUNCY, delay: 0.1 }}
          >
            <h1 className="mb-2 bg-gradient-to-r from-[#c084fc] via-[#22f5e0] to-[#f472b6] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
              {mode === 'login' ? 'Selamat Datang' : 'Buat Akun Baru'}
            </h1>
            <p className="text-sm text-[#e2d5f8] font-medium">
              {mode === 'login' 
                ? 'Masuk ke portal akademik Zrqa-Acad' 
                : 'Bergabung dengan ekosistem digital Lab SI'}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {errorMsg && (
              <motion.div
                key="error"
                initial={{ opacity: 0, height: 0, scale: 0.9 }}
                animate={{ opacity: 1, height: 'auto', scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.9 }}
                transition={SPRING_BOUNCY}
                className="mb-6 rounded-xl border border-[#f87171]/50 bg-[#f87171]/20 p-3.5 text-sm font-medium text-[#fca5a5] shadow-[0_0_20px_rgba(248,113,113,0.3)] backdrop-blur-md"
              >
                {errorMsg}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={mode}>
            <motion.form
              key={mode}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {mode === 'register' && (
                <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#e2d5f8]">Nama Lengkap</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    transition={SPRING_BOUNCY}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 shadow-inner outline-none transition-all focus:border-[#a855f7] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    placeholder="Masukkan nama lengkap"
                  />
                </motion.div>
              )}

              <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#e2d5f8]">NIM</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={SPRING_BOUNCY}
                  type="text"
                  value={nim}
                  onChange={(e) => {
                    if (validateNim(e.target.value)) setNim(e.target.value);
                  }}
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 shadow-inner outline-none transition-all focus:border-[#22f5e0] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(34,245,224,0.4)]"
                  placeholder="Contoh: 102022500174"
                  inputMode="numeric"
                />
              </motion.div>

              {mode === 'register' && (
                <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#e2d5f8]">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    transition={SPRING_BOUNCY}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 shadow-inner outline-none transition-all focus:border-[#ec4899] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                    placeholder="email@student.telkomuniversity.ac.id"
                  />
                </motion.div>
              )}

              <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#e2d5f8]">Password</label>
                <div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    transition={SPRING_BOUNCY}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 pr-12 text-sm text-white placeholder-white/40 shadow-inner outline-none transition-all focus:border-[#a855f7] focus:bg-white/10 focus:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    placeholder="••••••••"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-[#22f5e0]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </motion.button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={SPRING_BOUNCY}
                  type="submit"
                  disabled={isLoading}
                  className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#06d6e0] bg-[length:200%_auto] px-4 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all hover:bg-[position:right_center] hover:shadow-[0_0_50px_rgba(34,245,224,0.6)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <span>{mode === 'login' ? 'Masuk' : 'Daftar Sekarang'}</span>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </AnimatePresence>

          <motion.div 
            className="my-7 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="text-xs font-bold tracking-widest text-white/50">ATAU</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_BOUNCY, delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              transition={SPRING_BOUNCY}
              onClick={handleSsoLogin}
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-4 py-3.5 text-sm font-bold text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              Masuk dengan SSO Telkom
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-8 text-center text-sm font-medium text-[#e2d5f8]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {mode === 'login' ? 'Belum punya akun? ' : 'Sudah punya akun? '}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToggleMode}
              className="font-bold text-[#22f5e0] underline decoration-[#22f5e0]/30 decoration-2 underline-offset-4 transition-all hover:text-[#06d6e0] hover:decoration-[#06d6e0] focus:outline-none"
            >
              {mode === 'login' ? 'Daftar di sini' : 'Masuk di sini'}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPortal;