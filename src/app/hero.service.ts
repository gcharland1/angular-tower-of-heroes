import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

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

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    /* Plutôt que de lire directement la liste HEROES
     * dans mock-heroes.ts, il "observe" le lien qu'on
     * lui fournit. Ça va être facilement traduisible
     * quand nos héroes vont être enregistrés dans une
     * DB sur un serveur externe.
     */
    const heroes = of(HEROES);
    return heroes;
  }
}
