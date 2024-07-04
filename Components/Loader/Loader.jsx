import React, { useEffect, useState } from 'react'
// import { motion, path } from 'framer-motion';
import { motion } from 'framer-motion';
function Loader(props) {
    const { name } = props;
    // const [isRevealed, setIsRevealed] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => setIsDrawing(true), 1000); // Adjust delay as needed
        return () => clearTimeout(timeoutId);
    }, []);

    const letters = name.split('');
    const text = "Neeraj"; // The text to animate
    // const paths = letters.map((letter) => path.glyph(letter));
    // const strokeVariants = {
    //     hidden: { strokeDasharray: [100, 100], strokeDashoffset: 100 },
    //     visible: {
    //         strokeDasharray: [0, 100],
    //         strokeDashoffset: 0,
    //         transition: { duration: 1, ease: 'easeOut' },
    //     },
    // };

    const textVariants = {
        hidden: {
            strokeDasharray: "0 100",
            opacity: 0
        },
        visible: {
            strokeDasharray: "100 0",
            opacity: 1,
            transition: {
                duration: 3,
                ease: "easeInOut",
            },
            stroke:'#646FD4'
        }
    };
    const fillVariants = {
        hidden: { fill: "transparent" },
        visible: {
            fill: "#646FD4",
            transition: {
                delay: 3,
                duration: 5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className='bg-white h-screen'>

            <svg viewBox="0 0 800 200" className="w-full h-full">
                <defs>
                    <mask id="text-mask">
                        <motion.text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            fontSize="40"
                            stroke="transparent"
                            fill="transparent"
                            strokeWidth="0.5"
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            {text}
                        </motion.text>
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill="#000" mask="url(#text-mask)" />
                <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    fontSize="40"
                    stroke="transparent"
                    fill="transparent"
                    strokeWidth="1"
                    initial="hidden"
                    animate="visible"
                    variants={fillVariants}
                >
                    {text}
                </motion.text>
            </svg>
        </div>
    );
}

export default Loader

