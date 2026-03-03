import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
    ArrowRight
} from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-content">
                    <Link to="/" className="flex" style={{ alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
                        <img src="/logo.png" alt="MarketingQB Logo" style={{ height: '3rem', width: 'auto' }} />
                    </Link>

                    <div className="nav-links">
                        <Link to="/#problem" className="nav-link">The Gap</Link>
                        <Link to="/#difference" className="nav-link">The Difference</Link>
                        <Link to="/#framework" className="nav-link">Framework</Link>
                        <Link to="/about" className="nav-link">About Us</Link>
                        <button className="btn btn-primary">Request a Diagnostic</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="section" style={{ background: 'white', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '4rem', marginBottom: '3rem' }}>Stop Guessing.<br /><span className="text-gradient">Start Measuring.</span></h2>
                <div className="flex" style={{ justifyContent: 'center', gap: '1.5rem' }}>
                    <button className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Request a Diagnostic</button>
                    <a href="https://mktqb.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1.25rem 3rem', textDecoration: 'none' }}>Join the Huddle</a>
                </div>

                <div style={{ marginTop: '8rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--foreground-muted)', fontSize: '0.875rem' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="MarketingQB Logo" style={{ height: '2.5rem', width: 'auto' }} />
                    </Link>
                    <div className="flex" style={{ gap: '2rem' }}>
                        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>About Us</Link>
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
                </Routes>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
