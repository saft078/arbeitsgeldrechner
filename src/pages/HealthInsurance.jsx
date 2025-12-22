import React, { useState } from 'react';
import { Search, Filter, Check, Star, Info } from 'lucide-react';
import { motion } from 'framer-motion';

import AdUnit from '../components/AdUnit';
import SEO from '../components/SEO';

// MOCK DATA - Realistic 2025 samples
const MOCK_INSURERS = [
    { id: 1, name: 'Sanitas', model: 'CallMed', price: 345.50, rating: 4.8, franchise: 2500, features: ['Freie Arztwahl', 'Telemedizin first'] },
    { id: 2, name: 'SWICA', model: 'Favorit', price: 362.20, rating: 4.9, franchise: 2500, features: ['Apotheken-Rabatt', 'Sport-Beitrag'] },
    { id: 3, name: 'CSS', model: 'Standard', price: 339.80, rating: 4.6, franchise: 2500, features: ['Digital Health App'] },
    { id: 4, name: 'Helsana', model: 'BeneFit', price: 351.00, rating: 4.7, franchise: 1500, features: ['Bonusprogramm'] },
    { id: 5, name: 'Assura', model: 'Pharma', price: 298.50, rating: 4.2, franchise: 2500, features: ['Günstigste Prämie', 'Apothekenbindung'] },
    { id: 6, name: 'Groupe Mutuel', model: 'PrimaTel', price: 312.40, rating: 4.4, franchise: 2500, features: ['Telemedizin'] },
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
        // Simulate API delay
        const randomSort = [...MOCK_INSURERS].sort(() => Math.random() - 0.5);
        setTimeout(() => {
            setResults(randomSort);
            setLoading(false);
        }, 800);
    };

    return (
        <div className="space-y-8">
            <SEO
                title="Krankenkassen Vergleich 2025"
                description="Sparen Sie Prämien! Neutraler Krankenkassenvergleich Schweiz 2025. Alle Kassen, alle Modelle (Hausarzt, Telmed). Kostenlos."
                keywords="Krankenkasse, Prämien 2025, Krankenkassenvergleich, Billigste Krankenkasse, Assura, CSS, Swica"
            />

            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Krankenkassenvergleich 2025</h1>
                <p className="text-slate-500">100% Neutral. Sortiert nach echtem Preis.</p>
            </div>

            <AdUnit slot="insurance-top" label="Anzeige" />

            {/* Calculator Bar */}
            <div className="glass-card p-6 rounded-2xl bg-white shadow-lg sticky top-24 z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Postleitzahl</label>
                        <input
                            type="text"
                            className="w-full border-b-2 border-slate-200 focus:border-red-600 bg-transparent py-2 outline-none font-medium"
                            placeholder="PLZ"
                            value={filters.plz}
                            onChange={e => setFilters({ ...filters, plz: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Jahrgang</label>
                        <input
                            type="number"
                            className="w-full border-b-2 border-slate-200 focus:border-red-600 bg-transparent py-2 outline-none font-medium"
                            placeholder="z.B. 1990"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Franchise</label>
                        <select
                            className="w-full border-b-2 border-slate-200 bg-transparent py-2 outline-none font-medium text-slate-900"
                            value={filters.franchise}
                            onChange={e => setFilters({ ...filters, franchise: Number(e.target.value) })}
                        >
                            <option value={300}>CHF 300.-</option>
                            <option value={1500}>CHF 1'500.-</option>
                            <option value={2500}>CHF 2'500.-</option>
                        </select>
                    </div>
                    <button
                        onClick={handleSearch}
                        className="btn-primary w-full py-3 rounded-xl flex items-center justify-center gap-2"
                    >
                        {loading ? 'Berechne...' : <><Search size={18} /> Vergleichen</>}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-12 h-7 rounded-full p-1 transition-colors duration-200 ease-in-out flex items-center ${filters.accidentCover ? 'bg-emerald-500' : 'bg-slate-200'}`}>
                            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${filters.accidentCover ? 'translate-x-5' : 'translate-x-0'}`} />
                        </div>
                        <input
                            type="checkbox"
                            className="hidden"
                            checked={filters.accidentCover}
                            onChange={e => setFilters({ ...filters, accidentCover: e.target.checked })}
                        />
                        <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 select-none">Mit Unfalldeckung</span>
                    </label>
                </div>
                <button
                    onClick={handleSearch}
                    className="btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-200 text-lg"
                >
                    {loading ? 'Berechne...' : <><Search size={20} /> Jetzt vergleichen</>}
                </button>
            </div>


            {/* Results List */}
            <div className="space-y-4 max-w-4xl mx-auto">
                {loading ? (
                    <div className="text-center py-20 text-slate-400 animate-pulse">
                        Berechne Prämien für Ihre Region...
                    </div>
                ) : (
                    results.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={item.id}
                            className="group bg-white rounded-xl p-6 border border-slate-100 hover:border-red-200 hover:shadow-lg transition-all flex flex-col md:flex-row items-center justify-between gap-6"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 uppercase tracking-wide">{item.model}</span>
                                </div>
                                <div className="flex gap-2 text-xs text-slate-500">
                                    {item.features.map(f => (
                                        <span key={f} className="flex items-center gap-1"><Check size={10} className="text-green-500" /> {f}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center px-4">
                                <div className="flex items-center gap-1 text-amber-400 font-bold text-sm justify-center md:justify-start">
                                    <Star size={14} fill="currentColor" /> {item.rating}
                                </div>
                                <div className="text-xs text-slate-400">Kundenzufriedenheit</div>
                            </div>

                            <div className="text-right min-w-[140px]">
                                <div className="text-3xl font-bold text-slate-900">
                                    {item.price.toFixed(2)}
                                </div>
                                <div className="text-xs text-slate-500 mb-2">CHF / Monat</div>
                                <button className="w-full text-sm font-semibold text-slate-600 border border-slate-200 bg-slate-50 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                                    Details
                                </button>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>

            <div className="text-center text-xs text-slate-400 pt-8">
                <p>Hinweis: Dies sind Beispielwerte für Demonstrationszwecke.</p>
            </div>
        </div>
    );
};

export default HealthInsurance;
