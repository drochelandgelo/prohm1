
var op; 

function func() {
  var result;
  
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);

 if (op === '+' )
 result = num1 + num2
 else
   if (op === '-' )
   result = num1 - num2
   else
     if (op === '*' )
     result = num1 * num2
     else
       if (op === '/' )
       result = num1 / num2
  console.log (result)
}