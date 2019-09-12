import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { AuthService } from './services/auth/auth.service'
import { HeroesModule } from './heroes/heroes.module'

import { reducer as heroesReducer } from './store/reducers/heroes.reducer'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      heroes: heroesReducer,
    }),
    EffectsModule.forRoot([]),
    HeroesModule,
  ],
  providers: [
    CookieService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
