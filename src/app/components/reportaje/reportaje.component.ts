import { Component, OnInit } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reportaje',
  templateUrl: './reportaje.component.html'
})
export class ReportajeComponent implements OnInit {
	post = {
		"date_gmt": "",
		"title": {
			"rendered": ""
		},
		"content": {
			"rendered": "",
		},
		"imagen": ''
	}
	loaded = false;
	constructor(private activatedRoute: ActivatedRoute, private wpApiPosts: WpApiPosts) {
		let id = this.activatedRoute.snapshot.params['id'];
		this.getPost(id);
	}

  ngOnInit() {
  }

  getPost(id) {
	this.wpApiPosts.get(id)
	.toPromise()
	.then( response => {
	  let json: any = response.json();
		this.post = json;
		this.loaded = true;
	});
  }
}
