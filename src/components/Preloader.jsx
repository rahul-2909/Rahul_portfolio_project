import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-white z-[100000] flex flex-col items-center justify-center bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
        >
          {/* Background Blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#ff2a2a]/10 blur-3xl" />

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-6xl md:text-8xl font-black tracking-tighter"
            >
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Rahul
              </span>
              <span className="text-[#ff2a2a]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-black/40"
            >
              Full Stack Developer
            </motion.p>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 w-40"
          >
            <div className="h-[2px] bg-black/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-red-500 to-orange-500 origin-left"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
