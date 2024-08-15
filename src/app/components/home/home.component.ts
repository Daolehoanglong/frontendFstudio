import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/Product.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products!: Product[]
  constructor(private productSevice: ProductService) { }

  ngOnInit() {
    return this.productSevice.getAll().subscribe(data =>{
      this.products = data as Product[];
    })
  }


}
