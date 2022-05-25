const TITLE = "Home";


function selectElement(name){
    return document.querySelector(name);
}
function loadHtml(id, filename){
    let xhttp;
    let element = selectElement(id);
    let file = filename;
    if(file){
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
                if (this.status == 200) { element.innerHTML = this.responseText; }
                else if (this.statis == 404) { element.innerHTML = "<p>Page not found.</p>"; }
            }
        }
        xhttp.open("GET", `templates/${file}`, true);
        xhttp.send();
        return;
    }
}




(function(){
    selectElement("title").innerHTML = TITLE;
    let body  = selectElement("body")
    let head  = selectElement("head")

})()

