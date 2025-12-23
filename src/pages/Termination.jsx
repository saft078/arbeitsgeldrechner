import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { motion } from 'framer-motion';
import { FileDown, Check, FileText, Home, Heart, Smartphone, Car, } from 'lucide-react';
import SEO from '../components/SEO';

const templates = [
    { id: 'wohnung', name: 'Wohnung kündigen', icon: Home, color: 'red', popular: true },
    { id: 'krankenkasse', name: 'Krankenkasse kündigen', icon: Heart, color: 'blue', popular: true },
    { id: 'handy', name: 'Handy-Abo kündigen', icon: Smartphone, color: 'purple', popular: true },
    { id: 'autoversicherung', name: 'Autoversicherung kündigen', icon: Car, color: 'green', popular: true },
    { id: 'fitness', name: 'Fitnessstudio kündigen', icon: FileText, color: 'orange' },
    { id: 'internet', name: 'Internet/TV-Abo kündigen', icon: FileText, color: 'cyan' },
    { id: 'zeitung', name: 'Zeitung/Zeitschrift kündigen', icon: FileText, color: 'slate' },
    { id: 'strom', name: 'Stromversorger kündigen', icon: FileText, color: 'yellow' },
    { id: 'bank', name: 'Bankkonto kündigen', icon: FileText, color: 'indigo' },
    { id: 'versicherung', name: 'Versicherung allgemein', icon: FileText, color: 'teal' },
    { id: 'arbeit', name: 'Arbeitsvertrag kündigen', icon: FileText, color: 'rose' },
    { id: 'verein', name: 'Vereinsmitgliedschaft', icon: FileText, color: 'emerald' },
];

const Termination = () => {
    const [selectedTemplate, setSelectedTemplate] = useState('wohnung');
    const [formData, setFormData] = useState({
        senderName: '',
        senderAddress: '',
        senderCity: '',
        receiverName: '',
        receiverAddress: '',
        receiverCity: '',
        contractNumber: '',
        terminationDate: '',
        objectDesc: '',
    });

    const generatePDF = () => {
        const doc = new jsPDF();
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
        const today = new Date().toLocaleDateString('de-CH');
        doc.text(`${formData.senderCity.split(' ')[1] || 'Ort'}, den ${today}`, 190, y - 10, { align: 'right' });

        // Title + Body based on template
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);

        let title = "Kündigung";
        let bodyText = "";

        switch (selectedTemplate) {
            case 'wohnung':
                title = "Kündigung des Mietvertrags";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich den Mietvertrag für das Objekt "${formData.objectDesc}" an der Adresse ${formData.senderAddress} fristgerecht auf den ${formData.terminationDate || 'nächstmöglichen Termin'}.\n\nBitte bestätigen Sie mir den Erhalt dieser Kündigung sowie das Austrittsdatum schriftlich.\n\nBesten Dank für die Kenntnisnahme.\n\nFreundliche Grüsse`;
                break;
            case 'krankenkasse':
                title = "Kündigung der Krankenkasse (Grundversicherung)";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich meine Grundversicherung (Versicherungsnummer: ${formData.contractNumber || '...'}) per ${formData.terminationDate || '31. Dezember 2025'} fristgerecht.\n\nGemäss Art. 7 KVG erfolgt die Kündigung bei Erhalt Ihrer Prämienrechnung für das kommende Jahr bis spätestens 30. November.\n\nIch bitte um eine schriftliche Bestätigung dieser Kündigung.\n\nFreundliche Grüsse`;
                break;
            case 'handy':
                title = "Kündigung des Handy-Abonnements";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich mein Handy-Abonnement (Vertragsnummer: ${formData.contractNumber || '...'}) fristgerecht per ${formData.terminationDate || 'per sofort bzw. nächstmöglicher Termin'}.\n\nBitte bestätigen Sie mir den Erhalt dieser Kündigung sowie das Ende der Vertragslaufzeit schriftlich.\n\nFreundliche Grüsse`;
                break;
            case 'autoversicherung':
                title = "Kündigung der Autoversicherung";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich die Autoversicherung für mein Fahrzeug (Kennzeichen: ${formData.contractNumber || '...'}) fristgerecht per ${formData.terminationDate || '31. Dezember 2025'}.\n\nGemäss den allgemeinen Versicherungsbedingungen läuft die Kündigung per Ende des Versicherungsjahres.\n\nIch bitte um eine schriftliche Kündigungsbestätigung.\n\nFreundliche Grüsse`;
                break;
            case 'fitness':
                title = "Kündigung der Fitnessstudio-Mitgliedschaft";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich meine Mitgliedschaft (Mitgliedsnummer: ${formData.contractNumber || '...'}) bei Ihrem Fitnessstudio fristgerecht per ${formData.terminationDate || 'nächstmöglicher Termin'}.\n\nIch bitte um eine schriftliche Bestätigung dieser Kündigung.\n\nFreundliche Grüsse`;
                break;
            case 'internet':
                title = "Kündigung des Internet- und TV-Abonnements";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich mein Internet- und TV-Abonnement (Kundennummer: ${formData.contractNumber || '...'}) fristgerecht per ${formData.terminationDate || 'nächstmöglicher Termin'}.\n\nBitte bestätigen Sie mir den Erhalt dieser Kündigung sowie das Vertragsende schriftlich.\n\nFreundliche Grüsse`;
                break;
            case 'zeitung':
                title = "Kündigung des Zeitungs-/Zeitschriften-Abonnements";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich mein Abonnement (Abonummer: ${formData.contractNumber || '...'}) fristgerecht per ${formData.terminationDate || 'nächstmöglicher Termin'}.\n\nIch bitte um eine schriftliche Bestätigung.\n\nFreundliche Grüsse`;
                break;
            case 'strom':
                title = "Kündigung des Stromvertrags";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich meinen Stromliefervertrag für die Adresse ${formData.senderAddress} (Vertragsnummer: ${formData.contractNumber || '...'}) fristgerecht per ${formData.terminationDate || 'nächstmöglicher Termin'}.\n\nBitte bestätigen Sie mir den Erhalt dieser Kündigung schriftlich.\n\nFreundliche Grüsse`;
                break;
            case 'bank':
                title = "Kündigung des Bankkontos";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich mein Bankkonto (Kontonummer: ${formData.contractNumber || '...'}) bei Ihrer Bank fristgerecht per ${formData.terminationDate || 'nächstmöglicher Termin'}.\n\nBitte überweisen Sie das Restguthaben auf folgendes Konto: [neue IBAN].\n\nFreundliche Grüsse`;
                break;
            case 'versicherung':
                title = "Kündigung der Versicherung";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich meine Versicherung (Policennummer: ${formData.contractNumber || '...'}) fristgerecht per ${formData.terminationDate || '31. Dezember 2025'}.\n\nIch bitte um eine schriftliche Kündigungsbestätigung.\n\nFreundliche Grüsse`;
                break;
            case 'arbeit':
                title = "Kündigung des Arbeitsverhältnisses";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich mein Arbeitsverhältnis als ${formData.objectDesc || '[Position]'} bei ${formData.receiverName || 'Ihrer Firma'} fristgerecht per ${formData.terminationDate || 'nächstmöglicher Termin'} unter Einhaltung der vertraglichen Kündigungsfrist.\n\nIch bedanke mich für die gute Zusammenarbeit und bitte um Ausstellung eines qualifizierten Arbeitszeugnisses.\n\nFreundliche Grüsse`;
                break;
            case 'verein':
                title = "Kündigung der Vereinsmitgliedschaft";
                bodyText = `Sehr geehrte Damen und Herren,\n\nHiermit kündige ich meine Mitgliedschaft im Verein ${formData.receiverName || '[Vereinsname]'} (Mitgliedsnummer: ${formData.contractNumber || '...'}) fristgerecht per ${formData.terminationDate || 'nächstmöglicher Termin'}.\n\nIch bitte um eine schriftliche Bestätigung.\n\nFreundliche Grüsse`;
                break;
            default:
                bodyText = "Vorlage wird geladen...";
        }

        doc.text(title, 20, y); y += 10;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        const splitText = doc.splitTextToSize(bodyText, 170);
        doc.text(splitText, 20, y);

        // Signature
        y += 60;
        doc.text("__________________________", 20, y);
        doc.text(formData.senderName, 20, y + 5);

        doc.save(`kuendigung_${selectedTemplate}.pdf`);
    };

    const InputField = ({ label, name, type = "text", placeholder }) => (
        <div className="mb-4">
            <label className="block text-slate-700 text-sm font-semibold mb-2">{label}</label>
            <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                placeholder={placeholder}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-slate-300"
            />
        </div>
    );

    return (
        <div className="pb-20">
            <SEO
                title="Kostenlose Kündigungsvorlagen Schweiz 2025"
                description="Rechtssichere Kündigungsvorlagen für Wohnung, Krankenkasse, Handy-Abo und mehr. Kostenlos als PDF generieren."
                keywords="Kündigung, Kündigungsvorlage, Wohnung kündigen, Krankenkasse kündigen, Muster Schweiz"
            />

            {/* Hero */}
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden mb-12">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl text-white"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kündigungsvorlagen für die Schweiz</h1>
                            <p className="text-lg text-slate-300 mb-6">Rechtssicher, kostenlos und sofort als PDF. Füllen Sie einfach die Felder aus und laden Sie Ihre Kündigung herunter.</p>
                            <div className="flex gap-4">
                                <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">100% Kostenlos</span>
                                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Keine Anmeldung</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                {/* Template Selection */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Wählen Sie Ihre Vorlage</h2>
                    <p className="text-slate-500 text-center mb-8">12 rechtssichere Kündigungsvorlagen für die Schweiz</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {templates.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setSelectedTemplate(t.id)}
                                className={`relative p-4 rounded-2xl border-2 transition-all text-center ${selectedTemplate === t.id
                                        ? 'border-red-600 bg-red-50 shadow-lg'
                                        : 'border-slate-200 bg-white hover:border-slate-300'
                                    }`}
                            >
                                {t.popular && (
                                    <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Top</span>
                                )}
                                <t.icon className={`mx-auto mb-2 ${selectedTemplate === t.id ? 'text-red-600' : 'text-slate-400'}`} size={24} />
                                <span className="text-xs font-bold text-slate-900 leading-tight block">{t.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Form + Preview */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Form */}
                    <motion.div
                        key={selectedTemplate}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass-card p-8 rounded-2xl bg-white border border-slate-100"
                    >
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <FileText size={20} className="text-red-600" /> Ihre Angaben
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                            <InputField label="Name & Vorname" name="senderName" placeholder="Max Muster" />
                            <InputField label="Ihre Adresse" name="senderAddress" placeholder="Musterstrasse 1" />
                            <InputField label="PLZ & Ort" name="senderCity" placeholder="8000 Zürich" />
                        </div>

                        <h3 className="text-lg font-bold mb-4 mt-6">Empfänger</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <InputField label="Name / Firma" name="receiverName" placeholder={selectedTemplate === 'krankenkasse' ? 'CSS Versicherung' : 'Verwaltung AG'} />
                            <InputField label="Adresse" name="receiverAddress" placeholder="Firmenstrasse 10" />
                            <InputField label="PLZ & Ort" name="receiverCity" placeholder="6000 Luzern" />
                        </div>

                        <h3 className="text-lg font-bold mb-4 mt-6">Details</h3>
                        {selectedTemplate === 'wohnung' && (
                            <InputField label="Objektbeschrieb" name="objectDesc" placeholder="3.5 Zimmer Wohnung, 2. Stock" />
                        )}
                        {(selectedTemplate === 'krankenkasse' || selectedTemplate === 'handy' || selectedTemplate === 'autoversicherung') && (
                            <InputField label="Vertrags- / Versicherungsnummer" name="contractNumber" placeholder="123456789" />
                        )}
                        <InputField label="Kündigungsdatum" name="terminationDate" placeholder="31. Dezember 2025" />

                        <button
                            onClick={generatePDF}
                            className="w-full mt-6 btn-primary flex items-center justify-center gap-2 py-4 text-lg shadow-xl shadow-red-200"
                        >
                            <FileDown size={20} />
                            PDF Generieren & Herunterladen
                        </button>
                        <p className="text-xs text-center mt-3 text-slate-400">
                            Das PDF wird lokal in Ihrem Browser generiert. Keine Datenübertragung.
                        </p>
                    </motion.div>

                    {/* Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="sticky top-24">
                            <div className="bg-white border border-slate-200 rounded-lg shadow-2xl p-12 min-h-[600px] text-xs leading-relaxed text-slate-600 font-serif">
                                <div className="mb-8">
                                    <p className="font-bold mb-1">{formData.senderName || 'Ihr Name'}</p>
                                    <p>{formData.senderAddress || 'Ihre Strasse'}</p>
                                    <p>{formData.senderCity || 'PLZ Ort'}</p>
                                </div>

                                <div className="mb-12 ml-[50%]">
                                    <p>Einschreiben</p>
                                    <p className="font-bold">{formData.receiverName || 'Empfänger'}</p>
                                    <p>{formData.receiverAddress || 'Adresse'}</p>
                                    <p>{formData.receiverCity || 'PLZ Ort'}</p>
                                </div>

                                <div className="text-right mb-8">
                                    <p>{formData.senderCity ? formData.senderCity.split(' ')[1] : 'Ort'}, {new Date().toLocaleDateString('de-CH')}</p>
                                </div>

                                <h3 className="font-bold text-base text-black mb-4">
                                    {selectedTemplate === 'wohnung' && 'Kündigung des Mietvertrags'}
                                    {selectedTemplate === 'krankenkasse' && 'Kündigung der Krankenkasse'}
                                    {selectedTemplate === 'handy' && 'Kündigung des Handy-Abonnements'}
                                    {selectedTemplate === 'autoversicherung' && 'Kündigung der Autoversicherung'}
                                </h3>

                                <p className="mb-4">
                                    Sehr geehrte Damen und Herren,<br /><br />
                                    Hiermit kündige ich {selectedTemplate === 'wohnung' && `den Mietvertrag für "${formData.objectDesc || 'das Objekt'}" fristgerecht auf den ${formData.terminationDate || 'nächstmöglichen Termin'}`}
                                    {selectedTemplate === 'krankenkasse' && `meine Grundversicherung (Nr. ${formData.contractNumber || '...'}) per ${formData.terminationDate || '31. Dezember 2025'}`}
                                    {selectedTemplate === 'handy' && `mein Handy-Abo (Nr. ${formData.contractNumber || '...'}) per ${formData.terminationDate || 'per sofort'}`}
                                    {selectedTemplate === 'autoversicherung' && `die Autoversicherung (Kennzeichen: ${formData.contractNumber || '...'}) per ${formData.terminationDate || '31. Dezember 2025'}`}.
                                </p>
                                <p className="mb-4">
                                    Bitte bestätigen Sie mir den Erhalt dieser Kündigung schriftlich.
                                </p>
                                <p className="mb-8">
                                    Besten Dank.<br /><br />
                                    Freundliche Grüsse
                                </p>

                                <div className="mt-12 border-t border-black w-48">
                                    <p className="mt-1">{formData.senderName || '...'}</p>
                                </div>
                            </div>

                            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={14} /></div>
                                    <span className="text-sm font-semibold">Rechtskonform</span>
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
        </div>
    );
};

export default Termination;
