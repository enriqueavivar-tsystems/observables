import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content-component',
  templateUrl: './main-content-component.component.html',
  styleUrls: ['./main-content-component.component.css']
})
export class MainContentComponentComponent implements OnInit {

  ejemploCreated = false;
  ejemploCreationStatus: string = '';
  ejemploName : string = '';

  ejemplos = ['ejemplo1', 'ejemplo2', 'ejemplo3']

  constructor() { }

  ngOnInit(): void {
  }

  onCreateEjemplo(){
    this.ejemplos.push(this.ejemploName);
    this.ejemploCreated = true;
  }

  onUpdateEjemploName(event: Event){
    this.ejemploName = (<HTMLInputElement>event.target).value;
  }

}
