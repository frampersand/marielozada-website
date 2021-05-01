import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language';
import { t } from '../../services/dictionary';

@Component({
  selector: 'app-newsletter-subscribe',
  templateUrl: './newsletter-subscribe.component.html',
  styleUrls: ['./newsletter-subscribe.component.scss']
})
export class NewsletterSubscribeComponent {
  get lang(): string {
    return this.languageService.lang;
  }
  constructor(private languageService: LanguageService) { }

  getWords(word){
    return t(this.lang, word);
  }
}
