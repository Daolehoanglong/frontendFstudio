import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/service/category.service';
@Component({
  selector: 'app-Category-list',
  templateUrl: './Category-list.component.html',
  styleUrls: ['./Category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories!: Category[];
  constructor(private categorySevice: CategoryService) { }

  ngOnInit() {
    return this.categorySevice.getAll().subscribe(data =>{
      this.categories = data as Category[]
    })
  }

}
