import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivechildService } from './activechild.service';
import { ChildGuard } from './child.guard';
import { DeactivateGuard } from './deactivate.guard';
import { LoadGuard } from './load.guard';

const routes: Routes = [

  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivateChild: [ChildGuard],
    children: [
      { path: 'post', component: PostComponent }
    ]
  },
  {
    path: 'secret',
    component: PostComponent,
    canLoad: [LoadGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
