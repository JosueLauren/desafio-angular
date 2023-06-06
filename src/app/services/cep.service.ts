import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs'

import { IAdressFromAPI } from '../Adress'

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  getItem(cep: string): Observable<IAdressFromAPI>{
    return this.http.get<IAdressFromAPI>(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
