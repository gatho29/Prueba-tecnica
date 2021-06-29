import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  @Input() titulo: any;
  @Input() descripcion: any;
  @Input() icono: any;

  constructor() { }

  ngOnInit(): void {
  }

}
