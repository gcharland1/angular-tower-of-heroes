import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find(h => h.id == id)!;
    // Le ! à la fin renvoie <undefined> s'il n'y a pas de hero
    if (typeof hero == typeof new Observable<Hero>()) {
      this.messageService.add(`HeroService: fetched hero id=${id}`);
    } else {
      this.messageService.add(`No hero with id=${id}`);
    }
    return of(hero);
  }

  addMessage(message: string): void {
    this.messageService.add(message);
  }
}
