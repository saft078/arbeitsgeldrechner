import React from 'react';
import { Cat, Dog, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';

const providers = [
    { name: 'Animalia', type: 'Spezialist', cover: 'Umfassend', url: 'https://www.animalia.ch', logo: 'bg-purple-600' },
    { name: 'Epona', type: 'Pferde & Tiere', cover: 'Wählbar', url: 'https://www.epona.ch', logo: 'bg-green-600' },
    { name: 'Wau-Miau', type: 'Europäische', cover: 'Basis & Top', url: 'https://www.waumiau.ch', logo: 'bg-orange-500' },
    { name: 'Die Mobiliar', type: 'Haustier', cover: 'Zusatz', url: 'https://www.mobiliar.ch/versicherungen-und-vorsorge/wohnen-und-eigentum/haustierversicherung', logo: 'bg-red-700' },
];

const PetInsurance = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <SEO
                title="Tierversicherung Vergleich Schweiz 2025"
                description="Versicherung für Hund & Katze vergleichen. Tierarztkosten decken mit Animalia, Epona oder Wau-Miau."
                keywords="Tierversicherung, Hundeversicherung, Katzenversicherung, Animalia, Epona, Tierarztkosten"
            />

            <section className="text-center max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-widest border border-orange-100 mb-6">
                    Haustiere
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                    Beste Freunde <span className="text-gradient">schützen.</span>
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed">
                    Tierarztkosten können schnell in die Tausende gehen. Eine Versicherung für Hund oder Katze schützt vor unerwarteten Rechnungen.
                </p>
            </section>

            <AdUnit slot="pet-top" />

            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* PROVIDER LIST */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Dog className="text-orange-600" /> Tierversicherer
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
                                        <span className="bg-orange-50 text-orange-700 px-2 py-0.5 rounded border border-orange-100">{p.cover}</span>
                                    </div>
                                </div>
                            </div>
                            <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary py-2 px-4 text-sm flex items-center gap-2"
                            >
                                Zum Angebot <ArrowRight size={14} />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* INFO BOX */}
                <div className="glass-card bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Cat className="text-purple-500" /> Was wird bezahlt?
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <strong className="block text-slate-900 mb-1">Krankheit & Unfall</strong>
                            <p className="text-sm text-slate-500">
                                Die Versicherung übernimmt Behandlungskosten beim Tierarzt, Medikamente und Operationen (nach Abzug des Selbstbehalts).
                            </p>
                        </div>
                        <div>
                            <strong className="block text-slate-900 mb-1">Erbkrankheiten</strong>
                            <p className="text-sm text-slate-500">
                                Achtung: Viele Versicherer schließen angeborene Krankheiten oder rassespezifische Leiden aus. Lesen Sie das Kleingedruckte!
                            </p>
                        </div>
                        <div>
                            <strong className="block text-slate-900 mb-1">Je früher, desto besser</strong>
                            <p className="text-sm text-slate-500">
                                Versichern Sie Ihr Tier solange es jung und gesund ist. Ältere Tiere werden oft abgelehnt oder sind teurer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetInsurance;
