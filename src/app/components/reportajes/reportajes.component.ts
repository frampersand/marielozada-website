import { Component, OnInit } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-reportajes',
  templateUrl: './reportajes.component.html'
})
export class ReportajesComponent implements OnInit {
  reportajes = [];
  showing = [];
  loaded = false;

  get lang(): string {
    return this.languageService.lang;
  }

  constructor(private wpApiPosts: WpApiPosts, private languageService: LanguageService) {
    this.getReportajes("categories=4");
    this.languageService.getLang.subscribe(value => { this.filterResults() });
  }

  ngOnInit() {
  }
  
  filterResults() {
  this.showing = this.lang == 'es' ? 
    this.reportajes.filter(reportaje => reportaje.categories[0] == '4') :
    this.reportajes.filter(reportaje => reportaje.categories[0] == '7');
  }


  getReportajes(categories) {
    this.loaded = false;
    this.wpApiPosts.getList({ 'search': 'categories=4,7&per_page=100' })
      .toPromise()
      .then(response => {
        let json: any = response.json();
        this.reportajes = json;
        this.filterResults();
        this.loaded = true;
      });
  }
}
