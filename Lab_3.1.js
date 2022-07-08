// bai 1
var Array = [];
var a = 0;
function nhapmang (a){
    let n = Number(prompt("Nhap so luong mang: "));
    for(var i = 0; i < n; i++) {    
         a = Number(prompt(`Nhap phan tu ${i+1} cua mang: `)); 
        Array.push(a);
    }
}
nhapmang();


function xuatmang (){
    console.log(Array);
}
xuatmang();

    var ArrayChan = [];
   var ArrayLe = [];
 
function lietkele (a,Array,ArrayChan,ArrayLe){
    for(var i = 0; i < Array.length; i++){
        if (Array[i] % 2 == 0){
            ArrayChan.push(Array[i]);
          
        }
        else 
        {
            ArrayLe.push(Array[i]);
        }
  }
        console.log("chan: ", ArrayChan);
        console.log("le: ", ArrayLe);
       
}
lietkele(a,Array,ArrayChan,ArrayLe);



// REQUEST 3:
function sumOfNegativeValues (arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            sum += arr[i];
        }
    } console.log (`Sum of Negative Values in the array: ${sum}`);
};

// REQUEST 4:
function countPrimeNumbers (arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 1 && arr[i] % 2 === 1 && arr[i] % arr[i] === 0 && arr[i] < 100) {
            count += 1;
        }
    }
    console.log (`Number of Prime Numbers: ${count}`);
}

// REQUEST 5:
function findMaxValue (arr, n) {
    let max = arr[0];
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
        max = arr[i];
        };
    } 
    console.log(`Max value of the array: ${max}`);
};

// REQUEST 6:
function findAnEvenValue (arr, n) {
    let flag = false;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0 && arr[i] < 100) {
            flag = arr[i];
            break;
        }
    }
    return console.log(`First even value smaller than 100: ${flag}`);
    
}


// RESULT:
function main() {
    let arr = [], n;

    do {
        n = Number(prompt("Enter a specific number of elements in the array (at least 5): "));
        if (isNaN(n) || n < 5) {
            alert('Oops!! The input value must be a number and larger than 4!!');
        }
    } while (isNaN(n) || n < 5);

    console.log (`\nRequest 1 - Write an input & output array:`)
    inputArray(arr, n);
    outputArray(arr);

    console.log (`\nRequest 2 - List out odd values in the array:`)
    listOddValues (arr, n);

    console.log (`\nRequest 3 - Write a sum function of negative values:`)
    sumOfNegativeValues(arr,n);

    console.log (`\nRequest 4 - Write a count function of prime numbers: `)
    countPrimeNumbers(arr,n);

    console.log (`\nRequest 5 - Find max value in the array`);
    findMaxValue(arr,n);

    console.log (`\nRequest 6 - Check whether there'a EVEN value smaller than 100:  `)
    findAnEvenValue(arr,n);

};

main();

/*----------------------------------------------------------------*/
function inputArray (arr, n) {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt(`arr[${i}] - Enter any number: `));
    } 
};

function outputArray (arr) {
    console.log (`\nInput value: `)
    console.log(...arr);
};

// REQUEST 1:
function findFirstPositiveValue (arr,n) {
    let flag = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            flag = arr[i];
            break;
        }
    } console.log ("First positive value: " + flag);
}

// REQUEST 2:
function findLastEvenNumber (arr, n) {
    let flag = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            flag = arr[i];
        }
    } console.log ("Last even value: " + flag);
}

// REQUEST 3:
function getIndexOfSmallestElement (arr) {
    let min = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[min]) min = i;
    }
    return min;
};

// REQUEST 4:
function getTheSmallestPositiveValue(arr, n) {
    for (let i = 0; i < n; i++) {
            if (arr[i] < 0)
            arr.splice(i, 1);
    }
    for (let i = 0; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            };
        }
    }
    console.log(`arr = [${arr}]`);
    console.log (`Min postive value: ${arr[0]}`);
}; 


// RESULT: 
function main() {
    let arr = [], n;

    do {
        n = Number(prompt("Enter a specific number of elements in the array (at least 5): "));
        if (isNaN(n) || n < 5) {
            alert('Oops!! The input value must be a number and larger than 4!!');
        }
    } while (isNaN(n) || n < 5);


    inputArray(arr, n);

    outputArray(arr,n);

    console.log (`\nRequest 1 - Find the 1st positive value in the array: `)
    findFirstPositiveValue(arr, n);

    console.log (`\nRequest 2 - Find the last even number in the array: `)
    findLastEvenNumber(arr,n);

    console.log (`\nRequest 3 - Find the index whose value is the smallest in the array: `)
    console.log(`The smallest index of element: arr[${getIndexOfSmallestElement(arr, n)}] = ${arr[getIndexOfSmallestElement(arr, n)]}`);

    console.log (`\nRequest 4 - Find the smallest positive value in the array:`)
    getTheSmallestPositiveValue(arr, n);
};

main();

/*----------------------------------------------------------------*/
function inputArray (arr, n) {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt(`arr[${i}] - Enter any number: `));
    } 
};

function outputArray (arr) {
    console.log (`\nInput value: `)
    console.log(...arr);
};

// REQUEST 1:
function listOutXToYValues (arr, x, y) {
    console.log (...arr.slice(x,y))
}

// REQUEST 2:
function getLargestIndex (arr, n) {
    let max = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[max]) max = i;
    }
    return max;
};



function main() {
    let arr = [], n;
    do {
        n = Number(prompt("Enter a specific number of elements in the array (at least 5): "));
        if (isNaN(n) || n < 5) {
            alert('Oops!! The input value must be a number and larger than 4!!');
        }
    } while (isNaN(n) || n < 5);


    inputArray(arr, n);

    outputArray(arr, n);
    
    alert ("List out values ranging from x to y");
    console.log (`\nRequest 1 - List out values ranging from x to y`);
    listOutXToYValues (arr, Number(prompt("Enter x: ")), Number(prompt("Enter y: ")));

    console.log (`\nRequest 2 - Find the index whose value is the largest in the array: `)
    console.log(`The largest index of elements: arr[${getLargestIndex(arr,n)}] =  ${arr[getLargestIndex(arr, n)]}`);
}

main()


/*--`----------------------------------------------------------------*/
function inputArray (arr, n) {
    for (let i = 0; i < n; i++) {
        do {
            arr[i] = Number(prompt(`arr[${i}] - Enter any number: `));
        } while (arr[i] >= 100 && isNaN(arr[i]))
    } 
};

function outputArray (arr) {
    console.log (`\nInput value: `)
    console.log(...arr);
};


// REQUEST 1:
function sumOfElements (arr, n) {
    sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    console.log (`Sum of Elements in the array: ${sum}`);
};

// REQUEST 2:
function sumOfPostiveValues (arr, n) {
    sum = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    console.log (`Sum of Positive values in the Array: ${sum}`)
}

//REQUEST 3:

function findFirstOddNumber(m) {
    let unit, div;
    m = Math.abs(m);
    if (m >= 10) {
        unit = m % 10;
        div = (m - unit) / 10;
            if (div % 2 == 0) {
                return 0;
                } return 1;
    } 
    else if (m < 10) {
        if (m % 2 == 0) {
            return 0;
        } return 1;
    }
};

function sumOfFirstOddNumbers (arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (findFirstOddNumber(arr[i]) === 1) {
            sum += arr[i];
        }
    }
    return console.log(sum);
}



// RESULT
function main() {
    let arr = [], n;

    do {
        n = Number(prompt("Enter a specific number of elements in the array: "));
        if (isNaN(n)) {
            alert('Oops!! The input value must be a number and larger than 4!!');
        }
    } while (isNaN(n) || n < 5);

    inputArray(arr, n);

    outputArray(arr, n);

    console.log (`\nRequest 1 - Write a function on sum of all elements in the array: `);
    sumOfElements (arr, n);

    console.log (`\nRequest 2 - Write a function on sum of postive value in the array: `);
    sumOfPostiveValues (arr, n);

    console.log (`\nRequest 3 - Write a function on sum of values whose first digit is an odd digit:  `)
    sumOfFirstOddNumbers (arr, n)
};

main();

/*------------------------------------------------------------------------------------------------*/
function inputArray (arr, n) {
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt(`arr[${i}] - Enter any number: `));
    } 
};

function outputArray (arr) {
    console.log (`\nInput value: `)
    console.log(...arr);
};

// REQUEST 1:
function countEvenNumbers (arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            count += 1;
        }
    }
    console.log (`Number of EVEN numbers: ${count}`);
};

// REQUEST 2:
function countPositiveValueDivisibleBy7 (arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0 && arr[i] % 7 === 0) {
            count += 1;
        } 
    }
    console.log (`Number of POSTIVE numbers divisible by 7: ${count}`);
};

// REQUEST 3:
function countOccurrencesOf24 (arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 24) {
            count += 1;
        }
    }
    console.log (`Occurrences Of 24: ${count}`);
}


// RESULT
function main() {
    let arr = [], n;

    do {
        n = Number(prompt("Enter a specific number of elements in the array (at least 5): "));
        if (isNaN(n) || n < 5) {
            alert('Oops!! The input value must be a number and larger than 4!!');
        }
    } while (isNaN(n) || n < 5);


    inputArray(arr, n);

    outputArray(arr, n);

    console.log (`\nRequest 1 - Count even numbers `)
    countEvenNumbers (arr, n);

    console.log (`\nRequest 2 - Count positive number divisible by 7 `);
    countPositiveValueDivisibleBy7(arr, n);

    console.log (`\nRequest 3 - Count occurences of 24`)
    countOccurrencesOf24 (arr, n)
}

main()