import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent as SigninComponent } from './singin/singin.component';
import { SingupComponent as SignupComponent } from './singup/singup.component';

const routes: Routes = [
  { path: 'user',
    
    children:[
      { path: '', 
        redirectTo: 'sign-in',
        pathMatch: 'full'
      },
      {path: 'sign-in', component: SigninComponent},
      {path: 'sign-up', component: SignupComponent}
    ]

  },
  // {path: '' component: }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
