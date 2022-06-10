// /* bai1*/
// var a = Number(prompt("Nhap so A: "));
// var b = Number(prompt("Nhap so B: "));
// var c = a * b;
// var d = (c > 0) ? "Cùng dấu" : "Khác dấu";
// console.log("Kết quả là:" + d);

/*bai 2------------------------------------------------*/

var m = Number(prompt("Nhap vao so thang cua nam: "));
function(m){
if (0< m < 4){
    console.log("Quý 1");
} else if (3 < m < 7){
    console.log("Quý 2");
}else if (6 < m <11){
    console.log("Quý 3");
}else if (10 < m < 13){
    console.log("Quý 4");
} else{
    console.log("Vui lòng nhập đúng số tháng mà bạn muốn kiểm tra");
}
}