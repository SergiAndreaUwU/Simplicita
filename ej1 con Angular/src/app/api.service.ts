import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from './IResponse';
@Injectable({
  providedIn: 'root'
})
export class ApiService{

  URL:string="https://rjzh17nu94.execute-api.us-east-1.amazonaws.com/dev/buscar3/algo";
  constructor(private http : HttpClient) { }


  get():Observable<IResponse>{
    return this.http.get<IResponse>(this.URL);
  }


}

/*
Using a service to communicate with the API 

I could instantiate it locally but using a service
provides communication within all components that
needs it.

I just need a get method which returns an Observable 
(Observables are similar to promises), this Observable
is mapped to an interface using generics that help us 
knowing types of data handled by our method
*/