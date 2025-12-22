import React, { useState } from 'react';
import { Heart, ShieldX, Info, Download, AlertTriangle } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { motion } from 'framer-motion';

const OrganDonation = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [birthday, setBirthday] = useState('');

    const generateCard = (type) => {
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [85, 55] // Credit card size
        });

        // Background
        doc.setFillColor(type === 'refusal' ? 255 : 240);
        doc.rect(0, 0, 85, 55, 'F');

        // Header
        doc.setFontSize(8);
        doc.setFont("helvetica", "bold");
        doc.text(type === 'refusal' ? "ORGANSPOVORBEHALT / NON-DONOR" : "ORGANSPENDER / DONOR", 5, 8);

        // Content
        doc.setFontSize(7);
        doc.setFont("helvetica", "normal");

        if (type === 'refusal') {
            doc.text("Ich widerspreche der Entnahme von Organen,", 5, 15);
            doc.text("Geweben und Zellen nach meinem Tod.", 5, 19);
        } else {
            doc.text("Ich stimme der Entnahme von Organen,", 5, 15);
            doc.text("Geweben und Zellen nach meinem Tod zu.", 5, 19);
        }

        // Personal Data
        doc.setFontSize(6);
        doc.text(`Name: ${name || '................................'}`, 5, 30);
        doc.text(`Geb: ${birthday || '................'}`, 5, 34);
        doc.text(`Ort: ${city || '................'}`, 45, 34);

        doc.text("Datum/Unterschrift:", 5, 45);
        doc.text("_________________________", 5, 50);

        doc.save(`organspende_${type}.pdf`);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-12">
            {/* Hero / Education */}
            <div className="text-center space-y-6">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-block p-4 rounded-full bg-red-50 text-red-600 mb-4"
                >
                    <Heart size={48} fill="currentColor" className="opacity-20" />
                </motion.div>
                <h1 className="text-4xl font-bold">Organspende Schweiz</h1>
                <p className="max-w-2xl mx-auto text-slate-600">
                    Die Schweiz wechselt zur <strong>Widerspruchslösung</strong> (voraussichtlich 2026/2027).
                    Das bedeutet: Wer nicht widerspricht, wird automatisch zum Spender.
                </p>

                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-8">
                    <div className="glass-card p-6 rounded-xl border-l-4 border-l-emerald-500 text-left">
                        <h3 className="font-bold text-lg mb-2">Aktuell (Zustimmungs-Lösung)</h3>
                        <p className="text-sm text-slate-500">
                            Sie müssen aktiv zustimmen (Spenderkarte, Eintrag), um zu spenden.
                        </p>
                    </div>
                    <div className="glass-card p-6 rounded-xl border-l-4 border-l-red-500 text-left">
                        <h3 className="font-bold text-lg mb-2">Neu (Widerspruchs-Lösung)</h3>
                        <p className="text-sm text-slate-500">
                            Jeder gilt als Spender. Wer das <strong>nicht</strong> möchte, muss sich in ein Register eintragen (folgt).
                        </p>
                    </div>
                </div>
            </div>

            {/* Generator Tool */}
            <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                <h2 className="text-2xl font-bold mb-8 text-center">Willenserklärung erstellen (Vorläufig)</h2>
                <p className="text-center text-slate-500 mb-8 max-w-lg mx-auto text-sm">
                    Bis das nationale Register online ist, sollten Sie Ihren Willen schriftlich festhalten und bei sich tragen.
                </p>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Inputs */}
                    <div className="md:col-span-1 space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Name</label>
                            <input type="text" className="w-full p-2 border rounded" placeholder="Max Muster" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Geburtsdatum</label>
                            <input type="text" className="w-full p-2 border rounded" placeholder="01.01.1980" value={birthday} onChange={e => setBirthday(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Wohnort</label>
                            <input type="text" className="w-full p-2 border rounded" placeholder="Bern" value={city} onChange={e => setCity(e.target.value)} />
                        </div>
                    </div>

                    {/* Action Cards */}
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                        <button onClick={() => generateCard('refusal')} className="group p-6 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all text-left bg-slate-50">
                            <div className="flex justify-between items-start mb-4">
                                <ShieldX className="text-slate-600" size={32} />
                                <Download className="text-slate-400 group-hover:text-slate-900" />
                            </div>
                            <h3 className="font-bold text-slate-900">Nein, ich möchte nicht spenden</h3>
                            <p className="text-xs text-slate-500 mt-2">Generiert eine Widerspruchskarte für Ihr Portemonnaie.</p>
                        </button>

                        <button onClick={() => generateCard('consent')} className="group p-6 rounded-xl border border-rose-100 hover:border-rose-300 hover:shadow-lg transition-all text-left bg-rose-50/50">
                            <div className="flex justify-between items-start mb-4">
                                <Heart className="text-rose-500" size={32} />
                                <Download className="text-rose-300 group-hover:text-rose-600" />
                            </div>
                            <h3 className="font-bold text-rose-900">Ja, ich möchte spenden</h3>
                            <p className="text-xs text-rose-800/60 mt-2">Generiert einen Organspendeausweis.</p>
                        </button>
                    </div>
                </div>
            </section>

            <div className="flex gap-4 items-start bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                <Info className="shrink-0 mt-0.5" size={16} />
                <p>
                    Diese Karten sind rechtlich eine Willenserklärung. Informieren Sie unbedingt auch Ihre Angehörigen über Ihren Entscheid,
                    da diese im Zweifelsfall befragt werden (subsidiärer Widerspruch).
                </p>
            </div>
        </div>
    );
};

export default OrganDonation;
