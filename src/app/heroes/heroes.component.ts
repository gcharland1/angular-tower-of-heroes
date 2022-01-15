import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'

// L'équivalent de Implements / Override
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  // Empty list que HeroService va remplirn dans ngOnInit();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    if (this.selectedHero == hero) {
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
  }
}
