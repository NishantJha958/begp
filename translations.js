// Comprehensive multilingual translations for Bharat E-Grievance System

const uiTranslations = {
    en: {
        headerTitle: "Bharat E-Grievance System",
        citizenPortal: "👤 Citizen Portal",
        citizenDesc: "File complaints with AI-powered priority assignment, real-time SLA tracking, intelligent department routing, and multilingual support.",
        citizenLogin: "CITIZEN LOGIN →",
        officialPortal: "🏛️ Official Dashboard",
        officialDesc: "Access AI-analyzed complaints with map visualization, auto-translation, escalation alerts, and performance analytics.",
        officialLogin: "OFFICIAL LOGIN →"
    },
    hi: {
        headerTitle: "भारत ई-शिकायत प्रणाली",
        citizenPortal: "👤 नागरिक पोर्टल",
        citizenDesc: "एआई-संचालित प्राथमिकता असाइनमेंट, रीयल-टाइम एसएलए ट्रैकिंग, बुद्धिमान विभाग रूटिंग और बहुभाषी समर्थन के साथ शिकायत दर्ज करें।",
        citizenLogin: "नागरिक लॉगिन →",
        officialPortal: "🏛️ अधिकारी डैशबोर्ड",
        officialDesc: "मानचित्र विज़ुअलाइज़ेशन, ऑटो-अनुवाद, एस्केलेशन अलर्ट और प्रदर्शन विश्लेषण के साथ एआई-विश्लेषित शिकायतों तक पहुंचें।",
        officialLogin: "अधिकारी लॉगिन →"
    },
    ta: {
        headerTitle: "பாரத மின்-குறைதீர்ப்பு அமைப்பு",
        citizenPortal: "👤 குடிமக்கள் போர்ட்டல்",
        citizenDesc: "AI-இயக்கப்படும் முன்னுரிமை ஒதுக்கீடு, நிகழ்நேர SLA கண்காணிப்பு, அறிவார்ந்த துறை வழிசெலுத்தல் மற்றும் பல்மொழி ஆதரவுடன் புகார்களை பதிவு செய்யவும்.",
        citizenLogin: "குடிமக்கள் உள்நுழைவு →",
        officialPortal: "🏛️ அதிகாரப்பூர்வ டாஷ்போர்டு",
        officialDesc: "வரைபட காட்சிப்படுத்தல், தான்ங்கு மொழிபெயர்ப்பு, தீவிரமாக்கல் எச்சரிக்கைகள் மற்றும் செயல்திறன் பகுப்பாய்வுகளுடன் AI-பகுப்பாய்வு செய்யப்பட்ட புகார்களை அணுகவும்.",
        officialLogin: "அதிகாரப்பூர்வ உள்நுழைவு →"
    },
    bn: {
        headerTitle: "ভারত ই-অভিযোগ ব্যবস্থা",
        citizenPortal: "👤 নাগরিক পোর্টাল",
        citizenDesc: "AI-চালিত অগ্রাধিকার নিয়োগ, রিয়েল-টাইম SLA ট্র্যাকিং, বুদ্ধিমান বিভাগ রাউটিং এবং বহুভাষিক সহায়তা সহ অভিযোগ দাখিল করুন।",
        citizenLogin: "নাগরিক লগইন →",
        officialPortal: "🏛️ অফিসিয়াল ড্যাশবোর্ড",
        officialDesc: "ম্যাপ ভিজ্যুয়ালাইজেশন, অটো-অনুবাদ, এস্কেলেশন সতর্কতা এবং পারফরম্যান্স বিশ্লেষণ সহ AI-বিশ্লেষিত অভিযোগগুলি অ্যাক্সেস করুন।",
        officialLogin: "অফিসিয়াল লগইন →"
    }
};

// Copy English for other languages with localized headers
uiTranslations.mr = { ...uiTranslations.en, headerTitle: "भारत ई-तक्रार प्रणाली" };
uiTranslations.te = { ...uiTranslations.en, headerTitle: "భారత్ ఈ-ఫిర్యాదు వ్యవస్థ" };
uiTranslations.gu = { ...uiTranslations.en, headerTitle: "ભારત ઈ-ફરિયાદ સિસ્ટમ" };
uiTranslations.kn = { ...uiTranslations.en, headerTitle: "ಭಾರತ ಇ-ದೂರು ವ್ಯವಸ್ಥೆ" };
uiTranslations.ml = { ...uiTranslations.en, headerTitle: "ഭാരത ഇ-പരാതി സംവിധാനം" };
uiTranslations.pa = { ...uiTranslations.en, headerTitle: "ਭਾਰਤ ਈ-ਸ਼ਿਕਾਇਤ ਪ੍ਰਣਾਲੀ" };
uiTranslations.or = { ...uiTranslations.en, headerTitle: "ଭାରତ ଇ-ଅଭିଯୋଗ ବ୍ୟବସ୍ଥା" };
uiTranslations.as = { ...uiTranslations.en, headerTitle: "ভাৰত ই-অভিযোগ ব্যৱস্থা" };
uiTranslations.ur = { ...uiTranslations.en, headerTitle: "بھارت ای شکایت نظام" };

// Apply translations to UI
function applyTranslations(lang) {
    const t = uiTranslations[lang] || uiTranslations.en;

    // Update header
    const header = document.getElementById('header-title');
    if (header) header.textContent = t.headerTitle;

    // Show/hide translation notice
    const notices = ['translation-notice-1', 'translation-notice-2'];
    notices.forEach(id => {
        const elem = document.getElementById(id);
        if (elem) elem.style.display = lang !== 'en' ? 'block' : 'none';
    });

    console.log('✓ UI updated to:', lang);
}
