import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(readonly http: HttpClient) {
  }

  verifyToken(token) {
    return this.http.post(`${environment.API_URL}/login/verify`, { token })
  }
}
