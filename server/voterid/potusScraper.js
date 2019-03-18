const fs = require('fs');
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.vote.org/voter-id-laws/';

const states = [];
const inPerson = [];
const absentee = [];

rp(url)
  .then(function(html){
    //success!
    // console.log($('.state-row', html).text()); //this grabs the entire state row
    // console.log($('.state-name', html).text()); //this grabs the state name
    // console.log($('td[data-title="Voter ID Requirements - In Person"]', html).text()) //In person
    // console.log($('td[data-title="Voter ID Requirements - Absentee"]', html).text()) //Absentee

    $('.state-name', html).each(function(i, elem) {
      states[i] = $(this).text();
    })
    $('td[data-title="Voter ID Requirements - In Person"]', html).each(function(i, elem) {
      inPerson[i] = $(this).text();
      //console.log($(this).text().split('\n').join(' '));
    })
    $('td[data-title="Voter ID Requirements - Absentee"]', html).each(function(i, elem) {
      absentee[i] = $(this).text();
    })
    // states.push($('.state-name', html).text()); //push state name to states array
    // for (let i = 0; i < states.length; i++) {
    //   console.log(inPerson[i]);
    // }
    console.log(inPerson)
  })
  .catch(function(err){
    //handle error
  });
