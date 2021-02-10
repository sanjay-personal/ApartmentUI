import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {

  constructor(private authService:AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      console.log("nexttt",next)
      console.log("state",state)
      console.log("checkkkk",this.authService.getLoggedIn())


      let security = this.authService.getLoggedIn()
   
      if(!security) {
        this.router.navigate(["login"])
        return
      }
   
      return security;





  }
  
}
