import { Component, OnInit } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
	posts = [];
	loaded = false;
	constructor(private wpApiPosts: WpApiPosts) {
		this.getPosts();
	}
	
	ngOnInit() {
	}
	
	getPosts() {
		this.wpApiPosts.getList({'search' : 'categories=5'})
		.toPromise()
		.then( response => {
			let json: any = response.json();
			this.posts = json;
			this.loaded = true;
		});
	}
}
