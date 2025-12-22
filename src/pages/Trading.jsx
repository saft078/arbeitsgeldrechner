import React from 'react';
import { TrendingUp, Globe, Smartphone, ArrowRight, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';

const brokers = [
    { name: 'DEGIRO', type: 'Discounter', fee: 'ab 0.50 CHF', products: 'Aktien, ETFs', url: 'https://www.degiro.ch', logo: 'bg-blue-500' },
    { name: 'Swissquote', type: 'Schweizer Bank', fee: 'ab 9 CHF', products: 'Alles + Krypto', url: 'https://www.swissquote.ch', logo: 'bg-orange-500' },
    { name: 'Saxo Bank', type: 'Profi-Plattform', fee: 'ab 3 CHF', products: 'Global', url: 'https://www.home.saxo/de-ch', logo: 'bg-black' },
    { name: 'Interactive Brokers', type: 'Global', fee: 'Low Cost', products: 'Weltweit', url: 'https://www.interactivebrokers.ch', logo: 'bg-red-700' },
    { name: 'Yuh', type: 'App', fee: '0.5%', products: 'Easy Invest', url: 'https://www.yuh.com', logo: 'bg-emerald-500' },
];

const Trading = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <SEO
                title="Trading & Broker Vergleich Schweiz 2025"
                description="Beste Trading-Plattformen und Online-Broker im Vergleich. Swissquote, DEGIRO, Saxo Bank. Gebühren sparen beim Aktien-Kauf."
                keywords="Trading, Online Broker, Aktien kaufen, ETF, Swissquote Gebühren, DEGIRO Schweiz, Börse"
            />

            <section className="text-center max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest border border-emerald-100 mb-6">
                    Investieren & Börse
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                    Geld <span className="text-gradient">arbeiten</span> lassen.
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed">
                    Vergleichen Sie die Gebühren (Courtagen) der beliebtesten Online-Broker für Schweizer Anleger. Von der Banking-App bis zur Profi-Plattform.
                </p>
            </section>

            <AdUnit slot="trading-top" />

            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* BROKER LIST */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <TrendingUp className="text-emerald-600" /> Top Broker
                    </h2>
                    {brokers.map((b, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={b.name}
                            className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full ${b.logo} flex items-center justify-center text-white font-bold text-xs overflow-hidden`}>
                                    {b.name.substring(0, 4)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{b.name}</h3>
                                    <div className="flex gap-2 text-xs font-medium text-slate-500">
                                        <span className="bg-slate-100 px-2 py-0.5 rounded">{b.type}</span>
                                        <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100">{b.fee}</span>
                                    </div>
                                </div>
                            </div>
                            <a
                                href={b.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary py-2 px-4 text-sm flex items-center gap-2"
                            >
                                Zum Broker <ArrowRight size={14} />
                            </a>
                        </motion.div>
                    ))}
                    <div className="p-4 bg-slate-50 rounded-xl text-center text-sm text-slate-500 mt-4 border border-dashed border-slate-300">
                        Achtung: Investieren birgt Risiken. Vergangene Kursentwicklungen sind keine Garantie für die Zukunft.
                    </div>
                </div>

                {/* INFO BOX */}
                <div className="glass-card bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <DollarSign className="text-yellow-500" /> Worauf achten?
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <strong className="block text-slate-900 mb-1">Courtage (Gebühren)</strong>
                            <p className="text-sm text-slate-500">
                                Schweizer Banken (z.B. Swissquote) sind sicher, aber oft teurer (ab 9 CHF pro Trade). Ausländische Broker (DEGIRO) sind extrem günstig, bieten aber kein Schweizer Steuerverzeichnis.
                            </p>
                        </div>
                        <div>
                            <strong className="block text-slate-900 mb-1">Depotgebühren</strong>
                            <p className="text-sm text-slate-500">
                                Manche Banken verlangen eine jährliche Gebühr nur für das "Verwahren" der Aktien. Achten Sie auf "Gratis Depotführung".
                            </p>
                        </div>
                        <div>
                            <strong className="block text-slate-900 mb-1">Stempelsteuer</strong>
                            <p className="text-sm text-slate-500">
                                Bei Schweizer Banken fällt immer die eidg. Stempelsteuer an. Bei ausländischen Brokern entfällt diese oft.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trading;
