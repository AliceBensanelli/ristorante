import { Component } from '@angular/core';
import { TavoliService } from '../service/tavoli.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  numero = '';
  posti = 0;
  rotondo = false;

  aggiungi() {
   if (!this.tavoliservice.aggiungiTavolo(this.numero, this.posti, this.rotondo)) {
    alert(`Attenzione non è stato possibile inserire il tavolo in quanto il numero ${this.numero} è già stato inserito`)
   };
   
   
  }

  constructor(private tavoliservice: TavoliService) {

  }
}
