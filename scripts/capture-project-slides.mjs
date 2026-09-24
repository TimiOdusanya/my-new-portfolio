import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "public/work/slides");

const targets = [
  { slug: "climb", url: "https://app.champintro.com/" },
  { slug: "loubby", url: "https://app.loubby.ai/" },
  { slug: "gopaddi", url: "https://www.gopaddi.com/" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

for (const { slug, url } of targets) {
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(4000);
    const file = path.join(outDir, `${slug}-live.png`);
    await page.screenshot({ path: file, fullPage: false });
    console.log(`Saved ${file}`);
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.6));
    await page.waitForTimeout(2000);
    const file2 = path.join(outDir, `${slug}-live-2.png`);
    await page.screenshot({ path: file2, fullPage: false });
    console.log(`Saved ${file2}`);
  } catch (error) {
    console.error(`Failed ${slug}:`, error.message);
  } finally {
    await page.close();
  }
}

await browser.close();
