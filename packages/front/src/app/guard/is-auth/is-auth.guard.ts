import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard implements CanActivate {
  constructor(readonly cookie: CookieService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const auth = this.cookie.get('NEST_NANTES_JS_AUTH')

    if (!auth) {
      window.location.href = `${environment.API_URL}/login?to=${environment.FRONT_URL}${state.url}`
      return false
    }

    return true
  }
}
