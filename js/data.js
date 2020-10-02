const USER = "users";
const PRODUCT = "product";
class Data {
    static users =[];
    static products=[];
    static PRODUCTS = [
        {name:"Iphone",price:1000,type:"Smartphone"},
        ["Iphone1",2000,"9.0"],
        ["Iphone2",3000,"9.1"]
    ];
    static USERS = [
        ["Iphone",1000,"10.1"],
        ["Iphone1",2000,"10.1"],
        ["Iphone2",3000,"10.1"]
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