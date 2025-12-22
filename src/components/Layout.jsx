import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, Heart, FileText, Percent, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Arbeitslosengeld', path: '/arbeitslosengeld', icon: Activity },
        { name: 'Krankenkasse', path: '/krankenkasse', icon: Heart },
        { name: 'Kredit', path: '/kredit', icon: Percent },
        { name: 'Kündigen', path: '/kuendigen', icon: FileText },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform" style={{ backgroundColor: 'var(--swiss-red)' }}>
                            <ShieldCheck size={24} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">SwissCheck</span>
                            <span className="text-xs font-medium text-slate-500 tracking-wider uppercase">Neutral. Gratis.</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2
                  ${isActive(link.path)
                                        ? 'text-red-700 bg-red-50'
                                        : 'text-slate-600 hover:text-red-600 hover:bg-slate-50'
                                    }`}
                            >
                                <link.icon size={16} className={isActive(link.path) ? 'text-red-600' : 'text-slate-400'} />
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                        >
                            {isOpen ? <X /> : <Menu />}
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
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`p-3 rounded-lg flex items-center gap-3 ${isActive(link.path) ? 'bg-red-50 text-red-700' : 'text-slate-600'
                                        }`}
                                >
                                    <link.icon size={20} />
                                    {link.name}
                                </Link>
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
                    <h4 className="text-white font-semibold mb-4">Vergleiche</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/krankenkasse" className="hover:text-white transition-colors">Krankenkasse</Link></li>
                        <li><Link to="/kredit" className="hover:text-white transition-colors">Privatkredit</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Tools</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/kuendigen" className="hover:text-white transition-colors">Mietvertrag kündigen</Link></li>
                        <li><Link to="/organspende" className="hover:text-white transition-colors">2027 Organspende</Link></li>
                        <li><Link to="/reminder" className="hover:text-white transition-colors">Erinnerungs-Service</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
                    <ul className="space-y-2 text-sm">
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
