# string encode decode

![string encode decode](https://raw.githubusercontent.com/jsh1400/string-encode-decode/master/docs/string-encode-decode.png)

>string encode / decode online [Demo](https://jsh1400.github.io/string-encode-decode/)

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-size-image]][npm-url] [![NPM downloads][npm-downloads-image]][downloads-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]

### install demo
```javascript
git clone  https://github.com/jsh1400/string-encode-decode.git
cd string-encode-decode
npm install
npm start 
```

### install package

```
npm i string-encode-decode
```

```javascript

import {encode, decode} from 'string-encode-decode'

let en = encode("hello") // s%p4t4x%e5s 
let de = decode("s%p4t4x%e5s") // hello

```


---
>Javad Shariati <jsh1400@yahoo.com>


[license-image]: http://img.shields.io/npm/l/string-encode-decode.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/string-encode-decode
[npm-version-image]: http://img.shields.io/npm/v/string-encode-decode.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/string-encode-decode.svg?style=flat
[npm-downloads-size-image]: https://img.shields.io/bundlephobia/minzip/string-encode-decode.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/string-encode-decode?minimal=true

[travis-url]: http://travis-ci.org/jsh1400/string-encode-decode
[travis-image]: http://img.shields.io/travis/jsh1400/string-encode-decode/develop.svg?style=flat

