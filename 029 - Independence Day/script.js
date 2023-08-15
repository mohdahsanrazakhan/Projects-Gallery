const wishes = [

  ['सत्तासी', 'Hindi', 'स्वतंत्रता दिवस की हार्दिक शुभकामनाएं'],

  ['सप्ततिः सप्ततितमः', 'Sanskrit', 'स्वतन्त्रता दिवसस्य शुभकामना'],

  ['सत्तावीस', 'Marathi', 'स्वातंत्र्यदिनाच्या शुभेच्छा'],

  ['௭௭வது', 'Tamil', 'இனிய சுதந்திர தின நல்வாழ்த்துக்கள்'],

  ['۷۷ویں', 'Urdu', 'یوم آزادی مبارک'],

  ['೭೭ನೇ', 'Kannada', 'ಸ್ವಾತಂತ್ರ್ಯ ದಿನಾಚರಣೆ'],

  ['౭౭వ', 'Telugu', 'హ్యాపీ ఇండిపెండెన్స్ డే'],

  ['൭ൺ', 'Malayalam', 'സ്വാതന്ത്ര്യദിനാശംസകൾ'],

  ['੭੭ਵੀਂ', 'Punjabi', 'ਸੁਤੰਤਰਤਾ ਦਿਵਸ ਦੀਆਂ ਮੁਬਾਰਕਾਂ'],

  ['୭୭ତମ', 'Oriya', 'ସ୍ୱାଧିନତା ଦିବସର ହାର୍ଦ୍ଧିକ ଅଭିନନ୍ଦନ'],

  ['૭૭મું', 'Gujarati', 'સ્વતંત્રતા દિવસની શુભેચ્છાઓ'],

  ['৭৭তম', 'Bengali', 'শুভ স্বাধীনতা দিবস'],

  ['77th', 'English', 'Happy Independence Day'],
]



let idx = 0;
const years = document.getElementById('number');
const wishInDiffLanguages = document.getElementById('wishes');
const wishLanguages = document.getElementById('language');

window.setInterval(function () {
  years.innerHTML = wishes[idx][0]
  wishInDiffLanguages.innerHTML = wishes[idx][2];
  wishLanguages.innerHTML = 'Language: ' + wishes[idx][1];
  idx++;
  if (idx >= wishes.length) {
    idx = 0;
  }
}, 3000);