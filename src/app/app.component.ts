import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniCalculadora';
  // Creamos las Propiedades
  numero_01:number = 0;
  numero_02:number = 0;
  resultado:string = "0";

  // Creamos métodos de la calculadora:
  //  -Operación suma por funcion
  sumar():void {
    this.resultado = (this.numero_01 + this.numero_02).toString();
  }
  restar():void {
    this.resultado = (this.numero_01 - this.numero_02).toString();
  }
  multiplicar():void{
    this.resultado = (this.numero_01 * this.numero_02).toString();
  }
  dividir():void{
    if(this.numero_02 != 0){
      this.resultado = (this.numero_01 / this.numero_02).toString();
    }else{
      this.resultado = "ERROR! Dividir por 0";
    }
  }
}
