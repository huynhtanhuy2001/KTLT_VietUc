
//cau 1



let Allcar = [];
//Property Shorthand
/*
let name = "BMW";
let color =  "Red" ;
let capacities = 4;
let Car1 = {name,color,capacities};

name = "Audi";
color = "Green" ;
capacities = 8;
let Car2 = {name,color,capacities};

//Computed Property Names
let n = "Name";
let Car3 ={ [n]: "BMW", color: "Blue", capacity:6};

let m = "Name";
let Car4 = { [n]: "Mecr", color: "Green", capacity:4};

Allcar.push(Car1, Car2,Car3,Car4);
console.log(Allcar);

*/

// cau 2  Method Properties
/*
 var Getter = {
    name: "BMW",
    color: "Green",
    capacities: 4,
    getName(){
        return this.name;
    },
    getColor(){
        return this.color;
    },
    getCapacities(){
         return  this.capacities;
         },

//
     SetName(name){
        this.name = name;
     },
     SetColor(color){
     this.color = color;
    },
    SetCapacities(capacities){
     this.capacities = capacities;
    }

 };
Getter.SetName("Audi");
Getter.SetColor("Green");
Getter.SetCapacities(8);
 console.log(Getter.getName());

 */

// bai 3 Destructuring Assignment.
/*
var Car1 = () => { return{ 
    name: "BMW",
    color: "Green",
  
};
}

var {name, color} = Car1();
console.log("name: " + name, " color: " + color);

var Car2 = () => { return{ 
    name: "Audi",
    color: "Green",
  
};
}

var {name, color} = Car2();
console.log("name: " + name, " color: " + color);
Allcar.push(Car1);
Allcar.push(Car2);
console.log(Allcar);
*/

