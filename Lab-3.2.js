alert ("Enter original fraction's value: ")

// Import/Export Fraction
console.log (`\nRequest 1 & 2 - Import and Export the specified fraction:`)

let originalFraction = new Object ();
originalFraction.numerator = 0;
originalFraction.denominator = 0;

function input(newFraction) {
    newFraction.numerator = Number(prompt("Enter numerator: "));
    newFraction.denominator = Number(prompt("Enter denominator: "));
}

function output(newFraction) {
console.log("Original fraction: " + newFraction.numerator + "/" + newFraction.denominator);
}

input(originalFraction);
output(originalFraction);


// Find The Greatest Common Divisor 
console.log (`\nRequest 3 - Find the greatest common divisor: `)

function findMaxDivisors (arr) {
    max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findGreatestCommonDivisors (newFraction) {
    let numerator = newFraction.numerator;
    let denominator = newFraction.denominator;
    let findLargerNumber = (numerator > denominator) ? numerator : denominator;

    let arr = [];

    for (let i = 0; i < findLargerNumber; i++) {
        if (numerator % i === 0 && denominator % i === 0) {
            arr[arr.length] = i;
        }
    }
    return findMaxDivisors(arr);
}
console.log (`Greatest common divisor: ${findGreatestCommonDivisors(originalFraction)}`);


// Reduce The Fraction
console.log (`\nRequest 4 - Reduce the fraction`)
function reduceFraction(newFraction) {
    let largestDivisor = findGreatestCommonDivisors(newFraction);
    newFraction.numerator = newFraction.numerator / largestDivisor;
    newFraction.denominator = newFraction.denominator / largestDivisor;
    return console.log (newFraction.numerator + "/" + newFraction.denominator)
}

reduceFraction(originalFraction);


// Sum of 2 fractions
console.log (`\nRequest 5 - Sum of 2 fractions A & B`);

alert ("Enter fraction A's value: ")
let fractionA = new Object ();
fractionA.numerator = Number(prompt("Enter numerator A: "));
fractionA.denominator = Number(prompt("Enter denominator A: "));

alert ("Enter fraction B's value: ")
let fractionB = new Object ();
fractionB.numerator = Number(prompt("Enter numerator B: "));
fractionB.denominator = Number(prompt("Enter denominator B: "));

function sumFractions (fractionA, fractionB) {
    let fractionTemp = new Object();
    fractionTemp.numerator = (fractionA.numerator * fractionB.denominator) + (fractionB.numerator * fractionA.denominator);
    fractionTemp.denominator = fractionA.denominator * fractionB.denominator;
    return console.log (fractionTemp.numerator + "/" + fractionTemp.denominator);

}
sumFractions (fractionA, fractionB);


// Product of 2 fractions
console.log (`\nRequest 6 - Product of 2 fractions A & B`);

function multiplyFractions (fractionA, fractionB) {
    let fractionTemp = new Object();
    fractionTemp.numerator = fractionA.numerator * fractionB.numerator;
    fractionTemp.denominator = fractionA.denominator * fractionB.denominator;
    return console.log (fractionTemp.numerator + "/" + fractionTemp.denominator);
}
multiplyFractions (fractionA, fractionB);


// Check whether it's a simplest fraction
console.log (`\nRequest 7 - Is this fraction simplest?`)

function isSimplestFraction () {
    let result = reduceFraction(originalFraction);
    if (result == 1) {
        return console.log (1);
    } else return console.log (0);
};
isSimplestFraction();


// Check whether it's a positive fraction
console.log (`\nRequest 8 - Is this positive fraction?`)

function isPositiveFraction (newFraction) {
    console.log (newFraction.numerator + "/" + newFraction.denominator)
    if (newFraction.numerator * newFraction.denominator > 0) {
        return console.log (`This is a positive fraction`);
    } else if (newFraction.numerator * newFraction.denominator < 0) {
        return console.log (`This is a negative fraction`);
    } else return console.log (`Result: 0 `);
};
isPositiveFraction(originalFraction);


// Homogenize the denominator of 2 fractions
console.log (`\nRequest 9 - Homogenize the denominator of 2 fractions`)

function homogenizeDenominator (fractionA, fractionB) {
    let bc = fractionA.denominator * fractionB.denominator;
    fractionA.numerator = fractionA.numerator * fractionB.denominator;
    fractionB.numerator = fractionB.numerator * fractionA.denominator;
    fractionA.denominator = bc;
    fractionB.denominator = bc;
    console.log ("Output: " + fractionA.numerator + "/" + fractionA.denominator + " & " + fractionB.numerator + "/" + fractionB.denominator);
}

homogenizeDenominator(fractionA, fractionB);


// Make a comparison of fraction A & fraction B
console.log (`\nRequest 10 - Make a comparison of fraction A & fraction B`)

function compareFractions (fractionA, fractionB) {
    let a = fractionA.numerator / fractionA.denominator;
    let b = fractionB.numerator / fractionB.denominator;
        if (a > b) { 
            return console.log ('a > b'); 
        } else if (a < b) { 
            return console.log ('a < b'); 
        } else return 0;
    };

compareFractions(fractionA, fractionB);


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
}

// Import & export x,y
console.log (`\nRequest 1 - Import & Export X & Y`);
alert ('Enter X & Y coordinates');

let point = new Point ();

function inputXY() {
    point.x = Number(prompt("Enter X: "));
    point.y = Number(prompt("Enter Y: "));
    return point;
}

function outputXY(point) {
    console.log(`Output of x,y: (${point.x},${point.y})`);
}

inputXY();
outputXY(point);


// Calculate the distance between a & b
alert('Before jumping into next request, please enter coordinates x,y of pointA & pointB ')

let pointA = new Point(Number(prompt("Point A - Enter X coordinate: ")),Number(prompt("Point A - Enter Y coordinate: ")));
let pointB = new Point(Number(prompt("Point B - Enter X coordinate: ")),Number(prompt("Point B - Enter Y coordinate: ")));

console.log(`\nRequest 2 - Calculate the distance between a & b`)

function distanceAB(pointA, pointB) {
    let d = Math.sqrt(Math.pow((pointA.x-pointB.x),2) + Math.pow((pointA.y-pointB.y),2));
    console.log(`Distance between 2 points: ${d.toFixed(2)}`);
}

distanceAB(pointA, pointB);


// Calculate the distance between 2 points in the direction of "Ox"
console.log (`\nRequest 3 - Calculate the distance between 2 points in the direction of "Ox"`)

function distanceOx(pointA, pointB) {
    let dOx = Math.abs(pointB.x - pointA.x);
    console.log(`Distance between 2 points in the direction of "Ox": ${dOx}`);
}
distanceOx(pointA, pointB);


// Calculate the distance between 2 points in the direction of "Oy"
console.log (`\nRequest 4 - Calculate the distance between 2 points in the direction of "Ox"`)

function distanceOy(pointA, pointB) {
    let dOy = Math.abs(pointA.y - pointB.y);
    console.log(`Distance between 2 points in the direction of "Ox": ${dOy}`);
}
distanceOy(pointA, pointB);


// Find the coordinates of the symmetrical point 
console.log (`\nRequest 5 - Find the coordinates of the symmetrical point `)
function symmetricalPoint(pointA){
    pointA.x = pointA.x * -1;
    pointA.y = pointA.y * -1;
    console.log(`Result: (${pointA.x}, ${pointA.y}})`)
}
symmetricalPoint(pointA);


class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

// Import/Export the triangle
console.log (`\nRequest 1 & 2 - Import/Export the triangle`)

let triangle = [];

function input() {
    for (let i = 0; i < 3; i++) {
        let newPoint = new Point();
        newPoint.x = Number(prompt(`Point ${i+1} - Enter abscissa x: `)); 
        newPoint.y = Number(prompt(`Point ${i+1} - Enter ordinate y: `)); 
        triangle.push(newPoint);
    }
}

function output() {
    console.log(`Three points of the triangle:`, triangle);
}

input();
output();


// Calculate the Parameter of the triangle
console.log (`\nRequest 3 - Calculate the parameter of the triangle`);

function distance(point1, point2) {
    let d = Math.sqrt(Math.pow(point1.x - point2.x, 2)) + Math.pow(point1.y - point2.y, 2);
    return d;
}

function perimeter(){
    let d1 = distance(triangle[0], triangle[1]);
    let d2 = distance(triangle[0], triangle[2]);
    let d3 = distance(triangle[1], triangle[2]);
    let p = d1 + d2 + d3;
    console.log("Perimeter of triangle: ", p);
}

perimeter();


// Calculate the Area of the triangle
console.log (`\nRequest 4 - Calculate the Area of the triangle`)

function area() {
    let s = Math.abs((triangle[1].x - triangle[0].x) * (triangle[2].y - triangle[0].y) - (triangle[2].x - triangle[0].x)*(triangle[1].y - triangle[0].x)) / 2;
    console.log("Area of triangle: ", s);
}

area();

// Calculate the sum of the distance from P(x,y) to 3 vertices:
console.log ('\nRequest 5');

function sumDistance() {
    let pointP = new Point (Number(prompt("Enter X of P: ")), Number(prompt("Enter Y of P: ")));
    let d1 = distance(triangle[0], pointP);
    let d2 = distance(triangle[1], pointP);
    let d3 = distance(triangle[2], pointP);
    let sum = d1 + d2 + d3;
    console.log("Sum of the distance from P(x,y) to 3 vertices: ", sum);
}

sumDistance();


class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
}

// Import/Export the array of fractions:
function inputArr (fracArr, n) {
    for (let i = 0; i < n; i++) {
        let newFracArr = new Fraction ();
        newFracArr.numerator = Number(prompt(`Fraction ${i+1} - Enter numerator: `));
        newFracArr.denominator = Number(prompt(`Fraction ${i+1} - Enter denominator: `));
        fracArr.push(newFracArr);
    }
}

function outputArr (fracArr, n) {
    for (let i = 0; i < n; i++) {
        console.log (fracArr[i]);
    }
}

// Count fractions including positive numerators
function countPositiveNumerator (fracArr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (fracArr[i].numerator > 0) {
            count += 1;
        } 
    }
    console.log (count);
}

// Find the index of largest fraction of the array
function findMaxFraction(fracArr, n) {
    let max = 0;
    for (let i = 0; i < n; i++) {
        if ((fracArr[i].numerator/fracArr[i].denominator) > (fracArr[max].numerator/fracArr[max].denominator));
        max = i;
    }
    return console.log("Max index of elements: ", max);
}

// Sort the array of ascending fractions
function sortAscending (fracArr,n) {
    for (let i = 0; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            if ((fracArr[i].numerator/fracArr[i].denominator) > (fracArr[j].numerator/fracArr[j].denominator)) {
                let temp = fracArr[i];
                fracArr[i] = fracArr[j];
                fracArr[j] = temp;
            }
        }
    }
    console.log (...fracArr)
}


function main() {
    let fracArr = [], n;
    do {
        n = Number(prompt("Enter the number of fractions n: "));
        if (isNaN(n) || n < 2) {
            alert('Oops!! The input value must be a number and larger than 2!!');
        }
    } while (isNaN(n) || n < 2);

    console.log (`\nRequest 1 & 2 - Import/Export the array of fractions`)
    inputArr(fracArr, n);
    outputArr(fracArr, n);

    console.log (`\nRequest 3 - Count fractions including positive numerators`)
    countPositiveNumerator (fracArr, n);

    console.log (`\nRequest 4 - Find the index of the largest fraction of the array`)
    console.log (findMaxFraction(fracArr, n));

    console.log (`\nRequest 5 - Arrange the array of ascending fractions`)
    sortAscending(fracArr,n);

}

main();


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Import/Export the array of points:
function inputArr (pointArr, n) {
    for (let i = 0; i < n; i++) {
        let newPointArr = new Point ();
        newPointArr.x = Number(prompt(`Point ${i+1} - Enter X: `));
        newPointArr.y = Number(prompt(`Point ${i+1} - Enter Y: `));
        pointArr.push(newPointArr);
    }
}

function outputArr (pointArr, n) {
    for (let i = 0; i < n; i++) {
        console.log (pointArr[i]);
    }
}

// Count points with Positive Abscissa
function countPositiveAbscissa (pointArr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (pointArr[i].x > 0) {
            count += 1;
        }
    }
    return console.log ("Number of Point(s) with a Positive Abscissa: ", count)
}

// Find the index with the largest Positive Abscissa in the array
function findMaxAbsscisa (pointArr, n) {
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (pointArr[i].x > pointArr[max].x) {
            max = i;
        }
    }
    return console.log ("Max index of elements: ", max);
}


function main() {
    let pointArr = [], n;
    do {
        n = Number(prompt("Enter the number of points n: "));
        if (isNaN(n) || n < 2) {
            alert('Oops!! The input value must be a number and larger than 2!!');
        }
    } while (isNaN(n) || n < 2);

    console.log (`\nRequest 1 & 2 - Import/Export the array of points`)
    inputArr (pointArr, n);
    outputArr (pointArr, n);

    console.log (`\nRequest 3 - Count points with Positive Abscissa`)
    countPositiveAbscissa (pointArr, n);

    console.log (`\nRequest 4 - Find the index with the largest Positive Abscissa in the array`)
    findMaxAbsscisa (pointArr, n);


}
main();





