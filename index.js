// Code your solution in this file.


// function lowerCaseDrivers(drivers){
//   return drivers.map(function(driver){
//     return driver.toLowerCase();
//   });
// }

function lowerCaseDrivers(arr){
  return arr.map(el =>  el.toLowerCase() );
}

function attributesToPhrase(arr){
  return arr.map(el => `<${el.name}> is from <${el.hometown}>` );
}