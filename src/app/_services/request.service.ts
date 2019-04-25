import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../_models/request';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrl = environment.apiUrl + 'requests/';

  constructor(private http: HttpClient) { }

  submitRequest(request: Request) {
    return this.http.post(this.baseUrl, request);
  }
}
