// Contains the Logic for Fetching ,
// Adding, Sorting, Searching,
 // Deletion , Updation

import Product from '../models/product.js';
import makeNetworkCall from './api-client.js';

const productOperations = {
    products:[],
    
    async loadProducts(){
        const pizzas = await makeNetworkCall();
        const pizzaArray = pizzas['Vegetarian'];
        const productsArray = pizzaArray.map(pizza=>{
            const currentPizza = new Product(pizza.id, pizza.name,
                 pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
                return currentPizza;
                })
                this.products=productsArray;
                return productsArray;  // Wrap in Promise
            },
    searchProducts(pizzaID){
        const product = this.products.find(currentproduct=>currentproduct.id==pizzaID);
        product.count++;
        if(product.count%2==0){
            product.isaddedincard=false;
            
        }
        else{
            product.isaddedincard=true;
        }
        return product;
        
    },
    finacart(){
        const finalproducts=this.products.filter(product=>product.isaddedincard);
        return finalproducts;
    }

}
export default productOperations;
