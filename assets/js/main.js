var toCelsius = document.getElementById('toCelsius');
var toFarenheit = document.getElementById('toFarenheit');
toCelsius.onclick = function (){
  var farenheit = document.getElementById('farenheit').value;
  document.getElementById('celsius').value = ((farenheit - 32)*(5 / 9)).toFixed(2);
}
toFarenheit.onclick = function (){
  var celsius = document.getElementById('celsius').value;
  document.getElementById('farenheit').value = ((celsius *(9 / 5)) + 32).toFixed(2);
}
