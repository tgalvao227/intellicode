// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   private apiUrl = 'URL_DA_API';

//   constructor(private http: HttpClient) {}

//   login(credentials: { email: string, password: string }): Observable<any> {
//     return this.http.post(this.apiUrl, credentials).pipe(
//       map(response => {
//         return response;
//       }),
//       catchError(error => {
//         console.error('Erro ao fazer login', error);
//         return of(null);
//       })
//     );
//   }
//   }
