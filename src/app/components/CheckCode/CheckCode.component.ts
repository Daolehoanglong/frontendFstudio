import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-CheckCode',
  templateUrl: './CheckCode.component.html',
  styleUrls: ['./CheckCode.component.css']
})
export class CheckCodeComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  code! : any;
  numberValue! : string;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.user = new User();
    this.userForm = new FormGroup({
      'code': new FormControl('', Validators.required),
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    if (this.userForm.invalid) {
      alert('Vui lòng nhập hợp lệ');
      return console.log('Không hợp lệ');
    } else {
      this.code = localStorage.getItem('code')
      this.numberValue = `"${this.user.email}"`;
      // console.log(this.numberValue);
      // console.log(this.code);
      // console.log(this.user.email);
        if(this.numberValue ==  this.code ) {
          alert("thanh cong")
          this.router.navigate(['/update']);
        }else{
          alert("nhap sai ma")
        }
    }
  }
}
