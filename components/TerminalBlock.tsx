import React, { useState, useEffect } from 'react';

const COMMANDS = [
  { text: "> initializing neural_net.rs...", delay: 0 },
  { text: "> connecting to kafka cluster [broker-01]...", delay: 800 },
  { text: "> optimizing tensor flow graphs...", delay: 1600 },
  { text: "> deploy success: latency < 2ms", delay: 2400, color: "text-green-400" }
];

export const TerminalBlock: React.FC = () => {
  const [lines, setLines] = useState<any[]>([]);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    
    // Reset lines on mount
    setLines([]);

    COMMANDS.forEach((cmd) => {
      const t = setTimeout(() => {
        setLines(prev => [...prev, cmd]);
      }, cmd.delay);
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-48 bg-black/80 border border-white/10 rounded-lg p-4 font-mono text-xs md:text-sm shadow-2xl overflow-hidden backdrop-blur-sm">
      <div className="flex gap-2 mb-3 opacity-50">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="flex flex-col gap-1">
        {lines.map((line, i) => (
          <div key={i} className={`${line.color || 'text-gray-300'} animate-pulse`}>
            {line.text}
          </div>
        ))}
        <div className="w-2 h-4 bg-gray-500 animate-pulse mt-1" />
      </div>
    </div>
  );
};