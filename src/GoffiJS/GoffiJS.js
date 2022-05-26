class config extends HTMLElement{
    connectedCallback(){
        for(const attr of this.attributes){
            switch(attr.name){
                case ("_js"):
                    this.innerHTML += `<script src="${attr.nodeValue}"></script>`;
                    break;
                case("_title"):
                    this.innerHTML += `<title> ${attr.nodeValue}</title>`;
                    break;
                case("_css"):
                    this.innerHTML += `<link rel="stylesheet" href="${attr.nodeValue}"/>`;
                    break;
                case("_name"):
                    this.innerHTML += `<meta name="${attr.nodeValue}"/>`;
                    break;
                case("_charset"):
                    this.innerHTML += `<meta charset="${attr.nodeValue}"/>`;
                    break;
                case("_content"):
                    this.innerHTML += `<meta content="${attr.nodeValue}"/>`;
                    break;
            }
        }
    }
};
(async () => {
    const TEMPLATES = [
        config
    ];
    TEMPLATES.forEach( tmp => {
        customElements.define(`g-${tmp.prototype.constructor.name}`, tmp);
    });
    
})()
