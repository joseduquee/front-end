import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { cineCreacionDTO, cineDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor(private router: Router, 
    private cinesService: CinesService, 
    private activatedRoute: ActivatedRoute) { }

  modelo: cineDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.cinesService.ObtenerPorId(params.id)
      .subscribe(cine => {
        this.modelo = cine;
      }, () => this.router.navigate(['/cines']));

    });
  }

  guardarCambios(cine: cineCreacionDTO){

    this.cinesService.editar(this.modelo.id, cine)
    .subscribe(() => {
      this.router.navigate(['/cines']);  //con esto navega a la pantalla que se espefica
    }, error => this.errores = parsearErroresAPI(error));
  }
}