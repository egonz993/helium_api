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

  user: string = "alcaldiamedellin"
  password: string = "alcaldiamedellin"

  private data: any = [];

  ngOnInit(): void {
    let url = "https://nst.au.saas.orbiwise.com:8443/rest/nodes"
    let options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(this.user + ":" + this.password),
      }
    }

    this.httpClient.get(url, options).subscribe((res: any) => {
      this.data = res;
      console.log(this.data)
    });
  }

}
