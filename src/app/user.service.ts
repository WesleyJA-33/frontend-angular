import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Criando uma interface para tipar os dados.
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Injectable({
  providedIn: 'root' // Tornando o serviço disponível globalmente
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // URL da API NestJS

  constructor(private http: HttpClient) { } // Injetando HttpClient

  getUsers(): Observable<User[]> { // Retorna um Observable de um array de Users
    // Faz a requisição GET para a URL da API e tipa a resposta como um array de User
    return this.http.get<User[]>(this.apiUrl);
  }
}
