import { Component } from '@angular/core';
import { Product } from './models/productModel'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{
  featured: number = 0;
  availableCount: number = 0;
  all: number = 0;
  filter = "All"
  products: Product[] = [];

  constructor(private data: DataService){
    this.products = this.data.getAllProducts();
    this.setCounts();
  }

  getProducts(): Product[] {
    return this.products.filter(p => this.shouldBeViewed(p));
  }

  private setCounts():void{
    this.products.forEach((product)=>{
      if (product.isFeatured) this.featured++;
      if (product.isAvailable) this.availableCount++;
      this.all++;
    });
  }

  onFilterChanged(selectedFilter:string){
    this.filter = selectedFilter;
  }

  shouldBeViewed(product:Product):boolean{
    if(this.filter == "All") return true;
    if(this.filter == "Available" && product.isAvailable) return true;
    if(this.filter == "Featured" && product.isFeatured) return true;
    return false;
  }
}