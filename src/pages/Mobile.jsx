import React from 'react';
import { Smartphone, Wifi, ArrowRight, Signal } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';

const telcos = [
    { name: 'Wingo', net: 'Swisscom', price: 'ab 25 CHF', data: 'Unlimitiert', url: 'https://www.wingo.ch', logo: 'bg-red-600' },
    { name: 'Yallo', net: 'Sunrise', price: 'ab 19 CHF', data: 'Unlimitiert', url: 'https://www.yallo.ch', logo: 'bg-red-500' },
    { name: 'Swisscom', net: 'Swisscom', price: 'Premium', data: 'Bestes Netz', url: 'https://www.swisscom.ch', logo: 'bg-blue-600' },
    { name: 'Sunrise', net: 'Sunrise', price: 'Standard', data: 'High Speed', url: 'https://www.sunrise.ch', logo: 'bg-amber-500' },
    { name: 'Salt', net: 'Salt', price: 'Günstig', data: 'Europa inkl.', url: 'https://www.salt.ch', logo: 'bg-black' },
    { name: 'Galaxus Mobile', net: 'Sunrise', price: '19 CHF', data: 'Flatrate', url: 'https://mobile.galaxus.ch', logo: 'bg-slate-800' },
];

const Mobile = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <SEO
                title="Handy-Abo Vergleich Schweiz 2025"
                description="Günstige Handy-Abos im Vergleich. Wingo, Yallo, Swisscom, Salt. Unlimitiertes Datenvolumen und Roaming-Optionen."
                keywords="Handy Abo, Mobile Abo, Wingo Aktionen, Yallo Black Friday, Swisscom Netz, Unlimitiertes Internet"
            />

            <section className="text-center max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold uppercase tracking-widest border border-cyan-100 mb-6">
                    Telekom & Internet
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                    Besser <span className="text-gradient">verbunden.</span>
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed">
                    Nie mehr zu viel bezahlen für das Smartphone. Vergleichen Sie die besten Flatrates im Swisscom-, Sunrise- und Salt-Netz.
                </p>
            </section>

            <AdUnit slot="mobile-top" />

            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* TELCO LIST */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Signal className="text-cyan-600" /> Top Angebote
                    </h2>
                    {telcos.map((t, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={t.name}
                            className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full ${t.logo} flex items-center justify-center text-white font-bold text-lg`}>
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{t.name}</h3>
                                    <div className="flex gap-2 text-xs font-medium text-slate-500">
                                        <span className="bg-slate-100 px-2 py-0.5 rounded">Netz: {t.net}</span>
                                        <span className="bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded border border-cyan-100">{t.price}</span>
                                    </div>
                                </div>
                            </div>
                            <a
                                href={t.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary py-2 px-4 text-sm flex items-center gap-2"
                            >
                                Zum Abo <ArrowRight size={14} />
                            </a>
                        </motion.div>
                    ))}
                    <div className="p-4 bg-slate-50 rounded-xl text-center text-sm text-slate-500 mt-4 border border-dashed border-slate-300">
                        Tipp: Warten Sie oft auf Aktionen (Black Friday etc.), dort gibt es oft 50% Rabatt auf Lebenszeit.
                    </div>
                </div>

                {/* INFO BOX */}
                <div className="glass-card bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Wifi className="text-blue-500" /> Netzabdeckung
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                            <div>
                                <strong className="block text-slate-900">Swisscom Netz</strong>
                                <p className="text-sm text-slate-500">Gilt als das beste Netz der Schweiz, besonders in ländlichen Regionen und in den Bergen. (Genutzt von: Swisscom, Wingo, M-Budget).</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                            <div>
                                <strong className="block text-slate-900">Sunrise Netz</strong>
                                <p className="text-sm text-slate-500">Sehr gute Abdeckung und oft sehr schnell (5G). (Genutzt von: Sunrise, Yallo, Galaxus Mobile, Lebara).</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                            <div>
                                <strong className="block text-slate-900">Salt Netz</strong>
                                <p className="text-sm text-slate-500">Gute Abdeckung in Städten und Agglomerationen. Oft sehr gutes Preis-Leistungs-Verhältnis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mobile;
