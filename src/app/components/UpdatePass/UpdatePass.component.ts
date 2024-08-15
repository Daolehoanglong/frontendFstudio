import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-UpdatePass',
  templateUrl: './UpdatePass.component.html',
  styleUrls: ['./UpdatePass.component.css']
})
export class UpdatePassComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  email!: any;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    this.user = new User();
    this.userForm = new FormGroup({
      're_pass': new FormControl('', Validators.required),
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
      if (this.user.pass == this.user.re_pass) {
        this.email = localStorage.getItem('email');
        console.log(this.email);
        alert(this.email);
        let jsonData = this.email.slice(1, -1);
        alert(jsonData);
        this.userService.update(jsonData, this.user).subscribe(data => {
          console.log(data);
          alert("thanh cong")
          this.router.navigate(['/login']);
        });
      }
    }
  }
}
