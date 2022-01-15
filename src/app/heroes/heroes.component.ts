import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

// L'équivalent de Implements / Override
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
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
