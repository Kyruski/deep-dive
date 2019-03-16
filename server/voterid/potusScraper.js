
const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://www.vote.org/voter-id-laws/';

rp(url)
  .then(function(html){
    //success!
    const $ = cheerio.load(html);
    console.log(html);
  })
  .catch(function(err){
    //handle error
  });
