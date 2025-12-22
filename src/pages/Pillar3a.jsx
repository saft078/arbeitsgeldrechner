import React from 'react';
import { PiggyBank, ArrowRight, ShieldCheck, TrendingUp, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';

const providers = [
    { name: 'VIAC', fee: '0.44%', type: 'App-Lösung', min: '1 CHF', url: 'https://viac.ch', logo: 'bg-green-600' },
    { name: 'Frankly', fee: '0.45%', type: 'ZKB Sparen 3', min: '1 CHF', url: 'https://frankly.ch', logo: 'bg-blue-600' },
    { name: 'Finpension', fee: '0.39%', type: 'Unabhängig', min: '1 CHF', url: 'https://finpension.ch', logo: 'bg-indigo-600' },
    { name: 'Selma', fee: '0.68%', type: 'Robo-Advisor', min: '2000 CHF', url: 'https://selma.io', logo: 'bg-pink-600' },
];

const Pillar3a = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <SEO
                title="Säule 3a Vergleich 2025"
                description="Der neutrale Vergleich für Ihre Vorsorge. VIAC, Frankly, Finpension und Banken im Check. Gebühren sparen."
                keywords="Säule 3a, Vorsorge, VIAC, Frankly, ZKB, UBS, Steuern sparen"
            />

            <section className="text-center max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border border-red-100 mb-6">
                    Vorsorge Schweiz
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                    Mehr Rente. <span className="text-gradient">Weniger Gebühren.</span>
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed">
                    Die Säule 3a ist der wichtigste Hebel für Ihre finanzielle Zukunft und spart massiv Steuern.
                    Vergleichen Sie hier die besten digitalen Lösungen – neutral und direkt.
                </p>
            </section>

            <AdUnit slot="adsense-pillar-top" />

            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* LIST OF PROVIDERS */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <TrendingUp className="text-red-600" /> Top Digitale Anbieter
                    </h2>
                    {providers.map((p, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={p.name}
                            className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full ${p.logo} flex items-center justify-center text-white font-bold`}>
                                    {p.name[0]}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{p.name}</h3>
                                    <div className="flex gap-2 text-xs font-medium text-slate-500">
                                        <span className="bg-slate-100 px-2 py-0.5 rounded">Gebühr: ~{p.fee}</span>
                                        <span>• {p.type}</span>
                                    </div>
                                </div>
                            </div>
                            <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary py-2 px-4 text-sm flex items-center gap-2"
                            >
                                Zur Webseite <ArrowRight size={14} />
                            </a>
                        </motion.div>
                    ))}
                    <div className="p-4 bg-slate-50 rounded-xl text-center text-sm text-slate-500 mt-4 border border-dashed border-slate-300">
                        Wir erhalten keine Provisionen für diese Links. Direkte Weiterleitung.
                    </div>
                </div>

                {/* INFO BOX */}
                <div className="glass-card p-8 bg-white/60 sticky top-24">
                    <h3 className="text-2xl font-bold mb-6">Warum Säule 3a?</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <PiggyBank className="text-green-600 shrink-0" />
                            <div>
                                <strong className="block text-slate-900">Steuern sparen (bis CHF 2'000.-/Jahr)</strong>
                                <span className="text-sm text-slate-500">Einzahlungen können Sie direkt vom steuerbaren Einkommen abziehen (Max. CHF 7'056.- für 2025).</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <TrendingUp className="text-blue-600 shrink-0" />
                            <div>
                                <strong className="block text-slate-900">Zinseszinseffekt nutzen</strong>
                                <span className="text-sm text-slate-500">Mit Wertschriften-Lösungen (Aktien) wächst Ihr Geld langfristig viel stärker als auf dem Konto.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <ShieldCheck className="text-slate-600 shrink-0" />
                            <div>
                                <strong className="block text-slate-900">Selbstbestimmte Vorsorge</strong>
                                <span className="text-sm text-slate-500">Das Geld gehört Ihnen. Sie entscheiden, wie es angelegt wird (Nachhaltig, Global, Schweiz).</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pillar3a;
