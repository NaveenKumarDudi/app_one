import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { ICategory } from 'src/app/models/Category';


export interface IBox {
  label?: string;
  value?: string;
  checked?: boolean;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: any = [];
  activeProducts: any = [];
  categories: ICategory [];
  categoryCheckBox: IBox[];
  priceClicked: boolean = false;
  newProduct: any;
  visible = false;


  constructor(
    private shopService: ShopService
  ) { }

  ngOnInit(): void {
    this.shopService.fetchCategories();
    this.products = this.shopService.generateProducts();
    this.activeProducts = this.products;

    this.shopService.getCategoriesFromState().subscribe(
      (data) => {
        this.categoryCheckBox = [];
        if (data) {
          this.categories = data;
          data.forEach(
            (item) => {
              this.categoryCheckBox.push({
                label: item.categoryName,
                value: item._id
              });
            }
          )
        }
      }
    );
  }


  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  changeProducts() {
    this.activeProducts = [];
    this.categoryCheckBox.forEach(
      (item) => {
        if (item.checked) {
          this.newProduct = this.products.filter(e => e.categoryId === item.value)
          this.activeProducts.push(...this.newProduct);
        }
      }
    );

   if (this.categoryCheckBox.filter(e => e.checked === true).length === 0) {
     this.activeProducts = this.products;
   }
  }

  sortByPrice() {
    if (this.priceClicked) {
      this.activeProducts.sort(this.ascSorter('price'));
    } else {
      this.activeProducts.sort(this.descSorter('price'));
    }
    this.priceClicked = !this.priceClicked;
  }

 ascSorter(property: any) {
		return function (a, b) {
			if (a[property] > b[property])
				return 1;
			else if (a[property] < b[property])
				return -1;
			return 0;
		}
	}

	// Sort decending
	descSorter(property: any) {
		return function (a, b) {
			if (a[property] < b[property])
				return 1;
			else if (a[property] > b[property])
				return -1;
			return 0;
		}
	}

}
