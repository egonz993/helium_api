import { Component , OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dtOptions: DataTables.Settings = {
    pageLength: 1
  };

  title = 'app';


  ngOnInit(): void {

    

  }
}
