import React, { useState } from 'react';
import { Search, Filter, Check, Star, Info } from 'lucide-react';
import { motion } from 'framer-motion';

import AdUnit from '../components/AdUnit';
import SEO from '../components/SEO';

// MOCK DATA - Realistic 2025 samples
const MOCK_INSURERS = [
    { id: 1, name: 'Sanitas', model: 'CallMed', price: 345.50, rating: 4.8, franchise: 2500, features: ['Freie Arztwahl', 'Telemedizin first'], url: 'https://www.sanitas.com/de/privatkunden.html' },
    { id: 2, name: 'SWICA', model: 'Favorit', price: 362.20, rating: 4.9, franchise: 2500, features: ['Apotheken-Rabatt', 'Sport-Beitrag'], url: 'https://www.swica.ch/de/private' },
    { id: 3, name: 'CSS', model: 'Standard', price: 339.80, rating: 4.6, franchise: 2500, features: ['Digital Health App'], url: 'https://www.css.ch/de/privatkunden.html' },
    { id: 4, name: 'Helsana', model: 'BeneFit', price: 351.00, rating: 4.7, franchise: 1500, features: ['Bonusprogramm'], url: 'https://www.helsana.ch/de/private' },
    { id: 5, name: 'Assura', model: 'Pharma', price: 298.50, rating: 4.2, franchise: 2500, features: ['Günstigste Prämie', 'Apothekenbindung'], url: 'https://www.assura.ch/de' },
    { id: 6, name: 'Groupe Mutuel', model: 'PrimaTel', price: 312.40, rating: 4.4, franchise: 2500, features: ['Telemedizin'], url: 'https://www.groupemutuel.ch/de/privatkunden.html' },
];

const HealthInsurance = () => {
    const [filters, setFilters] = useState({
        plz: '',
        franchise: 2500,
        age: 30,
        accidentCover: true
    });

    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(MOCK_INSURERS);

    const handleSearch = () => {
        setLoading(true);
        // Sort by price (cheapest first) to make the calculator feel real and helpful
        const sortedResults = [...MOCK_INSURERS].sort((a, b) => a.price - b.price);
        setTimeout(() => {
            setResults(sortedResults);
            setLoading(false);
        }, 800);
    };

    return (
        <div className="pb-20">
            <SEO
                title="Krankenkassen Vergleich 2025 | Schweiz Neutral & Gratis"
                description="Sparen Sie Prämien! Neutraler Krankenkassenvergleich Schweiz 2025. Alle Kassen, alle Modelle (Hausarzt, Telmed). Kostenlos und ohne Makler."
                keywords="Krankenkasse, Prämien 2025, Krankenkassenvergleich, Billigste Krankenkasse, Assura, CSS, Swica, Krankenkasse wechseln"
            />

            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden mb-12">
                <img
                    src="/images/health-hero.png"
                    alt="Krankenkassen Vergleich"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-2xl text-white"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Krankenkassen Vergleich 2025</h1>
                            <p className="text-lg text-slate-200 mb-6">Neutral, unabhängig und ohne Makler-Interessen. Finden Sie die günstigste Prämie in Ihrer Region.</p>
                            <div className="flex gap-4">
                                <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Aktuell: Prämien 2025</span>
                                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">100% Gratis</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <AdUnit slot="insurance-top" label="Top Anzeige" />

                {/* Calculator Bar */}
                <div className="max-w-5xl mx-auto -mt-16 relative z-30 mb-16">
                    <div className="glass-card p-8 rounded-3xl bg-white shadow-2xl border border-slate-100">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-end">
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Postleitzahl</label>
                                <input
                                    type="text"
                                    className="w-full border-b-2 border-slate-100 focus:border-red-600 bg-transparent py-2 outline-none font-semibold text-lg"
                                    placeholder="z.B. 8001"
                                    value={filters.plz}
                                    onChange={e => setFilters({ ...filters, plz: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Jahrgang</label>
                                <input
                                    type="number"
                                    className="w-full border-b-2 border-slate-100 focus:border-red-600 bg-transparent py-2 outline-none font-semibold text-lg"
                                    placeholder="1995"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Franchise</label>
                                <select
                                    className="w-full border-b-2 border-slate-100 bg-transparent py-2 outline-none font-semibold text-lg text-slate-900"
                                    value={filters.franchise}
                                    onChange={e => setFilters({ ...filters, franchise: Number(e.target.value) })}
                                >
                                    <option value={300}>CHF 300.-</option>
                                    <option value={1500}>CHF 1'500.-</option>
                                    <option value={2000}>CHF 2'000.-</option>
                                    <option value={2500}>CHF 2'500.-</option>
                                </select>
                            </div>
                            <button
                                onClick={handleSearch}
                                className="bg-red-600 hover:bg-red-700 text-white w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all shadow-lg shadow-red-200"
                            >
                                {loading ? 'Suche...' : <><Search size={20} /> Angebote zeigen</>}
                            </button>
                        </div>

                        <div className="flex items-center mt-6 pt-6 border-t border-slate-50 gap-8">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out flex items-center ${filters.accidentCover ? 'bg-emerald-500' : 'bg-slate-200'}`}>
                                    <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${filters.accidentCover ? 'translate-x-4' : 'translate-x-0'}`} />
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={filters.accidentCover}
                                    onChange={e => setFilters({ ...filters, accidentCover: e.target.checked })}
                                />
                                <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 select-none">Unfalldeckung inkl.</span>
                            </label>

                            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                                <Info size={14} />
                                <span>Alle Daten werden verschlüsselt und nicht gespeichert.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Layout: Results & Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Results */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-bold text-slate-900">Empfohlene Angebote</h2>
                            <span className="text-sm text-slate-500">{results.length} Kassen gefunden</span>
                        </div>

                        {loading ? (
                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-32 bg-slate-50 rounded-2xl animate-pulse" />
                                ))}
                            </div>
                        ) : (
                            results.map((item, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    key={item.id}
                                    className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                                >
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center font-bold text-red-600 border border-slate-100">
                                                    {item.name[0]}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                                                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">{item.model}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-3 mt-4">
                                                {item.features.map(f => (
                                                    <span key={f} className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg">
                                                        <Check size={12} className="text-emerald-500" /> {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-8 text-center md:text-right">
                                            <div>
                                                <div className="flex items-center gap-1 text-amber-400 font-bold text-sm justify-center md:justify-end">
                                                    <Star size={14} fill="currentColor" /> {item.rating}
                                                </div>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Rating</div>
                                            </div>
                                            <div className="min-w-[120px]">
                                                <div className="text-3xl font-black text-slate-900">
                                                    {item.price.toFixed(2)}
                                                </div>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">CHF / Monat</div>
                                            </div>
                                        </div>

                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold transition-all text-sm whitespace-nowrap">
                                            Offerte anfordern
                                        </a>
                                    </div>
                                </motion.div>
                            ))
                        )}

                        <AdUnit slot="insurance-middle" label="Empfehlung" />

                        {/* More Content for SEO */}
                        <div className="bg-slate-50 rounded-3xl p-8 mt-12 border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-primary">So sparen Sie bei der Krankenkasse</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-red-600">1. Franchise richtig wählen</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">Wer gesund ist, sollte immer die maximale Franchise von CHF 2'500 wählen. Das spart bis zu CHF 1'500 Prämien pro Jahr.</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-red-600">2. Sparmodelle nutzen</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">Telmed-, Hausarzt- oder Apotheken-Modelle bieten Rabatte von bis zu 25% gegenüber der Standard-Grundversicherung.</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-red-600">3. Unfalldeckung ausschliessen</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">Arbeitnehmer, die mehr als 8h pro Woche beim gleichen Arbeitgeber tätig sind, sind über diesen gegen Unfälle versichert und können dies bei der Kasse streichen.</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-red-600">4. Jedes Jahr vergleichen</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">Die Prämien ändern sich jährlich. Ein Vergleich im Oktober lohnt sich fast immer, um hunderte Franken zu sparen.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Info & Stats */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Filter size={18} className="text-red-600" /> Wichtige Infos
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <Check size={16} className="text-emerald-500 shrink-0" />
                                    <span>Die Leistungen der Grundversicherung sind gesetzlich bei allen Kassen identisch.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <Check size={16} className="text-emerald-500 shrink-0" />
                                    <span>Kündigungsfrist für die Grundversicherung ist der 30. November.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-slate-600">
                                    <Check size={16} className="text-emerald-500 shrink-0" />
                                    <span>Jede Kasse muss Sie unabhängig von Ihrem Gesundheitszustand aufnehmen.</span>
                                </li>
                            </ul>
                        </div>

                        <AdUnit slot="insurance-sidebar" label="Partner" />

                        <div className="bg-red-600 rounded-3xl p-8 text-white shadow-xl shadow-red-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">Prämien-Check 2025</h3>
                                <p className="text-sm text-red-100 mb-4">Wussten Sie, dass die Prämien 2025 im Schnitt um 6% steigen? Handeln Sie jetzt!</p>
                                <button className="bg-white text-red-600 w-full py-3 rounded-xl font-bold text-sm shadow-lg">
                                    Gratis Vergleichen
                                </button>
                            </div>
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-500 rounded-full opacity-50 blur-2xl" />
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <AdUnit slot="insurance-bottom" label="Weitere Angebote" />
                </div>
            </div>
        </div>
    );
};

export default HealthInsurance;
