import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private readonly apiUrl = '';

  constructor(private http: HttpClient) { }

  enviarDadosFormulario(dadosFormulario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dadosFormulario);
  }
}
