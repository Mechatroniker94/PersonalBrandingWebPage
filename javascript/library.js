// Comentario de encabezado: Descripción del archivo, autor, fecha, etc.

// Declaración de variables globales si es necesario


// Definición de funciones

function redirect(link) {
    window.open(link, '_blank');
}

function displayText(id, text)
{
    console.log(text);
    var elementDestination = document.getElementById(id);
    elementDestination.innerHTML = text;
}

function loadPage(pagename) {
    dinamicContent = document.getElementById("dinamic-content");
    var link = "";
    switch (pagename) {
        case "emb":
            link = "./html/embedded/embeddedProjects.html";
            break;
        case "test":
            link = "./html/embedded/embeddedProjects.html";
            break;
        default:
            link = "./html/home.html";
            break;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            dinamicContent.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}