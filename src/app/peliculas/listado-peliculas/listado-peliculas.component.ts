import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  @Input()
  peliculas: PeliculaDTO[];

  ngOnInit(): void {
    
  }

  eliminar(indicePelicula: number): void {  //aqui nombre del metodo luego en () nombre del parametro y tipo y luego : y tipo de dato que devuelve
    this.peliculas.splice(indicePelicula, 1); //metodo que elimina
  }

}
