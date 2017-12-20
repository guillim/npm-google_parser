const request = require('request'), DomParser = require('dom-parser'), parser = new DomParser();

/**
 * @param {string} search - Google query
 * @param {boolean} isUsingProxy - proxy Boolean
 * @param {string} username - proxy username
 * @param {string} password - proxy password
 * @param {string} ip - proxy ip
 * @param {string} port - proxy port
 * @return {Promise<Response>} - response
 */
module.exports.search = (search,isUsingProxy,username,password,ip,port) => {
    return new Promise((resolve, reject) => {
        const google = require('google');
        google.resultsPerPage = 15;
        if(isUsingProxy){
          google.requestOptions = {
            proxy: 'http://'+username+':'+password+'@'+ip+':'+port,
            timeout: 5000,
          };
        }
        google(search, (err, res) => {
            if(err) {
                if(err.message.match(/To go on, type the characters below\:/) != '') {
                    resolve(false);
                } else {
                    // reject(err);
                    console.log('ERROR in google_parser: cannot do the connection for this reason:',err);
                    resolve(false)
                }
            }
            else if(res.links == null) resolve(false);
            else {
                let result = [];
                for(let i = 0; i < res.links.length; ++i) {
                    let now = res.links[i];
                    if(!(!now.title|| !now.href)) {
                        result.push({title: now.title, link: now.href, description: now.description});
                    }
                }
                resolve(result);
            }
        });
    });
}
