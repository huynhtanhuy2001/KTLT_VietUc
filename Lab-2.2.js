//bai 1

// const Car = [
//     {name: "BWM",color: "Red",capacities: 4},
//     {name: "Audi",color: "Green",capacities: 8},
//     {name: "BMW",color: "Blue",capacities: 6},
//     {name: "Merc",color: "Green",capacities: 4}
//  ];


//   Car.map(getFullName);
  
//   function getFullName(item) {
//     return [item.name,item.color,item.capacities].join(" | ");
//   }
//   const ArrCar = new Map(Car);


//cach 1
// const Car = new Map();
// Car.set({name:'BMW',color: 'Red',capacities: 6});
// console.log(Car);

// //cach 2


// const car = new Map();
// car[0] = "name:'BMW'"
// car[1] = "color: 'Red"
// car[2] = "capacities: 6"


//cach3
/*
    var car1 = new Map([
    ['name:', 'BMW'],
    ['color:', 'Red'],
    ['capacities:',4]
]);
var car2 = new Map([
    ['name:', 'Audi'],
    ['color:', 'Green'],
    ['capacities:',8]
]);
var car3 = new Map([
    ['name:', 'BMW'],
    ['color:', ' Blue'],
    ['capacities:',6]
]);
var car4 = new Map([
    ['name:', 'Merc'],
    ['color:', 'Green'],
    ['capacities:',4]
]);

var ListCar = [car1, car2, car3, car4];
console.log(ListCar);

//bai2

car3.set('name:','Ford');
car3.set('color:','Gray');
car3.set('capacities:',8);
console.log(ListCar);

*/

// bai3

let AllCar = new Set();
let car1 = ([
    ['name:', 'BMW'],
    ['color:', 'Red'],
    ['capacities:',4]
]);
let car2 = ([
    ['name:', 'Audi'],
    ['color:', 'Green'],
    ['capacities:',8]
]);
let car3 = ([
    ['name:', 'BMW'],
    ['color:', ' Blue'],
    ['capacities:',6]
]);
let car4 = ([
    ['name:', 'Merc'],
    ['color:', 'Green'],
    ['capacities:',4]
]);
AllCar.add(car1);
AllCar.add(car2);
AllCar.add(car3);
AllCar.add(car4);
console.log(AllCar);

// bai 4


