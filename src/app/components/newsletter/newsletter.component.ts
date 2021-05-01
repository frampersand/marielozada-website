import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language';
import { t } from '../../services/dictionary';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  currentTab = "subscribe";
  get lang(): string {
    return this.languageService.lang;
  }
  constructor(private languageService: LanguageService) { }

  getWords(word){
    return t(this.lang, word);
  }

  tabChange(tab){
    this.currentTab = tab;
  }
}
