import { Component, OnInit } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';

@Component({
  selector: 'app-reportajes',
  templateUrl: './reportajes.component.html'
})
export class ReportajesComponent implements OnInit {
  reportajes = [];
  loaded = false;
  language = '';
  constructor(private wpApiPosts: WpApiPosts) {
    this.getReportajes("categories=4");
  }

  ngOnInit() {
  }

  getReportajes(categories) {
    this.language = categories == "categories=4" ? "es" : "en";
    this.loaded = false;
    this.wpApiPosts.getList({ 'search': categories })
      .toPromise()
      .then(response => {
        let json: any = response.json();
        this.reportajes = json;
        this.loaded = true;
      });
  }
}
