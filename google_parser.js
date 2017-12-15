const request = require('request'), DomParser = require('dom-parser'), parser = new DomParser();

/**
 * @param {string} search - Google query
 * @return {Promise<Response>} - response
 */
module.exports.search = (search) => {
    return new Promise((resolve, reject) => {
        const google = require('google');
        google.resultsPerPage = 15;
        google(search, (err, res) => {
            if(err) {
                if(err.message.match(/To go on, type the characters below\:/) != '') {
                    resolve(false);
                } else {
                    reject(err);
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
