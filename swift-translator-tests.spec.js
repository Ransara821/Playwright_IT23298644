const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_0001',
      name: 'Convert a short daily greeting phrase',
      input: 'oyaata kohomadha?',
      expected: 'ඔයාට කොහොමද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Long mixed-language input with slang + typo',
      input: 'machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha? Please send it before 3pm. Mama office yanna kalin check karanna oonea. Email ekak evanna amaarunam WhatsApp msg ekak dhaapan. Thx!',
      expected: 'මචන් මට අද meeting එකේ Zoom link එක email එකක් විදිහට එවන්න පුළුවන්ද? Please send it before 3pm. මම office යන්න කලින් check කරන්න ඕනේ. Email එකක් එවන්න අමාරුනම් WhatsApp ම්ස්ග් එකක් දාපන්. ථx!!',
      category: 'Mixed Singlish + English',
      grammar: 'Compound structure',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Convert a short request phrase',
      input: 'mata help ekak karanna puLuvandha?',
      expected: 'මට help එකක් කරන්න පුළුවන්ද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'Convert compound sentence',
      input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenna yannee naee',
      expected: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්නම යන්නේ නැහැ',
      category: 'Word combination / phrase pattern',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Convert complex sentence',
      input: 'oya enavaanam mama balan innavaa',
      expected: 'ඔයා එනවානම් මම බලන් ඉන්නවා',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Convert imperative command',
      input: 'issarahata yanna',
      expected: 'ඉස්සරහට යන්න',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: 'Positive and negative forms',
      input: 'mama ehema karanavaa. mama ehema karannee naehae.',
      expected: 'මම එහෙම කරනවා. මම එහෙම කරන්නේ නැහැ.',
      category: 'Daily language usage',
      grammar: 'Present tense / Negation',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Convert polite request',
      input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?',
      expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Convert informal phrasing',
      input: 'eeyi, ooka dhiyan',
      expected: 'ඒයි, ඔක ඩියන්',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'Convert day-to-day expression',
      input: 'mata baya hithenavaa',
      expected: 'මට බය හිතෙනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Multi-word expression',
      input: 'mata oona poddak inna hariyata vaeda gihin enna',
      expected: 'මට ඕන පොඩ්ඩක් ඉන්න හරියට වැඩ ගිහින් එන්න',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: 'Tense variation - Past',
      input: 'mama iyee gedhara giyaa',
      expected: 'මම ඉයේ ගෙදර ගියා',
      category: 'Tense variation',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Tense variation - Present',
      input: 'mama dhaen vaeda karanavaa',
      expected: 'මම දැන් වැඩ කරනවා',
      category: 'Tense variation',
      grammar: 'Present tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: 'Tense variation - Future',
      input: 'mama heta enavaa',
      expected: 'මම හෙට එනවා',
      category: 'Tense variation',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Negation pattern',
      input: 'mata eeka epaa',
      expected: 'මට ඒක එපා',
      category: 'Negation patterns',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0016',
      name: 'Singular pronoun variation',
      input: 'mama yanna hadhannee',
      expected: 'මම යන්න හදන්නේ',
      category: 'Singular/plural usage',
      grammar: 'Present tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Plural pronoun variation',
      input: 'api yamu',
      expected: 'අපි යමු',
      category: 'Singular/plural usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: 'Request with varying politeness',
      input: 'eeka dhenna',
      expected: 'ඒක දෙන්න',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'English technical terms embedded',
      input: 'Zoom WiFi Email',
      expected: 'Zoom WiFi Email',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: 'Sentence with places and English words',
      input: 'Lamayi school yannee',
      expected: 'ලමයි school යන්නේ',
      category: 'Names / places / common English words',
      grammar: 'Present tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'English abbreviations',
      input: 'ID, NIC, SMS, MMS',
      expected: 'ID, NIC, SMS, MMS',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Input with punctuation marks',
      input: 'oyaata! kohomadha?',
      expected: 'ඔයාට! කොහොමද?',
      category: 'Punctuation / numbers',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: 'Currency and time formats',
      input: 'Rs. 5343 7.30 AM',
      expected: 'Rs. 5343 7.30 AM',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Multiple spaces in input',
      input: 'mama gedhara yanavaa. mata bath oonee.',
      expected: 'මම ගෙදර යනවා. මට බත් ඕනේ.',
      category: 'Formatting (spaces / line breaks)',
      grammar: 'Simple sentence',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: 'Missing spaces / joined words stress test',
      input: 'mamagedharayanavaamatapaankannaooene',
      expected: 'මම ගෙදර යනවා මට පාන් කන්න ඕනේ',
      actual: 'මමගෙදරයනවා මටපාන්කන්නඕනේ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Unsupported English slang not converted',
      input: 'Thanks machan',
      expected: 'තැන්ක්ස් මචන්',
      actual: 'Thanks machan',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Special characters cause formatting issue',
      input: 'mama @#$% karanavaa',
      expected: 'මම @#$% කරනවා',
      actual: 'මම @#$% කරනවා',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Empty input not handled gracefully',
      input: '',
      expected: '',
      actual: '',
      category: 'Empty/cleared input handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'Mixed language with incorrect Singlish spelling',
      input: 'machan, mata meeting ekak tiyenava. plz come early. dont be late.',
      expected: 'මචන්, මට meeting එකක් තියෙනවා. plz come early. dont be late.',
      actual: 'මචන්, මට meeting එකක් තියෙනවා. please come early. don\'t be late.',
      category: 'Mixed Singlish + English',
      grammar: 'Compound structure',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Emoji placement disrupts sentence flow',
      input: 'mama 😊 gedhara yanavaa',
      expected: 'මම 😊 ගෙදර යනවා',
      actual: 'මම ගෙදර 😊 යනවා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Multiple punctuation normalization fails',
      input: 'mama!!! karanavaa??? enavaadha…',
      expected: 'මම!!! කරනවා??? එනවාද…',
      actual: 'මම! කරනවා? එනවාද.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Incorrect handling of Tamil/other language text',
      input: 'nandri machan (Tamil for "thank you")',
      expected: 'nandri machan',
      actual: 'නන්ද්රි මචන්',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Technical abbreviations incorrectly converted',
      input: 'URL, API, CPU, RAM convert venna',
      expected: 'URL, API, CPU, RAM convert වෙන්න',
      actual: 'URL, API, CPU, RAM කොන්වර්ට් වෙන්න',
      category: 'Names / places / common English words',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Line breaks and paragraph formatting lost',
      input: 'mama gedhara yanavaa.\noyaana evadha?\napi passe kathaa karamu.',
      expected: 'මම ගෙදර යනවා.\nඔයාන එවද්ද?\nඅපි පස්සේ කතා කරමු.',
      actual: 'මම ගෙදර යනවා. ඔයාන එවද්ද? අපි පස්සේ කතා කරමු.',
      category: 'Formatting (spaces / line breaks)',
      grammar: 'Compound structure',
      length: 'M'
    }
  ],
  
  ui: [
    {
      tcId: 'Pos_UI_0001',
      name: 'UI updates output area correctly',
      input: 'mama oyaa ekka tharahin inne',
      expected: 'මම ඔයා එක්ක තරහින් ඉන්නේ',
      category: 'Usability flow (real-time conversion)',
      grammar: 'Simple sentence',
      length: 'S',
      behavior: 'Real-time output update'
    },
    {
      tcId: 'Pos_UI_0002',
      name: 'Output text maintains proper line wrapping',
      input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha? mama dhaen vaeda karanavaa, heta mata office yanna venava.',
      expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද? මම දැන් වැඩ කරනවා, හෙට මට office යන්න වෙනවා.',
      category: 'Formatting (spaces / line breaks)',
      grammar: 'Complex sentence',
      length: 'M',
      behavior: 'Formatting preservation'
    },
    {
      tcId: 'Pos_UI_0003',
      name: 'Progress indicator during heavy conversion',
      input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaee m heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.',
      expected: 'දිට්වා සුලි කුණාටුව සමග ඇති වූ ග්‍රවතුර සහ නායයී ම් හීතුවෙන් මාර්ග ස්වර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන, මහාමාර්ග සහ නාගරික ස්වර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය.',
      category: 'Usability flow',
      grammar: 'Complex sentence',
      length: 'L',
      behavior: 'Loading state behavior'
    },
    {
      tcId: 'Pos_UI_0004',
      name: 'Output field maintains scroll position during real-time updates',
      input: 'mama gedhara yanavaa. mata bath oonee. api kaeema kanna yanavaa. oyaata kohomadha? heta api yamu. mama dhaen vaeda karanavaa. oya enavaadha? api passe kathaa karamu. karuNaakaralaa mata udhavvak karanna puLuvandha? mama office yanavaa. heta enavaa. mata raeeta kanna bath oonee.',
      expected: 'මම ගෙදර යනවා. මට බත් ඕනේ. අපි කැම කන්න යනවා. ඔයාට කොහොමද? හෙට අපි යමු. මම දැන් වැඩ කරනවා. ඔයා එනවාද? අපි පස්සේ කතා කරමු. කරුණාකරලා මට උදව්වක් කරන්න පුළුවන්ද? මම office යනවා. හෙට එනවා. මට රෑට කන්න බත් ඕනේ.',
      category: 'Usability flow (real-time conversion)',
      grammar: 'Complex sentence',
      length: 'L',
      behavior: 'Real-time output update behavior'
    }
  ]
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
