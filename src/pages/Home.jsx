import React from 'react';
import { Shield, CheckCircle, Smartphone, Lock, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AdUnit from '../components/AdUnit';

const FeatureCard = ({ icon: Icon, title, desc, link, colorClass }) => (
    <Link to={link} className="block group">
        <motion.div
            whileHover={{ y: -5 }}
            className="h-full bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
        >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClass} opacity-10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110`} />

            <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl ${colorClass} bg-opacity-10 flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${colorClass.replace('bg-', 'text-')}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                    {desc}
                </p>

                <div className="flex items-center text-sm font-semibold text-slate-900 group-hover:translate-x-1 transition-transform">
                    Jetzt starten <ArrowRight size={16} className="ml-1" />
                </div>
            </div>
        </motion.div>
    </Link>
);

const Home = () => {
    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <section className="relative text-center max-w-4xl mx-auto pt-10 pb-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide mb-6">
                        <Shield size={12} /> 100% Unabhängig
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Transparenz für <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                            die ganze Schweiz.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Vergleichen Sie Krankenkassen und Kredite ohne versteckte Provisionen.
                        Nutzen Sie kostenlose Vorlagen für Kündigungen und Vorsorge.
                        <br className="hidden md:block" />
                        <strong className="text-slate-900">Einfach, sicher und zu 100% in Ihrem Interesse.</strong>
                    </p>
                </motion.div>
            </section>

            {/* AD PLACEMENT: Below Hero */}
            <AdUnit slot="homepage-top" />

            {/* Main Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                    icon={Smartphone} // Placeholder icon
                    title="Arbeitslosengeld"
                    desc="Wieviel Taggeld steht Ihnen zu? Berechnen Sie Ihren Anspruch sofort."
                    link="/arbeitslosengeld"
                    colorClass="bg-slate-800"
                />
                <FeatureCard
                    icon={Smartphone}
                    title="Krankenkassenvergleich"
                    desc="Finden Sie die wirklich günstigste Prämie für 2025. Ohne Makler-Tricks."
                    link="/krankenkasse"
                    colorClass="bg-red-600"
                />
                <FeatureCard
                    icon={Lock}
                    title="Kündigungs-Vorlagen"
                    desc="Rechtssichere Kündigungsschreiben (Wohnung, Abo, Arbeit) in 2 Minuten als PDF."
                    link="/kuendigen"
                    colorClass="bg-blue-600"
                />
                <FeatureCard
                    icon={CheckCircle}
                    title="Organ & Vorsorge"
                    desc="Widerspruchslösung 2027? Erstellen Sie Ihren Willen jetzt rechtssicher."
                    link="/organspende"
                    colorClass="bg-emerald-600"
                />
                <FeatureCard
                    icon={AlertCircle}
                    title="Privatkredit-Check"
                    desc="Berechnen Sie echte Gesamtkosten. Neutraler Vergleich der Zinsen."
                    link="/kredit"
                    colorClass="bg-purple-600"
                />
                {/* Placeholder for more tools */}
                <div className="glass-card rounded-2xl p-8 border border-dashed border-slate-300 flex flex-col items-center justify-center text-center text-slate-400">
                    <p className="font-medium">Weitere Tools folgen</p>
                    <p className="text-sm">Haben Sie Ideen?</p>
                </div>
            </section>

            {/* AD PLACEMENT: Middle */}
            <AdUnit slot="homepage-middle" />

            {/* Trust Section */}
            <section className="bg-white rounded-3xl p-10 md:p-16 border border-slate-100 shadow-sm text-center">
                <h2 className="text-3xl font-bold mb-12">Warum SwissCheck?</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    <div>
                        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">0%</div>
                        <h3 className="text-lg font-bold mb-2">Keine Provisionen</h3>
                        <p className="text-slate-600 text-sm">Wir erhalten kein Geld von Versicherungen oder Banken für Top-Platzierungen. Wir finanzieren uns über Werbung.</p>
                    </div>
                    <div>
                        <div className="w-16 h-16 bg-slate-100 text-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">100%</div>
                        <h3 className="text-lg font-bold mb-2">Datenschutz</h3>
                        <p className="text-slate-600 text-sm">Ihre Daten bleiben auf Ihrem Gerät. Wir speichern nichts, was Sie eingeben.</p>
                    </div>
                    <div>
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">Free</div>
                        <h3 className="text-lg font-bold mb-2">Komplett Gratis</h3>
                        <p className="text-slate-600 text-sm">Ein Projekt für die Allgemeinheit.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
