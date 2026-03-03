import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
    ArrowRight,
    Zap,
    CheckCircle2,
    Lock,
    Users
} from 'lucide-react';
import Scoreboard from '../components/Scoreboard';
import Playbook from '../components/Playbook';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <>
            {/* Hero Section */}
            <header className="section" style={{ background: 'white', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="hero-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="badge" style={{ marginBottom: '2rem' }}>
                                <Lock size={12} style={{ marginRight: '0.5rem' }} /> Fractional Marketing Leadership
                            </div>
                            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', marginBottom: '2rem' }}>
                                Built for the <br />
                                <span className="text-gradient">Scoreboard.</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)', marginBottom: '3rem', maxWidth: '540px' }}>
                                Stop hiring agencies that optimize for activity. We provide the veteran leadership required to run your growth engine by the numbers.
                            </p>
                            <div className="flex" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                                <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                                    Request a Diagnostic <ArrowRight size={20} />
                                </button>
                                <button className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                                    View GTM Framework
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ position: 'relative' }}
                        >
                            <Scoreboard />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'var(--accent-soft)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.4, zIndex: -1 }}></div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* The Problem Section */}
            <section id="problem" className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', alignItems: 'center', gap: '5rem' }}>
                        <div>
                            <div style={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '1rem' }}>The Problem</div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>The Mid-Market <span style={{ textDecoration: 'underline', textDecorationColor: 'var(--danger)', textUnderlineOffset: '8px' }}>Gap</span></h2>
                            <p style={{ fontSize: '1.125rem', color: 'var(--foreground-muted)', marginBottom: '2.5rem' }}>
                                Companies between $5M and $50M often outgrow their marketing manager but can't justify a full-time CMO. This creates a leadership vacuum where strategy defaults to "what's the agency doing next?"
                            </p>

                            <div className="grid" style={{ gap: '1.5rem' }}>
                                {[
                                    { title: "CMO Instability", desc: "Constant strategic drift without steady leadership." },
                                    { title: "Disconnected Vendors", desc: "Agencies working in silos on vanity metrics." },
                                    { title: "Revenue Mystery", desc: "No clear line from marketing spend to pipeline growth." }
                                ].map((item, i) => (
                                    <div key={i} className="flex" style={{ gap: '1.25rem' }}>
                                        <div style={{ padding: '0.75rem', background: '#fee2e2', borderRadius: '0.75rem', color: 'var(--danger)', display: 'flex' }}>
                                            <Zap size={24} />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 800, marginBottom: '0.25rem' }}>{item.title}</div>
                                            <div style={{ color: 'var(--foreground-muted)', fontSize: '0.875rem' }}>{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card" style={{ padding: '2.5rem' }}>
                            <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                                <div className="badge" style={{ background: '#fee2e2', color: 'var(--danger)' }}>Industry Average Trap</div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--foreground-muted)' }}>MKT ERROR: STAGNATION</div>
                            </div>

                            <div className="grid" style={{ gap: '2rem' }}>
                                <div>
                                    <div className="flex" style={{ justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 700 }}>
                                        <span>Vanity Metrics</span>
                                        <span style={{ color: 'var(--success)' }}>140%</span>
                                    </div>
                                    <div className="progress-track" style={{ background: 'var(--border)' }}>
                                        <div className="progress-fill" style={{ width: '100%', background: '#cbd5e1' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex" style={{ justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 700 }}>
                                        <span>Revenue Growth</span>
                                        <span style={{ color: 'var(--danger)' }}>12%</span>
                                    </div>
                                    <div className="progress-track" style={{ background: 'var(--border)' }}>
                                        <div className="progress-fill" style={{ width: '12%', background: 'var(--danger)' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--foreground-muted)' }}>
                                "We're spending a lot, but what's working?"
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Difference Section */}
            <section id="difference" className="section" style={{ background: 'white', borderY: '1px solid var(--border)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 5rem' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Leadership Over Placement</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)' }}>
                            We aren't a freelancer marketplace. We provide the strategic oversight required to turn marketing from a cost center into a growth engine.
                        </p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        <div className="card">
                            <div style={{ width: '3.5rem', height: '3.5rem', background: 'var(--accent)', borderRadius: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Users size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Industry Pods</h3>
                            <p style={{ color: 'var(--foreground-muted)' }}>
                                We match you with a leader who has scaled companies in your specific vertical. No learning curve, just immediate revenue math.
                            </p>
                        </div>

                        <div className="card">
                            <div style={{ width: '3.5rem', height: '3.5rem', background: 'var(--primary)', borderRadius: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                                <CheckCircle2 size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Unified Playbook</h3>
                            <p style={{ color: 'var(--foreground-muted)' }}>
                                Your QB ensures your agencies aren't working in silos. Every dollar spent is aligned with your 90-day GTM roadmap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Framework Section */}
            <section id="framework" className="section" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <div style={{ marginBottom: '5rem' }}>
                        <div style={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '1rem' }}>Our Process</div>
                        <h2 style={{ fontSize: '3rem' }}>Execution is the <span style={{ color: 'var(--accent)' }}>Strategy.</span></h2>
                    </div>

                    <Playbook />
                </div>
            </section>

            {/* Execution Engine Section */}
            <section className="section">
                <div className="container">
                    <div style={{ background: 'var(--accent)', borderRadius: '2rem', padding: '5rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>
                            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>The Execution Engine (FCD)</h2>
                            <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
                                Leadership is the QB. Tactics are the FCD. Our Strategic Execution Engine provides the firepower to ensure your roadmap hits the scoreboard.
                            </p>
                            <button className="btn btn-dark" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', background: 'white', color: 'var(--accent)' }}>
                                Request a Diagnostic
                            </button>
                        </div>
                        <div style={{ position: 'absolute', right: '-10%', top: '-10%', width: '40%', height: '120%', background: 'rgba(255,255,255,0.05)', transform: 'rotate(-12deg)', zIndex: 1 }}></div>
                    </div>
                </div>
            </section>

            {/* Call to Action Footer */}
            <section className="section" style={{ background: 'white', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '4rem', marginBottom: '3rem' }}>Stop Guessing.<br /><span className="text-gradient">Start Measuring.</span></h2>
                    <div className="flex" style={{ justifyContent: 'center', gap: '1.5rem' }}>
                        <button className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Request a Diagnostic</button>
                        <a href="https://mktqb.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1.25rem 3rem', textDecoration: 'none' }}>Join the Huddle</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
