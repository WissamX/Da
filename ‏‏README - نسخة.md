# موقع WissamX - دليل التخصيص

## نظرة عامة
موقع ويب تفاعلي لمجتمع الألعاب مع ميزات متقدمة:
- تدرج لوني جميل من الأزرق الداكن إلى الأحمر
- دعم اللغتين العربية والإنجليزية
- أزرار تفاعلية للديسكورد والأحداث
- قسم مخصص لـ Quake 3 Arena
- تصميم متجاوب لجميع الأجهزة

## رابط الموقع المنشور
**https://gwfwxinb.manus.space**

## كيفية التخصيص

### 1. تغيير رابط الديسكورد
في ملف `script.js`، ابحث عن السطر:
```javascript
const discordInviteLink = 'https://discord.gg/your-server-invite';
```
واستبدل `your-server-invite` برابط دعوة سيرفر الديسكورد الخاص بك.

### 2. تحديث وصف سيرفر الديسكورد
في ملفات اللغات (`languages/ar.json` و `languages/en.json`)، غيّر:
```json
"discordDesc": "النص الجديد هنا"
```

### 3. تحديث الأحداث
في ملف `index.html`، ابحث عن قسم الأحداث وحدّث:
- الأحداث القادمة في قسم `upcomingEventsTitle`
- الأحداث السابقة في قسم `pastEventsTitle`
- وصف آخر حدث في `eventsDesc`

### 4. تغيير عنوان IP سيرفر Quake 3
في ملف `index.html`، ابحث عن:
```html
<code id="serverIp">192.168.1.100:27960</code>
```
واستبدل العنوان بعنوان سيرفرك الفعلي.

### 5. تحديث معلومات التواصل
في ملف `index.html`، حدّث روابط التواصل:
```html
<a href="https://wa.me/1234567890" target="_blank" class="contact-link whatsapp">
<a href="mailto:contact@wissamx.com" class="contact-link email">
```

## إضافة لغة جديدة

### الخطوات:
1. **إنشاء ملف اللغة الجديد**
   - أنشئ ملف جديد في مجلد `languages/` مثل `fr.json` للفرنسية
   - انسخ محتوى `en.json` أو `ar.json` وترجم النصوص

2. **تحديث JavaScript**
   في ملف `script.js`، أضف اللغة الجديدة:
   ```javascript
   // في بداية الملف، غيّر:
   let currentLanguage = 'ar'; // إلى اللغة المطلوبة
   
   // في دالة toggleLanguage، أضف المنطق للغة الثالثة:
   function toggleLanguage() {
       if (currentLanguage === 'ar') {
           currentLanguage = 'en';
       } else if (currentLanguage === 'en') {
           currentLanguage = 'fr'; // اللغة الجديدة
       } else {
           currentLanguage = 'ar';
       }
       loadTranslations();
   }
   ```

3. **تحديث زر اللغة**
   في ملفات اللغات، حدّث `langText` ليعرض اللغة التالية.

### مثال لإضافة الفرنسية:
```json
// languages/fr.json
{
    "mainTitle": "WissamX",
    "subtitle": "Communauté de Jeux et Amusement",
    "discordTitle": "Serveur Discord",
    "discordDesc": "Rejoignez notre communauté active et profitez des jeux en groupe",
    "eventsTitle": "Événements",
    "langText": "عر"
}
```

## بنية الملفات
```

```

## الميزات المتقدمة
- **العلامة المائية**: تظهر "WissamX" كخلفية شفافة
- **التأثيرات البصرية**: توهج العنوان وتأثيرات الأزرار
- **التصميم المتجاوب**: يعمل على الهواتف والأجهزة اللوحية
- **نسخ IP**: نقرة واحدة لنسخ عنوان السيرفر
- **النوافذ المنبثقة**: عرض الأحداث بطريقة أنيقة

## الدعم الفني
إذا واجهت أي مشاكل أو تحتاج مساعدة في التخصيص، يمكنك:
1. مراجعة هذا الدليل
2. فحص وحدة تحكم المتصفح للأخطاء
3. التأكد من صحة بنية ملفات JSON

---
**تم إنشاء هذا الموقع بواسطة Manus AI**

