function validateForm(){

  var nombre = document.getElementById('name').value;
  var apellido = document.getElementById('lastname').value;
  var email = document.getElementById('input-email').value;
  var password = document.getElementById('input-password').value;
  var seleccion = document.getElementById('opciones').selectedIndex;

if(nombre == null || nombre.length == 0 || /^[a-zA-Z]*$/) {
alert("Necesitas ingresar tu nombre");
return false;
}
else if() {
  alert();
  return false;
}
else if() {
  alert();
  return false;
}
else if() {
  alert();
  return false;
}
return true;
}
