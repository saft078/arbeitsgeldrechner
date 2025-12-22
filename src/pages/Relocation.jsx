import React from 'react';
import { MapPin, Home, Briefcase, FileText } from 'lucide-react';
import AdUnit from '../components/AdUnit';

const Relocation = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Umzug in die Schweiz</h1>
                <p className="text-slate-500">Der komplette Guide für Auswanderer. Checklisten, Jobs und Wohnen.</p>
            </div>

            <AdUnit slot="relocation-top" label="Werbung" />

            <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-panel p-6 bg-white hover:border-red-200 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FileText size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Aufenthaltsbewilligung</h3>
                    <p className="text-sm text-slate-500">B-Bewilligung, C-Bewilligung oder Grenzgänger (G). Was Sie wissen müssen.</p>
                </div>

                <div className="glass-panel p-6 bg-white hover:border-red-200 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Briefcase size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Arbeiten in der Schweiz</h3>
                    <p className="text-sm text-slate-500">Lohnniveau, Quellensteuer und Sozialversicherungen erklärt.</p>
                </div>

                <div className="glass-panel p-6 bg-white hover:border-red-200 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Home size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Wohnungssuche</h3>
                    <p className="text-sm text-slate-500">Tipps für die Bewerbungsmappe und Kautionsversicherung.</p>
                </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Checkliste herunterladen</h2>
                <p className="text-slate-400 mb-6">Unsere PDF-Checkliste für den perfekten Start in der Schweiz.</p>
                <button className="btn-primary py-3 px-8 bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-900">
                    PDF Downloaden (Gratis)
                </button>
            </div>
        </div>
    );
};

export default Relocation;
