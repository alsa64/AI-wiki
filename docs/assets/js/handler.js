var xhttp = new function() {
    if (!window.XMLHttpRequest) return new ActiveXObject("Microsoft.XMLHTTP");
    return new XMLHttpRequest();
}

const markedOpt = {
    pedantic: false,
    gfm: true,
    breaks: true,
    smartLists: true,
    smartypants: false,
    xhtml: false
}

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = marked(xhttp.responseText, markedOpt);
    }
};

xhttp.open("GET", "wikimd/Model-Database.md", true);
xhttp.send();