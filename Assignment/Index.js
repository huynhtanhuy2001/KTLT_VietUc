class Employee {
  constructor(id,fullName,baseSalary,productSalary,productQuantity,SalaryNV){
      this.id = id;
      this.fullName = fullName;
      this.baseSalary = baseSalary;
      this.productSalary = productSalary ;
      this.productQuantity = productQuantity;
      this.SalaryNV = SalaryNV;
  }
}
const productSalary = 15000;
var nEmployee = [];
function setupEmployee(){
  /*Nhap thong tin nhan vien*/
  let n = Number(prompt("Input amount of Employee"));


  for (let i = 0;i<n;i++){
    var fullName = prompt("Input Name of Employee: ");
    var baseSalary = Number(prompt(`Input baseSalary of Employee ${i+1}: `));
    var productQuantity = Number(prompt("Input productQuantity of Employee: "));
    var id = i + 1;
    /*Tinh luong*/ 
    for(let i = 0; i < n; i++){
      var SaLaryNV = baseSalary + productSalary * productQuantity;
      if(productQuantity<50){
        SaLaryNV = SaLaryNV - (SaLaryNV*0.1)
      }
      else if(productQuantity>50){
          SaLaryNV = SaLaryNV + (SaLaryNV*0.1)
      }
      else{
          SaLaryNV;
      }
  }
    let employee = new Employee(id,fullName,baseSalary,productSalary,productQuantity,SaLaryNV);
    nEmployee.push(employee);
 
  }
  console.log(nEmployee);
}


function empleeSort(){
nEmployee.sort(function (a, b) {
    return a.SalaryNV - b.SalaryNV;
});

console.log(nEmployee);

}


function sumSalaryMax(){
  var maxNV = [] ;
  var max1 =  nEmployee[0].SalaryNV;
  var names = nEmployee[0].fullName;
  for (let i = 0; i < nEmployee.length; ++i) {
    if (max1 < nEmployee[i].SalaryNV) { 
      max1 = nEmployee[i].SalaryNV;
      names = nEmployee[i].fullName;
      
    }
  }
      var maxFull = {
          fullName: names,
          SaLaryNV: max1
      };
      maxNV.push(maxFull);
  
    
 console.log(maxNV);
}




function edit(id) {
  for (let i = 0; i < nEmployee.length; i++) {
      if (nEmployee[i].id == id) {
          var fullName = prompt("Input Name of Employee: ");
          var baseSalary = Number(prompt(`Input baseSalary of Employee : `));
          var productQuantity = Number(prompt("Input productQuantity of Employee: "));
          var id = nEmployee[i].id;
          var SaLaryNV = baseSalary + productSalary * productQuantity;
            if(productQuantity<50){
              SaLaryNV = SaLaryNV - (SaLaryNV*0.1)
            }
            else if(productQuantity>50){
                SaLaryNV = SaLaryNV + (SaLaryNV*0.1)
            }
            else{
                SaLaryNV;
            }
          var employee = {
              id: id,
              fullName: fullName,
              baseSalary: baseSalary,
              productSalary: productSalary,
              productQuantity: productQuantity,
              SaLaryNV: SaLaryNV
          };
          nEmployee.splice(i, 1, employee);
       
      }
  };
  console.log(nEmployee);
}


function deleteNV(id) {
  for (var i = 0; i < nEmployee.length; i++) {
      if (nEmployee[i].id == id) {
        nEmployee.splice(i, 1);
      }
  };
console.log(nEmployee);

}


function menu(){
  console.log("---------Menu---------");
    console.log("1. Nhập thông tin nhân viên ");
    console.log("2. Sắp nhân viên theo lương tăng dần ");
    console.log("3. Nhân viên có lương cao nhất");
    console.log("4. Sửa thông tin nhân viên");
    console.log("5. Xóa nhân viên");
    console.log("0. Thoát");
}




function showMenu(){
  menu();
  var chon = prompt('Select Number:');
  switch (chon) {
      case '1':
          setupEmployee();
          break;
      case '2':
          empleeSort()
          break;
      case '3':
          sumSalaryMax();
          break;
      case '4':
        var id = prompt('Nhập id cần sửa: ');
          edit(id);
          break;
      case '5':
          var id = prompt('Nhập id cần xóa: ');
          deleteNV(id);
          break;
      default:
          console.log('See you again!');
          break;
  }
}

showMenu();
/*------------*/