import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, ChevronDown, Heart, FileText, Percent, Activity, Umbrella, MapPin, Briefcase, Calculator, Home, CreditCard, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    // Menu Structure
    const menuGroups = [
        {
            title: "Versicherungen",
            items: [
                { name: 'Krankenkasse', path: '/krankenkasse', icon: Heart },
                { name: 'Autoversicherung', path: '/autoversicherung', icon: Car },
                { name: 'Lebensversicherung', path: '/leben', icon: Umbrella },
            ]
        },
        {
            title: "Finanzen",
            items: [
                { name: 'Kredit-Vergleich', path: '/kredit', icon: Percent },
                { name: 'Hypotheken', path: '/hypothek', icon: Home },
                { name: 'Säule 3a', path: '/saeule-3a', icon: Briefcase },
                { name: 'Kreditkarten', path: '/kreditkarte', icon: CreditCard },
                { name: 'Arbeitslosengeld', path: '/arbeitslosengeld', icon: Calculator },
            ]
        },
        {
            title: "Umzug Schweiz",
            path: '/umzug-schweiz', // Direct link option
            items: [
                { name: 'Umzug-Guide', path: '/umzug-schweiz', icon: MapPin },
            ]
        },
        {
            title: "Vorlagen & Recht",
            items: [
                { name: 'Kündigungsvorlagen', path: '/kuendigen', icon: FileText },
                { name: 'Organspende Ausweis', path: '/organspende', icon: Activity },
                { name: 'Kündigungs-Wecker', path: '/reminder', icon: Activity },
            ]
        }
    ];

    const isActive = (path) => location.pathname === path;

    const handleMouseEnter = (title) => setActiveDropdown(title);
    const handleMouseLeave = () => setActiveDropdown(null);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group z-50 relative">
                        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform" style={{ backgroundColor: 'var(--swiss-red)' }}>
                            <ShieldCheck size={24} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">SwissCheck</span>
                            <span className="text-xs font-medium text-slate-500 tracking-wider uppercase">Neutral. Gratis.</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-6">
                        {menuGroups.map((group) => (
                            <div
                                key={group.title}
                                className="relative py-6 group"
                                onMouseEnter={() => handleMouseEnter(group.title)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="flex items-center gap-1 text-sm font-bold text-slate-700 hover:text-red-600 transition-colors">
                                    {group.title} <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === group.title ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {activeDropdown === group.title && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full -left-4 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-1">
                                                {group.items.map((item) => (
                                                    <Link
                                                        key={item.path}
                                                        to={item.path}
                                                        className={`px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-3 transition-colors ${isActive(item.path) ? 'bg-red-50 text-red-700' : 'hover:bg-slate-50 text-slate-600'}`}
                                                    >
                                                        <div className={`p-1.5 rounded-md ${isActive(item.path) ? 'bg-white text-red-600 shadow-sm' : 'bg-slate-100 text-slate-500'}`}>
                                                            <item.icon size={16} />
                                                        </div>
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
                            {menuGroups.map((group) => (
                                <div key={group.title}>
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{group.title}</h3>
                                    <div className="flex flex-col gap-2 pl-2">
                                        {group.items.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                onClick={() => setIsOpen(false)}
                                                className={`p-3 rounded-lg flex items-center gap-3 ${isActive(item.path) ? 'bg-red-50 text-red-700' : 'text-slate-600 active:bg-slate-50'}`}
                                            >
                                                <item.icon size={20} />
                                                <span className="font-medium">{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-4 text-white">
                        <ShieldCheck size={24} />
                        <span className="font-bold text-lg">SwissCheck</span>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Die unabhängige Schweizer Vergleichsplattform.
                        Wir verkaufen Ihre Daten nicht. Wir erhalten keine Provisionen.
                        100% Transparent für alle.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Finanzen & Vers.</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/krankenkasse" className="hover:text-white transition-colors">Krankenkasse</Link></li>
                        <li><Link to="/kredit" className="hover:text-white transition-colors">Privatkredit</Link></li>
                        <li><Link to="/lebensversicherung" className="hover:text-white transition-colors">Lebensversicherung</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Service</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/arbeitslosengeld" className="hover:text-white transition-colors">Arbeitslosengeld</Link></li>
                        <li><Link to="/umzug-schweiz" className="hover:text-white transition-colors">Umzug Schweiz</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/kuendigen" className="hover:text-white transition-colors">Vorlagen</Link></li>
                        <li><Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                        <li><Link to="/privacy" className="hover:text-white transition-colors">Datenschutz</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>&copy; {new Date().getFullYear()} SwissCheck Public Project.</p>
                <p>Ein kostenloses Tool für die Schweiz.</p>
            </div>
        </div>
    </footer>
);

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
            <Navbar />
            <main className="flex-grow pt-24 pb-12 px-4 container mx-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
