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
            "id": 1000 + i + 1,
            "categoryId": `Category ${randomCategory}`,
            "name": `Product ${i + 1}`,
            "imagePath": `https://picsum.photos/400?image=${Math.floor(Math.random() * 1000)}`,
            "stockQuantity": !!randomStock,
            "price": randomPrice.toFixed(3)
        }
    }
    return a;
  }

}
