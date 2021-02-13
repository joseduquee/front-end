import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  @Input()
  contenidoMarkdown = '';

  @Input()
  placeHolderTextarea: string = 'Texto';
  
  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>(); 
  
  constructor() { }

  ngOnInit(): void {
  }

  // inputTextArea(e) {
  //   let texto = e.target.value;
  //   this.contenidoMarkdown = texto;
  //   this.changeMarkdown.emit(texto);
  // }

  // inputTextArea(e) {
  //   let texto = e.target.value;
  //   this.contenidoMarkdown = texto;
  //   this.changeMarkdown.emit(texto);
  // }

  onChange(e) {
  this.changeMarkdown.emit(e.target.value);
  }

}
