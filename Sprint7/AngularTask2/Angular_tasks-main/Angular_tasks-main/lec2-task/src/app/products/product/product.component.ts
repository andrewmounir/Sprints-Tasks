import { Component, Input } from "@angular/core";
import {Product} from "../models/productModel";

@Component({
    selector: "productItem",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"]})
export class ProductItemComponent {
   @Input() product!: Product;

    largerThan100(product:Product){
      return product.priceProduct>100
    }
}