/*******************************
              DATA
*******************************/

// Original dataset should not be modified
const countries = [
  {name: `Canada`, ppl: 35000000, flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/125px-Flag_of_Canada_%28Pantone%29.svg.png`, wiki: `Canada`, location: `North`}, 
  {name: `Kenya`, ppl: 50000000, flag: `.png`, wiki: ``, location: `South`}, 
  {name: `Australia`, ppl: 150000000, flag: `.png`, wiki: ``, location: `South`}, 
  {name: `Ukraine`, ppl: 30000000, flag: `.png`, wiki: ``, location: `North`}, 
  {name: `Japan`, ppl: 32000000, flag: `.png`, wiki: ``, location: `North`}, 
  {name: `England`, ppl: 90000000, flag: `.png`, wiki: ``, location: `North`},
];

// "push" will adding an extra value to the given array
countries.push ( {name: `Brazil`, ppl: 500000000, flag: `.png`, wiki: ``} );



/*******************************
        HELPER FUNCTIONS
*******************************/

/* getCountryAsHtmlString(): When passed an Object represeting a country, it returns back a formatted HTML view of that data.
Arguments: val = a Country (Object)
Returns: formatted HTML (String) */
const getCountryAsHtmlString = (val) => { 
  return `
    <li>
      <h2>${val.name} <img src="${val.flag}"></h2>
      <div>Population: ${val.ppl}</div>
      <a href="https://en.wikipedia.org/wiki/${val.wiki}">Learn mode</a>
      ${val.location}
    </li>
  `;
}

// Takes any Array of countries and prints it to the document
const printCountriesToList = (someCountries) => {
  document.getElementById(`allcountries`).innerHTML = someCountries.map( getCountryAsHtmlString ).join( `` );
  // Ideally:
  //  Return true if all was successful
  //  Return false if our map didn't go as planned
}



/*******************************
            FILTERS
*******************************/

const showAllCountriesOver35k = (event) => {
  const bigCountries = countries.filter( country => country.ppl >= 35000000 );
  printCountriesToList( bigCountries );
}

const showAllCountries = (event) => {
  printCountriesToList(countries);
}

// const showPageOne = (event) => {
//   const firstThreeCountries = countries.slice (0,3);
//   printCountriesToList(firstThreeCountries);
  
// }

// const showPageTwo = (event) => {
//   const secondThreeCountries = countries.slice (3,6);
//   printCountriesToList(secondThreeCountries);
  
// }

// const showPageThree = (event) => {
//   const thirdThreeCountries = countries.slice (6,9);
//   printCountriesToList(thirdThreeCountries);
  
// }

const filterByNorth = (event) => {
  const showNorthCountries = countries.filter (country => country.location == `North`);
  printCountriesToList(showNorthCountries);
  
}

const filterBySouth = (event) => {
  const showSouthCountries = countries.filter (country => country.location == `South`);
  printCountriesToList(showSouthCountries);
  
}

// const filterSmallest = (event) => {
//   const popLowToHigh = 
//   printCountriesToList(popLowToHigh);
 
// }
 
const showProductRange = (start, qty=3) => {
  printCountriesToList( countries.slice(start, start + qty));

}


// search function - filter array based on user string input 
const findMatchingNames = (query) => {
  printCountriesToList(countries.filter ( country => country.name.toLowerCase().includes(query.toLowerCase())));

}

/*******************************
    EVENT LISTENERS (ACTIONS)
*******************************/

// ALL LISTENERS (Interface actions)
window.addEventListener(`load`, showAllCountries);
document.getElementById(`btnAll`).addEventListener(`click`, showAllCountries);
document.getElementById(`btn35`).addEventListener(`click`, showAllCountriesOver35k);
document.getElementById(`btnpg1`).addEventListener(`click`, (event) => { showProductRange(0)});
document.getElementById(`btnpg2`).addEventListener(`click`, (event) => { showProductRange(3)});
document.getElementById(`btnpg3`).addEventListener(`click`, (event) => { showProductRange(6)});

document.getElementById(`btnnorth`).addEventListener(`click`, filterByNorth);
document.getElementById(`btnsouth`).addEventListener(`click`, filterBySouth);

//document.getElementById(`btnlow`).addEventListener(`click`, popLowToHigh);
document.getElementById(`search`).addEventListener(`keyup`, (event) => {
  // stop the default behaviour of the event 
  event.preventDefault();
  let searchQuery = document.getElementById(`search`).query.value 
  findMatchingNames(searchQuery);
} );

// document.getElementById(`btnnext3`).addEventListener(`click`, event => {

//   nextThreeCountries(); 

// });


document.getElementById(`population`).addEventListener(`click`, (event) => {

  let val = document.getElementById(`population`).pop.value;

  if (val == 0) {
    printCountriesToList(countries.filter(country => country.ppl < 40000000))
  } else if (val == 1) {
    printCountriesToList(countries.filter(country => country.ppl >= 30000000 & country.ppl <= 100000000))
  } else if (val == 2) {
    printCountriesToList(countries.filter(country => country.ppl > 100000000))

  }


})

/*******************************
              WIP
*******************************/

const pageOne = countries.slice(0,3);





/* Take the full set of *countries* (an Array defined above), then...
"filter" will return a NEW array of values from the given Array that match the filter
"map" will return a NEW array of values from the given Array, mapped to a function (HTML)
"join" will return a String of all the HTML Strings (Countries) combined */


/*
// Given an array of countries, return a string of those countries as HTML
const getAllCountriesAsHtml = (ar) => {
  return ar.map( getCountryAsHtmlString ).join(``);
}

// ALL THREE STEPS INTO ONE
const $countries = document.getElementById('allcountries');

// Full set
//$countries.innerHTML = getAllCountriesAsHtml( countries );

// Countries that start with capital U
//$countries.innerHTML = getAllCountriesAsHtml( countries.filter(val => val.name[0] == `U`) );

// Countries with population over 40k
//$countries.innerHTML = getAllCountriesAsHtml( countries.filter(val => val.ppl > 40000000) )

// The first 2 countries
//$countries.innerHTML = getAllCountriesAsHtml( countries.slice(0, 2) );

// Sort descending (make a copy with map first!!)
$countries.innerHTML = getAllCountriesAsHtml( countries.map(val => val).sort((a,b) => b.ppl - a.ppl) );
*/