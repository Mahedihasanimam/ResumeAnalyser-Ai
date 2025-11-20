'use client';

const LanguageSelector = () => {
    const changeLang = (lang: string) => {
        const googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement;

        if (googleSelect) {
            googleSelect.value = lang;
            googleSelect.dispatchEvent(new Event("change"));
        }
    };

    return (
        <select
            onChange={(e) => changeLang(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-all outline-none"
            defaultValue="default"
        >
            <option value="default" disabled>
                🌐 Select Language
            </option>
            <option value="en">English</option>
            <option value="bn">Bangla</option>
            <option value="hi">Hindi</option>
            <option value="ar">Arabic</option>
        </select>

    );
};

export default LanguageSelector;
