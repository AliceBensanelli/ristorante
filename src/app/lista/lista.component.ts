import { Component } from '@angular/core';
import { Tavolo } from '../model/tavolo';
import { TavoliService } from '../service/tavoli.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  tavoli: Tavolo[];

  constructor(private tavoliService: TavoliService) {
    this.tavoli = this.tavoliService.dati
  }

  elimina(numero: string) {
    this.tavoliService.eliminaTavolo(numero)
  }

  togglePrenotazione(numero: string) {
    this.tavoliService.togglePrenotazione(numero);
  }

}
