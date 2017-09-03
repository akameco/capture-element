// @flow
const captureElement = require('.')

test(
  'return Buffer',
  async () => {
    const buffer = await captureElement(
      'https://github.com/akameco',
      '.js-calendar-graph'
    )
    expect(Buffer.isBuffer(buffer)).toBe(true)
  },
  10000 // add long timeout
)
