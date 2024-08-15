import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/Product.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  ProForm: FormGroup;
  Product: Product;

  constructor(private productSevice: ProductService, private router: Router) {
    this.Product = new Product();
    this.ProForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'price': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required)
    });
}
ngOnInit() {
}

onSubmit(){
  if(this.ProForm.invalid) {
    alert('Vui lòng nhập hợp lệ');
    return console.log('Không hợp lệ');
  } else {
    this.productSevice.save(this.Product).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/product-list']);
    });
  }
}
}
