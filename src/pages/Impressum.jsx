import React from 'react';
import SEO from '../components/SEO';

const Impressum = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
            <SEO title="Impressum | SwissCheck" description="Rechtliche Informationen" />

            <h1 className="text-3xl font-bold">Impressum</h1>

            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-6">
                <div>
                    <h2 className="font-bold text-lg mb-2">Kontaktadresse</h2>
                    <p className="text-slate-600">
                        Rahel Ruf<br />
                        (Adresse bitte hier ergänzen)<br />
                        Schweiz
                    </p>
                    <p className="text-slate-600 mt-2">E-Mail: (Bitte E-Mail ergänzen)</p>
                </div>

                <div>
                    <h2 className="font-bold text-lg mb-2">Haftungsausschluss</h2>
                    <p className="text-slate-600 text-sm">
                        Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-lg mb-2">Haftung für Links</h2>
                    <p className="text-slate-600 text-sm">
                        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-lg mb-2">Urheberrechte</h2>
                    <p className="text-slate-600 text-sm">
                        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich <strong>SwissCheck</strong> oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
