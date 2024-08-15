import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/Product.service';
Product
ProductService

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product!: Product;
  id!: string
  constructor(private route : ActivatedRoute ,private ProductService: ProductService, private router: Router) {
    this.id = route.snapshot.params['id']
    console.log(`id is ${this.id}`);
   }


  ngOnInit() {
    this.ProductService.get(this.id).subscribe(data =>{
      this.product = data as Product
    })
  }
  onSubmit(){

      this.ProductService.delete(this.id,this.product).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/product-list']);
      });
    
  }
}
