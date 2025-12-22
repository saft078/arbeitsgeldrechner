import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { motion } from 'framer-motion';
import { FileDown, ChevronRight, Check } from 'lucide-react';

const Termination = () => {
    const [formData, setFormData] = useState({
        senderName: '',
        senderAddress: '',
        senderCity: '',
        receiverName: '', // Verwaltung
        receiverAddress: '',
        receiverCity: '',
        objectDesc: '3.5 Zimmer Wohnung', // Default
        objectAddress: '', // If different, usually assumed same as sender for termination
        blind: false, // Blind notification? Usually not relevant for standard termination.
        date: new Date().toISOString().split('T')[0],
        terminationDate: '',
    });

    const generatePDF = () => {
        const doc = new jsPDF();
        const lineHeight = 7;
        let y = 20;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);

        // Sender
        doc.text(formData.senderName, 20, y); y += 5;
        doc.text(formData.senderAddress, 20, y); y += 5;
        doc.text(formData.senderCity, 20, y); y += 20;

        // Receiver
        doc.text("Einschreiben", 20, y); y += 5;
        doc.text(formData.receiverName, 20, y); y += 5;
        doc.text(formData.receiverAddress, 20, y); y += 5;
        doc.text(formData.receiverCity, 20, y); y += 30;

        // Date
        const today = new Date().toLocaleDateString('de-CH', { year: 'numeric', month: 'long', day: 'numeric' });
        doc.text(`${formData.senderCity.split(' ')[1] || 'Ort'}, den ${today}`, 190, y - 10, { align: 'right' });

        // Title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.text("Kündigung des Mietvertrags", 20, y); y += 10;

        // Body
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);

        const text = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich den Mietvertrag für das Objekt "${formData.objectDesc}" an der Adresse ${formData.objectAddress || formData.senderAddress} fristgerecht auf den ${formData.terminationDate || 'nächstmöglichen Termin'}.\n\nBitte bestätigen Sie mir den Erhalt dieser Kündigung sowie das Austrittsdatum schriftlich.\n\nFür die Wohnungsabgabe werde ich mich rechtzeitig mit Ihnen in Verbindung setzen.\n\nBesten Dank für die Kenntnisnahme.\n\nFreundliche Grüsse`;

        const splitText = doc.splitTextToSize(text, 170);
        doc.text(splitText, 20, y);

        // Signature Placeholder
        y += 60;
        doc.text("__________________________", 20, y);
        doc.text(formData.senderName, 20, y + 5);

        doc.save("kuendigung_mietvertrag.pdf");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const InputField = ({ label, name, type = "text", placeholder }) => (
        <div className="mb-4">
            <label className="block text-slate-700 text-sm font-semibold mb-2">{label}</label>
            <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-slate-300"
            />
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Mietvertrag kündigen</h1>
                <p className="text-slate-500 max-w-2xl mx-auto">
                    Erstellen Sie in wenigen Sekunden eine rechtssichere Kündigung für Ihre Wohnung in der Schweiz.
                    Kostenlos, ohne Anmeldung, direkt als PDF.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-card p-8 rounded-2xl bg-white"
                >
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">1</span>
                        Ihre Angaben
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <InputField label="Name & Vorname" name="senderName" placeholder="Max Muster" />
                        <InputField label="Ihre Adresse" name="senderAddress" placeholder="Musterstrasse 1" />
                        <InputField label="PLZ & Ort" name="senderCity" placeholder="8000 Zürich" />
                    </div>

                    <h2 className="text-xl font-bold mb-6 mt-8 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm">2</span>
                        Verwaltung / Vermieter
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <InputField label="Name / Firma" name="receiverName" placeholder="Immobilien AG" />
                        <InputField label="Adresse" name="receiverAddress" placeholder="Verwaltungsweg 20" />
                        <InputField label="PLZ & Ort" name="receiverCity" placeholder="3000 Bern" />
                    </div>

                    <h2 className="text-xl font-bold mb-6 mt-8 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm">3</span>
                        Objekt & Termin
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <InputField label="Objektbeschrieb" name="objectDesc" placeholder="3.5 Zimmer Wohnung, 2. Stock" />
                        <InputField label="Adresse des Objekts" name="objectAddress" placeholder="Falls abweichend von Ihrer Adresse" />
                        <InputField label="Kündigungsdatum" name="terminationDate" type="text" placeholder="Ganzes Datum oder 'per sofort'" />
                    </div>

                    <button
                        onClick={generatePDF}
                        className="w-full mt-8 btn-primary flex items-center justify-center gap-2 py-4 text-lg shadow-xl shadow-red-200"
                    >
                        <FileDown />
                        PDF Generieren & Herunterladen
                    </button>
                    <p className="text-xs text-center mt-4 text-slate-400">
                        Das PDF wird lokal in Ihrem Browser generiert. Keine Datenübertragung.
                    </p>
                </motion.div>

                {/* Preview Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    <div className="sticky top-24">
                        <div className="absolute inset-0 bg-red-600 blur-3xl opacity-5 rounded-full transform rotate-12"></div>
                        <div className="relative bg-white border border-slate-200 rounded shadow-2xl p-12 min-h-[600px] text-xs leading-relaxed text-slate-600 font-serif">
                            {/* Live Preview Paper */}
                            <div className="mb-8">
                                <p className="font-bold mb-1">{formData.senderName || 'Ihr Name'}</p>
                                <p>{formData.senderAddress || 'Ihre Strasse'}</p>
                                <p>{formData.senderCity || 'PLZ Ort'}</p>
                            </div>

                            <div className="mb-12 ml-[50%]">
                                <p>Einschreiben</p>
                                <p className="font-bold">{formData.receiverName || 'Verwaltung AG'}</p>
                                <p>{formData.receiverAddress || 'Adresse'}</p>
                                <p>{formData.receiverCity || 'PLZ Ort'}</p>
                            </div>

                            <div className="text-right mb-8">
                                <p>{formData.senderCity ? formData.senderCity.split(' ')[1] : 'Ort'}, {new Date().toLocaleDateString()}</p>
                            </div>

                            <h3 className="font-bold text-base text-black mb-4">Kündigung des Mietvertrags</h3>

                            <p className="mb-4">
                                Sehr geehrte Damen und Herren,<br /><br />
                                Hiermit kündige ich den Mietvertrag für das Objekt "{formData.objectDesc}" an der Adresse {formData.objectAddress || formData.senderAddress || '...'} fristgerecht auf den {formData.terminationDate || 'nächstmöglichen Termin'}.
                            </p>
                            <p className="mb-4">
                                Bitte bestätigen Sie mir den Erhalt dieser Kündigung sowie das Austrittsdatum schriftlich.
                            </p>
                            <p className="mb-8">
                                Besten Dank für die Kenntnisnahme.<br /><br />
                                Freundliche Grüsse
                            </p>

                            <div className="mt-12 border-t border-black w-48">
                                <p className="mt-1">{formData.senderName}</p>
                            </div>
                        </div>

                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} /></div>
                                <span className="text-sm font-semibold">Schweizer Recht</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} /></div>
                                <span className="text-sm font-semibold">Kostenlos</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Termination;
