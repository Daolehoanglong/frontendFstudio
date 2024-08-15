import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/Product.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  ProForm: FormGroup;
  Product: Product;
  id: string
  constructor(private productSevice: ProductService, private router: Router ,private route : ActivatedRoute) { 
    this.id = route.snapshot.params['id']
    console.log(`id is ${this.id}`);
    this.Product = new Product();
    this.ProForm = new FormGroup({
      'id':new FormControl(null,Validators.required),
      'name': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'price': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required)
  })
  }
  ngOnInit() {
  }


  onSubmit(){
    if(this.ProForm.invalid) {
      alert('Vui lòng nhập hợp lệ');
      return console.log('Không hợp lệ');
    } else {
      this.productSevice.update(this.id,this.Product).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/product-list']);
      });
    }
  }
}
