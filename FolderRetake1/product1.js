//class creation
class Product{
    constructor(id, name){
        this.productId=id
        this.productName=name
    }
    getProduct(){
        return `Id:${this.productId}, Name:${this.productName}`
    }
}
//object creation
const p1=new Product(1,'book')
const p2=new Product(2,'pen')
console.log(p1)//Product { productId: 1, productName: 'book' }
console.log(p2)//Product { productId: 2, productName: 'pen' }
console.log(p1.getProduct()) //Id:1, Name:book
