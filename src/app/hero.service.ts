import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    const heroes = this.http.get<Hero[]>(this.heroesUrl);
    this.log(`fetched heroes from ${this.heroesUrl}`)
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find(h => h.id == id)!;
    // Le ! à la fin renvoie <undefined> s'il n'y a pas de hero
    if (typeof hero == typeof new Observable<Hero>()) {
      this.log(`fetched hero id=${id}`);
    } else {
      this.log(`No hero with id=${id}`);
    }
    return of(hero);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
