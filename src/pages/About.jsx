import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Target,
    Users,
    ShieldCheck,
    BarChart3,
    Award
} from 'lucide-react';

const About = () => {
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

                    <div className="grid-3" style={{ gap: '2rem' }}>
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
                    <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
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
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <div style={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '1rem' }}>The Huddle</div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>Veteran Leadership</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)', maxWidth: '700px', margin: '0 auto' }}>
                            Strategic oversight from executives who have sat at the leadership table and understand the scoreboard.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '6rem' }}>
                        {[
                            {
                                name: "Jeff Staats",
                                role: "Strategic Execution & Growth Leader",
                                image: "/images/jeff.jpg",
                                bio: "Recovering Corporate Marketing Executive with over 20 years of experience. Jeff has built and transformed marketing teams across multiple industries, including staffing and tech. An adjunct professor and innovation catalyst, he understands the 'Revenue Math' required to scale mid-market businesses.",
                                specialty: "Marketing Automation & Strategy",
                                highlights: ["20+ Years Experience", "Team Transformation Specialist", "Innovation Catalyst"]
                            },
                            {
                                name: "Matt Aster",
                                role: "Revenue Strategist & Growth Leader",
                                image: "/images/matt.jpg",
                                bio: "A results-oriented executive with a proven track record of driving growth for high-growth companies. Matt bridges the gap between vision and execution, focusing on a holistic understanding of market, customer, and product. He partners with leaders to deliver sustainable, data-backed business strategies.",
                                specialty: "Strategic Planning & Growth Optimization",
                                highlights: ["Revenue Strategist", "High-Growth Specialist", "Vision-to-Execution Guide"]
                            }
                        ].map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="grid-2"
                                style={{
                                    gap: '4rem',
                                    alignItems: 'center',
                                    padding: '2.5rem',
                                    borderRadius: '2rem',
                                    background: 'var(--background-soft)',
                                    border: '1px solid var(--border)'
                                }}
                            >
                                <div style={{ position: 'relative' }}>
                                    <div style={{
                                        aspectRatio: '1',
                                        borderRadius: '1.5rem',
                                        overflow: 'hidden',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        border: '4px solid white'
                                    }}>
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-1rem',
                                        right: '-1rem',
                                        background: 'var(--accent)',
                                        color: 'white',
                                        padding: '1rem 1.5rem',
                                        borderRadius: '1rem',
                                        fontWeight: 800,
                                        fontSize: '0.75rem',
                                        letterSpacing: '0.1em',
                                        boxShadow: '0 10px 20px rgba(240, 55, 66, 0.3)'
                                    }}>
                                        EXECUTIVE QB
                                    </div>
                                </div>
                                <div>
                                    <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
                                        {leader.role}
                                    </div>
                                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{leader.name}</h3>
                                    <p style={{ color: 'var(--foreground-muted)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                                        {leader.bio}
                                    </p>
                                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                                        {leader.highlights.map((h, j) => (
                                            <div key={j} className="flex" style={{ gap: '0.5rem', alignItems: 'center', fontSize: '0.875rem', fontWeight: 600 }}>
                                                <CheckCircle2 size={16} color="var(--accent)" /> {h}
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <Award size={24} color="var(--accent)" />
                                        <span style={{ fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase' }}>
                                            Specialty: {leader.specialty}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QB vs Freelance / What a Fractional CMO Actually Does */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <div style={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '1.5rem' }}>The Strategic Gap</div>
                            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>Bridge the Gap Between <br /><span className="text-gradient">Execution & Direction.</span></h2>
                            <p style={{ fontSize: '1.125rem', opacity: 0.8, marginBottom: '2rem', lineHeight: '1.8' }}>
                                A MarketingQB acts as your fractional CMO—senior executive leadership that works for you on a part-time or retainer basis. We don't just "do marketing"; we own the revenue outcome.
                            </p>
                            <div className="grid" style={{ gap: '1.25rem' }}>
                                {[
                                    "Deep Strategic Audit: We find the waste before we spend a dime.",
                                    "Revenue Alignment: Marketing goals tied directly to sales targets.",
                                    "Expert Oversight: We manage your agencies so you don't have to.",
                                    "No Overhead: Executive expertise without the $300k+ salary.",
                                    "Tactical Support: We work with your team to execute the play.",
                                    "Pattern Recognition: We've played this game before."
                                ].map((item, i) => (
                                    <div key={i} className="flex" style={{ gap: '1rem', alignItems: 'center' }}>
                                        <CheckCircle2 size={24} color="var(--accent)" />
                                        <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex" style={{ flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ padding: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.1)', width: '100%' }}>
                                <h3 style={{ fontSize: '1.75rem', color: 'white', marginBottom: '1.25rem' }}>The Math Makes Sense</h3>
                                <p style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: '1.8' }}>
                                    With fractional CMO services growing by 245% in the last two years, the industry has realized that high-growth companies need more than just freelancers or agencies. You need someone in the room who understands the entire scoreboard.
                                </p>
                            </div>
                            <div style={{ padding: '3rem', background: 'var(--accent)', borderRadius: '2rem', color: 'white', width: '100%' }}>
                                <h3 style={{ fontSize: '1.75rem', color: 'white', marginBottom: '1.25rem' }}>Our Promise</h3>
                                <p style={{ fontSize: '1.125rem', fontWeight: 600, lineHeight: '1.8' }}>
                                    We don't hand you a deck and disappear. We build the strategy, then run the huddle alongside your team until the goals are met.
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
