import { test, expect } from '@playwright/test';

// Before each test, navigate to the target website
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});


// Positive Functional Test Cases for Singlish to Sinhala Translation

test('Pos_Fun_0001 - Future + Interrogative', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('mama heta gedhara enavaa , oyaa gedhara inNavaadha?');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මම හෙට ගෙදර එනවා , ඔයා ගෙදර ඉන්නවාද?');
});

test('Pos_Fun_0002 - Interrogative sentence', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('oyaa rata yanne kavadhadha?');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('ඔයා රට යන්නෙ කවදද?');
});


test('Pos_Fun_0003 - Mixed Singlish + English', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('current giyaa nisaa class eka navaththala dhaanna unaa.');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('current ගියා නිසා class එක නවත්තල දාන්න උනා.');
});


test('Pos_Fun_0004 - Present tense intention', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('mama nidhaaganna hadhannee');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මම නිදාගන්න හදන්නේ');
});

test('Pos_Fun_0005 - Simple phrase / daily usage', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('kiri kofi bonna');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('කිරි කොෆි බොන්න');
});
test('Pos_Fun_0006 - Informal imperative / colloquial phrase', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('eeyi ehaapaeththen varen');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('ඒයි එහාපැත්තෙන් වරෙන්');
});

test('Pos_Fun_0007 - Polite request for loan', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('karuNaakara mata Nayak dhenna puluvandha');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('කරුණාකර මට ණයක් දෙන්න පුලුවන්ද');
});

test('Pos_Fun_0008 - Even if sick, exam must go', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('asaniipa unath viBhaagaya liyanna yanna oona');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('අසනීප උනත් විභාගය ලියන්න යන්න ඕන');
});

test('Pos_Fun_0009 - Shall we see the sea today?', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('adha api muhudha balanna yamudha?');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('අද අපි මුහුද බලන්න යමුද?');
});


test('Pos_Fun_0010 - Enter inside', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('aethuLata yanna');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('ඇතුළට යන්න');
});

test('Pos_Fun_0011 - Passing exam', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('mama viBhaagaya paas venavaa');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මම විභාගය පාස් වෙනවා');
});

test('Pos_Fun_0012 - Not going to Matara', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('mama maathara yanna enne naehae');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මම මාතර යන්න එන්නෙ නැහැ');
});

test('Pos_Fun_0013 - Birthday greeting', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('suba upandhinayak');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('සුබ උපන්දිනයක්');
});

test('Pos_Fun_0014 - Polite request for bag', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('mata tikakata oyaage baeegaya dhenna puluvandha');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මට ටිකකට ඔයාගෙ බෑගය දෙන්න පුලුවන්ද');
});

test('Pos_Fun_0015 - Feeling sleepy / going to sleep', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('mata dhaen nidhimathayi , mama nidhaaganna yanavaa');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මට දැන් නිදිමතයි , මම නිදාගන්න යනවා');
});

test('Pos_Fun_0016 - Wanting to drink tea', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('mata theekak bonna oonee');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මට තේකක් බොන්න ඕනේ');
});

test('Pos_Fun_0017 - Going to Sunday school today', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('api adha dhaham paasal yanavaa');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('අපි අද දහම් පාසල් යනවා');
});

test('Pos_Fun_0018 - No / Cannot', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('naehae naehae');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('නැහැ නැහැ');
});

test('Pos_Fun_0019 - Did a lot of studies yesterday', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('mama iiye godak paadam karaa');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මම ඊයෙ ගොඩක් පාඩම් කරා');
});

test('Pos_Fun_0020 - Walking now', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('api dhaen aevidhinavaa');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('අපි දැන් ඇවිදිනවා');
});

test('Pos_Fun_0021 - Eating breakfast', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('api udheta kaden kamu');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('අපි උදෙට කඩෙන් කමු');
});

test('Pos_Fun_0022 - Cannot eat', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('mata kanna baehae');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මට කන්න බැහැ');
});

test('Pos_Fun_0023 - Intending to sleep', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('mama nidhaaganna hadhanne');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මම නිදාගන්න හදන්නෙ');
});

test('Pos_Fun_0024 - Mixed paragraph / instructions', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('Lamayi heta panthi enna epaa heta  online  meeting ekak gamu gaNan tika hadhalaa thiyaaganna');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('ළමයි හෙට පන්ති එන්න එපා හෙට  online  meeting එකක් ගමු ගණන් ටික හදලා තියාගන්න');
});



test('Pos_Fun_0025 - Going to Kataragama', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('api katharagama yanavaa');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('අපි කතරගම යනවා');
});



test('Pos_Fun_0026 - Agreeing to give something', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('ehenam mama eeka dhennam');
  
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('එහෙනම් මම ඒක දෙන්නම්');
});







// Negative Functional Test Cases for Singlish to Sinhala Translation

test('Neg_Fun_0001 - Negative ability question', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('oyata yanna barida');

  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('ඔයාට යන්න බැරිද');
});



test('Neg_Fun_0003 - Incorrect verb spelling in sentence', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('ammaa gedara yanawa');

  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('අම්මා ගෙදර යනවා');
});








test('Neg_Fun_0005 - Bringing food to eat', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('mama kaeema ekak genawa api kamu');

  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මම කෑම එකක් ගෙනාවා අපි කම');
});

test('Neg_Fun_0006 - Informal instruction with spelling issues', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('ikmanata oka iwara karala  enna');

  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('ඉක්මනට ඕක ඉවර කරලා  එන්න');
});

test('Neg_Fun_0007 - Password mixed with Sinhala characters', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('oyaage tab ekee password eka "kamaniwan345"');

  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('ඔයාගෙ tab එකේ password එක "kamaniwan345"');
});




test('Neg_Fun_0009 - URL with mixed Sinhala and English domain', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('meken oyaata singlish valin sinhala Translator karaganna puluvan https://www.swifttranslator.com/');

  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText(
      'මෙකෙන් ඔයාට සින්ග්ලිශ් වලින් sinhala Translator කරගන්න පුලුවන්     https://www.swifttranslator.com/'
    );
});


test('Neg_Fun_0010 - Password with missing quote', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('magee laptop ekee password eka "45fashna');

  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('මගේ laptop එකේ password එක "45fashna');
});

test('Neg_Fun_0011 - Place name with incorrect spelling', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('api pettaneyata yanawa sellam karanna.');

 
  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('අපි පිට්ටනියට යනවා සෙල්ලම් කරන්න');
});




test('Neg_Fun_0012 - Place name with wrong phonetic spelling', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.')
    .fill('api kandy yanawa heta');

  await expect(page.locator('div.bg-slate-50').first())
    .toHaveText('අපි kandy යනවා හෙට');
});



//positive ui test cases for singlish to sinhala translation

test('POS_UI_0001 - Simple POS UI sentence', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම යනවා');
});