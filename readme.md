# google-parser

get the 15 first result of google

## Install

npm install https://github.com/guillim/npm-google_parser

## Usage
search the word "easy"

```javascript

var googleParser = require("google-parser")

var res =  await googleParser.search('easy')
```



## Usage with Proxy
search the word "easy" with proxy http://username:password@XX.XX.XX.XX:PORT

Note: username, password, ip, port are ALL strings
```javascript
var res =  await googleParser.search('easy',true,username,password,ip,port)
```
