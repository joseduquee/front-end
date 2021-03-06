import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generoCreacionDTO, generoDTO } from '../genero';
import { GenerosService } from '../generos.service';
import { parsearErroresAPI } from '../../utilidades/utilidades';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router, 
    private generosService: GenerosService, 
    private activatedRoute: ActivatedRoute) { }

  modelo: generoDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.generosService.ObtenerPorId(params.id)
      .subscribe(genero => {
        this.modelo = genero;
      }, () => this.router.navigate(['/generos']));

    });
  }

  guardarCambios(genero: generoCreacionDTO){

    this.generosService.editar(this.modelo.id, genero)
    .subscribe(() => {
      this.router.navigate(['/generos']);  //con esto navega a la pantalla que se espefica
    }, error => this.errores = parsearErroresAPI(error));
  }

}
