export class Product {
    constructor(
      public nameProduct: string = "",
      public imageProduct: string = "../../../assets/product-1.jpg",
      public priceProduct: number = 0,
      public isAvailable: boolean = false,
      public isFeatured: boolean = false
    ) {}
  }
  