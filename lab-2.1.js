/*  bai 1 */

class Car {
    constructor(name,coler,capacity ) {
        this.name = name;
        this.coler = coler;
        this.capacity = capacity;

    }
}
// let carA = new Car ("BMW" ,"red" ,4);

// const allCar = [carA];
// console.log("All Car", allCar);

/*---------------------------*/

// let n ;
let allCar = [];
let n = Number(prompt("Nhap vao so luong xe: "));

for (let i =0; i<n; i++){
    const name = prompt(`Nhap vao ten xe ${i+1}: `);
    const coler = prompt("Nhap vao mau xe: ");
    const capacity = Number(prompt("Nhap vao so cho ngoi xe: "));
    const car = new Car(name,coler,capacity);
allCar.push(car); // push vao mang
}
console.log("all car",allCar)

/*------------*/
//bai 2

function listOutput (){
    for (let i = 0;i < allCar.length; i++){
        if(allCar[i].name == "BMW"){
            console.log("Car BMW: ",allCar[i])
        }
    }
}
listOutput();

//bai3

let sum =0;
function sumCapacity (){
    for (let i = 0;i < allCar.length; i++){
       sum += allCar[i].capacity;
    }
    console.log("sum capacity car:",sum)
    return sum;
}
sumCapacity();


//bai 4

function coutGreenCars (){

    let count = 0;
    for ( let i =0; i <allCar.length; i++){
        if(allCar[i].color == "Green"){
            count +=1;

        }
    }
    console.log("Sum of capacities",count)
    return count;
}

//bai 5
function findMaxCapacities (){
    let max = allCar[0].capacity;
    for(let i = 0; i< allCar.length; i++){
        if(allCar[i].capacity >max){
            max = allCar[i].capacity;
        }
    }
    return max;

}
findMaxCapacities();
