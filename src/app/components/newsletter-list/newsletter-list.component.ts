import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-newsletter-list',
  templateUrl: './newsletter-list.component.html',
  styleUrls: ['./newsletter-list.component.scss']
})
export class NewsletterListComponent implements OnInit {
  newsletterList;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPreviousNewsletters().subscribe(result => {
      this.newsletterList = result.lista;
    });;
  }

  getPreviousNewsletters(): any {
    return this.http.get('http://marielozada.com/mailchimp-info/');
  }
}
