import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }

  generateProducts() {
    let a = new Array(20);
    for (let i = 0; i < a.length; i++) {
        const minCat = 5;
        const maxCat = 100;
        const minPrice = 100;
        const maxPrice = 5000;
        const randomCategory = Math.floor(Math.random() * (+maxCat - +minCat)) + +minCat;
        const randomStock = Math.floor((Math.random() * 1000) % 2);
        const randomPrice = (Math.random() * (+maxPrice - +minPrice)) + +minPrice;
        a[i] = {
            "productId": 1000 + i + 1,
            "productCategory": `Category ${randomCategory}`,
            "productName": `Product ${i + 1}`,
            "productImage": `https://picsum.photos/400?image=${Math.floor(Math.random() * 1000)}`,
            "productStock": !!randomStock,
            "productPrice": randomPrice.toFixed(3)
        }
    }
    return a;
  }

}
