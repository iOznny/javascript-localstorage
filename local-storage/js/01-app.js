// Set item in local storage
localStorage.setItem('name', 'Benjamín Walker');
//sessionStorage.setItem('name', 'Benjamín Walker');

const product = {
    name: 'Monitor 24in',
    price: 300
};

// Parse object to string with stringify
const pString = JSON.stringify(product);
localStorage.setItem('product', pString);

const months = ['January', 'Febrary', 'March'];
localStorage.setItem('months', JSON.stringify(months));


// Get item in local storage
const name = localStorage.getItem('name');
console.log(name);

const json = localStorage.getItem('product');
console.log(json);
console.log(JSON.parse(json));

const monthsJSON = localStorage.getItem('months');
console.log(JSON.parse(monthsJSON));