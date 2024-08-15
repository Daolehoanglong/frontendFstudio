import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/Product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: Product[]
  constructor(private productSevice: ProductService) { }

  ngOnInit() {
    return this.productSevice.getAll().subscribe(data =>{
      this.products = data as Product[];
    })
  }

}

