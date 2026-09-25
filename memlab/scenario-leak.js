const PAGE = "https://manuel-sedanoluna.github.io/memlab-fixtures/pages/leak.html";

function url() {
  return PAGE;
}

async function action(page) {
  await page.waitForSelector("#next");
  await page.click("#next");
  await page.waitForSelector("#back");
}

async function back(page) {
  await page.click("#back");
  await page.waitForSelector("#next");
}

module.exports = { url, action, back };
