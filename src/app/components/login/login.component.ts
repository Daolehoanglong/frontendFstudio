import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
UserService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    this.user = new User();
    this.userForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'pass': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }


  onSubmit() {
    if (this.userForm.invalid) {
      alert('Vui lòng nhập hợp lệ');
      return console.log('Không hợp lệ');
    } else {
      this.userService.checkpass(this.user).subscribe(data => {
        console.log(data);
        
        console.log(data.token);
        if (data.user.isAdmin == 0){
          this.router.navigate(['/home']);
        }else{
          // this.user.isAdmin = 1
          this.router.navigate(['/category-list']);
        }
        const isAdmin = JSON.stringify(data.user.isAdmin);
        localStorage.setItem('isAdmin', isAdmin)
        const login = JSON.stringify(this.user.email);
        localStorage.setItem('login', login);
        const jsonString = JSON.stringify(data.token);
        localStorage.setItem('token', jsonString);
        localStorage.setItem('re_token', jsonString);
        // localStorage.setItem('token', 'some_token_value');

      });
    }
  }
}
