import { Component, OnInit } from '@angular/core';
export interface summaryHeaderItem {
  title: string;
  data: string[];
}
@Component({
  selector: 'app-data-liste-header',
  templateUrl: './data-liste-header.component.html',
  styleUrls: ['./data-liste-header.component.scss'],
})
export class DataListeHeaderComponent implements OnInit {
  items!: summaryHeaderItem;
  constructor() {}

  ngOnInit(): void {
    this.items = { title: 'info', data: ['info', 'info', 'info'] };
  }
}
