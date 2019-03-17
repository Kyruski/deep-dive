
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.vote.org/voter-id-laws/';

rp(url)
  .then(function(html){
    //success!
    console.log($('.state-row', html).text());
    // console.log($('state-row > td', html));
  })
  .catch(function(err){
    //handle error
  });
