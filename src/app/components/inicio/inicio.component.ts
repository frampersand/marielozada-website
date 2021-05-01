import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language';
import { t } from '../../services/dictionary'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {
  constructor(private languageService: LanguageService) { }
  get lang(): string {
    return this.languageService.lang;
  }

  getWords(word){
    return t(this.lang, word);
  }

  ngOnInit() { 
  }
}
