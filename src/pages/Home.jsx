import React from 'react';
import { Shield, CheckCircle, Smartphone, Lock, AlertCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AdUnit from '../components/AdUnit';

const FeatureCard = ({ icon: Icon, title, desc, link, delay }) => (
    <Link to={link} className="block group h-full">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            className="glass-card h-full p-8 relative overflow-hidden group-hover:bg-white transition-all duration-300 group-hover:-translate-y-1"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon size={120} className="text-primary" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm mb-8 flex-grow">
                    {desc}
                </p>

                <div className="flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all">
                    Jetzt starten <ArrowRight size={16} className="ml-1" />
                </div>
            </div>
        </motion.div>
    </Link>
);

const Home = () => {
    return (
        <div className="space-y-24 pb-20">
            {/* Hero Section */}
            <section className="relative text-center max-w-5xl mx-auto pt-16 md:pt-24 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-slate-600 text-xs font-bold uppercase tracking-wider mb-8">
                        <Shield size={14} className="text-primary" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
                            100% Unabhängig & Werbefrei-finanziert
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                        Schweizer Finanzen. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D80000] to-[#b30000]">
                            Einfach & Fair.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                        Der moderne Rechner für Arbeitslosengeld, Krankenkassen & Kredite.
                        Ohne Makler. Ohne Gebühren.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Link to="/arbeitslosengeld" className="btn-primary flex items-center gap-2 px-8 py-4 text-lg w-full md:w-auto justify-center">
                            Arbeitslosengeld berechnen <ChevronRight size={20} />
                        </Link>
                        <Link to="/krankenkasse" className="px-8 py-4 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors w-full md:w-auto">
                            Krankenkassen vergleichen
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* AD PLACEMENT: Below Hero */}
            <div className="max-w-4xl mx-auto">
                <AdUnit slot="homepage-top" />
            </div>

            {/* Main Features Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
                <FeatureCard
                    icon={Smartphone}
                    title="Arbeitslosengeld Rechner"
                    desc="Berechnen Sie sofort Ihren Taggeld-Anspruch nach aktuellen Schweizer Gesetzen für 2025."
                    link="/arbeitslosengeld"
                    delay={0.1}
                />
                <FeatureCard
                    icon={Shield}
                    title="Krankenkassen 2025"
                    desc="Vergleichen Sie alle Prämien neutral. Finden Sie das echte Sparpotenzial ohne Verkaufsdruck."
                    link="/krankenkasse"
                    delay={0.2}
                />
                <FeatureCard
                    icon={AlertCircle}
                    title="Kredit-Check"
                    desc="Transparenter Vergleich von Privatkrediten. Sehen Sie die echten Gesamtkosten."
                    link="/kredit"
                    delay={0.3}
                />
                <FeatureCard
                    icon={Lock}
                    title="Kündigungs-Generator"
                    desc="Erstellen Sie rechtssichere Kündigungsbriefe als PDF. Für Wohnung, Arbeit & Versicherungen."
                    link="/kuendigen"
                    delay={0.4}
                />
                <FeatureCard
                    icon={CheckCircle}
                    title="Organspende Ausweis"
                    desc="Alles zur neuen Widerspruchslösung. Erstellen Sie Ihren Willen rechtssicher und digital."
                    link="/organspende"
                    delay={0.5}
                />
                {/* Coming Soon Card */}
                <div className="h-full rounded-2xl p-8 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center text-slate-400 min-h-[300px]">
                    <p className="font-bold mb-2">Mehr Tools in Arbeit</p>
                    <p className="text-sm">Vorsorge, Steuern & mehr.</p>
                </div>
            </section>

            {/* Middle Ad */}
            <div className="max-w-4xl mx-auto">
                <AdUnit slot="homepage-middle" />
            </div>

            {/* Values Section */}
            <section className="glass-card p-12 md:p-16 text-center max-w-6xl mx-auto mx-4">
                <h2 className="text-3xl font-bold mb-16 text-slate-900">Warum SwissCheck anders ist.</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    <div>
                        <div className="w-20 h-20 bg-red-50 text-primary rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-sm">
                            <Shield size={32} />
                        </div>
                        <h3 className="text-lg font-bold mb-3">Keine Provisionen</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Wir verkaufen keine Versicherungen. Wir zeigen Ihnen die Daten neutral und verdienen nur an der Werbung hier.
                        </p>
                    </div>
                    <div>
                        <div className="w-20 h-20 bg-slate-50 text-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-sm">
                            <Lock size={32} />
                        </div>
                        <h3 className="text-lg font-bold mb-3">100% Anonym</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Ihre Daten verlassen niemals Ihren Browser. Wir speichern nichts. Keine Cookies, kein Tracking.
                        </p>
                    </div>
                    <div>
                        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-sm">
                            <CheckCircle size={32} />
                        </div>
                        <h3 className="text-lg font-bold mb-3">Kostenlos für alle</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Dieses Projekt ist ein Service für die Schweizer Bevölkerung. Zugang zu Finanzwissen für jeden.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
