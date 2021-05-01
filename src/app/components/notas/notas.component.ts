import { Component, OnInit } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html'
})
export class NotasComponent implements OnInit {
	posts = [];
	loaded = false;
	constructor(private wpApiPosts: WpApiPosts) {
		this.getPosts();
	}
	
	ngOnInit() {
	}
	
	getPosts() {
		this.wpApiPosts.getList({'search' : 'categories=4'})
		.toPromise()
		.then( response => {
			let json: any = response.json();
			this.posts = json;
			this.loaded = true;
		});
	}

}
