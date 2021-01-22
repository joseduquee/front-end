import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { } //implememtacion del servicio usar tag ys e importa automaticamente

  form: FormGroup; //este form es una propiedad

  ngOnInit(): void {
    this.form = this.formBuilder.group ({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(4)]
      }] //este sera un valor por defecto
    });
  }

  guardarCambios(){

    this.router.navigate(['/generos']);  //con esto navega a la pantalla que se espefica
  }

  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');
    if(campo.hasError('required')) {
      return 'El campo nombre es requerido';
    }

    if(campo.hasError('minlength')) {
      return 'La longitud minima es de 4 caracteres';
    }

    // if(campo.hasError('primeraLetraMayuscula')) {
    //   return campo.getError('primeraLetraMayuscula').mensaje
    // }

    return '';
  }

}
