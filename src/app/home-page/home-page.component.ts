import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // displayedCol: string[] = [];
  // data: MatTableDataSource<any> = new MatTableDataSource();
  constructor() { }
  ngOnInit(): void {
    
  }

}
