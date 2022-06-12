import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})

export class HttpClientComponent implements OnInit {

  constructor(private httpClient: HttpClientService) { }

  private data: any = [];

  ngOnInit(): void {
    this.httpExample()
  }


  httpExample(){
    let url = "https://api.agify.io?name=EGonzalez"
    let options = {
      headers: {
        'Content-Type': 'application/json',
      }
    }

    this.httpClient.get(url, options).subscribe((data: any) => {
      console.log(data)
    });
  }

}
