import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  constructor(private router: Router, private generosService: GenerosService) { } //implememtacion del servicio usar tag ys e importa automaticamente

 errores: string[] = [];

  guardarCambios(genero: generoCreacionDTO){

    this.generosService.crear(genero).subscribe(() => {
      this.router.navigate(['/generos']);  //con esto navega a la pantalla que se espefica

    }, (error) => this.errores = parsearErroresAPI(error)
    );
  }
}
