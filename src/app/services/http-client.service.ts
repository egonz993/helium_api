import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private httpClient : HttpClient) { 

  }
  
  get(url:string, options?:any):any{
    return this.httpClient.get(url, options);
  }

  post(url:string, body:any, options?:any):any{
    return this.httpClient.post(url, body, options);
  }

  

}