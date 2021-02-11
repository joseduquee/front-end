import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }

  modelo: cineDTO = {nombre: "Zubiarte", latitud: 43.26778633927155, longitud: -2.940837329438182};

  ngOnInit(): void {
  }

  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
  }

}
