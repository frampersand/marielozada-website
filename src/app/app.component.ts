import { Component } from '@angular/core';
import { LanguageService } from './services/language';
import { t } from './services/dictionary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get lang(): string {
    return this.languageService.lang;
  }

  constructor(private languageService: LanguageService) {
  }
  
  getWords(word){
    return t(this.lang, word);
  }

  updateLang(lang){ 
    this.languageService.update(lang);
  }
}
