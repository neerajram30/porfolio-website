import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, Cpu, Terminal, Zap, Code2 } from 'lucide-react';

const particles = Array.from({ length: 24 }, (_, i) => ({
    id: `particle-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
}));

const loadingTelemetry = [
    { threshold: 0, text: 'INITIALIZING SYSTEM CORE' },
    { threshold: 20, text: 'FETCHING ASSETS & COMPONENT TREE' },
    { threshold: 45, text: 'COMPILING SHADERS & ANIMATIONS' },
    { threshold: 70, text: 'OPTIMIZING INTERACTIVE VIEWPORT' },
    { threshold: 90, text: 'PREPARING USER EXPERIENCE' },
    { threshold: 100, text: 'SYSTEM READY' },
];

function Loader() {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('INITIALIZING SYSTEM CORE');
    const [overdrive, setOverdrive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const increment = overdrive ? Math.random() * 25 + 10 : Math.random() * 12 + 5;
                const nextProgress = Math.min(prev + increment, 100);
                
                const matchedStep = [...loadingTelemetry]
                    .reverse()
                    .find(step => nextProgress >= step.threshold);
                if (matchedStep) {
                    setStatusText(matchedStep.text);
                }
                
                return nextProgress;
            });
        }, 180);

        return () => clearInterval(interval);
    }, [overdrive]);

    const handleEmblemClick = () => {
        setOverdrive(true);
        setTimeout(() => {
            setOverdrive(false);
        }, 1200);
    };

    return (
        <motion.div 
            className="relative h-screen w-full flex flex-col justify-center items-center bg-[#080C14] text-slate-100 overflow-hidden select-none bg-grid-pattern"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Ambient Background Radial Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

            {/* Ambient Floating Dust Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full bg-cyan-400/60"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                        }}
                        animate={{
                            y: ['0px', '-40px', '0px'],
                            opacity: [0.1, 0.7, 0.1],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Main Interactive Loader Container */}
            <motion.div 
                className="relative z-10 flex flex-col items-center max-w-md w-full px-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                {/* Futuristic Central SVG Emblem */}
                <div className="relative flex items-center justify-center mb-10 cursor-pointer"
                     onClick={handleEmblemClick}
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Outer Rotating Concentric Ring 1 */}
                    <motion.div 
                        className="absolute w-36 h-36 rounded-full border border-indigo-500/30 border-t-indigo-400 border-r-cyan-400 shadow-[0_0_25px_rgba(99,102,241,0.25)]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: overdrive ? 1.5 : 8, repeat: Infinity, ease: 'linear' }}
                    />
                    
                    {/* Outer Rotating Concentric Ring 2 (Counter direction) */}
                    <motion.div 
                        className="absolute w-44 h-44 rounded-full border border-dashed border-cyan-500/20 border-b-emerald-400/60"
                        animate={{ rotate: -360 }}
                        transition={{ duration: overdrive ? 2 : 12, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Outer Pulse Halo */}
                    <motion.div 
                        className="absolute w-28 h-28 rounded-full bg-indigo-500/20 blur-xl"
                        animate={overdrive ? {
                            scale: [1, 1.6, 1],
                            opacity: [0.4, 0.9, 0.4],
                        } : {
                            scale: isHovered ? [1, 1.25, 1] : 1,
                            opacity: isHovered ? 0.6 : 0.3,
                        }}
                        transition={{ duration: overdrive ? 0.4 : 1.5, repeat: overdrive ? Infinity : 0 }}
                    />

                    {/* Central Interactive Monogram Badge */}
                    <motion.div 
                        className="relative w-24 h-24 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl overflow-hidden group"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        animate={overdrive ? {
                            boxShadow: [
                                '0 0 20px rgba(99,102,241,0.4)',
                                '0 0 40px rgba(6,182,212,0.8)',
                                '0 0 20px rgba(99,102,241,0.4)'
                            ]
                        } : {}}
                    >
                        {/* Shimmer sweep line */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                            animate={{ translateX: ['100%', '-100%'] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        />

                        {/* Monogram Icon */}
                        <div className="relative z-10 flex items-center justify-center">
                            <Code2 className="w-9 h-9 text-indigo-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                        </div>
                        
                        <span className="relative z-10 text-[10px] font-mono tracking-widest text-slate-400 mt-1 uppercase font-bold">
                            {overdrive ? 'TURBO' : 'DEV.IO'}
                        </span>
                    </motion.div>
                </div>

                {/* Overdrive Notification Tag */}
                <AnimatePresence>
                    {overdrive && (
                        <motion.div
                            initial={{ opacity: 0, y: -5, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -5, scale: 0.9 }}
                            className="mb-4 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 shadow-glow-cyan"
                        >
                            <Zap className="w-3.5 h-3.5 animate-bounce text-emerald-400" />
                            <span>HYPER-DRIVE BOOST ENGAGED</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Progress Percentage Display */}
                <div className="flex items-baseline justify-between w-full mb-3 px-1">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-indigo-400" />
                        <span className="text-xs font-mono text-slate-400 tracking-wider">SYSTEM LOADING</span>
                    </div>
                    <motion.div 
                        className="text-2xl font-bold font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400"
                        key={Math.floor(progress)}
                    >
                        {String(Math.floor(progress)).padStart(2, '0')}
                        <span className="text-sm text-cyan-400/80 font-normal">%</span>
                    </motion.div>
                </div>

                {/* Glassmorphic Progress Bar Container */}
                <div className="relative w-full h-2.5 bg-slate-900/90 rounded-full p-0.5 border border-white/10 backdrop-blur-md shadow-inner overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full relative"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        {/* Leading Glow Head */}
                        <div className="absolute right-0 top-0 bottom-0 w-3 bg-white rounded-full shadow-[0_0_12px_#fff,0_0_20px_#06b6d4] opacity-80" />
                    </motion.div>
                </div>

                {/* Telemetry Status Log */}
                <div className="mt-4 w-full flex items-center justify-between text-xs font-mono text-slate-400 bg-slate-900/50 border border-white/5 rounded-lg px-3 py-2 backdrop-blur-sm">
                    <div className="flex items-center gap-2 overflow-hidden">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                        <motion.span 
                            key={statusText}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            className="truncate text-slate-300 font-medium"
                        >
                            {statusText}
                        </motion.span>
                    </div>
                    <Cpu className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-2" />
                </div>

                {/* Interactive Prompt Hint */}
                <p className="mt-6 text-[11px] font-mono text-slate-500 text-center flex items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Click core emblem to boost loading speed</span>
                </p>
            </motion.div>
        </motion.div>
    );
}

export default Loader;

