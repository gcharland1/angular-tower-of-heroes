import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  searchResults: Hero[] = [];

  constructor(private heroService: HeroService) {
    this.getHeroes();
  }

  ngOnInit(): void {
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
}
