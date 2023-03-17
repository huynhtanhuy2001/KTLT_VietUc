//1 khai bao
let stack = [24,45,23,13,43,-1];
var capacity = 10;
// 2 kiem tra ngan xep day
function IsFull() {
    if(stack.length == capacity) {
        return 1;
    } else {return 0}
}
// 3 kiem tra rong
function IsEmpty() {
    if(stack.length == 0) {
        return 1;
    } else {return 0}
}
// 4 them phan tu
function PushElement(x) {
    if(IsFull() == 1) {
        console.log("Stack is full")
    } else {stack.push(x)}
}
// 5 xoa phan tu
function pop() {
    if (IsEmpty() == 1) {
        console.log("stack is empty");
    } else {
        stack.pop();
    }
}
// 6 liet ke phan tu chan
function ListOutEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i])
        }
    }
}
// 7 sap xep ngan xep tang dan
function SortAscengding(n, arr) { // sắp xếp mảng tăng dần
    for (var i = 0; i <= n-2; i++) {
        for (var j = i + 1; j <= n - 1; j++) {
            if (Number(arr[i]) > Number(arr[j])) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
function AscengdingStack(arr) {
    SortAscengding(arr.length, arr);
    console.log(arr);
}
// 8 sap xep ngan xep giam dan
function SortDecengding(n, arr) { // sắp xếp mảng giam dần
    for (var i = 0; i <= n-2; i++) {
        for (var j = i + 1; j <= n - 1; j++) {
            if (Number(arr[i]) < Number(arr[j])) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
function DecengdingStack(arr) {
    SortDecengding(arr.length, arr);
    console.log(arr);
}
// 9 tim phan tu lon nhat
function findMax(arr) {
    let max = arr[0];
    for (let i = 1 ; i <arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
function MaxElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == findMax(arr)) {
            console.log(arr[i]);
        }
    }
}
// 10 tong phan tu chan
function SumEven(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
           sum = sum + arr[i];
        }
    }
    return sum;
}
IsFull();
IsEmpty();
PushElement(10);
pop();
ListOutEven(stack);
AscengdingStack(stack);
DecengdingStack(stack);
MaxElement(stack);
SumEven(stack);

//1 khai bao
let queue = [24,45,23,13,43,-1];
var capacity = 10;
// 2 kiem tra ngan xep day
function IsFull() {
    if(queue.length == capacity) {
        return 1;
    } else {return 0}
}
// 3 kiem tra rong
function IsEmpty() {
    if(queue.length == 0) {
        return 1;
    } else {return 0}
}
// 4 them phan tu
function PushElement(x) {
    if(IsFull() == 1) {
        console.log("Stack is full")
    } else {queue.push(x)}
}
// 5 xoa phan tu
function shift() {
    if (IsEmpty() == 1) {
        console.log("stack is empty");
    } else {
        queue.shift();
    }
}
// 6 liet ke phan tu chan
function ListOutEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i])
        }
    }
}
// 7 sap xep ngan xep tang dan
function SortAscengding(n, arr) { // sắp xếp mảng tăng dần
    for (var i = 0; i <= n-2; i++) {
        for (var j = i + 1; j <= n - 1; j++) {
            if (Number(arr[i]) > Number(arr[j])) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
function AscengdingQueue(arr) {
    SortAscengding(arr.length, arr);
    console.log(arr);
}
// 8 sap xep ngan xep giam dan
function SortDecengding(n, arr) { // sắp xếp mảng giam dần
    for (var i = 0; i <= n-2; i++) {
        for (var j = i + 1; j <= n - 1; j++) {
            if (Number(arr[i]) < Number(arr[j])) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
function DecengdingQueue(arr) {
    SortDecengding(arr.length, arr);
    console.log(arr);
}
// 9 tim phan tu lon nhat
function findMax(arr) {
    let max = arr[0];
    for (let i = 1 ; i <arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
function MaxElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == findMax(arr)) {
            console.log(arr[i]);
        }
    }
}
// 10 tong phan tu chan
function SumEven(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
           sum = sum + arr[i];
        }
    }
    return sum;
}
IsFull();
IsEmpty();
PushElement(10);
pop();
ListOutEven(queue);
AscengdingQueue(queue);
DecengdingQueue(queue);
MaxElement(queue);
SumEven(queue);


class Plate {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}

class Stack {
    constructor(plts, capacity) {
        this.plts = [];
        this.capacity = 10;
    }
}
let plate01 = new Plate("Dĩa 1", "Vừa");
let plate02 = new Plate("Dĩa 2", "Vừa");
let plate03 = new Plate("Dĩa 3", "Vừa");
let plate04 = new Plate("Dĩa 4", "Vừa");
let plate05 = new Plate("Dĩa 5", "Vừa");
let plates = new Stack()
plates = {plts : [plate01, plate02, plate03, plate04, plate05], capacity : 10};

function isFull() {
    if(plates.plts.length == plates.capacity) {return 1}
    else {return 0}
}
isFull();

function isEmpty() {
    if(plates.plts.length == 0) {return 1}
    else {return 0}
}

let plate = new Plate("Dĩa 6", "to");
function push(plate) {
    if (isFull() == 1) console.log("Plates stack is full.");
    else plates.plts.push(plate);
}

function pop() {
    if (isEmpty() == 1 ) console.log("Plates stack is empty.");
    return plates.plts.pop();
}
//isFull();
//isEmpty();
//push(plate);
//pop();



class Ticket {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Queue {
    constructor(tckts, size) {
        this.tckts = [];
        this.size = 10;
    }
}
let ticket01 = new Ticket("Vé 1", 50000);
let ticket02 = new Ticket("Vé 2", 60000);
let ticket03 = new Ticket("Vé 3", 40000);
let ticket04 = new Ticket("Vé 4", 50000);
let ticket05 = new Ticket("Vé 5", 70000);
let tickets = new Queue();
tickets = {tckts : [ticket01, ticket02, ticket03, ticket04, ticket05], size : 10};
function isFull() {
    if(tickets.tckts.length == tickets.size) {return 1}
    else {return 0}
}
function isEmpty() {
    if(tickets.tckts.length == 0) {return 1}
    else {return 0}
}
// them ve vao hang doi
let ticket = new Ticket("Vé 5", 100000);
function push(ticket) {
    if (isFull() == 1) console.log("Tickets Queue is full.");
    else tickets.tckts.push(ticket);
}
// xoa ve tu hang doi
function shift() {
    if (isEmpty() == 1) {
        console.log("Tickets Queue is empty");
    } else {
        tickets.tckts.shift(tickets);
    }
}
// sap xep hang doi tang dan theo Price.
function SortAscengding(n, arr) { // sắp xếp mảng tăng dần
    for (var i = 0; i <= n-2; i++) {
        for (var j = i + 1; j <= n - 1; j++) {
            if (Number(arr[i].price) > Number(arr[j].price)) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
function AscengdingQueue(arr) {
    SortAscengding(arr.length, arr);
    console.log(arr);
}
// sap xep hang doi giam dan theo Price.
function SortDecengding(n, arr) { // sắp xếp mảng tăng dần
    for (var i = 0; i <= n-2; i++) {
        for (var j = i + 1; j <= n - 1; j++) {
            if (Number(arr[i].price) < Number(arr[j].price)) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
function DecengdingQueue(arr) {
    SortDecengding(arr.length, arr);
    console.log(arr);
}
// tim ve co gia lon nhat trong hang doi
function findMax(arr) {
    let max = arr[0].price;
    for (let i = 1 ; i <arr.length; i++) {
        if (max < arr[i].price) {
            max = arr[i].price;
        }
    }
    return max;
}
function MaxElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price == findMax(arr)) {
            console.log(arr[i]);
        }
    }
}
//isFull();
//isEmpty();
//push(ticket);
//shift()
//AscengdingQueue(tickets.tckts);
//DecengdingQueue(tickets.tckts);
//MaxElement(tickets.tckts);