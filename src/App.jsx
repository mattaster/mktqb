import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Audit from './pages/Audit';
import Services from './pages/Services';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

import { Menu, X, FileSearch } from 'lucide-react';

const Navigation = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-content">
                    <Link to="/" className="flex" onClick={() => setIsOpen(false)} style={{ alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
                        <img src="/logo.png" alt="MarketingQB Logo" style={{ height: '3rem', width: 'auto' }} />
                    </Link>

                    <div className="nav-links">
                        <Link to="/#problem" className="nav-link">The Gap</Link>
                        <Link to="/#difference" className="nav-link">The Difference</Link>
                        <Link to="/#framework" className="nav-link">Framework</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/about" className="nav-link">About Us</Link>
                        <Link to="/audit" className="nav-link" style={{ color: 'var(--accent)', fontWeight: 700 }}>Assessment</Link>
                        <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Quick Start</Link>
                    </div>

                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
                <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        <img src="/logo.png" alt="MarketingQB Logo" style={{ height: '3rem', width: 'auto' }} />
                    </Link>
                    <button className="menu-toggle" onClick={toggleMenu} style={{ display: 'block' }}>
                        <X size={32} />
                    </button>
                </div>
                <div className="mobile-menu-links">
                    <Link to="/#problem" className="mobile-menu-link" onClick={() => setIsOpen(false)}>The Gap</Link>
                    <Link to="/#difference" className="mobile-menu-link" onClick={() => setIsOpen(false)}>The Difference</Link>
                    <Link to="/#framework" className="mobile-menu-link" onClick={() => setIsOpen(false)}>Framework</Link>
                    <Link to="/services" className="mobile-menu-link" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/about" className="mobile-menu-link" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link to="/audit" className="mobile-menu-link" style={{ color: 'var(--accent)' }} onClick={() => setIsOpen(false)}>Diagnostic Assessment</Link>
                    <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', textDecoration: 'none' }} onClick={() => setIsOpen(false)}>Request a Diagnostic</Link>
                </div>
            </div>
        </nav>
    );
};

const Footer = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    // Generate and shuffle the 20 logos exactly once on mount to prevent re-renders
    const randomizedLogos = React.useMemo(() => {
        const baseLogos = Array.from({ length: 20 }, (_, i) => `/logos/logo_${i + 1}.png`);
        return baseLogos.sort(() => Math.random() - 0.5);
    }, []);

    const renderCarousel = () => {
        // We duplicate the logos array to ensure it covers wide screens
        // The CSS shifts the track exactly -50% to create an infinite loop.
        const duplicatedLogos = [...randomizedLogos, ...randomizedLogos, ...randomizedLogos, ...randomizedLogos];

        return (
            <div className="logo-carousel-wrapper">
                <div style={{ marginBottom: '2rem', fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground-muted)' }}>Our Experience</div>
                <div className="logo-carousel-track">
                    {duplicatedLogos.map((src, idx) => (
                        <div key={idx} className="logo-carousel-item">
                            <img src={src} alt={`Partner Logo ${idx}`} onError={(e) => {
                                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='60' viewBox='0 0 160 60'%3E%3Crect width='160' height='60' fill='%23f1f5f9' rx='8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='600' fill='%2394a3b8'%3EPlaceholder%3C/text%3E%3C/svg%3E";
                            }} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <footer className="section" style={{ background: 'white', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <div className="container">
                <h2 className="footer-h2" style={{ fontSize: '4rem', marginBottom: '3rem' }}>Stop Guessing.<br /><span className="text-gradient">Start Measuring.</span></h2>
                <div className="flex" style={{ justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <Link to="/services" className="btn btn-outline" style={{ padding: '1.25rem 3rem', textDecoration: 'none' }}>Explore Services</Link>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', textDecoration: 'none' }}>Request a Diagnostic</Link>
                </div>

                {isHome && renderCarousel()}

                <div className="footer-content" style={{ marginTop: '8rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--foreground-muted)', fontSize: '0.875rem' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="MarketingQB Logo" style={{ height: '2.5rem', width: 'auto' }} />
                    </Link>
                    <div className="flex" style={{ gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link to="/services" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>Services</Link>
                        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>About Us</Link>
                        <Link to="/audit" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>Diagnostic Assessment</Link>
                        <span>© 2026 MarketingQB. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-wrapper">
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/audit" element={<Audit />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
