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
        <div className="pb-20">
            <SEO
                title="Trading & Broker Vergleich Schweiz 2025"
                description="Beste Trading-Plattformen und Online-Broker im Vergleich. Swissquote, DEGIRO, Saxo Bank. Gebühren sparen beim Aktien-Kauf."
                keywords="Trading, Online Broker, Aktien kaufen, ETF, Swissquote Gebühren, DEGIRO Schweiz, Börse"
            />

            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden mb-12">
                <img
                    src="/images/trading-hero.png"
                    alt="Trading Vergleich"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-2xl text-white"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Trading & Broker Vergleich</h1>
                            <p className="text-lg text-slate-200 mb-6">Courtagen sparen, Rendite steigern. Wir vergleichen die besten Plattformen für Schweizer Anleger.</p>
                            <div className="flex gap-4">
                                <span className="bg-emerald-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">0% Provisionen bei vielen ETFs</span>
                                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Neutral & Unabhängig</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <AdUnit slot="trading-top" label="Anzeige" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
                    {/* Left: Brokers */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-slate-900">Top Broker Empfehlungen</h2>
                            <span className="text-sm text-slate-500">{brokers.length} Anbieter im Check</span>
                        </div>

                        {brokers.map((b, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={b.name}
                                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                            >
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className={`w-14 h-14 rounded-xl ${b.logo} flex items-center justify-center text-white font-bold text-sm shadow-inner`}>
                                                {b.name.substring(0, 4)}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl text-slate-900">{b.name}</h3>
                                                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">{b.type}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100 italic">
                                                Gebühr: {b.fee}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                                                Asset: {b.products}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 w-full md:w-auto">
                                        <a href={b.url} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold transition-all text-sm text-center">
                                            Konto eröffnen
                                        </a>
                                        <span className="text-[10px] text-slate-400 text-center">Reguliert & Sicher</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <AdUnit slot="trading-middle" label="Werbung" />

                        {/* Guide Content */}
                        <div className="bg-white rounded-3xl p-8 mt-12 border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Wahl des richtigen Brokers</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <h3 className="font-bold text-emerald-600">Sicherheit & Regulierung</h3>
                                    <p className="text-sm text-slate-600">Achten Sie auf Lizenzen von FINMA (Schweiz), BaFin (Deutschland) oder anderen EU-Regulatoren. Ein Broker sollte Ihr Kapital separat vom Firmenvermögen verwahren.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-emerald-600">Kostenstruktur</h3>
                                    <p className="text-sm text-slate-600">Einige Broker werben mit 0-Euro-Trades, verdienen aber an Spreads oder PFOF. Schweizer Broker sind teurer, bieten aber oft einen besseren Steuerservice.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-emerald-600">Handelbare Märkte</h3>
                                    <p className="text-sm text-slate-600">Wer Aktien an der SIX kaufen will, braucht einen Broker mit direktem Marktzugang zur Schweiz. Für US-Aktien sind Neobroker oft die günstigste Wahl.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-emerald-600">Steuern in der Schweiz</h3>
                                    <p className="text-sm text-slate-600">Schweizer Banken ziehen die Verrechnungssteuer automatisch ab. Bei ausländischen Brokern müssen Sie Ihre Erträge selbst deklarieren.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-emerald-600 rounded-3xl p-8 text-white shadow-xl shadow-emerald-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">ETF-Sparplan Check</h3>
                                <p className="text-sm text-emerald-100 mb-6">Bereits ab 50 CHF pro Monat können Sie Vermögen aufbauen. Finden Sie den Broker mit den niedrigsten Sparplan-Raten.</p>
                                <div className="space-y-3">
                                    <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                                        <div className="text-xs text-white/70">Wichtigster Faktor:</div>
                                        <div className="font-bold">Effektive Jahreskosten (TER)</div>
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                                        <div className="text-xs text-white/70">Tipp:</div>
                                        <div className="font-bold">Zinseszinseffekt nutzen</div>
                                    </div>
                                </div>
                            </div>
                            <TrendingUp className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 -rotate-12" />
                        </div>

                        <AdUnit slot="trading-sidebar" label="Partner" />

                        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4">Trading FAQ</h3>
                            <div className="space-y-4">
                                <details className="group">
                                    <summary className="text-sm font-bold cursor-pointer list-none flex justify-between items-center text-slate-700">
                                        Was ist die Stempelsteuer?
                                        <TrendingUp size={14} className="group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <p className="text-xs text-slate-500 mt-2">Eine Umsatzabgabe auf dem Handel mit Wertpapieren in der Schweiz. Sie beträgt 0.075% für inländische und 0.15% für ausländische Titel.</p>
                                </details>
                                <details className="group">
                                    <summary className="text-sm font-bold cursor-pointer list-none flex justify-between items-center text-slate-700">
                                        Bester Broker für Anfänger?
                                        <TrendingUp size={14} className="group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <p className="text-xs text-slate-500 mt-2">Apps wie Yuh bieten eine extrem einfache Oberfläche und keine Depotgebühren, ideal für den Start mit kleinen Beträgen.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trading;
