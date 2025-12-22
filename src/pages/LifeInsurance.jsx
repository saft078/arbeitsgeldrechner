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
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <SEO
                title="Lebensversicherung Vergleich Schweiz 2025"
                description="Schützen Sie Ihre Familie. Risiko-Lebensversicherung und Erwerbsunfähigkeit im neutralen Vergleich."
                keywords="Lebensversicherung, Todesfallrisiko, 3. Säule b, Erwerbsunfähigkeit, Swiss Life, AXA"
            />

            <section className="text-center max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest border border-indigo-100 mb-6">
                    Familie & Absicherung
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                    Für den <span className="text-gradient">Ernstfall</span> vorsorgen.
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed">
                    Sichern Sie Partner und Kinder finanziell ab. Vergleichen Sie die besten Anbieter für Todesfall und Erwerbsunfähigkeit.
                </p>
            </section>

            <AdUnit slot="life-top" />

            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* PROVIDER LIST */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <HeartHandshake className="text-red-600" /> Empfohlene Anbieter
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
                                <div className={`w-12 h-12 rounded-full ${p.logo} flex items-center justify-center text-white font-bold text-lg`}>
                                    {p.name[0]}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{p.name}</h3>
                                    <div className="flex gap-2 text-xs font-medium text-slate-500">
                                        <span className="bg-slate-100 px-2 py-0.5 rounded">{p.type}</span>
                                    </div>
                                </div>
                            </div>
                            <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary py-2 px-4 text-sm flex items-center gap-2"
                            >
                                Zum Anbieter <ArrowRight size={14} />
                            </a>
                        </motion.div>
                    ))}
                    <div className="p-4 bg-slate-50 rounded-xl text-center text-sm text-slate-500 mt-4 border border-dashed border-slate-300">
                        Direkte Links zu den offiziellen Webseiten. Keine Maklergebühr.
                    </div>
                </div>

                {/* INFO BOX */}
                <div className="glass-card bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Shield className="text-indigo-600" /> Was ist wichtig?
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <strong className="block text-slate-900 mb-1">Todesfall-Risiko</strong>
                            <p className="text-sm text-slate-500">
                                Zahlt eine fixe Summe (z.B. 200'000 CHF) an Ihre Familie, falls Sie sterben. Wichtig für Hausbesitzer und Familien mit Kindern.
                            </p>
                        </div>
                        <div>
                            <strong className="block text-slate-900 mb-1">Erwerbsunfähigkeit</strong>
                            <p className="text-sm text-slate-500">
                                Zahlt eine Rente, wenn Sie wegen Krankheit oder Unfall nicht mehr arbeiten können. Ergänzt die 1. und 2. Säule.
                            </p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                            <strong className="text-green-800 flex items-center gap-2 text-sm mb-2">
                                <Check size={16} /> Spar-Tipp
                            </strong>
                            <p className="text-xs text-green-700">
                                Kombinieren Sie die Lebensversicherung mit der Säule 3a (Säule 3b), um Steuern zu sparen. Fragen Sie gezielt nach "gebundener Vorsorge".
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeInsurance;
