import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejemplo-component',
  templateUrl: './ejemplo-component.component.html',
  styleUrls: ['./ejemplo-component.component.css']
})
export class EjemploComponentComponent implements OnInit {

  @Input('ejemploName') ejemplo : string;
  ejemploId : number = 10;
  ejemploName : string = "Nombre";
  ejemploStatus : string = "Good";

  constructor() {
    this.ejemploName = "Ejemplo de prueba"
    this.ejemploStatus = Math.random() > 0.5 ? 'Good' : 'Bad';
  }

  getEjemploName(){
    return this.ejemploName;
  }

  ngOnInit(): void {
  }

}
