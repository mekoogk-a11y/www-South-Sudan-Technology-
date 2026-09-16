import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number; // percentage
  y: number; // percentage
  size: number;
  duration: number;
  delay: number;
  color: string;
  glow: string;
}

interface ConnectionLine {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  duration: number;
  delay: number;
}

export const HeroParticlesBackground: React.FC = () => {
  // Generate deterministic particle nodes representing AI & digital connectivity
  const particles: Particle[] = useMemo(() => {
    return [
      { id: 1, x: 12, y: 18, size: 4, duration: 6.2, delay: 0.2, color: '#22d3ee', glow: 'rgba(34, 211, 238, 0.4)' },
      { id: 2, x: 28, y: 12, size: 3, duration: 7.5, delay: 1.1, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.3)' },
      { id: 3, x: 45, y: 22, size: 5, duration: 8.0, delay: 0.5, color: '#10b981', glow: 'rgba(16, 185, 129, 0.4)' },
      { id: 4, x: 62, y: 15, size: 3, duration: 6.8, delay: 1.8, color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.3)' },
      { id: 5, x: 82, y: 20, size: 4, duration: 7.1, delay: 0.9, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.3)' },
      { id: 6, x: 92, y: 35, size: 3, duration: 6.5, delay: 2.2, color: '#22d3ee', glow: 'rgba(34, 211, 238, 0.3)' },
      
      { id: 7, x: 8, y: 45, size: 4, duration: 8.4, delay: 1.4, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.3)' },
      { id: 8, x: 22, y: 55, size: 5, duration: 7.3, delay: 0.3, color: '#22d3ee', glow: 'rgba(34, 211, 238, 0.5)' },
      { id: 9, x: 38, y: 42, size: 3, duration: 6.9, delay: 2.0, color: '#10b981', glow: 'rgba(16, 185, 129, 0.3)' },
      { id: 10, x: 68, y: 52, size: 4, duration: 7.8, delay: 0.7, color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.4)' },
      { id: 11, x: 85, y: 48, size: 5, duration: 8.2, delay: 1.6, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)' },
      
      { id: 12, x: 15, y: 78, size: 3, duration: 6.4, delay: 1.9, color: '#10b981', glow: 'rgba(16, 185, 129, 0.3)' },
      { id: 13, x: 32, y: 82, size: 4, duration: 7.6, delay: 0.4, color: '#22d3ee', glow: 'rgba(34, 211, 238, 0.4)' },
      { id: 14, x: 52, y: 72, size: 5, duration: 8.5, delay: 1.2, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.5)' },
      { id: 15, x: 74, y: 80, size: 3, duration: 7.0, delay: 2.5, color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.3)' },
      { id: 16, x: 88, y: 75, size: 4, duration: 6.7, delay: 0.8, color: '#22d3ee', glow: 'rgba(34, 211, 238, 0.4)' },
    ];
  }, []);

  // Defined network connections between nodes
  const connections: ConnectionLine[] = useMemo(() => {
    return [
      { id: 1, x1: 12, y1: 18, x2: 28, y2: 12, duration: 4.5, delay: 0.1 },
      { id: 2, x1: 28, y1: 12, x2: 45, y2: 22, duration: 5.0, delay: 1.0 },
      { id: 3, x1: 45, y1: 22, x2: 62, y2: 15, duration: 4.8, delay: 0.5 },
      { id: 4, x1: 62, y1: 15, x2: 82, y2: 20, duration: 5.2, delay: 1.5 },
      { id: 5, x1: 82, y1: 20, x2: 92, y2: 35, duration: 4.2, delay: 0.8 },
      
      { id: 6, x1: 12, y1: 18, x2: 8, y2: 45, duration: 5.5, delay: 1.2 },
      { id: 7, x1: 28, y1: 12, x2: 22, y2: 55, duration: 6.0, delay: 0.3 },
      { id: 8, x1: 45, y1: 22, x2: 38, y2: 42, duration: 4.6, delay: 1.7 },
      { id: 9, x1: 62, y1: 15, x2: 68, y2: 52, duration: 5.4, delay: 0.9 },
      { id: 10, x1: 82, y1: 20, x2: 85, y2: 48, duration: 4.9, delay: 2.1 },
      
      { id: 11, x1: 8, y1: 45, x2: 22, y2: 55, duration: 5.1, delay: 0.7 },
      { id: 12, x1: 22, y1: 55, x2: 38, y2: 42, duration: 4.7, delay: 1.4 },
      { id: 13, x1: 68, y1: 52, x2: 85, y2: 48, duration: 5.3, delay: 0.2 },
      
      { id: 14, x1: 8, y1: 45, x2: 15, y2: 78, duration: 5.8, delay: 1.8 },
      { id: 15, x1: 22, y1: 55, x2: 32, y2: 82, duration: 5.0, delay: 0.6 },
      { id: 16, x1: 38, y1: 42, x2: 52, y2: 72, duration: 4.4, delay: 2.0 },
      { id: 17, x1: 68, y1: 52, x2: 74, y2: 80, duration: 5.6, delay: 1.1 },
      { id: 18, x1: 85, y1: 48, x2: 88, y2: 75, duration: 4.8, delay: 0.4 },
      
      { id: 19, x1: 15, y1: 78, x2: 32, y2: 82, duration: 4.9, delay: 1.3 },
      { id: 20, x1: 32, y1: 82, x2: 52, y2: 72, duration: 5.5, delay: 0.5 },
      { id: 21, x1: 52, y1: 72, x2: 74, y2: 80, duration: 4.6, delay: 1.6 },
      { id: 22, x1: 74, y1: 80, x2: 88, y2: 75, duration: 5.1, delay: 0.8 },
    ];
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10"
      aria-hidden="true"
    >
      {/* SVG Neural Mesh / Connectivity Grid */}
      <svg className="w-full h-full absolute inset-0 opacity-40">
        <defs>
          <linearGradient id="cyanLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
          </linearGradient>

          <radialGradient id="nodeRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Dynamic Connecting Lines with animated stroke dash */}
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke="url(#cyanLineGrad)"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            initial={{ strokeDashoffset: 0, opacity: 0.15 }}
            animate={{
              strokeDashoffset: [-36, 0],
              opacity: [0.12, 0.45, 0.12],
            }}
            transition={{
              duration: conn.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: conn.delay,
            }}
          />
        ))}

        {/* Data Stream Pulses traveling between AI nodes */}
        {connections.slice(0, 8).map((conn, idx) => (
          <motion.circle
            key={`pulse-${conn.id}`}
            r="2"
            fill="#38bdf8"
            filter="drop-shadow(0 0 4px #22d3ee)"
            initial={{
              cx: `${conn.x1}%`,
              cy: `${conn.y1}%`,
              opacity: 0,
            }}
            animate={{
              cx: [`${conn.x1}%`, `${conn.x2}%`],
              cy: [`${conn.y1}%`, `${conn.y2}%`],
              opacity: [0, 0.85, 0],
            }}
            transition={{
              duration: 3.2 + (idx % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: idx * 1.1,
            }}
          />
        ))}
      </svg>

      {/* Floating Interactive Particle Nodes */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.glow}`,
          }}
          initial={{ opacity: 0.2, y: 0, x: 0 }}
          animate={{
            y: [0, -16, 8, 0],
            x: [0, 10, -8, 0],
            opacity: [0.25, 0.8, 0.35, 0.25],
            scale: [1, 1.25, 0.95, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        >
          {/* Subtle Outer Synaptic Ping on select major nodes */}
          {(p.id === 3 || p.id === 8 || p.id === 14) && (
            <motion.span
              className="absolute inset-0 rounded-full border border-cyan-400/40"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: [1, 3.2], opacity: [0.7, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeOut',
                delay: p.delay,
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Floating AI & Digital Constellation Subtle Glyphs */}
      <motion.div
        className="absolute top-[22%] left-[18%] text-[10px] font-mono text-cyan-400/25 tracking-widest pointer-events-none"
        animate={{
          opacity: [0.15, 0.4, 0.15],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        0101 • NEURAL NODE
      </motion.div>

      <motion.div
        className="absolute top-[68%] right-[16%] text-[10px] font-mono text-sky-400/25 tracking-widest pointer-events-none"
        animate={{
          opacity: [0.1, 0.35, 0.1],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      >
        AI CORE // SYNAPSE ACTIVE
      </motion.div>

      <motion.div
        className="absolute bottom-[18%] left-[24%] text-[10px] font-mono text-emerald-400/25 tracking-widest pointer-events-none hidden sm:block"
        animate={{
          opacity: [0.12, 0.3, 0.12],
          x: [0, 6, 0],
        }}
        transition={{
          duration: 7.0,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.2,
        }}
      >
        JUBA • GATEWAY 01
      </motion.div>
    </div>
  );
};
