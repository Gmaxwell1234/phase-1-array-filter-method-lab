function findMatching(drivers, name){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === name.toLowerCase();
    });
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

console.log(findMatching(drivers, 'Bobby')); 
console.log(findMatching(drivers, 'Sammy')); 
console.log(findMatching(drivers, 'Susan')); 
console.log(findMatching(drivers, 'bobby'));

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
      return driver.toLowerCase().startsWith(letters.toLowerCase());
    });
  }
  beforeEach(function () {
    drivers.length = 0;
    drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
  });
  console.log(fuzzyMatch(drivers, 'Sa'));
  console.log(fuzzyMatch(drivers, 'y'));
  console.log(fuzzyMatch(drivers, 'mm'));

  function matchName(drivers, name) {
    return drivers.filter(function(driver) {
      return driver.name === name;
    });
  }

  console.log(matchName(drivers, 'Bobby')); 
  
  console.log(matchName(drivers, 'Sammy')); 
  
  console.log(matchName(drivers, 'Alex')); 
  