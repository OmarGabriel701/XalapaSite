

        
        function cargarDirectorio() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    cargarXML(this);
                }
            };
            xhr.open("GET", "directorioparques.xml", true);
            xhr.send();
        }

        
        function cargarXML(xml) {
            var docXML = xml.responseXML;
            var tabla = "<tr><th>Parque</th><th>Horario</th><th>Costos</th></tr>";
            var parques = docXML.getElementsByTagName("PARQUE");
            for (var i = 0; i < parques.length; i++) {
                tabla += "<tr><td>";
                tabla += parques[i].getElementsByTagName("LUGAR")[0].textContent;
                tabla += "</td><td>";
                tabla += parques[i].getElementsByTagName("HORARIO")[0].textContent;
                tabla += "</td><td>";
                tabla += parques[i].getElementsByTagName("COSTOS")[0].textContent;
                tabla += "</td></tr>";

            document.getElementById("demo").innerHTML = tabla;
        }
    }
      
