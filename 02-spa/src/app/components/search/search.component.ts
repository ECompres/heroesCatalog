import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroe: any[]=[];
  termino:string;
  constructor(private _heroeService: HeroesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroeService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
      console.log(this.heroe)
    })
  }

}
