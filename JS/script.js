function tap() {
var functiona = document.getElementsById("data1").value;
var functionb = document.getElementsById("data2").value;
var functionc = document.getElementsById("data3").value;


else if((a + b) <=c || (b + c) <=a || (a + c) <=b) {
  alert("not a triangle");
}
else if(a===b && b===c) {
  alert("this is an equilateral");
}
else if(a===b || b===c || a===c) {
  alert("this is an isosceles triangle");
}else{
  alert(scalene);
}
}
