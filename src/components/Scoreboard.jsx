import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Scoreboard = () => {
    const stats = [
        { label: 'Pipeline Velocity', value: '+24%', color: 'var(--accent)' },
        { label: 'CAC Efficiency', value: '-18%', color: 'var(--success)' },
        { label: 'SQL Conversion', value: '3.2x', color: '#a855f7' }
    ];

    return (
        <div className="scoreboard-box">
            <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                    <h3 style={{ color: 'white', fontSize: '1.25rem' }}>Revenue Scoreboard</h3>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>Real-time performance metrics</p>
                </div>
                <div style={{ background: '#1e293b', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.75rem', color: '#4ade80', border: '1px solid #334155', fontWeight: 800 }}>
                    LIVE_FEED: ACTIVE
                </div>
            </div>

            <div className="grid-3" style={{ marginBottom: '3rem' }}>
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        style={{ background: '#0f172a', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #1e293b' }}
                    >
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{stat.label}</div>
                        <div style={{ color: stat.color, fontSize: '1.5rem', fontWeight: 900 }}>{stat.value}</div>
                    </motion.div>
                ))}
            </div>

            <div className="grid" style={{ gap: '1.5rem' }}>
                {[
                    { task: 'GTM Roadmap Alpha', progress: 100 },
                    { task: 'Sales Alignment Workshop', progress: 75 },
                    { task: 'Unit Economics Audit', progress: 40 }
                ].map((item, i) => (
                    <div key={i}>
                        <div className="flex" style={{ justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                            <span className="flex" style={{ alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
                                {item.progress === 100 ? <CheckCircle2 size={16} color="var(--success)" /> : <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }} />}
                                {item.task}
                            </span>
                            <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>{item.progress}%</span>
                        </div>
                        <div className="progress-track" style={{ background: '#1e293b' }}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.progress}%` }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className="progress-fill"
                                style={{ background: item.progress === 100 ? 'var(--success)' : 'var(--accent)' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scoreboard;
