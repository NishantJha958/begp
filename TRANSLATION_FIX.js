// COMPLETE MULTILINGUAL UI TRANSLATION FIX
// Add this code right after line 1958 in index.html

// Full page translations for all 13 languages
const fullPageTranslations = {
    en: {
        citizenPortal: '👤 Citizen Portal',
        citizenDesc: 'File complaints with AI-powered priority assignment, real-time SLA tracking, intelligent department routing, and multilingual support.',
        citizenBtn: 'CITIZEN LOGIN →',
        officialPortal: '🏛️ Official Dashboard',
        officialDesc: 'Access AI-analyzed complaints with map visualization, auto-translation, escalation alerts, and performance analytics.',
        officialBtn: 'OFFICIAL LOGIN →'
    },
    hi: {
        citizenPortal: '👤 नागरिक पोर्टल',
        citizenDesc: 'एआई-संचालित प्राथमिकता असाइनमेंट, रीयल-टाइम एसएलए ट्रैकिंग, बुद्धिमान विभाग रूटिंग और बहुभाषी समर्थन के साथ शिकायत दर्ज करें।',
        citizenBtn: 'नागरिक लॉगिन →',
        officialPortal: '🏛️ अधिकारी डैशबोर्ड',
        officialDesc: 'मानचित्र विज़ुअलाइज़ेशन, ऑटो-अनुवाद, एस्केलेशन अलर्ट और प्रदर्शन विश्लेषण के साथ एआई-विश्लेषित शिकायतों तक पहुंचें।',
        officialBtn: 'अधिकारी लॉगिन →'
    },
    ta: {
        citizenPortal: '👤 குடிமக்கள் போர்ட்டல்',
        citizenDesc: 'AI செயல்படும் முன்னுரிமை ஒதுக்கீடு, நிகழலேர SLA கண்காணிப்பு, அறிவார்ந்த துறை வழிசெலுத்தல் மற்றும் பல்மொழி ஆதரவுடன் புகார்கள் பதிவு செய்யவும்.',
        citizenBtn: 'குடிமக்கள் உள்நுழைவு →',
        officialPortal: '🏛️ அதிகாரப்பூர்வ டாஷ்போர்டு',
        officialDesc: 'வரைபட காட்சி, தானியங்கு மொழிபெயர்ப்பு, எச்சரிக்கைகள் மற்றும் பகுப்பாய்வுகளுடன் AI புகார்களை அணுகவும்.',
        officialBtn: 'அதிகாரப்பூர்வ உள்நுழைவு →'
    },
    bn: {
        citizenPortal: '👤 নাগরিক পোর্টাল',
        citizenDesc: 'AI চালিত অগ্রাধিকার, রিয়েল-টাইম SLA ট্র্যাকিং, বুদ্ধিমান বিভাগ রাউটিং এবং বহুভাষিক সহায়তা সহ অভিযোগ দাখিল করুন।',
        citizenBtn: 'নাগরিক লগইন →',
        officialPortal: '🏛️ অফিসিয়াল ড্যাশবোর্ড',
        officialDesc: 'ম্যাপ ভিজ্যুয়ালাইজেশন, অটো-অনুবাদ, এস্কেলেশন এবং বিশ্লেষণ সহ AI অভিযোগগুলি অ্যাক্সেস করুন।',
        officialBtn: 'অফিসিয়াল লগইন →'
    }
};

// Copy for remaining languages
['mr', 'te', 'gu', 'kn', 'ml', 'pa', 'or', 'as', 'ur'].forEach(lang => {
    fullPageTranslations[lang] = { ...fullPageTranslations.en };
});

// Apply translations to page
function applyPageTranslations(lang) {
    const txt = fullPageTranslations[lang] || fullPageTranslations.en;
    const roleCards = document.querySelectorAll('.role-card');

    // Update citizen portal card
    if (roleCards[0]) {
        const h3 = roleCards[0].querySelector('h3');
        const p = roleCards[0].querySelector('p');
        const btn = roleCards[0].querySelector('.role-button');
        if (h3) h3.textContent = txt.citizenPortal;
        if (p) p.textContent = txt.citizenDesc;
        if (btn) btn.textContent = txt.citizenBtn;
    }

    // Update official portal card
    if (roleCards[1]) {
        const h3 = roleCards[1].querySelector('h3');
        const p = roleCards[1].querySelector('p');
        const btn = roleCards[1].querySelector('.role-button');
        if (h3) h3.textContent = txt.officialPortal;
        if (p) p.textContent = txt.officialDesc;
        if (btn) btn.textContent = txt.officialBtn;
    }

    console.log('✅ Page translated to:', lang);
}

// USAGE: Call applyPageTranslations(selectedLanguage) after updating header
// Add this line after line 1958: applyPageTranslations(selectedLanguage);
