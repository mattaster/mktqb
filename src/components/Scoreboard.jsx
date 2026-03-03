import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Scoreboard = () => {
    const stats = [
        { label: 'Pipeline Velocity', value: '+24%', color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'CAC Efficiency', value: '-18%', color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'SQL Conversion', value: '3.2x', color: 'text-purple-600', bg: 'bg-purple-50' }
    ];

    return (
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="text-white text-lg font-bold">Revenue Scoreboard</h3>
                    <p className="text-slate-400 text-sm">Real-time performance metrics</p>
                </div>
                <div className="bg-slate-800 px-3 py-1 rounded text-xs font-mono text-emerald-400 border border-slate-700">
                    LIVE_FEED: ACTIVE
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-800 p-4 rounded-xl border border-slate-700"
                    >
                        <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</div>
                        <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                    </motion.div>
                ))}
            </div>

            <div className="space-y-4">
                {[
                    { task: 'GTM Roadmap Alpha', status: 'Completed', progress: 100 },
                    { task: 'Sales Alignment Workshop', status: 'In Progress', progress: 75 },
                    { task: 'Unit Economics Audit', status: 'In Progress', progress: 40 }
                ].map((item, i) => (
                    <div key={i} className="group">
                        <div className="flex justify-between text-sm mb-1.5">
                            <span className="text-slate-200 font-medium flex items-center gap-2">
                                {item.progress === 100 ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                                {item.task}
                            </span>
                            <span className="text-slate-500 font-mono text-xs">{item.progress}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.progress}%` }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className={`h-full ${item.progress === 100 ? 'bg-emerald-500' : 'bg-blue-600'}`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative pulse element */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
    );
};

export default Scoreboard;
