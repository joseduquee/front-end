import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { generoCreacionDTO } from '../genero';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup; //este form es una propiedad

  @Input()
  modelo: generoCreacionDTO;

  @Output()
  submit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group ({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(4), primeraLetraMayuscula()]
      }] //este sera un valor por defecto
    });

    if(this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios() {
    this.submit.emit(this.form.value);
  }

  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');
    if(campo.hasError('required')) {
      return 'El campo nombre es requerido';
    }

    if(campo.hasError('minlength')) {
      return 'La longitud minima es de 4 caracteres';
    }

    if(campo.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje
    }

    return '';
  }

}