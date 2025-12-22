import React from 'react';
import { CreditCard, ArrowRight, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';

// Curated list of top Swiss cards for different profiles
const cards = [
    { name: 'Swisscard Cashback', type: 'Gratis', fee: '0 CHF', cashback: 'bis 1%', url: 'https://www.swisscard.ch', logo: 'bg-amber-500', feat: 'Höchstes Cashback' },
    { name: 'Neon Free', type: 'Prepaid/App', fee: '0 CHF', cashback: 'Keine Auslandsgebühr', url: 'https://www.neon-free.ch', logo: 'bg-green-500', feat: 'Beste für Reisen' },
    { name: 'Cembra Certo!', type: 'Gratis', fee: '0 CHF', cashback: '1% bei Migros/Coop', url: 'https://www.cembra.ch', logo: 'bg-black', feat: 'Supermarkt-King' },
    { name: 'Revolut', type: 'App-Bank', fee: '0 CHF', cashback: 'Top Wechselkurse', url: 'https://www.revolut.com', logo: 'bg-blue-500', feat: 'Global Player' },
];

const CreditCardPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <SEO
                title="Kreditkarten Vergleich Schweiz 2025"
                description="Beste gratis Kreditkarten im Vergleich. Cashback, Meilen oder keine Gebühren? Neutraler Marktüberblick."
                keywords="Kreditkarte, Gratis Kreditkarte, Cashback, Swisscard, Neon, Revolut, Certo"
            />

            <section className="text-center max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest border border-purple-100 mb-6">
                    Bezahlen & Reisen
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                    Die <span className="text-gradient">perfekte Karte</span> finden.
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed">
                    zahlen Sie keine Jahresgebühren mehr. Die besten Karten der Schweiz sind heute gratis und geben Ihnen Geld zurück (Cashback).
                </p>
            </section>

            <AdUnit slot="cc-top" />

            <div className="grid md:grid-cols-2 gap-6">
                {cards.map((c, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={c.name}
                        className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-purple-200 hover:shadow-xl transition-all relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                            {c.type}
                        </div>

                        <div className="flex items-start gap-5">
                            <div className={`w-16 h-10 rounded-lg ${c.logo} shadow-md`}></div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{c.name}</h3>
                                <div className="text-sm font-medium text-slate-500 mb-4">{c.feat}</div>

                                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm mb-6">
                                    <div>
                                        <div className="text-[10px] text-slate-400 uppercase font-bold">Jahresgebühr</div>
                                        <div className="font-bold text-slate-900">{c.fee}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-400 uppercase font-bold">Vorteil</div>
                                        <div className="font-bold text-emerald-600">{c.cashback}</div>
                                    </div>
                                </div>

                                <a
                                    href={c.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full py-2 flex items-center justify-center gap-2 text-sm"
                                >
                                    Zum Anbieter <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-slate-50 rounded-xl p-6 text-center text-sm text-slate-500 max-w-2xl mx-auto">
                <Globe size={18} className="mx-auto mb-2 text-slate-400" />
                <p>
                    Unser Tipp für Reisen: Nutzen Sie im Ausland immer Karten wie <strong>Neon</strong> oder <strong>Revolut</strong>.
                    Klassische Bankkarten verrechnen oft 1.5% bis 2.5% Wechselkurs-Aufschlag.
                </p>
            </div>
        </div>
    );
};

export default CreditCardPage;
