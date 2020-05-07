/* Using the ternary
---------------------------------------------*/
function dayOfTheWeek (input) {
  let day = '';
  const weekDays = ["Sturday", "Sunday", "Monday", "Tuesday", "Wendsday", "Turseday", "Friday"];
  day = weekDays [ new Date().getDay()];
  if (input == day) {
    output = "Yes today is" + input
  }
  else {
    output = "No today is not" + input
  }
  console.log(output);
}
dayOfTheWeek(Tuesday); //Yes today is Tuesday;



/* Equality of 3 Values
---------------------------------------------*/






/* Strictly Increasing or Decreasing
---------------------------------------------*/