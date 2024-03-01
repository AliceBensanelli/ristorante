import { Injectable } from "@angular/core";
import { Tavolo } from "../model/tavolo";

@Injectable({
    providedIn: 'root'
})

export class TavoliService {

    dati: Tavolo[] = [
        {
            numero: '1',
            posti: 2,
            rotondo: false,
            riservato: false
        },
        {
            numero: '2',
            posti: 6,
            rotondo: true,
            riservato: true,
        }
    ];

aggiungiTavolo(numero: string, posti: number, rotondo: boolean) {

    const numeroEsistente = this.dati.some(x => x.numero === numero);
    if (numeroEsistente) {
        return false
    }
    const nuovoTavolo: Tavolo = {
        numero: numero,
        posti: posti,
        rotondo,
        riservato: false
    };
    this.dati.push(nuovoTavolo);
    return true;
}

eliminaTavolo(numero: string) {
    const isTavoloPrenotato = this.dati.some(x => x.numero === numero && x.riservato);
    if (isTavoloPrenotato) {
        return false;
    }

    const index = this.dati.findIndex(x => x.numero === numero);
    this.dati.splice(index, 1)

    return true
    }

    togglePrenotazione(numero: string) {
        const tavolo = this.dati.find(x => x.numero === numero);
        if (tavolo)
        tavolo.riservato = !tavolo.riservato;
    }
}