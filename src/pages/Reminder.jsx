import React, { useState } from 'react';
import { Bell, Calendar, Mail, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Reminder = () => {
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [topic, setTopic] = useState('termination');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && date) {
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="max-w-md mx-auto text-center py-20">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <Check size={48} />
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">Erinnerung aktiviert!</h2>
                <p className="text-slate-500">
                    Wir werden Sie rechtzeitig an den Termin am {new Date(date).toLocaleDateString()} erinnern.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-red-600 underline">Weitere Erinnerung erstellen</button>
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto">
            <div className="text-center mb-10 space-y-4">
                <div className="inline-block p-4 rounded-full bg-indigo-50 text-indigo-600">
                    <Bell size={32} />
                </div>
                <h1 className="text-3xl font-bold">Kündigungs-Wecker</h1>
                <p className="text-slate-500">
                    Verpassen Sie nie wieder eine Kündigungsfrist. Wir erinnern Sie per E-Mail, 7 Tage bevor es zu spät ist.
                </p>
            </div>

            <div className="glass-card p-8 rounded-2xl bg-white shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Ich möchte erinnert werden an</label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                onClick={() => setTopic('termination')}
                                className={`p-3 rounded-lg border text-sm font-medium transition-all ${topic === 'termination' ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-200 text-slate-600'}`}
                            >
                                Mietvertrag
                            </button>
                            <button
                                type="button"
                                onClick={() => setTopic('insurance')}
                                className={`p-3 rounded-lg border text-sm font-medium transition-all ${topic === 'insurance' ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-200 text-slate-600'}`}
                            >
                                Krankenkasse
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Die Kündigungsfrist ist am</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-3 text-slate-400" size={18} />
                            <input
                                type="date"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">E-Mail Adresse</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none"
                                placeholder="name@beispiel.ch"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full btn-primary py-4 text-lg shadow-lg shadow-indigo-100"
                        style={{ backgroundColor: 'var(--swiss-red)' }}
                    >
                        Erinnerung aktivieren
                    </button>
                </form>

                <p className="text-xs text-center text-slate-400 mt-6">
                    Wir verwenden din E-Mail nur für diesen Zweck. 100% Spam-frei.
                </p>
            </div>
        </div>
    );
};

export default Reminder;
