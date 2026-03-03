import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        // Load HubSpot Script
        const script = document.createElement('script');
        script.src = 'https://js-na2.hsforms.net/forms/embed/243314838.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup: remove standard script but the form handles its own rendering
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="contact-page">
            <header className="section" style={{ background: 'white', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="badge" style={{ marginBottom: '1.5rem' }}>Get Started</div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2rem' }}>
                            Request Your <span className="text-gradient">Diagnostic</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--foreground-muted)', marginBottom: '0' }}>
                            Ready to move the scoreboard? Complete the form below to request a deep-dive diagnostic of your current marketing leadership and growth engine.
                        </p>
                    </div>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'flex-start' }}>
                        {/* Sidebar Information */}
                        <div>
                            <div className="card" style={{ marginBottom: '2rem', background: 'var(--background-soft)' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>What to Expect</h3>
                                <div className="grid" style={{ gap: '1.25rem' }}>
                                    {[
                                        "20-Minute Intro Call",
                                        "Strategy Gap Analysis",
                                        "Revenue Roadmap Overview",
                                        "Direct Executive Access"
                                    ].map((item, i) => (
                                        <div key={i} className="flex" style={{ gap: '1rem', alignItems: 'center' }}>
                                            <CheckCircle2 size={20} color="var(--accent)" />
                                            <span style={{ fontWeight: 600 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>

                        {/* HubSpot Form Embed */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card"
                            style={{ padding: '3rem', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}
                        >
                            <div
                                className="hs-form-frame"
                                data-region="na2"
                                data-form-id="54ff54c2-ddc8-455c-a30e-911df9c5e727"
                                data-portal-id="243314838"
                            >
                                {/* The HubSpot script will render the form into this div */}
                                <div style={{ textAlign: 'center', padding: '2rem' }}>
                                    <div className="text-gradient" style={{ fontWeight: 700 }}>Loading Secure Form...</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
