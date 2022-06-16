/* bai1*/
var a = Number(prompt("Nhap so A: "));
var b = Number(prompt("Nhap so B: "));
var c = a * b;
var d = (c > 0) ? "Cùng dấu" : "Khác dấu";
console.log("Kết quả là:" + d);

/*bai 2------------------------------------------------*/

var m = Number(prompt("Nhap vao so thang cua nam: "));

if (m > 0 && m < 4){
    console.log("Tháng"+ m +"thuộc quý 1");
} else if (m >= 4 && m<7){
    console.log("Tháng"+ m +"thuộc quý 2");
}else if (m >= 7 && m < 10){
    console.log("Tháng"+ m +"thuộc quý 3");
}else if (m >=10 && m <13){
    console.log("Tháng"+ m +"thuộc quý 4");
} else{
    console.log("Vui lòng nhập đúng số tháng mà bạn muốn kiểm tra");
}

/*bai 3------------------------------------------------*/

var n = Number(prompt("Nhap vao so n: "));
var s =0;

for(var i = 1;i <=n;i++){
s=s+i;
alert("S(n) = 1 + 2 + … + (n-1) + n kết quả khi nhập n là :"+s);
}
console.log("Tổng là:"+s);

/*bai 4------------------------------------------------*/
var n = Number(prompt("Nhap vao so n: "));
var i;
var S = 0;
for(i = 1; i <= n; i++) {
		S = S + 1/(2*i);
	}
console.log("Tổng là: " , S); 


/*bai 5------------------------------------------------*/

var x = Number(prompt("Nhập số x"));
var n = Number(prompt("Nhập số n"));
var i;
var T = 1;
for (i = 1 ; i <= n ; i++) {
    T =T * x;
}
console.log("T = " , T);