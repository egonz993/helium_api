import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    order: [[ 0, 'asc' ], [ 1, 'desc' ]],
    lengthMenu: [2,5,10,50,100],
    pageLength: 5
  };

  constructor() { }

  ngOnInit(): void {
  }


  


}
