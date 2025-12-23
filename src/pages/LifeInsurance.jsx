import React from 'react';
import { Umbrella, HeartHandshake, Shield, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';

const providers = [
    { name: 'Swiss Life', type: 'Risiko & Kapital', rating: 'Top', url: 'https://www.swisslife.ch', logo: 'bg-red-700' },
    { name: 'AXA', type: 'Risikoleben', rating: 'Sehr gut', url: 'https://www.axa.ch/de/privatkunden/angebote/vorsorge-vermoegen/todesfall.html', logo: 'bg-blue-800' },
    { name: 'Helvetia', type: 'Erwerbsunfähigkeit', rating: 'Gut', url: 'https://www.helvetia.com/ch/web/de/privatkunden/vorsorge/lebensversicherung.html', logo: 'bg-purple-700' },
    { name: 'Allianz', type: 'Kapitalbildend', rating: 'Stabil', url: 'https://www.allianz.ch/de/privatkunden/leben-vorsorge/', logo: 'bg-blue-600' },
    { name: 'Pax', type: 'Vorsorge', rating: 'Spezialist', url: 'https://www.pax.ch', logo: 'bg-green-700' },
];

const LifeInsurance = () => {
    return (
        <div className="pb-20">
            <SEO
                title="Lebensversicherung Vergleich Schweiz 2025"
                description="Schützen Sie Ihre Familie finanziell. Risiko-Lebensversicherung und Erwerbsunfähigkeit im neutralen Vergleich. Top Anbieter Schweiz."
                keywords="Lebensversicherung, Todesfallrisiko, 3. Säule b, Erwerbsunfähigkeit, Swiss Life, AXA, Familienabsicherung"
            />

            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden mb-12">
                <img
                    src="/images/life-hero.png"
                    alt="Lebensversicherung Vergleich"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-2xl text-white"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Lebensversicherung Vergleich</h1>
                            <p className="text-lg text-slate-200 mb-6">Sichern Sie Ihre Liebsten für den Ernstfall ab. Neutraler Vergleich von Risiko- und Vorsorgeschutz.</p>
                            <div className="flex gap-4">
                                <span className="bg-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Top Schutz für Familien</span>
                                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Steuern sparen (Säule 3a/b)</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <AdUnit slot="life-top" label="Anzeige" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
                    {/* Left: Providers */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-slate-900">Beste Anbieter in der Schweiz</h2>
                            <span className="text-sm text-slate-500">{providers.length} Gesellschaften im Vergleich</span>
                        </div>

                        {providers.map((p, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={p.name}
                                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all"
                            >
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-6 flex-1">
                                        <div className={`w-16 h-16 rounded-2xl ${p.logo} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                                            {p.name[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-slate-900">{p.name}</h3>
                                            <div className="flex gap-2 mt-1">
                                                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">{p.type}</span>
                                                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-wider">Rating: {p.rating}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 w-full md:w-auto">
                                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold transition-all text-sm text-center">
                                            Offerte anfordern
                                        </a>
                                        <span className="text-[10px] text-slate-400 text-center italic">Direkt beim Anbieter</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <AdUnit slot="life-middle" label="Werbung" />

                        {/* Informational Guide */}
                        <div className="bg-slate-50 rounded-3xl p-8 mt-12 border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Worauf Sie beim Abschluss achten müssen</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <h3 className="font-bold text-indigo-600">Todesfallkapital</h3>
                                    <p className="text-sm text-slate-600">Die Summe sollte etwa das 3- bis 5-fache Ihres Jahresgehalts betragen, plus offene Hypothekarschulden.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-indigo-600">Erwerbsunfähigkeit</h3>
                                    <p className="text-sm text-slate-600">Die IV und Pensionskasse decken oft nur 60% des Gehalts. Eine private Rente schliesst diese gefährliche Lücke.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-indigo-600">Prämienbefreiung</h3>
                                    <p className="text-sm text-slate-600">Ein wichtiger Zusatzbaustein: Wenn Sie krank werden, zahlt die Versicherung Ihre Prämien weiter, damit der Schutz bestehen bleibt.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-indigo-600">3. Säule nutzen</h3>
                                    <p className="text-sm text-slate-600">Integrieren Sie den Schutz in die Säule 3a, um die Prämien vollumfänglich von den Steuern abzuziehen.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Shield size={18} className="text-indigo-600" /> Wichtige Tipps
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <Check size={16} className="text-emerald-500 shrink-0" />
                                    <span>Raucher zahlen deutlich höhere Prämien als Nichtraucher.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <Check size={16} className="text-emerald-500 shrink-0" />
                                    <span>Beginnen Sie früh: In jungen Jahren sind die Prämien extrem günstig.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <Check size={16} className="text-emerald-500 shrink-0" />
                                    <span>Periodische Anpassung bei Heirat oder Hauskauf einplanen.</span>
                                </li>
                            </ul>
                        </div>

                        <AdUnit slot="life-sidebar" label="Partner" />

                        <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">Pensionskasse prüfen!</h3>
                                <p className="text-sm text-indigo-100 mb-4">Haben Sie Ihren PK-Ausweis bereit? Dort sehen Sie Ihre aktuellen Renten bei Invalidität.</p>
                                <button className="bg-white text-indigo-600 w-full py-3 rounded-xl font-bold text-sm">
                                    Lücke berechnen
                                </button>
                            </div>
                            <Umbrella className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10 -rotate-12" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeInsurance;
