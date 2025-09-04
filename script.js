// متغيرات عامة
let currentLanguage = 'en';
let translations = {};

// تحميل الترجمات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    loadTranslations();
    initializeEventListeners();
});

// تحميل ملفات الترجمة
async function loadTranslations() {
    try {
        const response = await fetch(`languages/${currentLanguage}.json`);
        translations = await response.json();
        updatePageContent();
    } catch (error) {
        console.error('Error loading translations:', error);
        // في حالة فشل التحميل، استخدم النصوص الافتراضية
        setDefaultTexts();
    }
}

// تحديث محتوى الصفحة بناءً على اللغة المحددة
function updatePageContent() {
    // تحديث اتجاه الصفحة
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث النصوص
    const elements = {
        'mainTitle': 'mainTitle',
        'subtitle': 'subtitle',
        'discordTitle': 'discordTitle',
        'discordDesc': 'discordDesc',
        'eventsTitle': 'eventsTitle',
        'eventsDesc': 'eventsDesc',
        'eventsModalTitle': 'eventsModalTitle',
        'upcomingEventsTitle': 'upcomingEventsTitle',
        'pastEventsTitle': 'pastEventsTitle',
        'quakeTitle': 'quakeTitle',
        'serverStatusTitle': 'serverStatusTitle',
        'serverName': 'serverName',
        'serverIpLabel': 'serverIpLabel',
        'copyBtn': 'copyBtn',
        'serverStatus': 'serverStatus',
        'playerCount': 'playerCount',
        'currentMap': 'currentMap',
        'copyrightText': 'copyrightText',
        'whatsappText': 'whatsappText',
        'emailText': 'emailText',
        'langText': 'langText'
    };

    for (const [key, elementId] of Object.entries(elements)) {
        const element = document.getElementById(elementId);
        if (element && translations[key]) {
            element.textContent = translations[key];
        }
    }
}

// تبديل اللغة
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    loadTranslations();
}

// إظهار/إخفاء قائمة الأحداث
function toggleEvents() {
    const modal = document.getElementById('eventsModal');
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
    } else {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // إعادة تفعيل التمرير
    }
}

// نسخ عنوان IP السيرفر
async function copyServerIP() {
    const serverIP = document.getElementById('serverIp').textContent;
    const copyBtn = document.getElementById('copyBtn');
    
    try {
        await navigator.clipboard.writeText(serverIP);
        
        // تغيير نص الزر مؤقتاً لإظهار نجاح العملية
        const originalText = copyBtn.textContent;
        copyBtn.textContent = currentLanguage === 'ar' ? 'تم النسخ!' : 'Copied!';
        copyBtn.style.background = 'rgba(0, 255, 0, 0.4)';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = 'rgba(0, 255, 0, 0.2)';
        }, 2000);
        
    } catch (error) {
        console.error('Failed to copy IP:', error);
        
        // طريقة بديلة للنسخ في المتصفحات القديمة
        const textArea = document.createElement('textarea');
        textArea.value = serverIP;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const originalText = copyBtn.textContent;
        copyBtn.textContent = currentLanguage === 'ar' ? 'تم النسخ!' : 'Copied!';
        copyBtn.style.background = 'rgba(0, 255, 0, 0.4)';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = 'rgba(0, 255, 0, 0.2)';
        }, 2000);
    }
}

// فتح رابط الديسكورد
function openDiscord() {
    // يمكن تغيير هذا الرابط لاحقاً
    const discordInviteLink = 'https://discord.gg/acK6ZTX7Vj';
    window.open(discordInviteLink, '_blank');
}

// إضافة مستمعي الأحداث
function initializeEventListeners() {
    // إغلاق النافذة المنبثقة عند النقر خارجها
    const modal = document.getElementById('eventsModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            toggleEvents();
        }
    });
    
    // إغلاق النافذة المنبثقة بمفتاح Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modal = document.getElementById('eventsModal');
            if (modal.style.display === 'block') {
                toggleEvents();
            }
        }
    });
    
    // تأثيرات بصرية إضافية للأزرار
    const mainButtons = document.querySelectorAll('.main-btn');
    mainButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// تعيين النصوص الافتراضية في حالة فشل تحميل ملفات الترجمة
function setDefaultTexts() {
    if (currentLanguage === 'ar') {
        translations = {
            mainTitle: 'WissamX',
            subtitle: 'مجتمع الألعاب والمرح',
            discordTitle: 'سيرفر الديسكورد',
            discordDesc: 'انضم إلى مجتمعنا النشط واستمتع بالألعاب الجماعية',
            eventsTitle: 'الأحداث',
            eventsDesc: 'آخر حدث: بطولة UNO - الساعة 17:00 UTC',
            eventsModalTitle: 'الأحداث والبطولات',
            upcomingEventsTitle: 'الأحداث القادمة',
            pastEventsTitle: 'الأحداث السابقة',
            quakeTitle: 'Quake 3 Arena',
            serverStatusTitle: 'حالة السيرفرات',
            serverName: 'WissamX Arena Server',
            serverIpLabel: 'عنوان السيرفر:',
            copyBtn: 'نسخ',
            serverStatus: 'متصل',
            playerCount: 'اللاعبون: 8/16',
            currentMap: 'الخريطة: dm17',
            copyrightText: '© 2025 WissamX. جميع الحقوق محفوظة.',
            whatsappText: 'واتساب',
            emailText: 'البريد الإلكتروني',
            langText: 'EN'
        };
    } else {
        translations = {
            mainTitle: 'WissamX',
            subtitle: 'Gaming Community & Fun',
            discordTitle: 'Discord Server',
            discordDesc: 'Join our active community and enjoy group gaming',
            eventsTitle: 'Events',
            eventsDesc: 'Last event: UNO Tournament - 17:00 UTC',
            eventsModalTitle: 'Events & Tournaments',
            upcomingEventsTitle: 'Upcoming Events',
            pastEventsTitle: 'Past Events',
            quakeTitle: 'Quake 3 Arena',
            serverStatusTitle: 'Server Status',
            serverName: 'WissamX Arena Server',
            serverIpLabel: 'Server IP:',
            copyBtn: 'Copy',
            serverStatus: 'Online',
            playerCount: 'Players: 8/16',
            currentMap: 'Map: dm17',
            copyrightText: '© 2025 WissamX. All rights reserved.',
            whatsappText: 'WhatsApp',
            emailText: 'Email',
            langText: 'عر'
        };
    }
    updatePageContent();
}

// وظائف إضافية لتحسين تجربة المستخدم
function addVisualEffects() {
    // تأثير التوهج للعنوان الرئيسي
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        setInterval(() => {
            mainTitle.style.textShadow = `
                0 0 ${20 + Math.random() * 10}px rgba(255, 255, 255, 0.5),
                0 0 ${40 + Math.random() * 20}px rgba(135, 206, 250, 0.3),
                0 0 ${60 + Math.random() * 30}px rgba(135, 206, 250, 0.2)
            `;
        }, 2000);
    }
}

// تشغيل التأثيرات البصرية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', addVisualEffects);

