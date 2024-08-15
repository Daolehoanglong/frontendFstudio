import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';



@Injectable({
  providedIn: 'root'
})
export class Admin implements CanActivate, CanActivateChild {
  constructor(private userService: UserService , private router : Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.userService.isAdmin()
    .then((authenticated: boolean) => {
      console.log('authenticated');
      console.log(authenticated);
      if (authenticated) {
        return true
      }else{
        this.router.navigate(['/']);
        return false;
      }
      
    })
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.canActivate(childRoute,state)
  }



}
