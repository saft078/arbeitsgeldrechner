import React from 'react';
import { Umbrella, HeartHandshake, Shield } from 'lucide-react';
import AdUnit from '../components/AdUnit';

const LifeInsurance = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Lebensversicherung Vergleich</h1>
                <p className="text-slate-500">Sichern Sie Ihre Familie ab. Risiko- und Kapitallebensversicherungen im Vergleich.</p>
            </div>

            <AdUnit slot="life-insurance-top" label="Werbung" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-panel p-8 bg-white/80">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Umbrella className="text-blue-600" /> Absicherungssumme
                    </h2>
                    <div className="space-y-4">
                        <p className="text-slate-600">Berechnen Sie, wie viel Geld Ihre Hinterbliebenen benötigen.</p>

                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center py-10">
                            <p className="text-slate-400 font-medium">Rechner wird geladen...</p>
                            <div className="mt-4 inline-flex items-center gap-2 text-xs text-blue-600 font-bold uppercase tracking-wide">
                                <Shield size={14} /> Coming Soon
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 bg-white/80">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <HeartHandshake className="text-red-600" /> Beliebte Anbieter
                    </h2>
                    <ul className="space-y-4">
                        {['AXA', 'Swiss Life', 'Helvetia', 'Allianz'].map(provider => (
                            <li key={provider} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                                <span className="font-bold text-slate-700">{provider}</span>
                                <span className="text-xs text-slate-400">Infos folgen</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LifeInsurance;
