

/*------------------------------------------------------------------------------------------*/

/* Bai 1 Tinh Tri Tuyet Doi Cua So Nguyen */

var n = Number(prompt("Nhập N để tính trị tuyệt đối: "));
H = Math.abs(n);
console.log("Trị tuyệt đối của N là: ", + H);

/*------------------------------------------------------------------------------------------*/

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

 
/*------------------------------------------------------------------------------------------*/


 /* Bai 3 Tinh tong diem trung binh*/


 var T = Number(prompt("Nhập vào điểm số môn Toán:"));
 var L = Number(prompt("Nhập vào điểm số môn Lý:"));
 var H = Number(prompt("Nhập vào điểm số môn Hoá:"));

 sum = T + L + H;
 DTB = sum/3;
 console.log("Tổng điểm 3 môn Toán, Lý, Hoá là: " + sum + " \nĐiểm trung bình cộng của 3 môn Toán, Lý, Hoá là: " + DTB);

 
/*------------------------------------------------------------------------------------------*/

 /* Bai 4 Tinh chu vi va dien tich hinh tron */

 var r = Number(prompt("Nhập vào bán kính hình tròn: "));
 const PI = 3.14;
 P = 2 * PI * r;
 S = PI * r * r;
 console.log("Chu vi hình tròn là: " + P + " \nDiện tích hình tròn là: " + S);

 
/*------------------------------------------------------------------------------------------*/

 /* Bai 5 Cua hang ban dien thoai */

 
 var DT = Number(prompt("Nhập vào giá của điện thoại: "));
 var PK = Number(prompt("Nhập vào giá phụ kiện đi kèm: "));
 var KM = Number(prompt("Nhập vào giá trị phiếu giảm giá nếu có: "));
 const VAT = 0.08;
 function TT(DT,PK,KM){

    if (DT == 0 || PK ==0 || KM == 0)
    {
    alert("Vui lòng nhập đầy đủ thông tin sản phẩm!!");
    } 
    else 
    {
        sumvat = (DT + PK) * VAT;
        sum =( (DT + PK + sumvat) - KM); 
        alert("Tổng số tiền bạn phải thanh toán là:");
        console.log(sum);
    }
   
}
confirm("Bạn đã nhập đầy đủ các thông tin món hàng chưa?");
TT(DT,PK,KM);

/*------------------------------------------------------------------------------------------*/

