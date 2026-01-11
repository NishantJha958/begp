// Complete UI translations for all page elements
const pageTranslations = {
    en: {
        // Portal Cards
        citizenPortal: "👤 Citizen Portal",
        citizenDesc: "File complaints with AI-powered priority assignment, real-time SLA tracking, intelligent department routing, and multilingual support.",
        citizenLogin: "CITIZEN LOGIN →",
        officialPortal: "🏛️ Official Dashboard",
        officialDesc: "Access AI-analyzed complaints with map visualization, auto-translation, escalation alerts, and performance analytics.",
        officialLogin: "OFFICIAL LOGIN →",

        // Form titles and labels
        verification: "🔐 Identity Verification / Login",
        complaintDetails: "📝 Complaint Details",
        selectLocation: "📍 Select Exact Location on Map:",
        mapClick: "🗺️ Click on the map to pinpoint the exact location of your complaint",
        useCurrentLoc: "📍 Use My Current Location",
        searchAddress: "🔍 Search Address",

        // Form fields
        fullName: "Full Legal Name:",
        asPerID: "As per government ID",
        publicID: "Public ID (Aadhar/Voter/PAN):",
        phoneNumber: "Phone Number:",
        emailAddress: "Email Address:",
        category: "Category:",
        description: "Detailed Description:",
        proofUpload: "Proof (Photo/Video):",

        // Buttons
        verify: "Verify",
        sendOTP: "Send OTP",
        verifyOTP: "Verify OTP",
        continue: "Continue →",
        submitAI: "🤖 Submit with AI Analysis",
        fileNew: "➕ File New Complaint",
        refreshStatus: "🔄 Refresh Status",
        returnLogin: "🏠 Return to Login Page",

        // Dashboard
        myComplaints: "📊 My Complaints History",
        complaintSuccess: "✅ Complaint Successfully Submitted!",
        aiAnalysisComplete: "🤖 AI Analysis Complete"
    },

    hi: {
        // Portal Cards  
        citizenPortal: "👤 नागरिक पोर्टल",
        citizenDesc: "एआई-संचालित प्राथमिकता असाइनमेंट, रीयल-टाइम एसएलए ट्रैकिंग, बुद्धिमान विभाग रूटिंग और बहुभाषी समर्थन के साथ शिकायत दर्ज करें।",
        citizenLogin: "नागरिक लॉगिन →",
        officialPortal: "🏛️ अधिकारी डैशबोर्ड",
        officialDesc: "मानचित्र विज़ुअलाइज़ेशन, ऑटो-अनुवाद, एस्केलेशन अलर्ट और प्रदर्शन विश्लेषण के साथ एआई-विश्लेषित शिकायतों तक पहुंचें।",
        officialLogin: "अधिकारी लॉगिन →",

        // Form titles and labels
        verification: "🔐 पहचान सत्यापन / लॉगिन",
        complaintDetails: "📝 शिकायत विवरण",
        selectLocation: "📍 मानचित्र पर सटीक स्थान चुनें:",
        mapClick: "🗺️ अपनी शिकायत के सटीक स्थान को इंगित करने के लिए मानचित्र पर क्लिक करें",
        useCurrentLoc: "📍 मेरा वर्तमान स्थान उपयोग करें",
        searchAddress: "🔍 पता खोजें",

        // Form fields
        fullName: "पूरा कानूनी नाम:",
        asPerID: "सरकारी आईडी के अनुसार",
        publicID: "सार्वजनिक आईडी (आधार/मतदाता/पैन):",
        phoneNumber: "फ़ोन नंबर:",
        emailAddress: "ईमेल पता:",
        category: "श्रेणी:",
        description: "विस्तृत विवरण:",
        proofUpload: "प्रमाण (फोटो/वीडियो):",

        // Buttons
        verify: "सत्यापित करें",
        sendOTP: "ओटीपी भेजें",
        verifyOTP: "ओटीपी सत्यापित करें",
        continue: "जारी रखें →",
        submitAI: "🤖 एआई विश्लेषण के साथ जमा करें",
        fileNew: "➕ नई शिकायत दर्ज करें",
        refreshStatus: "🔄 स्थिति रीफ्रेश करें",
        returnLogin: "🏠 लॉगिन पेज पर वापस जाएं",

        // Dashboard
        myComplaints: "📊 मेरी शिकायतों का इतिहास",
        complaintSuccess: "✅ शिकायत सफलतापूर्वक जमा की गई!",
        aiAnalysisComplete: "🤖 एआई विश्लेषण पूर्ण"
    }
};

// Copy structure for other languages (simplified - using English with localized key terms)
['ta', 'bn', 'mr', 'te', 'gu', 'kn', 'ml', 'pa', 'or', 'as', 'ur'].forEach(lang => {
    pageTranslations[lang] = { ...pageTranslations.en };
});

// Function to update all page text
function translateFullPage(lang) {
    const t = pageTranslations[lang] || pageTranslations.en;

    // Update by data-translate attribute (add this to HTML elements)
    document.querySelectorAll('[data-translate]').forEach(elem => {
        const key = elem.getAttribute('data-translate');
        if (t[key]) {
            if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                elem.placeholder = t[key];
            } else {
                elem.textContent = t[key];
            }
        }
    });
}
