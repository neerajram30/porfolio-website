import { MoonLoader, PulseLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Loader() {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing...');
    const [spinnerClicked, setSpinnerClicked] = useState(false);
    const [spinnerSize, setSpinnerSize] = useState(40);

    const loadingSteps = [
        'Initializing...',
        'Loading components...',
        'Setting up animations...',
        'Almost ready...',
        'Welcome!'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + Math.random() * 15;
                const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
                setLoadingText(loadingSteps[Math.min(stepIndex, loadingSteps.length - 1)]);
                return Math.min(newProgress, 100);
            });
        }, 300);

        return () => clearInterval(interval);
    }, [loadingSteps]);

    const handleSpinnerClick = () => {
        setSpinnerClicked(true);
        setSpinnerSize(prev => prev === 40 ? 60 : 40);
        
        setTimeout(() => {
            setSpinnerClicked(false);
        }, 500);
    };

    return (
        <div className='h-screen flex flex-col w-full justify-center items-center bg-gradient-to-br from-[#161d27] via-[#1a2332] to-[#0e131a]'>
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-hcolor rounded-full"
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            scale: [0, 1, 0],
                            opacity: [0, 0.8, 0],
                            boxShadow: [
                                '0 0 0px 0px rgba(100, 111, 212, 0)',
                                '0 0 12px 6px rgba(100, 111, 212, 0.7)',
                                '0 0 0px 0px rgba(100, 111, 212, 0)',
                            ],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <motion.div 
                className="flex flex-col items-center z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="cursor-pointer relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSpinnerClick}
                    animate={spinnerClicked ? {
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full bg-hcolor opacity-30 blur-lg"
                        animate={spinnerClicked ? {
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3],
                        } : {}}
                        transition={{ duration: 0.5 }}
                    />
                    <MoonLoader size={spinnerSize} color='#646FD4' />
                </motion.div>

                {spinnerClicked && (
                    <motion.p
                        className="text-hcolor text-xs mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        ✨ Nice click! ✨
                    </motion.p>
                )}

                <div className="w-64 h-2 bg-gray-700 rounded-full mt-8 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-hcolor to-btn rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                <motion.div 
                    className="mt-4 text-hcolor font-semibold"
                    key={Math.floor(progress)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {Math.floor(progress)}%
                </motion.div>

                <motion.div 
                    className='mt-4 flex items-center'
                    key={loadingText}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className='text-hcolor text-sm mr-2'>{loadingText}</span>
                    <PulseLoader size={5} color='#646FD4' />
                </motion.div>

                <motion.p 
                    className="text-xs text-gray-400 mt-8 text-center max-w-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    Click the spinner above for a surprise! ✨
                </motion.p>
            </motion.div>
        </div>
    );
}

export default Loader;
