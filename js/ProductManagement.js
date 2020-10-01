class ProductManagement {
    constructor(name) {
        this.name = name;
        this.products = [];
    }

    addProduct(product){
        this.products.push(product);
    }

    removeProduct(index){
        this.products.splice(index,1);
    }

    getHtml(){
        let str = `<table id="products">
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                          
                        </tr>
                   </table>`;
        for (let i = 0; i < this.products.length; i++) {
            let product = this.products[i].getHtml();
            str += product;
        }

        return str;
    }
}