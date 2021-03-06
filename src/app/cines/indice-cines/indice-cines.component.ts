import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { generoDTO } from 'src/app/generos/genero';
import { cineDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-indice-cines',
  templateUrl: './indice-cines.component.html',
  styleUrls: ['./indice-cines.component.css'],
})
export class IndiceCinesComponent implements OnInit {
  constructor(private cinesService: CinesService) {}

  cines: cineDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadResgistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadResgistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar) {
    this.cinesService.obtenerTodos(pagina, cantidadElementosAMostrar).subscribe(
      (respuesta: HttpResponse<cineDTO[]>) => {
        this.cines = respuesta.body;
        this.cantidadTotalRegistros = respuesta.headers.get(
          'cantidadTotalRegistros'
        );
      },
      (error) => console.log(error)
    );
  }

  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadResgistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadResgistrosAMostrar);
  }

  borrar(id: number) {
    this.cinesService.borrar(id).subscribe(
      () => {
        this.cargarRegistros(
          this.paginaActual,
          this.cantidadResgistrosAMostrar
        );
      },
      (error) => console.log(error)
    );
  }
}
