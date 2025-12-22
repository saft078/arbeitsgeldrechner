import React from 'react';
import { Car, Zap, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';

const providers = [
    { name: 'Zurich', type: 'Rundumschutz', rating: 'Testsieger', url: 'https://www.zurich.ch/de/privatkunden/fahrzeuge/autoversicherung', logo: 'bg-blue-600' },
    { name: 'Allianz', type: 'Crash Recorder', rating: 'Innovativ', url: 'https://www.allianz.ch/de/privatkunden/fahrzeuge/auto/', logo: 'bg-blue-800' },
    { name: 'AXA', type: 'Mobilitätsgarantie', rating: 'Beliebt', url: 'https://www.axa.ch/de/privatkunden/angebote/fahrzeug-reisen/autoversicherung.html', logo: 'bg-blue-700' },
    { name: 'Die Mobiliar', type: 'Genossenschaft', rating: 'Fair', url: 'https://www.mobiliar.ch/versicherungen-und-vorsorge/fahrzeuge-und-reisen/autoversicherung', logo: 'bg-red-700' },
    { name: 'Simpego', type: 'Online', rating: 'Günstig', url: 'https://www.simpego.ch', logo: 'bg-cyan-600' },
    { name: 'Smile', type: 'App-Only', rating: 'Digital', url: 'https://www.smile-direct.ch', logo: 'bg-pink-600' },
];

const CarInsurance = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <SEO
                title="Autoversicherung Vergleich 2025"
                description="Beste Autoversicherung der Schweiz finden. Zürich, AXA, Allianz und Online-Versicherungen im Check. Sparen Sie Prämien."
                keywords="Autoversicherung, Kasko, Haftpflicht, Autoversicherung Vergleich, Zürich Versicherung, AXA, Smile Direct"
            />

            <section className="text-center max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100 mb-6">
                    Mobilität
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                    Günstiger <span className="text-gradient">fahren.</span>
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed">
                    Vollkasko, Teilkasko oder nur Haftpflicht? Vergleichen Sie die Prämien der grössten Schweizer Autoversicherer.
                </p>
            </section>

            <AdUnit slot="car-top" />

            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* PROVIDER LIST */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Car className="text-red-600" /> Top Autoversicherer
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
                        Direkte Links zu den offiziellen Webseiten.
                    </div>
                </div>

                {/* INFO BOX */}
                <div className="glass-card bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Zap className="text-yellow-500" /> Deckungsarten
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">1</div>
                            <div>
                                <strong className="block text-slate-900">Haftpflicht (Obligatorisch)</strong>
                                <p className="text-sm text-slate-500">Bezahlt Schäden, die Sie anderen zufügen. Must-Have für jeden Autobesitzer.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">2</div>
                            <div>
                                <strong className="block text-slate-900">Teilkasko</strong>
                                <p className="text-sm text-slate-500">Zahlt bei Diebstahl, Feuer, Glasbruch, Marder und Elementarschäden (Hagel/Sturm).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">3</div>
                            <div>
                                <strong className="block text-slate-900">Vollkasko</strong>
                                <p className="text-sm text-slate-500">Deckt zusätzlich Kollisionsschäden am eigenen Auto (selbstverschuldet). Empfohlen für Neuwagen (Leasing).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarInsurance;
