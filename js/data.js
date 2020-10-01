const USER = "users";
const PRODUCT = "product";
class Data {
    static users =[];
    static products=[];
    static PRODUCTS = [
        {name:"Iphone",price:1000,color:"Black",desc:"Apple"},
        ["Iphone1",2000,"Black","Apple2"],
        ["Iphone2",3000,"Black","Apple3"]
    ];
    static USERS = [
        ["Iphone",1000,"Black","Apple"],
        ["Iphone1",2000,"Black","Apple2"],
        ["Iphone2",3000,"Black","Apple3"]
    ];

    static saveData(data,name){
        localStorage.setItem(name,JSON.stringify(data));
    }
    static loadData(name){
        if(!localStorage.hasOwnProperty(name))return;
        let data = JSON.parse(localStorage.getItem(name));
        switch (name) {
            case USER:
                for (let i = 0; i < data.length; i++) {
                    this.users.push(data[i]);
                }
                break;
            case PRODUCT:
                for (let i = 0; i < data.length; i++) {
                    this.products.push(data[i]);
                }
                break;
        }
    }
}