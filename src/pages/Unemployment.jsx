import React, { useState } from 'react';
import { Calculator, HelpCircle, Info } from 'lucide-react';
import AdUnit from '../components/AdUnit';

const Unemployment = () => {
    const [salary, setSalary] = useState(6500);
    const [children, setChildren] = useState(false);
    const [age, setAge] = useState(30);

    // Swiss Unemployment Logic (Simplified)
    // Base: 70% of insured salary, or 80% if children or invalidity or low income (<3797)
    const calculateALE = () => {
        // Cap salary at 12350 CHF/month (148'200 / 12)
        const insuredSalary = Math.min(salary, 12350);

        let percentage = 0.7; // 70%
        if (children || insuredSalary < 3797) {
            percentage = 0.8; // 80%
        }

        const monthlyGross = insuredSalary * percentage;
        // Approx work days per month = 21.7
        const dailyAllowance = (insuredSalary * 12) / 260 * percentage; // Yearly / 260 working days * percent

        return {
            monthly: monthlyGross.toFixed(2),
            daily: dailyAllowance.toFixed(2),
            percentage: (percentage * 100).toFixed(0)
        };
    };

    const result = calculateALE();

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Arbeitslosengeld Rechner</h1>
                <p className="text-slate-500">Berechnen Sie Ihr voraussichtliches Taggeld (ALE) in der Schweiz.</p>
            </div>

            <AdUnit slot="unemployment-top" label="Anzeige" />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-2xl bg-white">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Calculator className="text-blue-600" /> Eingaben
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <label className="font-bold text-slate-700 block mb-2">Monatslohn (Brutto)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3 text-slate-400">CHF</span>
                                <input
                                    type="number"
                                    value={salary}
                                    onChange={e => setSalary(Number(e.target.value))}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 bg-slate-50"
                                />
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Durchschnitt der letzten 6 oder 12 Monate</p>
                        </div>

                        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                            <span className="font-bold text-slate-700">Unterhaltspflicht für Kinder?</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" checked={children} onChange={e => setChildren(e.target.checked)} />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl flex gap-3 text-sm text-blue-800">
                            <Info className="shrink-0 mt-0.5" size={16} />
                            <p>Der versicherte Lohn ist auf max. CHF 148'200 pro Jahr (CHF 12'350/Monat) begrenzt.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="hero-gradient p-8 rounded-2xl text-white shadow-xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
                        <div className="relative z-10">
                            <span className="text-blue-200 uppercase text-xs font-bold tracking-wider">Ihr Anspruch ca.</span>
                            <div className="text-5xl font-bold my-4">
                                {result.monthly}
                            </div>
                            <span className="text-blue-200">CHF / Monat (Brutto)</span>

                            <div className="mt-8 pt-8 border-t border-slate-700 grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-2xl font-bold">{result.daily}</div>
                                    <div className="text-xs text-blue-300">Taggeld (CHF)</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">{result.percentage}%</div>
                                    <div className="text-xs text-blue-300">Satz</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-2xl bg-white text-sm text-slate-600">
                        <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><HelpCircle size={16} /> Wichtig zu wissen</h3>
                        <ul className="space-y-2 list-disc pl-4">
                            <li>Abzug für Sozialleistungen wird noch fällig.</li>
                            <li>Auszahlung erfolgt je nach Arbeitstagen im Monat (20-23 Taggelder).</li>
                            <li>Wartetage beachten (meist 5-20 Tage).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unemployment;
