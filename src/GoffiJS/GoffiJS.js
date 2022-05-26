class teste extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            This will be generated in a g-teste tag
        `;
    }
};
(async () => {
    const TEMPLATES = [
        teste
    ];
    TEMPLATES.forEach( tmp => {
        customElements.define(`g-${tmp.prototype.constructor.name}`, tmp);
    });
    
})()
