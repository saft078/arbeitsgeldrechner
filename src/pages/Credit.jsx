import React, { useState, useEffect } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Percent, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import AdUnit from '../components/AdUnit';
import SEO from '../components/SEO';

const Credit = () => {
    const [amount, setAmount] = useState(20000);
    const [months, setMonths] = useState(36);
    const [offers, setOffers] = useState([]);

    const calculateRate = (rate, amt, mos) => {
        const totalInterest = amt * (rate / 100) * (mos / 12);
        const monthly = (amt + totalInterest) / mos;
        return monthly.toFixed(2);
    };

    useEffect(() => {
        const banks = [
            { name: "Good Finance", rate: 4.4, logo: "GF", color: "bg-emerald-600", tag: "Tiefster Zins" },
            { name: "Bank-now", rate: 4.9, logo: "BN", color: "bg-yellow-500" },
            { name: "Migros Bank", rate: 4.7, logo: "MB", color: "bg-orange-500" },
            { name: "Cembra", rate: 7.95, logo: "CM", color: "bg-black" },
        ];
        setOffers(banks.sort((a, b) => a.rate - b.rate));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <SEO
                title="Privatkredit Vergleich 2025"
                description="Aktuelle Kreditzinsen Schweiz. Vergleichen Sie Bank-now, Cembra, Migros Bank und mehr. Günstige Privatkredite berechnen."
                keywords="Privatkredit, Kreditrechner, Zinsen Schweiz, Kredit aufnehmen, Bank-now, Cembra"
            />
            <div className="text-center mb-16 space-y-4">
                <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border border-red-100">
                    Kreditvergleich 2025
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                    Der beste Zins, <br />
                    <span className="text-gradient">garantiert neutral.</span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed">
                    Vergleichen Sie echte Angebote statt Werbe-Lockvogel.
                    Wir zeigen Ihnen, was Ihr Kredit wirklich kostet.
                </p>
            </div>

            <AdUnit slot="credit-top" label="Werbung" />

            {/* Split Layout: Calculator Left, Results Right */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">

                {/* LEFT: Calculator Input */}
                <div className="lg:col-span-5 sticky top-24">
                    <div className="glass-panel p-8 bg-white/80">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                <Calculator size={20} />
                            </div>
                            <h2 className="text-2xl font-bold">Wunschkredit berechnen</h2>
                        </div>

                        <div className="space-y-10">
                            {/* Amount Slider */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Kreditbetrag</label>
                                    <div className="text-3xl font-bold text-slate-900 border-b-2 border-red-100 px-2">
                                        CHF {amount.toLocaleString()}
                                    </div>
                                </div>
                                <input
                                    type="range" min="1000" max="100000" step="1000"
                                    value={amount}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    className="w-full"
                                />
                                <div className="flex justify-between mt-2 text-xs font-medium text-slate-400">
                                    <span>1'000</span>
                                    <span>100'000</span>
                                </div>
                            </div>

                            {/* Months Slider */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Laufzeit</label>
                                    <div className="text-3xl font-bold text-slate-900 border-b-2 border-red-100 px-2">
                                        {months} <span className="text-lg text-slate-500">Monate</span>
                                    </div>
                                </div>
                                <input
                                    type="range" min="12" max="84" step="12"
                                    value={months}
                                    onChange={(e) => setMonths(Number(e.target.value))}
                                    className="w-full"
                                />
                                <div className="flex justify-between mt-2 text-xs font-medium text-slate-400">
                                    <span>12 Mt.</span>
                                    <span>84 Mt.</span>
                                </div>
                            </div>
                        </div>

                        {/* Summary Box */}
                        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="text-center">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Beste Rate ab</span>
                                <div className="flex items-center justify-center gap-2 my-2">
                                    <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
                                        {calculateRate(4.4, amount, months)}
                                    </span>
                                    <span className="text-xs font-bold text-slate-400 self-end mb-2">CHF / Mt.</span>
                                </div>
                                <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                                    <Percent size={10} /> Zins ab 4.4%
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-start gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-50 text-sm text-blue-900/70 leading-relaxed">
                        <ShieldCheck className="shrink-0 mt-0.5 text-blue-600" size={18} />
                        <p>Ihre Anfrage hat <strong>keinen Einfluss</strong> auf Ihren ZEK-Score (Bonität). Die Berechnung ist unverbindlich.</p>
                    </div>
                </div>

                {/* RIGHT: Offer Cards */}
                <div className="lg:col-span-7 space-y-5">
                    {offers.map((bank, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            key={bank.name}
                            className="group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300"
                        >
                            {bank.tag && (
                                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider shadow-sm">
                                    {bank.tag}
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                {/* Bank Logo/Info */}
                                <div className="flex items-center gap-5 w-full md:w-auto">
                                    <div className={`w-16 h-16 rounded-2xl ${bank.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                        {bank.logo}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">{bank.name}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-bold">Zins: {bank.rate}%</span>
                                            <span className="text-xs text-slate-400">Effektiv</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Calculation & Action */}
                                <div className="flex flex-col md:items-end gap-1 w-full md:w-auto text-center md:text-right border-t md:border-t-0 border-slate-50 pt-4 md:pt-0 mt-2 md:mt-0">
                                    <div className="text-3xl font-bold text-slate-900">
                                        {calculateRate(bank.rate, amount, months)}
                                    </div>
                                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">CHF / Monat</div>

                                    <button className="w-full md:w-auto py-3 px-6 text-sm flex items-center justify-center gap-2 font-bold text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all border border-slate-200">
                                        Tarifdetails <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center">
                <p className="text-sm text-slate-400">
                    *Berechnungsbeispiel: Kreditbetrag CHF 10'000.–, Laufzeit 12 Monate, effektiver Jahreszins zwischen 4.40% und 9.95%.
                    Vergabe verboten, falls sie zur Überschuldung führt (Art. 3 UWG).
                </p>
            </div>
        </div>
    );
};

export default Credit;
