import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import {
    ArrowRight,
    Zap,
    CheckCircle2,
    Lock,
    Users,
    Target,
    BarChart3
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
                            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', textDecoration: 'none' }}>
                                    Request a Quote <ArrowRight size={20} />
                                </Link>
                                <Link to="/audit" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem', textDecoration: 'none' }}>
                                    Take Diagnostic Assessment
                                </Link>
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

            {/* Diagnostic Scorecard CTA */}
            <section className="section" style={{ background: 'var(--accent)', color: 'white', padding: '4rem 0' }}>
                <div className="container">
                    <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <div style={{ maxWidth: '600px' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>How does your revenue engine rank?</h2>
                            <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>Use our 5-point performance scorecard to identify major gaps in 90 seconds or less.</p>
                        </div>
                        <Link to="/audit" className="btn btn-dark" style={{ background: 'white', color: 'var(--accent)', padding: '1.25rem 2.5rem', fontSize: '1.125rem', textDecoration: 'none' }}>
                            Start Assessment <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section id="problem" className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <div style={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '1rem' }}>The Reality Check</div>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem' }}>Your Marketing Vendors are Probably <span style={{ color: 'var(--danger)' }}>Wasting Your Money.</span></h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)', lineHeight: '1.8' }}>
                            It's the same story in every mid-market huddle: you've hired the agencies, signed the contracts, and three months in, you realize <span style={{ color: 'var(--primary)', fontWeight: 700 }}>nobody is actually managing them.</span> Your SEO is chasing keywords that don't convert, your ads are burning budget without attribution, and your content is being written for robots, not buyers.
                        </p>
                    </div>

                    <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
                        <div>
                            <p style={{ fontSize: '1.125rem', color: 'var(--foreground-muted)', marginBottom: '2.5rem' }}>
                                The problem isn't always that the vendors are bad at what they do. The problem is that <span style={{ color: 'var(--primary)', fontWeight: 700 }}>nobody is giving them clear direction</span>, holding them accountable to real revenue metrics, or making sure all the pieces work together. You need leadership that treats marketing like a business function, not a random list of tactics.
                            </p>

                            <div className="grid" style={{ gap: '1.5rem' }}>
                                {[
                                    { title: "CMO Instability", desc: "Constant strategic drift without a dedicated revenue owner." },
                                    { title: "Disconnected Vendors", desc: "Agencies working in silos, optimizing for vanity metrics." },
                                    { title: "The Revenue Mystery", desc: "No clear line from marketing spend to pipeline growth." }
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
                            <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
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

            {/* The Solution / Fractional CMO Explanation */}
            <section className="section" style={{ background: 'var(--background)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '1rem' }}>The Solution</div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Executive Leadership, <span className="text-gradient">Fractional Scale.</span></h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)', lineHeight: '1.8' }}>
                            A fractional CMO is a veteran marketing executive who plugs into your leadership team on a part-time basis. You get the strategic thinking, accountability, and cross-channel expertise of a $300,000+ hire—without the full-time overhead.
                        </p>
                    </div>

                    <div className="grid-3">
                        <div className="card" style={{ background: 'white' }}>
                            <div style={{ width: '3rem', height: '3rem', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <BarChart3 size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Revenue Math</h3>
                            <p style={{ fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>
                                We start with a high-fidelity audit to identify waste and uncover hidden growth levers. Everything we do is tied directly to your sales scoreboard.
                            </p>
                        </div>

                        <div className="card" style={{ background: 'white' }}>
                            <div style={{ width: '3rem', height: '3rem', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Users size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Embedded Leadership</h3>
                            <p style={{ fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>
                                We don't just hand you a strategy deck and disappear. We work alongside your internal team and agencies to ensure every play is executed correctly.
                            </p>
                        </div>

                        <div className="card" style={{ background: 'white' }}>
                            <div style={{ width: '3rem', height: '3rem', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Target size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Expert Oversight</h3>
                            <p style={{ fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>
                                Gain access to veteran leaders who have scaled companies in your specific vertical. We bring the pattern recognition you can't hire at the manager level.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid var(--border)', display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', borderRadius: '100px', background: 'white' }}>
                            <span style={{ color: 'var(--accent)' }}>+245%</span> Growth in Fractional CMO services since 2022. <span style={{ color: 'var(--foreground-muted)', fontWeight: 400 }}>The math just makes sense.</span>
                        </div>
                    </div>

                    {/* New Detailed Services Section */}
                    <div style={{ marginTop: '8rem', paddingTop: '6rem', borderTop: '1px solid var(--border)' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Three Pillars of Your <span className="text-gradient">Revenue Engine</span></h2>
                            <p style={{ color: 'var(--foreground-muted)', fontSize: '1.125rem' }}>Hands-on leadership for every phase of growth.</p>
                        </div>

                        <div className="grid-3" style={{ gap: '2.5rem' }}>
                            {/* Strategic Planning */}
                            <div className="card" style={{ background: 'white' }}>
                                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Pillar 01</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Strategic Planning</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
                                    {[
                                        "Roadmaps based on business goals, not vanity metrics",
                                        "Identification of high-revenue growth channels",
                                        "Positioning that removes commodity-trap comparisons",
                                        "Measurement frameworks that show what's actually working"
                                    ].map((item, i) => (
                                        <li key={i} className="flex" style={{ gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>
                                            <CheckCircle2 size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.2rem' }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tactical Execution */}
                            <div className="card" style={{ background: 'white' }}>
                                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Pillar 02</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Execution Management</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
                                    {[
                                        "Hiring, firing, and auditing all marketing vendors",
                                        "Holding teams accountable to real-time data",
                                        "Cross-channel coordination (SEO, Ads, Content)",
                                        "Ensuring brand consistency across every huddle"
                                    ].map((item, i) => (
                                        <li key={i} className="flex" style={{ gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>
                                            <CheckCircle2 size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.2rem' }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Business Integration */}
                            <div className="card" style={{ background: 'white' }}>
                                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Pillar 03</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Business Integration</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
                                    {[
                                        "Aligning marketing strategy with sales cycle reality",
                                        "Reporting that shows impact on the bottom line",
                                        "Identifying operational bottlenecks in growth",
                                        "Partnering with leadership as a revenue owner"
                                    ].map((item, i) => (
                                        <li key={i} className="flex" style={{ gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>
                                            <CheckCircle2 size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.2rem' }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Difference Section */}
            <section id="difference" className="section" style={{ background: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 5rem' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Leadership Over Activity</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)' }}>
                            We aren't a freelancer marketplace. We provide the strategic oversight required to turn marketing from a cost center into a growth engine.
                        </p>
                    </div>

                    <div className="grid-2">
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

        </>
    );
};

export default Home;
