import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/Product.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  // styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  products!: Product
  id: string
  constructor(private productSevice: ProductService, private router: Router, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id']
  }
  ngOnInit() {
    return this.productSevice.get(this.id).subscribe(data => {
      console.log(data);
      this.products = data as Product;
      // this.router.navigate(['/home']);
    });
  }
}
