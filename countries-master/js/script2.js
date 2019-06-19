

const products = [
    {name: `Winter Rose`, price: 25, pic: `.png`, type: `premium`}, 
    {name: `Summer in Bali`, price: 22, pic: `.png`,  type: `basic`}, 
    {name: `North by Northwest`, price: 24, pic: `.png`,  type: `basic`}, 
    {name: `Self Care`, price: 26, pic: `.png`,  type: `premium`}, 
    {name: `ThornLess`, price: 28, pic: `.png`, type: `premium`}, 
    {name: `Inner Peace`, price: 35, pic: `.png`,  type: `premium`},
    {name: `Hear me roar`, price: 55, pic: `.png`, type: `basic`} ,
    {name: `Every problem's a nail`, price: 15, pic: `.png`, type: `premium`} ,
    {name: `Forbidden Love`, price: 21, pic: `.png`, type: `basic`} ,
    {name: `Not a wallflower`, price: 22, pic: `.png`,type: `premium`} ,
    {name: `Lakeside`, price: 25, pic: `.png`, type: `basic`} ,
    {name: `Summer Daisy`, price: 32, pic: `.png`, type: `premium` } ,
    {name: `The forest for the trees`, price: 37, pic: `.png`, type: `basic`} ,
    {name: `Midnight driving`, price: 19, pic: `.png`, type: `basic`} ,
    {name: `Bad decisions`, price: 23, pic: `.png`, type: `basic`} ,
];

/*******************************
        HELPER FUNCTIONS
*******************************/

/* getproductAsHtmlString(): When passed an Object represeting a product, it returns back a formatted HTML view of that data.
Arguments: val = a product (Object)
Returns: formatted HTML (String) */
const getProductsAsHtmlString = (val) => { 
    return `
      <li>
        <h2>${val.name} <img src="${val.pic}"></h2>
        <div>Price: ${val.price}</div>
        <a href="">Add to cart</a>
        ${val.type}
      </li>
    `;
  }
  
  // Takes any Array of products and prints it to the document
  const printProductsToList = (val) => {
    document.getElementById(`allproducts`).innerHTML = val.map( getProductsAsHtmlString ).join( `` );
  //document.getElementById(`allcountries`).innerHTML = someCountries.map( getCountryAsHtmlString ).join( `` );  
    // Ideally:
    //  Return true if all was successful
    //  Return false if our map didn't go as planned
  }

  const showAllProducts = (event) => {
    printProductsToList (products);
  }


// Filter Function #1 -- Pagination 
  const showProductRange = (start, qty=5) => {
    printProductsToList ( products.slice(start, start + qty));
  }
  
  
  // Filter Function #2 -- Search by product name
  const findMatchingNames = (query) => {
    printProductsToList (products.filter ( product => product.name.toLowerCase().includes(query.toLowerCase())));
  }


  // Filter Function #3 -- Filter by type 
  const filterByNorth = (event) => {
    const showNorthCountries = products.filter (product => product.type == `premium`);
    printProductsToList (showNorthCountries);
  }

  const filterBySouth = (event) => {
    const showSouthCountries = products.filter (product => product.type == `basic`);
    printProductsToList (showSouthCountries);      
  }

/*******************************
    EVENT LISTENERS (ACTIONS)
*******************************/

// ALL LISTENERS (Interface actions)
window.addEventListener(`load`, showAllProducts);
document.getElementById(`btnAll`).addEventListener(`click`, showAllProducts);
document.getElementById(`btnpg1`).addEventListener(`click`, (event) => { showProductRange(0)});
document.getElementById(`btnpg2`).addEventListener(`click`, (event) => { showProductRange(5)});
document.getElementById(`btnpg3`).addEventListener(`click`, (event) => { showProductRange(10)});

document.getElementById(`btnnorth`).addEventListener(`click`, filterByNorth);
document.getElementById(`btnsouth`).addEventListener(`click`, filterBySouth);

// SEARCH
document.getElementById(`search`).addEventListener(`keyup`, (event) => {
  // stop the default behaviour of the event 
  event.preventDefault();
  let searchQuery = document.getElementById(`search`).query.value 
  findMatchingNames(searchQuery);
} );

