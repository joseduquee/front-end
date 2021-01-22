import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
   
      
      this.peliculasEnCine = [{
        titulo: 'El heroe',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjA2OTY1MjI4OV5BMl5BanBnXkFtZTgwNzYwMjk5MTI@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        titulo: 'Spider-man',
        fechaLanzamiento: new Date('2020-12-12'),
        precio: 399.22,
        poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date(),
        precio: 2300.99,
        poster:'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }
    ];
    
  }
    
    
    peliculasEnCine;
    
    
    peliculasEstreno = [{
      titulo: 'Inception',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      titulo: 'The reader',
      fechaLanzamiento: new Date('2020-12-12'),
      precio: 399.22,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTM0NDQxNjA0N15BMl5BanBnXkFtZTcwNDUwMzcwMg@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      titulo: 'The last day',
      fechaLanzamiento: new Date('2020-12-12'),
      precio: 399.32,
      poster: 'https://m.media-amazon.com/images/M/MV5BODA1MTE2OTIyM15BMl5BanBnXkFtZTgwMTA1MTE0MjE@._V1_UY268_CR3,0,182,268_AL_.jpg'
    }
  ];

}
