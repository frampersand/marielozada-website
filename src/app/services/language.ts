import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
    lang: string = 'es';
    getLang: Subject<string> = new Subject<string>();
    constructor()  {
        this.getLang.subscribe((value) => {
            this.lang = value
        });
    }
    update(l) {
        this.getLang.next(l);
    }
}
