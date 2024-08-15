import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-Category-delete',
  templateUrl: './Category-delete.component.html',
  styleUrls: ['./Category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  category!: Category;
  id!: string
  constructor(private route : ActivatedRoute ,private categoryService: CategoryService, private router: Router) {
    this.id = route.snapshot.params['id']
    console.log(`id is ${this.id}`);
   }

  ngOnInit() {
    this.categoryService.get(this.id).subscribe(data =>{
      this.category = data as Category
    })
  }
  onSubmit(){

      this.categoryService.delete(this.id,this.category).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/category-list']);
      });
    
  }
}
