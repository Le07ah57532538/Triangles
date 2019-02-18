function triangleTracker()  {
   var a = parseInt(document.getElementById('hypotenuse').value);
   var b = parseInt(document.getElementById('length').value);
   var c = parseInt(document.getElementById('height').value);

   if ((a === b) && (b === c) && (a === b)) {
       alert("equilateral triangle")
   } else if (a === b || b === c || a === c) {
       alert("isosceles triangle");
   } else if (a != b && b != c && a != c ) {
       alert("scalene triangle");
  }
}
