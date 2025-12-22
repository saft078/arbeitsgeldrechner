import React from 'react';
import SEO from '../components/SEO';

const Privacy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
            <SEO title="Datenschutz | SwissCheck" description="Datenschutzerklärung" />

            <h1 className="text-3xl font-bold">Datenschutz</h1>

            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-6 text-sm text-slate-600">
                <p>
                    Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein.
                </p>

                <h2 className="font-bold text-lg text-slate-900 mt-4">Google AdSense</h2>
                <p>
                    Diese Website verwendet Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Inc. ("Google"). Google AdSense verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website ermöglicht. Google AdSense verwendet auch so genannte Web Beacons (unsichtbare Grafiken). Durch diese Web Beacons können Informationen wie der Besucherverkehr auf diesen Seiten ausgewertet werden.
                </p>

                <h2 className="font-bold text-lg text-slate-900 mt-4">Cookies</h2>
                <p>
                    Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die beim Besuch dieser Website in Ihrem Computer dauerhaft oder temporär gespeichert werden. Zweck der Cookies ist insbesondere die Analyse der Nutzung dieser Website zur statistischen Auswertung sowie für kontinuierliche Verbesserungen.
                </p>

                <h2 className="font-bold text-lg text-slate-900 mt-4">Haftungsausschluss</h2>
                <p>
                    Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
                </p>
            </div>
        </div>
    );
};

export default Privacy;
