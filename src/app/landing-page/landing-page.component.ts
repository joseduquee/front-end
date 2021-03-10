import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas/peliculas.service';
import { PeliculaDTO } from '../peliculas/pelicula';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private peliculasService: PeliculasService){}

  ngOnInit(): void {
    
    this.peliculasService.obtenerLandingPage().subscribe(landingPage => {
      this.peliculasEnCine = landingPage.enCines;
      this.peliculasEstreno = landingPage.proximoEstrenos;
    })
    
  }
    peliculasEnCine: PeliculaDTO[]; 
    peliculasEstreno: PeliculaDTO[];

}
