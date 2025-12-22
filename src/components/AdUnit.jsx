import React from 'react';

const AdUnit = ({ slot, format = 'auto', label = 'Werbung' }) => {
    // Real AdSense ID
    const AD_CLIENT_ID = "ca-pub-7426945056706372";

    React.useEffect(() => {
        try {
            if (window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error("AdSense Error:", e);
        }
    }, []);

    return (
        <div className="w-full my-8 flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-lg p-4 min-h-[100px] text-center overflow-hidden">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider mb-2">{label}</span>

            {/* Google AdSense Unit */}
            <ins className="adsbygoogle"
                style={{ display: 'block', minWidth: '300px' }}
                data-ad-client={AD_CLIENT_ID}
                data-ad-slot={slot || "8924302142"}
                data-ad-format={format}
                data-full-width-responsive="true"></ins>
        </div>
    );
};

export default AdUnit;
