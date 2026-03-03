import React from 'react';
import { motion } from 'framer-motion';
import { Search, UserPlus, PlayCircle, ArrowRight } from 'lucide-react';

const Playbook = () => {
    const steps = [
        {
            icon: Search,
            title: "Diagnose",
            subtitle: "The Gap Audit",
            desc: "We look under the hood of your GTM operations to find the leakage.",
            color: "bg-amber-500"
        },
        {
            icon: UserPlus,
            title: "Assign",
            subtitle: "Pod Matching",
            desc: "We assign a veteran leader from your industry to run the offense.",
            color: "bg-blue-500"
        },
        {
            icon: PlayCircle,
            title: "Run",
            subtitle: "Execution Engine",
            desc: "Direct leadership over tactical vendors with weekly revenue math.",
            color: "bg-emerald-500"
        }
    ];

    return (
        <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
                    >
                        <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-current/20`}>
                            <step.icon className="w-6 h-6" />
                        </div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Step {i + 1}</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <div className="text-blue-600 font-bold text-sm mb-4">{step.subtitle}</div>
                        <p className="text-slate-600 leading-relaxed">{step.desc}</p>

                        {i < steps.length - 1 && (
                            <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                                <ArrowRight className="w-8 h-8" />
                            </div>
                        )}

                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-slate-50 rounded-tl-full -mr-12 -mb-12 group-hover:bg-blue-50 transition-colors"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Playbook;
