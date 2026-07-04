const puppeteer = require('puppeteer');

const BASE = 'http://localhost:4200';
const shots = '/private/tmp/claude-501/-Users-roberthogan-Github-personal-nx-monorepo/6e2e2f50-b551-4982-a1ee-af540d6c22ff/scratchpad/dm-toolkit-campaign-shots';

(async () => {
  const fs = require('fs');
  fs.mkdirSync(shots, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox'],
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 900 });
  const errors = [];
  page.on('pageerror', (err) => errors.push(`[pageerror] ${err.message}`));

  await page.goto(`${BASE}/session`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: `${shots}/01-session-with-campaign.png` });

  // Click the test campaign to select it as active
  const clicked = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('div'));
    const row = rows.find((r) => r.textContent.trim() === 'ZZZ Test Campaign' && r.children.length === 0);
    return false; // fallback below handles selection differently
  });

  await page.screenshot({ path: `${shots}/02-full-page.png`, fullPage: true });

  console.log('---PAGE ERRORS---');
  console.log(errors.length ? errors.join('\n') : 'none');
  await browser.close();
})().catch((e) => {
  console.error('SCRIPT FAILED', e);
  process.exit(1);
});
