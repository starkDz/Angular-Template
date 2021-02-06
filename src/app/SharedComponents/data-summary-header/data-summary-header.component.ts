import { Component, OnInit } from '@angular/core';
export interface summaryHeaderItem{
  title: string,
  data: string,
  summary: string
}
@Component({
  selector: 'app-data-summary-header',
  templateUrl: './data-summary-header.component.html',
  styleUrls: ['./data-summary-header.component.scss']
})
// tslint:disable-next-line: class-name

export class DataSummaryHeaderComponent implements OnInit {
  items: summaryHeaderItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items=[
      {title:'info',data:'info',summary:'info'},
      {title:'info',data:'info',summary:'info'},
      {title:'info',data:'info',summary:'info'},
      {title:'info',data:'info',summary:'info'},
    ]
  }

}
