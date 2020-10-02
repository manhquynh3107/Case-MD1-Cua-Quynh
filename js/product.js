class Product {
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    constructor(name,price,type) {
        this._name = name;
        this._price = price;
        this._type = type;
           }

    edit(name,price,type){
        this.name = name;
        this.price = price;
        this.type = type;
           }
    getHtml(){
        let html = `<td>${this.name}</td>
                    <td>${this.price}</td>
                    <td>${this.type}</td>`;
        return html;
    }
}