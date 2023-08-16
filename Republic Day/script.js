const hrd = [['Assamese', 'গণৰাজ্য দিৱসৰ শুভেচ্ছা জনালোঁ'], ['Bangla', 'প্রজাতন্ত্র দিবসের শুভেচ্ছা'], ['Bhojpuri', 'गणतंत्र दिवस के हार्दिक शुभकामना'], ['Dogri', 'गणतंत्र दिवस की हार्दिक शुभकामनाएं'], ['English', 'Happy Republic Day'], ['Gujarati', 'ગણતંત્ર દિવસની શુભકામનાઓ'], ['Hindi', 'गणतंत्र दिवस की शुभकामनाएं'], ['Kannada', 'ಗಣರಾಜ್ಯೋತ್ಸವದ ಶುಭಾಶಯಗಳು'], ['Konkani', 'प्रजासत्ताक दिसाच्यो परबीं'], ['Maithili', 'गणतंत्र दिवस की हार्दिक शुभकामनाएं'], ['Malayalam', 'റിപ്പബ്ലിക് ദിനാശംസകൾ'], ['Marathi', 'प्रजासत्ताक दिनाच्या शुभेच्छा'], ['Nepali', 'गणतन्त्र दिवसको शुभकामना'], ['Oriya', 'ଗଣତନ୍ତ୍ର ଦିବସର ଶୁଭେଚ୍ଛା'], ['Punjabi', 'ਗਣਤੰਤਰ ਦਿਵਸ ਮੁਬਾਰਕ'], ['Tamil', 'குடியரசு தின வாழ்த்துக்கள்'], ['Telugu', 'గణతంత్ర దినోత్సవ శుభాకాంక్షలు'], ['Sindhi', 'جمهوري ڏينهن مبارڪ'], ['Sanskrit', 'गणतन्त्र दिवस की हार्दिक शुभकामनाएं'], ['Urdu', 'یوم جمہوریہ مبارک ہو۔']];

let idx = 0;
let wish = document.getElementById('text-field');
let lang = document.getElementById('lang');

window.setInterval(function () {
    wish.innerHTML = hrd[idx][1];
    lang.innerHTML = 'Language: ' + hrd[idx][0];
    idx++;
    if (idx >= hrd.length) {
        idx = 0;
    }
}, 1000);