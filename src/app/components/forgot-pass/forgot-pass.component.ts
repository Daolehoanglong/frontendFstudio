import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  email! : string
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.user = new User();
    this.userForm = new FormGroup({
      'email': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.userForm.invalid) {
      alert('Vui lòng nhập hợp lệ');
      return console.log('Không hợp lệ');
    } else {
      this.userService.sendmail(this.user).subscribe(data => {
        // alert(this.user.email)
        this.email = JSON.stringify(this.user.email);
        localStorage.setItem('email', this.email);
        // alert(this.email)
        console.log(data);
        const jsonString = JSON.stringify(data);
        localStorage.setItem('code', jsonString);
        alert("thanh cong");
        this.router.navigate(['/check']);
      });
    }
  }
}