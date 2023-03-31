import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  nombre : string = "Juan Daniel Moreno Cruz"

  funcionNombre(){
    this.nombre = this.nombre + " Rifa"
  }
}
