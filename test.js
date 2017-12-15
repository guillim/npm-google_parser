const google = require('./google_parser.js');

google.search('easy')
.then((res) => {
    console.log(res[0]);
}).catch((err) => {
    console.log(err);
});
