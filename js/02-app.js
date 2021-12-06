// Delete item in local storage
localStorage.removeItem('name');

// Update item in local storage
const updateMonths = JSON.parse(localStorage.getItem('months'));
console.log(updateMonths);
updateMonths.push('April');
console.log(updateMonths);

localStorage.setItem('months', JSON.stringify(updateMonths));

// Delete all in local storage
localStorage.clear();