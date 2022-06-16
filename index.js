// Bai 1
function divisor () {
    let n;
    do {
        n = Number (prompt("Enter n :"))
    } while ( n <= 0)

    for (let i = 1; i <=n; i++) {
        if ( n % i === 0) {  // Kiem tra n co chia het cho i khong? ( Hoac i co phai uoc so cua n khong )
            console.log(i);
        }
    }
}
divisor();

// Bai 2

function isPrime (n) {  // kiem tra 1 so co phai so nguyen to hay khong
    for (let i =2; i<n ; i++){
        if ( n % i === 0) {
            return false;
        }
        else {
            return true;
        }
    }
}

function listPrimeNumber () { 
    let n ; // liet ke cac so nguyen to nho hon n
    do {
        n = Number(prompt("Enter n :"));  // nhap vao so nguyen to >2
    } while ( n<= 2)
 
    for ( let i =2; i < n; i++) {  // xu ly liet ke cac so nguyen to trong khoang 2 -> n
        if(isPrime(i)){
            console.log("i is prime ", i)
        }
    }
}

listPrimeNumber();

//Bai 3

function sumOfEvenDivisor () {
    let n;
    let sum =0;
    do {
        n = Number (prompt("Enter n :"))
    } while ( n <= 0)

    for(let i =0; i <=n; i++) {
        if ( n % i ===0 && i % 2 ===0) {
            sum += i;
        }
    }
    return sum;
}
console.log("Sum of sumOfEvenDivisor :", sum)

//Bai 4

function countNumberOfEvenDivisor () {
    let n;
    let count =0;
    do {
        n = Number (prompt("Enter n :"))
    } while ( n <= 0)

    for(let i =0; i <=n; i++) {
        if ( n % i ===0 && i % 2 ===0) {
            count += 1;
        }
    }
    return sum;
}
console.log("Sum of sumOfEvenDivisor :", sum)

//Bai 5

let arr = [];
let n; // so luong phan tu cua mang

function inputArr() {
    do {
        n = Number(prompt("Enter n :"))
    } while ( n <= 0)

    for ( let i =0; i<n ; i++){
        arr[i] = prompt(`Enter arr[${i+1}] :`)
    }
}

function outputArr() {
    for ( let i =0; i<n ; i++){
        console.log(`Arr[${i+1}] : ${arr[i]}`)
    }
}

//Bai 6

function outputOddInArr () {
    for ( let i =0; i<n ; i++){
        if ( i % 2 !== 0)
        {
            console.log(`Odd arr[${i+1}] : ${arr[i]}`)
        }
    }
}
function outputEvenInArr () {
    for ( let i =0; i<n ; i++){
        if ( i % 2 === 0)
        {
            console.log(`Odd arr[${i+1}] : ${arr[i]}`)
        }
    }
}

//Bai 7

function sumOddInArr () {
    let sumOdd = 0;
    for ( let i =0; i<n ; i++){
        if ( i % 2 !== 0)
        {
            sumOdd += i;
        }
    }

    return sumOdd;
}