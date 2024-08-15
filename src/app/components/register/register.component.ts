import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    this.user = new User();
    this.registerForm = new FormGroup({
      'fullname': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'pass': new FormControl('', Validators.required)
    });
  }


  ngOnInit() {
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Vui lòng nhập hợp lệ');
      return console.log('Không hợp lệ');
    } else {
      this.userService.register(this.user).subscribe(data => {
        console.log(data);
        alert("đăng ký thành công")
        this.router.navigate(['/login']);
      });
    }
  }
}
