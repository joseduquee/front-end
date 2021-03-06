import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { actorDTO } from '../actor';
import { ActoresService } from '../actores.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-indice-actores',
  templateUrl: './indice-actores.component.html',
  styleUrls: ['./indice-actores.component.css']
})
export class IndiceActoresComponent implements OnInit {

  constructor(private actoresService: ActoresService) { }

  actores: actorDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadResgistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadResgistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.actoresService.obtenerTodos(pagina, cantidadElementosAMostrar).subscribe((respuesta: HttpResponse<actorDTO[]>) => {
      this.actores = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.log(error));
  }

  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadResgistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadResgistrosAMostrar);
  }

  borrar(id: number){
    this.actoresService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros(this.paginaActual, this.cantidadResgistrosAMostrar);
    }, error => console.log(error));
  }

}
