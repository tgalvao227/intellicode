import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private apiUrl = ''; 

  constructor(private http: HttpClient) { }

  realizarPagamento(dadosPagamento: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dadosPagamento);
  }
}
