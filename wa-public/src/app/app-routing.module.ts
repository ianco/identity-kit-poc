import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptDisclaimerComponent } from './components/accept-disclaimer/accept-disclaimer.component';
import { RequestTokenComponent } from './components/request-token/request-token.component';
import { KeycloakGuard } from './guards/keycloak.guard';
import { ValidInviteGuard } from './guards/valid-invite.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { SuccessComponent } from './pages/success/success.component';
import { TrackComponent } from './pages/track/track.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent,
  },
  {
    path: 'validate',
    component: HomeComponent,
    canActivate: [ValidInviteGuard],
  },
  {
    path: 'success',
    component: SuccessComponent,
    canActivate: [KeycloakGuard],
  },
  {
    path: 'issue-credential/:id',
    component: TrackComponent,
    canActivate: [KeycloakGuard],
  },
  {
    path: 'accept/:id',
    component: AcceptDisclaimerComponent,
    canActivate: [KeycloakGuard],
  },
  {
    path: 'request/:id',
    component: RequestTokenComponent,
    canActivate: [KeycloakGuard],
  },
  {
    path: 'completed',
    component: CompletedComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
