import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/Product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products!: Product[]
  private subscriptions!: Subscription
  constructor(private productSevice: ProductService , private route : ActivatedRoute) { }

  ngOnInit() {
    this.subscriptions = this.route.queryParams
      .subscribe(params =>{
        this.productSevice.keyword(params).subscribe(data =>{
          this.products = data as Product[];
        })
      })

  } 

}
