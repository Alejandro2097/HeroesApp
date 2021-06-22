import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  public parameterValue: string = '';
  constructor(private _router:Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(({id}) => console.log(id))
  }

}
