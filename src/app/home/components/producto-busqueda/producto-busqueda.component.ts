import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-producto-busqueda',
  templateUrl: './producto-busqueda.component.html',
  styleUrls: ['./producto-busqueda.component.css']
})
export class ProductoBusquedaComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe(valor =>{
      this.onDebounce.emit(valor);
    })
  }

  buscar(){
      this.onEnter.emit(this.termino);
  }

  teclaPrecionada(){
      this.debouncer.next(this.termino);
  }
}
