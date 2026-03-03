import React from 'react';
import { motion } from 'framer-motion';
import { Search, UserPlus, PlayCircle, ArrowRight } from 'lucide-react';

const Playbook = () => {
    const steps = [
        {
            icon: Search,
            title: "Diagnose",
            subtitle: "The Gap Audit",
            desc: "Deep-dive audit into GTM operations and pipeline math to find leakage.",
            accent: "#f59e0b"
        },
        {
            icon: UserPlus,
            title: "Assign",
            subtitle: "Pod Matching",
            desc: "Assigning a veteran leader with specific industry expertise.",
            accent: "var(--accent)"
        },
        {
            icon: PlayCircle,
            title: "Run",
            subtitle: "Execution Engine",
            desc: "Leadership over tactical vendors with weekly revenue scoreboard.",
            accent: "var(--success)"
        }
    ];

    return (
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {steps.map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="card"
                    style={{ background: '#0f172a', borderColor: '#1e293b', borderLeft: `4px solid ${step.accent}`, position: 'relative' }}
                >
                    <div className="flex" style={{ alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <div style={{ padding: '0.75rem', background: '#1e293b', borderRadius: '0.75rem', color: step.accent, display: 'flex' }}>
                            <step.icon size={24} />
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(255,255,255,0.05)' }}>0{i + 1}</div>
                    </div>

                    <div style={{ color: step.accent, fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{step.subtitle}</div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: 'white' }}>{step.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: '1.6' }}>{step.desc}</p>

                    {i < 2 && (
                        <div style={{ position: 'absolute', right: '-1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, color: 'rgba(255,255,255,0.1)' }} className="hide-mobile">
                            <ArrowRight size={32} />
                        </div>
                    )}
                </motion.div>
            ))}

            <style>{`
        @media (max-width: 1024px) {
          .hide-mobile { display: none; }
        }
      `}</style>
        </div>
    );
};

export default Playbook;
