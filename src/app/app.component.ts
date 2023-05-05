import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { ActivechildService } from './activechild.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoProject';
}
