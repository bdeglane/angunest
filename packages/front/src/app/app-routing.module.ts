import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { IsAuthGuard } from './guard/is-auth/is-auth.guard'
import { IsAuthValidGuard } from './guard/is-auth-valid/is-auth-valid.guard'


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [IsAuthGuard],
  canActivateChild: [IsAuthValidGuard],
  children: [],
}]

@NgModule({
  providers: [IsAuthGuard, IsAuthValidGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
