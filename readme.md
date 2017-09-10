# capture-element
[![Build Status](https://travis-ci.org/akameco/capture-element.svg?branch=master)](https://travis-ci.org/akameco/capture-element)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> capture element using puppeteer


## Install

```
$ npm install capture-element
```


## Usage

```js
const fs = require('fs');
const captureElement = require('capture-element')

captureElement(
  'https://github.com/akameco',
  '.js-calendar-graph'
).then(buffer => {
  fs.writeFileSync(buffer, 'github.png')
})
```


## API

### captureElement(url, element)

#### input

Type: `string`

target url.

#### element

Type: `String`

target element.

## Related

* [**akameco/capture-mobile-tweet** <br> - Caputre mobile tweet](https://github.com/akameco/capture-mobile-tweet)
* [**akameco/capture-tweet** <br> - Caputre tweet](https://github.com/akameco/capture-tweet)
* [**akameco/capture-github-kusa** <br> - Caputre github kusa](https://github.com/akameco/capture-github-kusa)
* [**akameco/capture-tweet-api** <br> - capture tweet api](https://github.com/akameco/capture-tweet-api)

## License

MIT © [akameco](http://akameco.github.io)
