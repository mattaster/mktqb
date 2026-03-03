import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Target,
    Users,
    ShieldCheck,
    BarChart3,
    Globe,
    Award
} from 'lucide-react';

const About = () => {
    const leadership = [
        {
            name: "Jeff Staats",
            role: "Strategic Execution & Growth Leader",
            bio: "Recovering Corporate Marketing Executive with over 20 years of experience. Jeff has built and transformed marketing teams across multiple industries, including staffing and tech. An adjunct professor and innovation catalyst, he understands the 'Revenue Math' required to scale mid-market businesses.",
            specialty: "Marketing Automation & Strategy"
        },
        {
            name: "Matt Aster",
            role: "Revenue Strategist & Growth Leader",
            bio: "A results-oriented executive with a proven track record of driving growth for high-growth companies. Matt bridges the gap between vision and execution, focusing on holistic understanding of market, customer, and product. He partners with leaders to deliver sustainable, data-backed business strategies.",
            specialty: "Strategic Planning & Growth Optimization"
        }
    ];

    return (
        <div className="about-page">
            {/* Why MarketingQB - The Problem We Solve */}
            <section className="section" style={{ background: 'white', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="badge" style={{ marginBottom: '1.5rem' }}>The Mission</div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2rem' }}>
                            Why <span className="text-gradient">MarketingQB</span> Exists
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)', marginBottom: '4rem' }}>
                            Too many businesses hire too junior and expect magic, too late and expect rescue, or too expensive and expect perfection. Marketing doesn’t fail because of effort — it fails because there’s no quarterback.
                        </p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: Target, text: "To bring structure, accountability, and revenue alignment to mid-market businesses." },
                            { icon: ShieldCheck, text: "To protect companies from expensive marketing mistakes." },
                            { icon: Users, text: "To match the right QB to the right field." },
                            { icon: BarChart3, text: "To move the scoreboard." }
                        ].map((item, i) => (
                            <div key={i} className="card" style={{ textAlign: 'center' }}>
                                <div style={{ margin: '0 auto 1.5rem', color: 'var(--accent)', background: 'var(--accent-soft)', width: '3.5rem', height: '3.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <item.icon size={28} />
                                </div>
                                <p style={{ fontWeight: 700 }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Founder Perspective */}
            <section className="section" style={{ background: 'var(--background)' }}>
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', alignItems: 'center', gap: '5rem' }}>
                        <div className="scoreboard-box">
                            <div style={{ color: 'var(--accent)', fontWeight: 800, marginBottom: '1rem' }}>PATTERN RECOGNITION</div>
                            <h2 style={{ color: 'white', marginBottom: '2rem' }}>Earned Over Years</h2>
                            <div className="grid" style={{ gap: '1.25rem' }}>
                                {[
                                    "Worked across multiple industries",
                                    "Built and led marketing teams",
                                    "Done the executional roles",
                                    "Owned revenue outcomes",
                                    "Fixed broken reporting",
                                    "Aligned sales and marketing"
                                ].map((item, i) => (
                                    <div key={i} className="flex" style={{ gap: '0.75rem', alignItems: 'center', color: 'rgba(255,255,255,0.8)' }}>
                                        <CheckCircle2 size={20} color="var(--success)" />
                                        <span style={{ fontWeight: 600 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Founder Perspective</h2>
                            <p style={{ fontSize: '1.125rem', color: 'var(--foreground-muted)', marginBottom: '2rem' }}>
                                MarketingQB wasn’t built on theory. It was built by those who have sat at the leadership table, managed (and fired) agencies, and carried the scoreboard pressure.
                            </p>
                            <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
                                <p style={{ fontStyle: 'italic', fontSize: '1.125rem', margin: 0 }}>
                                    "This isn't freelance marketing. It's revenue leadership."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Our Leadership</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)', maxWidth: '700px', margin: '0 auto' }}>
                            Strategic oversight from veterans who understand every position on the field.
                        </p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                        {leadership.map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="card"
                                style={{ padding: '3rem' }}
                            >
                                <div className="flex" style={{ gap: '1.5rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                    <div style={{ width: '4rem', height: '4rem', background: 'var(--primary)', borderRadius: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Users size={32} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{leader.name}</h3>
                                        <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase' }}>{leader.role}</div>
                                    </div>
                                </div>
                                <p style={{ color: 'var(--foreground-muted)', marginBottom: '2rem', fontSize: '1.0625rem' }}>{leader.bio}</p>
                                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <Award size={20} color="var(--accent)" />
                                    <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>SPECIALTY: {leader.specialty}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QB vs Freelance */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '2rem' }}>What Makes a <br /><span className="text-gradient">MarketingQB</span> Different</h2>
                            <div className="grid" style={{ gap: '1.5rem' }}>
                                {[
                                    "Understands every position on the field",
                                    "Knows what demand gen requires",
                                    "Understands RevOps complexity",
                                    "Respects sales realities",
                                    "Knows when to stop activity",
                                    "Knows which levers move growth"
                                ].map((item, i) => (
                                    <div key={i} className="flex" style={{ gap: '1rem', alignItems: 'center' }}>
                                        <CheckCircle2 size={24} color="var(--accent)" />
                                        <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex" style={{ alignItems: 'center' }}>
                            <div style={{ padding: '4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.1)', width: '100%' }}>
                                <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '1.5rem' }}>Our Mission</h3>
                                <p style={{ fontSize: '1.25rem', opacity: 0.8, lineHeight: '1.8' }}>
                                    To bring structure, accountability, and revenue alignment to mid-market businesses that need leadership — not noise. To match the right QB to the right field. To move the scoreboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
