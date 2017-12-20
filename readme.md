# google-parser

get the 15 first result of google

## Install

npm install https://github.com/guillim/npm-google_parser

## Usage

```javascript

var googleParser = require("google-parser")

var res =  await googleParser.search('easy')
```



## Usage with Proxy

```javascript
var res =  await googleParser.search('easy',true,'username','password','ip','port')
```
