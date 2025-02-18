import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   user! : User
   isLogin : any
   keyword! : string
  constructor(private router: Router , private userService : UserService) { 
    this.isLogin = this.userService.checkLogin()
  }

  ngOnInit() {

  }

  onSubmit() {
    localStorage.clear()
    location.reload()
  }
  
  onsearch() {
    this.router.navigate(
      ['/product'],
      { queryParams: {keyword: this.keyword}}
    )
  }

}
