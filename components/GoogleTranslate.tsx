'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: {
            translate: {
                TranslateElement: new (options: { pageLanguage: string }, elementId: string) => void;
            };
        };
    }
}

const GoogleTranslate = () => {
    useEffect(() => {
        const addGoogleTranslateScript = () => {
            const script = document.createElement('script');
            script.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
            script.async = true;
            document.body.appendChild(script);

            window.googleTranslateElementInit = () => {
                if (window.google) {
                    new window.google.translate.TranslateElement(
                        { pageLanguage: 'en' },
                        'google_translate_element'
                    );
                }
            };
        };

        addGoogleTranslateScript();
    }, []);

    return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
