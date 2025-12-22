import React from 'react';
import { Home, ArrowRight, Percent, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';

const mortgages = [
    { type: 'Festhypothek 2 Jahre', rate: '0.95% - 1.25%', trend: 'stabil' },
    { type: 'Festhypothek 5 Jahre', rate: '1.15% - 1.45%', trend: 'steigend' },
    { type: 'Festhypothek 10 Jahre', rate: '1.35% - 1.75%', trend: 'steigend' },
    { type: 'SARON (Flexibel)', rate: '0.90% + Marge', trend: 'volatil' },
];

const Mortgage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <SEO
                title="Hypotheken Zinsen Schweiz 2025"
                description="Aktuelle Hypothekarzinsen im Überblick. Festhypothek oder SARON? Neutrale Informationen für Eigenheimbesitzer."
                keywords="Hypothek, Zinsen, Festhypothek, SARON, Hauskauf, Tragbarkeit"
            />

            <section className="text-center max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100 mb-6">
                    Wohnen & Immobilien
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                    Der Zins-Monitor <span className="text-gradient">2025</span>
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed">
                    Vergleichen Sie die Richtsätze für Festhypotheken und SARON-Modelle.
                    Unabhängige Daten, damit Sie bei der Bank besser verhandeln können.
                </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
                {/* RATES TABLE */}
                <div className="glass-card bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Home className="text-red-600" /> Aktuelle Richtsätze
                    </h2>
                    <div className="space-y-4">
                        {mortgages.map((m, i) => (
                            <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div>
                                    <div className="font-bold text-slate-900">{m.type}</div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold tracking-wide mt-1">Trend: {m.trend}</div>
                                </div>
                                <div className="text-right">
                                    <div className="bg-white px-3 py-1 rounded shadow-sm border border-slate-200 font-mono font-bold text-lg text-slate-800">
                                        {m.rate}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* INFO / PROVIDER LINKS */}
                <div className="space-y-6">
                    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-xl font-bold mb-4">Wichtig zu wissen</h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            Der "Schaufenster-Zins" ist selten der Endpreis. Mit guter Bonität und wenig Belehnung können Sie oft <strong>0.1% bis 0.3%</strong> unter diesen Raten abschliessen.
                        </p>
                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                            <strong className="block text-white mb-2">Tragbarkeits-Regel:</strong>
                            <span className="text-sm text-slate-300">Die Kosten (Zins + Nebenkosten + Amortisation) dürfen maximal 33% Ihres Brutto-Einkommens betragen. Rechnen Sie immer mit einem kalkulatorischen Zins von 5%.</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <a href="https://www.ubs.com/ch/de/private/mortgages.html" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-200 rounded-xl text-center hover:shadow-md transition-all">
                            <strong className="block text-slate-900 mb-1">UBS Hypotheken</strong>
                            <span className="text-xs text-slate-500">Zur Webseite &rarr;</span>
                        </a>
                        <a href="https://www.zkb.ch/de/private/hypotheken.html" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-200 rounded-xl text-center hover:shadow-md transition-all">
                            <strong className="block text-slate-900 mb-1">ZKB Hypotheken</strong>
                            <span className="text-xs text-slate-500">Zur Webseite &rarr;</span>
                        </a>
                        {/* More placeholders */}
                    </div>
                </div>
            </div>

            <AdUnit slot="mortgage-bottom" />
        </div>
    );
};

export default Mortgage;
