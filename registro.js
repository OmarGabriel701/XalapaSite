function enviarPeticion() {
    var xhr = new XMLHttpRequest();
   
    var nombre = document.getElementById("nombre").value;
    var usuario = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    var q = "nombre="+nombre+"&"+"user="+usuario+"&"+"email="+email+"&"+"pass="+pass;
    
    xhr.open("POST", "http://127.0.0.1/cgi-bin/registro.pl", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    xhr.send(q);
}