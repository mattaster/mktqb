import React from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Target,
    Zap,
    ChevronRight,
    TrendingUp,
    ArrowRight,
    BarChart3,
    Search,
    Users,
    ShieldCheck,
    Globe,
    PieChart,
    Lock
} from 'lucide-react';
import Scoreboard from './components/Scoreboard';
import Playbook from './components/Playbook';

const App = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 font-sans">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center gap-2">
                            <div className="bg-slate-900 p-2 rounded-lg shadow-sm">
                                <LayoutDashboard className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-slate-900 italic">MKT<span className="text-blue-600">QB</span></span>
                        </div>
                        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-500 uppercase tracking-widest">
                            <a href="#problem" className="hover:text-blue-600 transition-colors">The Gap</a>
                            <a href="#difference" className="hover:text-blue-600 transition-colors">The QB Difference</a>
                            <a href="#framework" className="hover:text-blue-600 transition-colors">Framework</a>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                                Request a Diagnostic
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-24 pb-32 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8">
                                <Lock className="w-3 h-3" /> Fractional Marketing Leadership
                            </div>
                            <h1 className="text-6xl sm:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                                Built for the <br />
                                <span className="text-blue-600">Scoreboard.</span>
                            </h1>
                            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl font-medium">
                                Stop hiring agencies that optimize for activity. We provide the veteran leadership required to run your growth engine by the numbers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-blue-600 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3 group">
                                    Request a Diagnostic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-xl font-black text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                                    View GTM Framework
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <Scoreboard />
                            {/* Background accent */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-50 rounded-full blur-[120px] opacity-50"></div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* The Mid-Market Gap */}
            <section id="problem" className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <div className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4">The Problem</div>
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 tracking-tight">The Mid-Market <span className="underline decoration-red-500 underline-offset-8">Gap</span></h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                Companies between $5M and $50M often outgrow their marketing manager but can't justify a full-time, $250k CMO. This creates a leadership vacuum where strategy defaults to "what's the agency doing next?"
                            </p>
                            <div className="grid gap-6">
                                {[
                                    { title: "CMO Instability", desc: "Constant strategic drift without steady leadership." },
                                    { title: "Disconnected Vendors", desc: "Agencies working in silos on vanity metrics." },
                                    { title: "Revenue Mystery", desc: "No clear line from marketing spend to pipeline growth." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                            <Zap className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Industry Average Trap</span>
                                </div>
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-bold text-slate-700">Vanity Metrics (Activity)</span>
                                            <span className="text-emerald-500 font-bold">140%</span>
                                        </div>
                                        <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-slate-300 w-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-bold text-slate-900">Revenue Contribution</span>
                                            <span className="text-red-500 font-bold">12%</span>
                                        </div>
                                        <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500 w-[12%]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                                    <p className="text-slate-500 text-sm italic">"We're doing a lot, but what's working?"</p>
                                </div>
                            </div>
                            {/* Decorative blob */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-100 rounded-full blur-3xl -z-10 opacity-60"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The QB Difference */}
            <section id="difference" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">Leadership Over Placement</h2>
                        <p className="text-xl text-slate-500 font-medium">
                            Freelancer marketplaces give you talent. We give you leadership. A MarketingQB doesn't just fill a seat; they run the scoreboard.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="group p-10 bg-slate-50 rounded-3xl border-2 border-transparent hover:border-blue-100 transition-all">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black mb-6">Industry Pods</h3>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                We match by vertical. Your QB has already scaled companies in your industry, reducing ramp time and eliminating the "learning curve" tax.
                            </p>
                        </div>
                        <div className="group p-10 bg-slate-50 rounded-3xl border-2 border-transparent hover:border-blue-100 transition-all">
                            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-slate-200 group-hover:scale-110 transition-transform">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black mb-6">Unified Oversight</h3>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                One leader, across all channels. Your QB ensures that your SEO agency, paid media team, and CRM ops are all pulling the same revenue lever.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Framework */}
            <section id="framework" className="py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-20">
                        <div className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">The Framework</div>
                        <h2 className="text-5xl font-black mb-8 tracking-tighter">Execution is the <span className="text-blue-500">Strategy.</span></h2>
                    </div>

                    <Playbook />
                </div>

                {/* Background visual metaphor */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
            </section>

            {/* The Execution Engine (FCD) */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-600 rounded-[3rem] p-16 lg:p-24 text-white overflow-hidden relative flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-3/5 relative z-10">
                            <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-[0.9] tracking-tighter">
                                The Strategic Execution Engine (FCD)
                            </h2>
                            <p className="text-xl text-blue-100 mb-12 leading-relaxed font-medium">
                                Leadership is the QB. Tactics are the FCD. We provide a centralized execution layer to ensure your roadmap doesn't just sit on a slide deck—it hits the scoreboard.
                            </p>
                            <div className="flex flex-wrap gap-6 mb-12">
                                {["Tech Stack Ops", "Demand Gen", "Sales Alignment", "Predictable Pipeline"].map((tag, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20 font-bold">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <button className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-2xl shadow-blue-900/40">
                                Request a Diagnostic
                            </button>
                        </div>
                        <div className="lg:w-2/5 relative">
                            <div className="bg-blue-500/30 p-8 rounded-3xl border border-white/10 backdrop-blur-xl">
                                <PieChart className="w-32 h-32 text-white/50 mb-8" />
                                <div className="space-y-4">
                                    <div className="h-2 bg-white/20 rounded-full w-full"></div>
                                    <div className="h-2 bg-white/20 rounded-full w-4/5"></div>
                                    <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Final CTA */}
            <footer className="bg-slate-50 py-32 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-black text-slate-900 mb-12 tracking-tighter leading-tight">
                        Stop Guessing. <br />
                        Start Measuring.
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
                        <button className="bg-slate-900 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200">
                            Request a Diagnostic
                        </button>
                        <button className="bg-white text-slate-900 border-2 border-slate-200 px-12 py-6 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all">
                            Contact Us
                        </button>
                    </div>
                    <div className="pt-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex items-center gap-3">
                            <div className="bg-slate-900 p-1.5 rounded-md">
                                <LayoutDashboard className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-black italic">MKT<span className="text-blue-600">QB</span></span>
                        </div>
                        <nav className="flex gap-8 text-sm font-bold text-slate-400">
                            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
                            <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
                        </nav>
                        <p className="text-slate-400 text-sm font-medium">© 2024 MarketingQB. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
