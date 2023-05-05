import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivechildService } from './activechild.service';
import { ChildGuard } from './child.guard';
import { DeactivateGuard } from './deactivate.guard';
import { LoadGuard } from './load.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
