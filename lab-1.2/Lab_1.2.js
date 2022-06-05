/* Bai 1 Tinh Tri Tuyet Doi Cua So Nguyen */

var n = Number(prompt("Nhập N để tính trị tuyệt đối: "));
H = Math.abs(n);
console.log("Trị tuyệt đối của N là: ", + H);

/* Bai 2 Tinh nghiem cua chuong trinh với 2 so nguyen a,b */


var a = Number(prompt("Nhập vào số nguyên a:"));
var b = Number(prompt("Nhập vào số nguyên b:"));

function PTBN(a,b){

    if (a == 0 && b ==0)
    {
    alert("Phương trình vô số nghiệm");
    } 
    else if(a !=0 && b ==0)
    {
        alert("Phương trình có nghiệm X = 0");
    } 
    else if(a == 0 && b != 0)
    {
        alert("Phương trình vô nghiệm");
    }else
     {
        alert("Phương trình có nghiệm X = " + (-b/a));
    }
}
 PTBN(a,b);

 /* Bai 3*/