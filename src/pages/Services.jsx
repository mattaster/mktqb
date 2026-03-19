import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Search,
    Users,
    Lightbulb,
    CheckCircle2
} from 'lucide-react';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: 'audit',
            title: 'Diagnostic Audit',
            icon: <Search size={32} />,
            color: 'var(--accent)',
            bgColor: 'var(--accent-soft)',
            description: "A high-fidelity inspection of your entire revenue engine. We identify the specific points where budget is burning and pipeline is stalling.",
            features: [
                "Full funnel conversion analysis",
                "Vendor and agency ROI audit",
                "Tech stack utilization review",
                "90-day actionable battle plan"
            ]
        },
        {
            id: 'leadership',
            title: 'Embedded Leadership',
            icon: <Users size={32} />,
            color: 'var(--primary)',
            bgColor: '#f1f5f9',
            description: "We don't just hand you a strategy and walk away. We embed our veteran executives into your huddles to own the revenue math and manage your teams.",
            features: [
                "Fractional CMO / Revenue Leadership",
                "Cross-channel vendor management",
                "Weekly pipeline and performance huddles",
                "Hiring and team structuring"
            ]
        },
        {
            id: 'coaching',
            title: 'Executive Coaching',
            icon: <Lightbulb size={32} />,
            color: 'var(--success)',
            bgColor: '#d1fae5',
            description: "Direct 1-on-1 strategic advisory for founders and internal leaders who need pattern recognition and guidance to scale efficiently.",
            features: [
                "Bi-weekly strategic advisory calls",
                "Real-time problem solving and sounding board",
                "Leadership development for internal teams",
                "Market positioning and messaging review"
            ]
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <header className="section" style={{ background: 'var(--background)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="badge" style={{ marginBottom: '2rem' }}>Our Capabilities</div>
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem' }}>
                            Precision Engineering for <br />
                            <span className="text-gradient">Revenue Growth.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
                            Whether you need a full diagnostic of your current efforts, a fractional executive to take the wheel, or high-level strategic advisory, our solutions are designed to stop the bleeding and scale your pipeline.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Services Grid */}
            <section className="section" style={{ background: 'white', borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="grid" style={{ gap: '4rem' }}>
                        {services.map((service, idx) => (
                            <motion.div 
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="card flex" 
                                style={{ gap: '3rem', flexDirection: idx % 2 === 1 ? 'row-reverse' : 'row', alignItems: 'center', flexWrap: 'wrap' }}
                            >
                                <div style={{ flex: '1 1 400px' }}>
                                    <div style={{ width: '4rem', height: '4rem', background: service.bgColor, color: service.color, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                                        {service.icon}
                                    </div>
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.title}</h2>
                                    <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
                                        {service.description}
                                    </p>
                                    <Link to="/contact" className="btn btn-outline" style={{ textDecoration: 'none' }}>
                                        Discuss this service <ArrowRight size={18} />
                                    </Link>
                                </div>
                                <div style={{ flex: '1 1 400px', background: 'var(--background)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        What's Included
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1.25rem' }}>
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex" style={{ gap: '1rem', fontSize: '1.05rem', color: 'var(--foreground)' }}>
                                                <CheckCircle2 size={20} style={{ color: service.color, flexShrink: 0, marginTop: '0.1rem' }} /> 
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Not sure where to start?</h2>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', lineHeight: '1.7' }}>
                        Book a brief discovery call with our team. We'll help you identify the right engagement model for your current growth bottlenecks.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem', textDecoration: 'none' }}>
                        Book a Discovery Call <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Services;
