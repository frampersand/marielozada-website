import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { WordpressService } from './services/wordpress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //posts$: Observable<any[]>;

  constructor(private wp: WordpressService, private activatedRoute: ActivatedRoute) {
    //this.posts$ = this.wp.getPosts();
  }
}
