import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;
  /*
   * Permet d'accepter [hero]="selectedHero" dans le HTML comme argument
   */
  constructor() { }

  ngOnInit(): void {
  }


}
