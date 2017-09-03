// @flow
const puppeteer = require('puppeteer')

async function captureElement(
  url /* : string */,
  target /* : string */
) /* : Promise <Buffer> */ {
  let browser = null
  try {
    browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    await page.waitFor(target)

    const clip = await page.evaluate(s => {
      const el = document.querySelector(s)
      const { width, height, top: y, left: x } = el.getBoundingClientRect()
      return { width, height, x, y }
    }, target)

    const buffer = await page.screenshot({ clip })
    return buffer
  } catch (err) {
    throw new Error(err)
  } finally {
    if (browser) {
      browser.close()
    }
  }
}

module.exports = captureElement
