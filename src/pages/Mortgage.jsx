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
        <div className="pb-20">
            <SEO
                title="Hypotheken Zinsen Schweiz 2025 | Aktueller Zinsmonitor"
                description="Aktuelle Hypothekarzinsen im Überblick. Festhypothek oder SARON? Neutrale Informationen für Eigenheimbesitzer. Jetzt Zinsen vergleichen."
                keywords="Hypothek, Zinsen, Festhypothek, SARON, Hauskauf, Tragbarkeit, Hypothekenrechner"
            />

            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden mb-12">
                <img
                    src="/images/mortgage-hero.png"
                    alt="Hypotheken Vergleich"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-2xl text-white"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hypotheken Zins-Monitor 2025</h1>
                            <p className="text-lg text-slate-200 mb-6">Verhandeln Sie besser mit Ihrer Bank. Wir zeigen Ihnen die aktuellen Marktzinsen und geben Profi-Tipps zur Finanzierung.</p>
                            <div className="flex gap-4">
                                <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Täglich aktualisierte Richtsätze</span>
                                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Unabhängige Analyse</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <AdUnit slot="mortgage-top" label="Zins-Anzeige" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
                    {/* Left: Rates & Tools */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-slate-900">Aktuelle Marktkonditionen</h2>
                            <span className="text-sm text-slate-500 italic">Stand: Dez 2025</span>
                        </div>

                        <div className="grid gap-4">
                            {mortgages.map((m, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    key={i}
                                    className="flex justify-between items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div>
                                        <div className="font-bold text-xl text-slate-900">{m.type}</div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${m.trend === 'stabil' ? 'bg-slate-100 text-slate-600' : m.trend === 'steigend' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>
                                                Trend: {m.trend}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-slate-900 bg-slate-50 px-4 py-2 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                            {m.rate}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <AdUnit slot="mortgage-middle" label="Werbung" />

                        {/* Informational Guide */}
                        <div className="bg-white rounded-3xl p-8 mt-12 border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Finanzierungs-Grundlagen</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <h3 className="font-bold text-blue-600 flex items-center gap-2">
                                        <Percent size={18} /> Die 5% Hürde
                                    </h3>
                                    <p className="text-sm text-slate-600 italic">Banken rechnen bei der Tragbarkeit mit einem kalkulatorischen Zins von 5%. Dies dient als Sicherheitspuffer für steigende Zinsen.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-blue-600 flex items-center gap-2">
                                        <Percent size={18} /> 20% Eigenkapital
                                    </h3>
                                    <p className="text-sm text-slate-600">Mindestens 20% des Kaufpreises müssen Sie selbst aufbringen. Davon müssen mindestens 10% aus "echtem" Eigenkapital (Sparguthaben, Säule 3a) stammen.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-blue-600 flex items-center gap-2">
                                        <Briefcase size={18} /> SARON vs. Fest
                                    </h3>
                                    <p className="text-sm text-slate-600 font-medium">Saron-Hypotheken sind oft günstiger, bergen aber das Risiko schwankender Raten. Festhypotheken bieten Planungssicherheit über 2 bis 15 Jahre.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-blue-600 flex items-center gap-2">
                                        <Briefcase size={18} /> Amortisation
                                    </h3>
                                    <p className="text-sm text-slate-600">Die 2. Hypothek muss innerhalb von 15 Jahren oder bis zum Erreichen des Pensionsalters zurückgezahlt werden.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4">Tragbarkeit Check</h3>
                                <p className="text-sm text-slate-400 mb-6 leading-relaxed">Die laufenden Kosten der Immobilie dürfen maximal <span className="text-white font-bold">33% Ihres Bruttoeinkommens</span> betragen.</p>
                                <div className="space-y-3">
                                    <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                        <div className="text-xs text-slate-400">Tipp:</div>
                                        <div className="font-bold">Eigenleistungen anrechnen</div>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                        <div className="text-xs text-slate-400">Vorsorge:</div>
                                        <div className="font-bold">Verpfändung vs. Bezug</div>
                                    </div>
                                </div>
                            </div>
                            <Home className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 -rotate-12" />
                        </div>

                        <AdUnit slot="mortgage-sidebar" label="Partner" />

                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4">Hypotheken FAQ</h3>
                            <div className="space-y-4">
                                <details className="group">
                                    <summary className="text-sm font-bold cursor-pointer list-none flex justify-between items-center text-slate-700">
                                        Wann Hypothek erneuern?
                                        <ArrowRight size={14} className="group-open:rotate-90 transition-transform" />
                                    </summary>
                                    <p className="text-xs text-slate-500 mt-2">Idealerweise 12-18 Monate vor Ablauf. Mit einem Forward-Zuschlag können Sie die aktuellen Zinsen für die Zukunft reservieren.</p>
                                </details>
                                <details className="group">
                                    <summary className="text-sm font-bold cursor-pointer list-none flex justify-between items-center text-slate-700">
                                        Hypothek splitten?
                                        <ArrowRight size={14} className="group-open:rotate-90 transition-transform" />
                                    </summary>
                                    <p className="text-xs text-slate-500 mt-2">Ja, das Verteilen auf verschiedene Laufzeiten (z.B. 5 und 10 Jahre) reduziert das Zinsänderungsrisiko.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mortgage;
