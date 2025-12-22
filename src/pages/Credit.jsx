import React, { useState, useEffect } from 'react';
import { Banknote, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Credit = () => {
    const [amount, setAmount] = useState(20000);
    const [months, setMonths] = useState(36);
    const [offers, setOffers] = useState([]);

    const calculateRate = (rate, amt, mos) => {
        // Simplified formula: (Amount * (1 + rate*mons/12)) / mos
        // Accurate financing formula is more complex, this is approximation for display
        const totalInterest = amt * (rate / 100) * (mos / 12);
        const monthly = (amt + totalInterest) / mos;
        return monthly.toFixed(2);
    };

    useEffect(() => {
        const banks = [
            { name: "Bank-now", rate: 4.9, bg: "bg-yellow-50", border: "border-yellow-200" },
            { name: "Cembra", rate: 7.95, bg: "bg-slate-50", border: "border-slate-200" },
            { name: "Migros Bank", rate: 4.7, bg: "bg-orange-50", border: "border-orange-200" },
            { name: "Good Finance", rate: 4.4, bg: "bg-emerald-50", border: "border-emerald-200", tag: "Tiefster Zins" }
        ];
        setOffers(banks.sort((a, b) => a.rate - b.rate));
    }, []);

    return (
        <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Privatkredit Vergleich</h1>
                <p className="text-slate-500">Neutral und transparent. Finden Sie den besten Zins der Schweiz.</p>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
                {/* Calculator Panel */}
                <div className="md:col-span-5 space-y-6">
                    <div className="glass-card p-8 rounded-2xl bg-white shadow-xl">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Calculator className="text-red-600" /> Kreditrechner
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="font-bold text-slate-700">Betrag</label>
                                    <span className="text-red-600 font-mono font-bold">CHF {amount.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range" min="1000" max="100000" step="1000"
                                    value={amount}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    className="w-full accent-red-600 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-1">
                                    <span>1'000</span>
                                    <span>100'000</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="font-bold text-slate-700">Laufzeit</label>
                                    <span className="text-red-600 font-mono font-bold">{months} Monate</span>
                                </div>
                                <input
                                    type="range" min="12" max="84" step="12"
                                    value={months}
                                    onChange={(e) => setMonths(Number(e.target.value))}
                                    className="w-full accent-red-600 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-1">
                                    <span>12 Mt.</span>
                                    <span>84 Mt.</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <div className="text-center">
                                <span className="text-sm text-slate-400 uppercase tracking-wide">Monatsrate ab</span>
                                <div className="text-5xl font-bold text-slate-900 my-2">
                                    {calculateRate(4.4, amount, months)}
                                </div>
                                <span className="text-xs text-slate-400">CHF (bei 4.4% Zins)</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-sm text-blue-800">
                        <p className="font-bold mb-2 flex items-center gap-2"><CheckCircle2 size={16} /> Gut zu wissen</p>
                        <p>Ein Kreditantrag ist in der Schweiz immer kostenlos. Wir leiten Sie direkt zur Bank weiter - ohne Umwege und Provisionen.</p>
                    </div>
                </div>

                {/* Results List */}
                <div className="md:col-span-7 space-y-4">
                    {offers.map((bank, idx) => (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            key={bank.name}
                            className={`relative p-6 rounded-xl border ${bank.border} bg-white hover:shadow-lg transition-all group`}
                        >
                            {bank.tag && (
                                <span className="absolute -top-3 right-6 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                                    {bank.tag}
                                </span>
                            )}
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900">{bank.name}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">Zins: {bank.rate}%</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-slate-900">
                                        {calculateRate(bank.rate, amount, months)}
                                    </div>
                                    <div className="text-xs text-slate-400 mb-2">CHF / Monat</div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
                                <button className="text-sm font-semibold text-red-600 flex items-center hover:gap-2 transition-all">
                                    Jetzt beantragen <ArrowRight size={16} className="ml-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Credit;
