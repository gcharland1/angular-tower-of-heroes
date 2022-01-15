import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
/*
 * en injectant le service dans root, Angular
 * crée une seule instance du service et
 * l'injecte automatiquement dans les classes
 * qui en font appel.
 */
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  addMessage(message: string): void {
    this.messageService.add(message);
  }
}
