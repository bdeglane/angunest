import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'
import { AuthService } from '../../services/auth/auth.service'

@Injectable({
  providedIn: 'root',
})
export class IsAuthValidGuard implements CanActivate {
  constructor(readonly cookie: CookieService, readonly authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const auth = this.cookie.get('NEST_NANTES_JS_AUTH')

    return this.authService.verifyToken(auth) as Observable<boolean>
  }
}
