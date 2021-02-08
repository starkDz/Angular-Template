import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { summaryHeaderItem } from '../SharedComponents/data-summary-header/data-summary-header.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // displayedCol: string[] = [];
  // data: MatTableDataSource<any> = new MatTableDataSource();
  itemsGros!:summaryHeaderItem[];
  items!:summaryHeaderItem[];
  huile!:summaryHeaderItem[];
  constructor() { }
  ngOnInit(): void {
    this.itemsGros = [
      { title: 'react', data: '7TW-WE', icon: '' },
      { title: 'tuy', data: '10MK4532', icon: '' },
      { title: 'VKA', data: '00:00:00', icon: '' },
      { title: 'turbo', data: '1157', icon: '' },
    ];
    this.items = [
      { title: 'Position Gauche', data: '', icon: '' },
      { title: 'Position Droite', data: '', icon: '' },
    ];
    this.huile = [
      { title: 'Huile', data: '', icon: '' },
    ];
  }

}
