import { Component, OnInit } from '@angular/core';
import { summaryHeaderItemListe } from '../SharedComponents/data-liste-header/data-liste-header.component';
import { summaryHeaderItem } from '../SharedComponents/data-summary-header/data-summary-header.component';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss'],
})
export class ParametreComponent implements OnInit {
  items!: summaryHeaderItem[];
  itemsListeTravaux!: summaryHeaderItemListe;
  itemsListeRG!: summaryHeaderItemListe;
  constructor() {}

  ngOnInit(): void {
    this.items = [
      { title: 'N°Bord', data: '7TW-WE', icon: '' },
      { title: 'N° Cellule', data: '10MK4532', icon: '' },
      { title: 'Potentiel Ecoulé (H)', data: '00:00:00', icon: '' },
      { title: 'Atterrissages Ecoulés', data: '154', icon: 'home' },
    ];
    
    this.itemsListeTravaux = { title: 'work', data: ['info', 'info', 'info'] };
    this.itemsListeRG = { title: 'rg', data: ['info'] };
  }
}
