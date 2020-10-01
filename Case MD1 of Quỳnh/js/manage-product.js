class ProductManage {
    constructor(name) {
        this.name = name;
        this.products = [];
        this.data = Data.PRODUCTS;
    }

    init(){
        Data.loadData(PRODUCT);
        this.data = Data.products;
        console.log(this.data);
        for (let i = 0; i < this.data.length; i++) {
            let product = new Product(this.data[i]._name,this.data[i]._price,this.data[i]._color,this.data[i]._desc);
            this.addProduct(product);
        }
    }

    addProduct(product){
        this.products.push(product);
    }
    editProduct(product,name,price,color,desc){
        product.edit(name,price,color,desc);
    }
    deleteProduct(index){
        this.products.splice(index,1);
    }
    getHtml(){
        let table = `<table border="0px solid black" cellspacing="0" class="table  table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Color</th>
                        </tr>`;
        for (let i = 0; i < this.products.length; i++) {
            table += "<tr>"+this.products[i].getHtml() + this.getAction(i)+'</tr>';
        }
        table+=`</table>`;
        return table;
    }

    getAction(index){
        let action = `<td><button class="btn btn-warning btn-md" onclick="edit(${index})">Edit</button></td>
                        <td><button class="btn btn-danger btn-md" onclick="del(${index})">Delete</button></td>`;
        return action;
    }

    getProductByIndex(index){
        return this.products[index];
    }
}
