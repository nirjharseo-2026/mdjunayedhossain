import { motion } from 'motion/react';

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
  hideCursor?: boolean;
}

export function Typewriter({ text, delay = 0, className = '', hideCursor = false }: TypewriterProps) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, display: 'none' },
    visible: { opacity: 1, display: 'inline' },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
      {!hideCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "linear"
          }}
          className="inline-block w-[0.1em] h-[1em] bg-current ml-1 align-baseline translate-y-[0.1em]"
        />
      )}
    </motion.span>
  );
}
