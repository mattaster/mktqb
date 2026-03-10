import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Target,
    Filter,
    Users,
    Cpu,
    BarChart3,
    CheckCircle2,
    AlertTriangle,
    XOctagon,
    ArrowRight,
    Zap,
    Clock,
    LayoutGrid
} from 'lucide-react';

const categories = [
    {
        id: 'revenue_alignment',
        title: 'Revenue Alignment',
        goal: 'Marketing goals must be tied directly to revenue targets.',
        questions: [
            'If we hit our marketing lead goals, do we have 100% confidence that the company will hit its revenue goals?',
            'Is our budget set based on what we want to achieve, or just what we spent last year?'
        ],
        lookFor: [
            'Clear pipeline coverage math: A spreadsheet showing how many leads are needed to hit sales targets.',
            'Defined growth targets: Specific, time-bound revenue milestones.',
            'Sales capacity: Evidence that the sales team can actually handle the volume of leads generated.'
        ],
        icon: <Target className="w-6 h-6 text-accent" />
    },
    {
        id: 'funnel_health',
        title: 'Funnel Health',
        goal: 'A short, predictable sales cycle with clear visibility.',
        questions: [
            'Do Sales and Marketing agree on exactly what a "good lead" looks like?',
            'Where do prospects get "stuck" in our process most often?'
        ],
        lookFor: [
            'Definitions: Written criteria for MQL (Marketing Qualified Lead) and SQL (Sales Qualified Lead).',
            'Conversion Rates: Data showing the percentage of prospects moving through each stage.',
            'Attribution: Visibility into which specific marketing efforts triggered the sale.'
        ],
        icon: <Filter className="w-6 h-6 text-accent" />
    },
    {
        id: 'team_leadership',
        title: 'Team & Leadership',
        goal: 'A culture of accountability with clear ownership.',
        questions: [
            'Who is ultimately responsible if a KPI is missed?',
            'How often do Sales and Marketing leadership meet to sync on strategy?'
        ],
        lookFor: [
            'Defined leadership: A clear head of marketing strategy.',
            'KPI ownership: Every metric has a specific person’s name next to it.',
            'Alignment cadence: A recurring, scheduled meeting between Sales and Marketing.'
        ],
        icon: <Users className="w-6 h-6 text-accent" />
    },
    {
        id: 'vendor_tech',
        title: 'Vendor & Tech Stack Efficiency',
        goal: 'Tools and agencies must be tied to outcomes, not just activities.',
        questions: [
            'Are we paying for any software or agency "retainers" that aren\'t contributing to revenue?',
            'Is our automation actually saving us time, or just creating more noise?'
        ],
        lookFor: [
            'Strategy alignment: Every tool in the stack serves a specific strategic purpose.',
            'No redundancy: An audit ensuring no two platforms perform the same function.',
            'Automation: Workflows (like email nurturing) are optimized and running.'
        ],
        icon: <Cpu className="w-6 h-6 text-accent" />
    },
    {
        id: 'program_performance',
        title: 'Program Performance',
        goal: 'Budget allocation is tied directly to performance.',
        questions: [
            'Which marketing channel is our "winner," and what is our process for killing the "losers"?',
            'Can we accurately calculate our ROI for every dollar spent?'
        ],
        lookFor: [
            'Channel Identification: Documentation of the highest-performing channels.',
            'ROI Measurement: Clear math on the return for marketing spend.',
            'Optimization: Evidence of a continuous process to improve results.'
        ],
        icon: <BarChart3 className="w-6 h-6 text-accent" />
    }
];

const Audit = () => {
    const [scores, setScores] = useState({
        revenue_alignment: 0,
        funnel_health: 0,
        team_leadership: 0,
        vendor_tech: 0,
        program_performance: 0
    });

    const totalScore = useMemo(() => {
        return Object.values(scores).reduce((acc, score) => acc + score, 0);
    }, [scores]);

    const getStatus = (score) => {
        if (score >= 20) return {
            label: 'Green',
            status: 'Optimized',
            meaning: 'Your system is healthy; focus on minor tweaks to accelerate.',
            color: 'var(--success)',
            icon: <CheckCircle2 className="w-8 h-8 text-success" />
        };
        if (score >= 15) return {
            label: 'Yellow',
            status: 'Gaps',
            meaning: 'You have significant gaps that need strategic intervention.',
            color: '#eab308',
            icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />
        };
        return {
            label: 'Red',
            status: 'Critical',
            meaning: 'The engine is broken; you need a MarketingQB.',
            color: 'var(--danger)',
            icon: <XOctagon className="w-8 h-8 text-danger" />
        };
    };

    const status = getStatus(totalScore);

    const handleScoreChange = (id, value) => {
        setScores(prev => ({ ...prev, [id]: value }));
    };

    return (
        <div className="audit-page">
            {/* Hero Section */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white', padding: '8rem 0 4rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', marginBottom: '1.5rem' }}>Diagnostic Tool</div>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>Performance & Diagnostic Assessment</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)', maxWidth: '800px', margin: '0 auto' }}>
                            Identify gaps, optimize revenue, and build your 90-day roadmap. Rate each category from 1 (Major Gap) to 5 (Strong & Optimized).
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Audit Content */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
                        {/* Part 1: Diagnostic Scorecard */}
                        <div className="flex" style={{ flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Part 1: The Diagnostic Scorecard</h2>
                                <div style={{ width: '60px', height: '4px', background: 'var(--accent)', borderRadius: '2px' }}></div>
                            </div>

                            {categories.map((cat, idx) => (
                                <motion.div
                                    key={cat.id}
                                    className="card"
                                    style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="flex" style={{ gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                                        <div style={{
                                            background: 'var(--accent-soft)',
                                            padding: '1rem',
                                            borderRadius: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {cat.icon}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{cat.title}</h3>
                                            <p style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Goal: {cat.goal}</p>
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <p style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem' }}>Critical Questions:</p>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            {cat.questions.map((q, i) => (
                                                <li key={i} className="flex" style={{ gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>
                                                    <span style={{ color: 'var(--accent)', fontWeight: 800 }}>•</span> {q}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div style={{ marginBottom: '2rem', background: 'var(--background)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                                        <p style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '0.875rem', color: 'var(--primary)' }}>What to Look For:</p>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            {cat.lookFor.map((item, i) => (
                                                <li key={i} className="flex" style={{ gap: '0.75rem', fontSize: '0.875rem' }}>
                                                    <CheckCircle2 size={16} style={{ color: 'var(--success)', marginTop: '0.25rem', flexShrink: 0 }} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex" style={{ flexDirection: 'column', gap: '1rem' }}>
                                        <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontWeight: 800, fontSize: '1rem' }}>Score: {scores[cat.id] || '_'} / 5</span>
                                            <div className="flex" style={{ gap: '0.5rem' }}>
                                                {[1, 2, 3, 4, 5].map((val) => (
                                                    <motion.button
                                                        key={val}
                                                        onClick={() => handleScoreChange(cat.id, val)}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        style={{
                                                            width: '40px',
                                                            height: '40px',
                                                            borderRadius: '50%',
                                                            border: scores[cat.id] === val ? 'none' : '2px solid var(--border)',
                                                            background: scores[cat.id] === val ? 'var(--accent)' : 'white',
                                                            color: scores[cat.id] === val ? 'white' : 'var(--foreground)',
                                                            fontWeight: 800,
                                                            cursor: 'pointer',
                                                            transition: 'all 0.2s ease',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                    >
                                                        {val}
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Sticky Sidebar for Results */}
                        <motion.div
                            style={{ position: 'sticky', top: '7rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >

                            {/* Part 2: The Stoplight Report */}
                            <div className="card" style={{ background: 'var(--primary)', color: 'white', borderColor: 'rgba(255,255,255,0.1)' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>Part 2: The Stoplight Report</h3>

                                <div className="flex" style={{ flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
                                    <div style={{ position: 'relative' }}>
                                        <motion.div
                                            key={totalScore}
                                            initial={{ scale: 0.8 }}
                                            animate={{ scale: 1 }}
                                            style={{
                                                width: '120px',
                                                height: '120px',
                                                borderRadius: '50%',
                                                background: 'rgba(255,255,255,0.05)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: '4px solid rgba(255,255,255,0.1)'
                                            }}
                                        >
                                            <span style={{ fontSize: '3rem', fontWeight: 900 }}>{totalScore}</span>
                                        </motion.div>
                                        <motion.div
                                            key={status.label}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            style={{
                                                position: 'absolute',
                                                bottom: '-10px',
                                                right: '-10px',
                                                background: 'white',
                                                borderRadius: '50%',
                                                padding: '0.5rem',
                                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            {status.icon}
                                        </motion.div>
                                    </div>

                                    <div>
                                        <h4 style={{ fontSize: '1.75rem', color: status.color, marginBottom: '0.5rem' }}>Status: {status.status}</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>{status.meaning}</p>
                                    </div>

                                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                        <motion.div style={{
                                            width: `${(totalScore / 25) * 100}%`,
                                            height: '100%',
                                            background: status.color,
                                            transition: 'all 0.5s ease'
                                        }}></motion.div>
                                    </div>

                                    <div className="flex" style={{ width: '100%', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, opacity: 0.6 }}>
                                        <span>0</span>
                                        <span>12.5</span>
                                        <span>25</span>
                                    </div>
                                </div>

                                <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                                        {totalScore < 15
                                            ? "Your revenue engine needs immediate strategic oversight."
                                            : totalScore < 20
                                                ? "Strategic intervention is required to bridge your current gaps."
                                                : "Great foundation! Let's optimize for maximum acceleration."}
                                    </p>
                                    <a href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                                        Request a Full Audit <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Part 3: Effort vs Impact */}
                            <div className="card">
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Part 3: Effort vs. Impact</h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gridTemplateRows: '1fr 1fr',
                                    gap: '2px',
                                    background: 'var(--border)',
                                    aspectRatio: '1',
                                    borderRadius: 'var(--radius)',
                                    overflow: 'hidden',
                                    border: '1px solid var(--border)'
                                }}>
                                    {/* High Impact / Low Effort */}
                                    <div style={{ background: 'white', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Zap size={20} className="text-accent" />
                                        <div>
                                            <span style={{ fontWeight: 800, fontSize: '0.75rem', display: 'block' }}>Quick Wins</span>
                                            <span style={{ fontSize: '0.625rem', color: 'var(--foreground-muted)' }}>Low Effort / High Impact</span>
                                        </div>
                                    </div>
                                    {/* High Impact / High Effort */}
                                    <div style={{ background: 'white', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <LayoutGrid size={20} className="text-primary" />
                                        <div>
                                            <span style={{ fontWeight: 800, fontSize: '0.75rem', display: 'block' }}>Major Projects</span>
                                            <span style={{ fontSize: '0.625rem', color: 'var(--foreground-muted)' }}>High Effort / High Impact</span>
                                        </div>
                                    </div>
                                    {/* Low Impact / Low Effort */}
                                    <div style={{ background: 'white', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Clock size={20} style={{ color: 'var(--foreground-muted)' }} />
                                        <div>
                                            <span style={{ fontWeight: 800, fontSize: '0.75rem', display: 'block' }}>Fillers</span>
                                            <span style={{ fontSize: '0.625rem', color: 'var(--foreground-muted)' }}>Low Effort / Low Impact</span>
                                        </div>
                                    </div>
                                    {/* Low Impact / High Effort */}
                                    <div style={{ background: 'white', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <XOctagon size={20} className="text-danger" />
                                        <div>
                                            <span style={{ fontWeight: 800, fontSize: '0.75rem', display: 'block' }}>Thankless Tasks</span>
                                            <span style={{ fontSize: '0.625rem', color: 'var(--foreground-muted)' }}>High Effort / Low Impact</span>
                                        </div>
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.75rem', color: 'var(--foreground-muted)', marginTop: '1rem', textAlign: 'center' }}>
                                    Plot items scored 3 or lower here to prioritize your roadmap.
                                </p>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Audit;
